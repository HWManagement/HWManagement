/* HW Entertainment LLC — site behavior */
(function () {
  const $ = (sel, root) => (root || document).querySelector(sel);
  const $$ = (sel, root) => Array.from((root || document).querySelectorAll(sel));

  function escapeHtml(s) {
    return String(s).replace(/[&<>"']/g, (c) => ({
      "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
    }[c]));
  }

  /* Header scroll */
  function initHeader() {
    const header = $(".site-header");
    if (!header) return;
    const onScroll = () => {
      header.classList.toggle("is-solid", window.scrollY > 24);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const toggle = $(".menu-toggle");
    if (toggle) {
      toggle.addEventListener("click", () => {
        const open = header.classList.toggle("is-open");
        toggle.setAttribute("aria-expanded", String(open));
      });
      $$(".nav a").forEach((a) => a.addEventListener("click", () => {
        header.classList.remove("is-open");
        toggle.setAttribute("aria-expanded", "false");
      }));
    }
  }

  /* Hero particles */
  function initParticles() {
    const canvas = $("#hero-particles");
    if (!canvas) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const ctx = canvas.getContext("2d");
    let w, h, particles, raf;

    function resize() {
      w = canvas.width = canvas.offsetWidth * devicePixelRatio;
      h = canvas.height = canvas.offsetHeight * devicePixelRatio;
      ctx.setTransform(devicePixelRatio, 0, 0, devicePixelRatio, 0, 0);
    }
    function spawn() {
      const n = Math.min(90, Math.floor((canvas.offsetWidth * canvas.offsetHeight) / 14000));
      particles = Array.from({ length: n }, () => ({
        x: Math.random() * canvas.offsetWidth,
        y: Math.random() * canvas.offsetHeight,
        r: Math.random() * 1.6 + 0.3,
        vx: (Math.random() - 0.5) * 0.25,
        vy: -Math.random() * 0.35 - 0.05,
        a: Math.random() * 0.5 + 0.15
      }));
    }
    function tick() {
      ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);
      ctx.fillStyle = "#D4AF37";
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.y < -4) { p.y = canvas.offsetHeight + 4; p.x = Math.random() * canvas.offsetWidth; }
        if (p.x < -4) p.x = canvas.offsetWidth + 4;
        if (p.x > canvas.offsetWidth + 4) p.x = -4;
        ctx.globalAlpha = p.a;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      });
      ctx.globalAlpha = 1;
      raf = requestAnimationFrame(tick);
    }
    resize();
    spawn();
    tick();
    window.addEventListener("resize", () => { resize(); spawn(); });
    document.addEventListener("visibilitychange", () => {
      if (document.hidden) cancelAnimationFrame(raf);
      else tick();
    });
  }

  /* Catalog License: SKU cards (clip required) + plain "catalog on request" list */
  function initCatalog() {
    const grid = $("#sku-grid");
    const empty = $("#sku-empty");
    if (grid && window.HW && HW.listableSkus) {
      const skus = HW.listableSkus();
      grid.innerHTML = skus.map(HW.skuCardHTML).join("");
      if (empty) empty.hidden = skus.length > 0;
      // No clip, no listing: drop any card whose preview file is missing.
      skus.forEach((s) => {
        fetch(s.clip, { method: "HEAD" }).then((r) => {
          if (!r.ok) throw new Error("missing clip");
        }).catch(() => {
          const el = document.getElementById("sku-" + s.id);
          if (el) el.remove();
          if (empty && !grid.children.length) empty.hidden = false;
        });
      });
    }
    const list = $("#onrequest-list");
    if (list && window.HW) {
      const names = HW.ARTISTS.slice().sort((a, b) => a.name.localeCompare(b.name));
      list.innerHTML = names.map((a) => `<li>${escapeHtml(a.name)}</li>`).join("");
    }
  }

  /* Legacy artist URLs (artist.html?name=...): plain text, no photo, no price */
  function initArtist() {
    const root = $("#artist-root");
    if (!root || !window.HW) return;
    const params = new URLSearchParams(location.search);
    const key = params.get("name") || params.get("slug") || "";
    const artist = HW.getBySlug(key) || HW.getByName(key);
    const name = artist ? artist.name : "";
    document.title = (name ? name + " — Catalog on request" : "Catalog on request") + " — HW Entertainment LLC";
    const ask = "request-form.html?product=catalog" + (name ? "&artist=" + encodeURIComponent(name) : "");
    root.innerHTML = `<section class="page-hero">
        <div class="wrap">
          <p class="kicker">Catalog on request</p>
          <h1>${name ? escapeHtml(name) : "Ask about a name"}</h1>
          <p>${name ? "We can discuss catalog recordings associated with this name on request." : "That name isn’t on our list, but you can still ask."} There is no preview or listed price for it yet.</p>
        </div>
      </section>
      <section class="section">
        <div class="wrap narrow">
          <p class="sample-label" role="note">Catalog licenses cover existing recordings from our catalog. They are not new sessions and not endorsements by the named artist. Availability, license type and credit terms are confirmed in writing for each recording before you pay.</p>
          <p style="margin-top:28px;display:flex;gap:12px;flex-wrap:wrap">
            <a class="btn" href="${ask}">Ask about this name</a>
            <a class="btn btn-ghost" href="catalog.html">Catalog License</a>
            <a class="btn btn-ghost" href="license-sample.html">Sample license</a>
          </p>
        </div>
      </section>`;
  }

  /* Form */
  function initForm() {
    const form = $("#request-form");
    if (!form) return;
    const select = $("#desired-artist");
    const other = $("#artist-other");
    const isSelect = !!(select && select.tagName === "SELECT");

    function resolvedArtist() {
      if (isSelect) {
        const typed = other && other.value.trim();
        if (select.value && select.value !== "Other") return select.value;
        if (typed) return typed;
        return "";
      }
      const raw = (select && select.value) || (form.querySelector("[name='Desired Artist']") || {}).value || "";
      return String(raw).trim();
    }

    function syncHiddenArtist() {
      const hiddenArtist = form.querySelector("[name='artist']");
      if (hiddenArtist) hiddenArtist.value = resolvedArtist();
    }

    if (isSelect && window.HW) {
      const names = HW.ARTISTS.slice().sort((a, b) => a.name.localeCompare(b.name));
      names.forEach((a) => {
        const opt = document.createElement("option");
        opt.value = a.name;
        opt.textContent = a.note ? `${a.name} (${a.note})` : a.name;
        select.appendChild(opt);
      });
      const otherOpt = document.createElement("option");
      otherOpt.value = "Other";
      otherOpt.textContent = "Other (type a name)";
      select.appendChild(otherOpt);

      const params = new URLSearchParams(location.search);
      const stored = (window.HW_UTM && window.HW_UTM.artist) || "";
      const pre = params.get("artist") || params.get("name") || stored;
      if (pre) {
        const match = names.find((a) => a.name.toLowerCase() === pre.toLowerCase() || a.slug === pre.toLowerCase());
        if (match) select.value = match.name;
        else if (other) {
          select.value = "Other";
          other.value = pre;
        } else {
          const opt = document.createElement("option");
          opt.value = pre;
          opt.textContent = pre;
          opt.selected = true;
          select.appendChild(opt);
        }
      }
      select.addEventListener("change", () => {
        if (other && select.value === "Other") other.focus();
        syncHiddenArtist();
      });
      if (other) other.addEventListener("input", syncHiddenArtist);
      syncHiddenArtist();
    }

    const qp = new URLSearchParams(location.search);
    const product = (qp.get("product") || "").toLowerCase();
    const productMap = { catalog: "service_licenses", unreleased: "service_unreleased", custom: "service_custom" };
    if (productMap[product]) {
      const box = form.querySelector(`input[name="${productMap[product]}"]`);
      if (box && box.type === "checkbox") box.checked = true;
    }
    const skuField = form.querySelector("[name='sku']");
    if (skuField && qp.get("sku")) skuField.value = qp.get("sku");

    const next = $("#form-next");
    if (next) next.value = new URL("thanks.html", location.href).href;
    const email = $("#email");
    if (email) {
      let reply = form.querySelector("[name='_replyto']");
      if (!reply) {
        reply = document.createElement("input");
        reply.type = "hidden";
        reply.name = "_replyto";
        form.appendChild(reply);
      }
      const sync = () => { reply.value = email.value; };
      email.addEventListener("input", sync);
      sync();
    }

    form.addEventListener("submit", (e) => {
      const artistVal = resolvedArtist();
      const artistErr = $("#artist-error");
      if (isSelect && !artistVal) {
        e.preventDefault();
        if (artistErr) artistErr.classList.add("is-on");
        if (other) other.focus();
        else select.focus();
        return;
      } else if (artistErr) {
        artistErr.classList.remove("is-on");
      }
      if (isSelect && artistVal && select.value !== artistVal) {
        let opt = Array.from(select.options).find((o) => o.value === artistVal);
        if (!opt) {
          opt = document.createElement("option");
          opt.value = artistVal;
          opt.textContent = artistVal;
          select.appendChild(opt);
        }
        select.value = artistVal;
      }
      syncHiddenArtist();

      const checks = $$('input[type="checkbox"][name^="service"]', form);
      const any = checks.some((c) => c.checked);
      const err = $("#service-error");
      if (checks.length && !any) {
        e.preventDefault();
        if (err) err.classList.add("is-on");
        checks[0].focus();
        return;
      } else if (err) {
        err.classList.remove("is-on");
      }
      const booked = {
        artist: artistVal,
        first: ($("#first-name") && $("#first-name").value) || "",
        email: ($("#email") && $("#email").value) || ""
      };
      try { sessionStorage.setItem("hw_last_request", JSON.stringify(booked)); } catch (err2) {}
      const nextEl = $("#form-next");
      if (nextEl) {
        const u = new URL("thanks.html", location.href);
        if (booked.artist) u.searchParams.set("artist", booked.artist);
        nextEl.value = u.href;
      }
    });
  }

  function initThanks() {
    const root = $("#thanks-booked");
    if (!root) return;
    const params = new URLSearchParams(location.search);
    let booked = {};
    try { booked = JSON.parse(sessionStorage.getItem("hw_last_request") || "{}"); } catch (e) { booked = {}; }
    const artist = params.get("artist") || booked.artist || "";
    const first = booked.first || "";
    const nameBit = first ? first + ", " : "";
    const artistBit = artist
      ? `You requested <strong>${escapeHtml(artist)}</strong>.`
      : `We have your request.`;
    root.innerHTML = `<p class="lede">${nameBit}${artistBit} We’ll get back to you by phone, WhatsApp or email.</p>`;
  }

  /* FAQ */
  function initFaq() {
    $$(".faq-item button").forEach((btn) => {
      btn.addEventListener("click", () => {
        const item = btn.parentElement;
        const open = item.classList.toggle("is-open");
        btn.setAttribute("aria-expanded", String(open));
      });
    });
  }

  function initScrollChevron() {
    const btn = $(".scroll-chevron");
    if (!btn) return;
    btn.addEventListener("click", () => {
      const t = $("#products") || $("#after-hero");
      if (t) t.scrollIntoView({ behavior: "smooth" });
    });
  }

  /* Time-limited offers: hide anything with data-expires once the date has passed */
  function initExpiry() {
    const now = Date.now();
    $$("[data-expires]").forEach((el) => {
      const t = Date.parse(el.getAttribute("data-expires"));
      if (!isNaN(t) && now >= t) el.remove();
    });
  }

  document.addEventListener("DOMContentLoaded", () => {
    initExpiry();
    initHeader();
    initParticles();
    initCatalog();
    initArtist();
    initForm();
    initThanks();
    initFaq();
    initScrollChevron();
  });
})();
