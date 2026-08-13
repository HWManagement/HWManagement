/* HW Entertainment LLC — site behavior */
(function () {
  const $ = (sel, root) => (root || document).querySelector(sel);
  const $$ = (sel, root) => Array.from((root || document).querySelectorAll(sel));

  function artistUrl(slug) {
    return "artist.html?name=" + encodeURIComponent(slug);
  }

  function cardHTML(a) {
    const badges = [];
    if (a.unreleased) badges.push('<span class="badge badge-unreleased">Unreleased</span>');
    if (a.exclusive) badges.push('<span class="badge badge-exclusive">Exclusive</span>');
    const note = a.note ? `<div class="note">${escapeHtml(a.note)}</div>` : "";
    const tags = (a.tags || []).slice(0, 3).map((t) => `<span class="tag">${escapeHtml(t)}</span>`).join("");
    const snip = a.line ? `<p class="snip">${escapeHtml(a.line)}</p>` : "";
    const photoInner = a.photo
      ? `<img class="photo" src="${escapeHtml(a.photo)}" alt="${escapeHtml(a.name)}" width="480" height="280" loading="lazy">`
      : `<span class="initials">${escapeHtml(HW.initials(a.name))}</span>`;
    const klass = a.photo ? "artist-card has-photo" : "artist-card no-photo";
    return `<a class="${klass}" href="${artistUrl(a.slug)}" data-slug="${a.slug}">
      <span class="gold-line"></span>
      <div class="photo-wrap">${photoInner}<span class="overlay"></span></div>
      <div class="card-top">${badges.join("")}</div>
      <div class="card-body">
        <div class="tags">${tags}</div>
        <h3>${escapeHtml(a.name)}</h3>
        ${note}
        ${snip}
        <div class="card-cta">
          <div class="price">${HW.priceLabel(a)}</div>
          <span class="book-cta">Book</span>
        </div>
      </div>
    </a>`;
  }

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

  /* Search */
  function initSearch() {
    const wrap = $(".search-wrap");
    if (!wrap) return;
    const btn = $(".search-toggle", wrap);
    const panel = $(".search-panel", wrap);
    const input = $("input", wrap);
    const results = $(".search-results", wrap);
    let active = -1;
    let items = [];

    function close() {
      wrap.classList.remove("is-open");
      btn.setAttribute("aria-expanded", "false");
      input.value = "";
      results.innerHTML = "";
      active = -1;
    }
    function open() {
      wrap.classList.add("is-open");
      btn.setAttribute("aria-expanded", "true");
      setTimeout(() => input.focus(), 30);
    }

    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      wrap.classList.contains("is-open") ? close() : open();
    });

    document.addEventListener("click", (e) => {
      if (!wrap.contains(e.target)) close();
    });

    function render(list) {
      items = list;
      active = list.length ? 0 : -1;
      if (!input.value.trim()) {
        results.innerHTML = "";
        return;
      }
      if (!list.length) {
        results.innerHTML = `<div class="search-empty">No artists match “${escapeHtml(input.value.trim())}”.</div>`;
        return;
      }
      results.innerHTML = list.map((a, i) =>
        `<li role="option" aria-selected="${i === active}" data-i="${i}" class="${i === active ? "is-active" : ""}">
          <a href="${artistUrl(a.slug)}">${escapeHtml(a.name)}${a.note ? ` <span style="color:var(--muted);font-size:.8em">(${escapeHtml(a.note)})</span>` : ""}</a>
          <span class="price">${HW.priceLabel(a)}</span>
        </li>`
      ).join("");
    }

    input.addEventListener("input", () => render(HW.search(input.value)));

    input.addEventListener("keydown", (e) => {
      if (e.key === "Escape") { close(); btn.focus(); return; }
      if (e.key === "ArrowDown") {
        e.preventDefault();
        if (!items.length) return;
        active = (active + 1) % items.length;
        render(items);
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        if (!items.length) return;
        active = (active - 1 + items.length) % items.length;
        render(items);
      } else if (e.key === "Enter") {
        e.preventDefault();
        if (active >= 0 && items[active]) location.href = artistUrl(items[active].slug);
      }
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "/" && !/input|textarea|select/i.test(e.target.tagName) && !e.target.isContentEditable) {
        e.preventDefault();
        open();
      }
    });
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

  /* Count-up */
  function initCounters() {
    const nums = $$("[data-count]");
    if (!nums.length) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((en) => {
        if (!en.isIntersecting) return;
        io.unobserve(en.target);
        const el = en.target;
        const target = parseInt(el.getAttribute("data-count"), 10);
        const suffix = el.getAttribute("data-suffix") || "";
        const start = performance.now();
        const dur = 1400;
        function step(now) {
          const t = Math.min(1, (now - start) / dur);
          const eased = 1 - Math.pow(1 - t, 3);
          el.textContent = Math.round(target * eased) + suffix;
          if (t < 1) requestAnimationFrame(step);
        }
        requestAnimationFrame(step);
      });
    }, { threshold: 0.4 });
    nums.forEach((n) => io.observe(n));
  }

  /* Homepage featured */
  function initHome() {
    const grid = $("#featured-grid");
    if (!grid || !window.HW) return;
    grid.innerHTML = HW.ARTISTS.filter((a) => a.featured).map(cardHTML).join("");
  }

  /* Catalog */
  function initCatalog() {
    const grid = $("#catalog-grid");
    if (!grid || !window.HW) return;
    const meta = $("#catalog-meta");
    let filter = "all";
    let price = "all";

    function apply() {
      let list = HW.ARTISTS.slice().sort((a, b) => a.name.localeCompare(b.name));
      if (filter === "unreleased") list = list.filter((a) => a.unreleased);
      else if (filter === "exclusive") list = list.filter((a) => a.exclusive);
      else if (filter !== "all") list = list.filter((a) => a.tags.includes(filter));
      if (price === "500") list = list.filter((a) => HW.startingPrice(a) === 500);
      if (price === "1500") list = list.filter((a) => HW.startingPrice(a) >= 1500);
      grid.innerHTML = list.length ? list.map(cardHTML).join("") : '<p class="empty-grid">No artists match those filters.</p>';
      if (meta) meta.textContent = list.length + " artist" + (list.length === 1 ? "" : "s");
    }

    $$("[data-filter]").forEach((btn) => {
      btn.addEventListener("click", () => {
        $$("[data-filter]").forEach((b) => b.classList.remove("is-active"));
        btn.classList.add("is-active");
        filter = btn.getAttribute("data-filter");
        apply();
      });
    });
    $$("[data-price]").forEach((btn) => {
      btn.addEventListener("click", () => {
        $$("[data-price]").forEach((b) => b.classList.remove("is-active"));
        btn.classList.add("is-active");
        price = btn.getAttribute("data-price");
        apply();
      });
    });
    apply();
  }

  /* Artist page */
  function initArtist() {
    const root = $("#artist-root");
    if (!root || !window.HW) return;
    const params = new URLSearchParams(location.search);
    const key = params.get("name") || params.get("slug") || "";
    const artist = HW.getBySlug(key) || HW.getByName(key);
    if (!artist) {
      root.innerHTML = `<div class="wrap not-found">
        <p class="kicker">Roster</p>
        <h1>Artist not found</h1>
        <p class="lede" style="margin-top:16px">That name isn’t on the current roster. Browse the catalog or send a request and we’ll confirm availability.</p>
        <p style="margin-top:24px"><a class="btn" href="catalog.html">Browse Artists</a></p>
      </div>`;
      document.title = "Artist not found — HW Entertainment";
      return;
    }
    document.title = artist.name + " — HW Entertainment";
    const desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute("content", artist.line);
    const pagesBase = "https://hwmanagement.github.io/HWManagement/";
    if (artist.photo) {
      const abs = pagesBase + artist.photo;
      const og = document.querySelector('meta[property="og:image"]');
      if (og) og.setAttribute("content", abs);
      let tw = document.querySelector('meta[name="twitter:image"]');
      if (!tw) {
        tw = document.createElement("meta");
        tw.setAttribute("name", "twitter:image");
        document.head.appendChild(tw);
      }
      tw.setAttribute("content", abs);
      let card = document.querySelector('meta[name="twitter:card"]');
      if (!card) {
        card = document.createElement("meta");
        card.setAttribute("name", "twitter:card");
        document.head.appendChild(card);
      }
      card.setAttribute("content", "summary_large_image");
      const ogTitle = document.querySelector('meta[property="og:title"]');
      if (ogTitle) ogTitle.setAttribute("content", artist.name + " — HW Entertainment");
      const ogDesc = document.querySelector('meta[property="og:description"]');
      if (ogDesc) ogDesc.setAttribute("content", artist.line);
    }

    const badges = [];
    if (artist.unreleased) badges.push('<span class="badge badge-unreleased">Unreleased</span>');
    if (artist.exclusive) badges.push('<span class="badge badge-exclusive">Exclusive</span>');
    const tags = artist.tags.map((t) => `<span class="tag">${escapeHtml(t)}</span>`).join("");
    const note = artist.note ? `<p class="lede">${escapeHtml(artist.note)}</p>` : "";

    let tiers = "";
    if (artist.exclusive) {
      tiers += `<div class="tier">
        <h3>Exclusive License</h3>
        <div class="amt">$500 – $5,000</div>
        <p>Starting at $500. Full stems plus a licensing agreement. Commercially cleared for your release. Contracts and ownership splits issued upon payment.</p>
      </div>`;
    }
    if (artist.unreleased) {
      tiers += `<div class="tier">
        <h3>Unreleased Verse</h3>
        <div class="amt">$1,500 – $10,000</div>
        <p>Starting at $1,500. Full stems and session files, paperwork, and artist sign-offs. Contracts and splits issued upon payment.</p>
      </div>`;
    }
    tiers += `<div class="tier">
      <h3>Custom Exclusive</h3>
      <div class="amt">Price upon request</div>
      <p>Written-to-picture custom verses. The live range is $500 – $50,000 depending on the artist and usage. Availability confirmed after your request.</p>
    </div>`;

    const rel = HW.related(artist).map(cardHTML).join("");
    const inquire = "request-form.html?artist=" + encodeURIComponent(artist.name);

    const photoBlock = artist.photo
      ? `<div class="artist-hero-photo"><img src="${escapeHtml(artist.photo)}" alt="${escapeHtml(artist.name)}"></div>`
      : `<div class="artist-hero-photo fallback"><span class="initials">${escapeHtml(HW.initials(artist.name))}</span></div>`;

    root.innerHTML = `
      <section class="page-hero artist-hero">
        <div class="wrap artist-hero-grid">
          ${photoBlock}
          <div class="artist-hero-copy">
            <p class="kicker">Licensed Feature</p>
            <h1 class="artist-hero-name">${escapeHtml(artist.name)}</h1>
            ${note}
            <p class="artist-hero-snip">${escapeHtml(artist.line)}</p>
            <div class="tags">${badges.join("")}${tags}</div>
            <div class="artist-actions">
              <a class="btn" href="${inquire}">Book Now</a>
              <a class="btn btn-ghost" href="catalog.html">Back to Catalog</a>
            </div>
          </div>
        </div>
      </section>
      <div class="wrap artist-layout">
        <div class="prose">
          <h3>About this feature</h3>
          <p>${escapeHtml(artist.line)}</p>
          <p>Every HW Entertainment placement is built for commercial use. You receive the audio (stems, and session files on unreleased verses), contracts, ownership splits, and full clearance paperwork so the record can be released, monetized, and promoted with confidence.</p>
          <p>Clearance and paperwork are issued on payment. A team member replies within 24 hours with availability and exclusive pricing.</p>
          <div class="artist-actions">
            <a class="btn" href="${inquire}">Inquire / Book Now</a>
            <a class="btn btn-ghost" href="catalog.html">Back to Catalog</a>
          </div>
          <a class="tiny-link" href="https://tinyurl.com/HWATSON27" target="_blank" rel="noopener">Secondary inquire link</a>
        </div>
        <aside>
          <div class="tiers">${tiers}</div>
        </aside>
      </div>
      <section class="section">
        <div class="wrap">
          <div class="section-head">
            <div>
              <p class="kicker">More from the roster</p>
              <h2>You may also like</h2>
            </div>
          </div>
          <div class="artist-grid">${rel}</div>
        </div>
      </section>`;
  }

  /* Form */
  function initForm() {
    const form = $("#request-form");
    if (!form || !window.HW) return;
    const select = $("#desired-artist");
    const names = HW.ARTISTS.slice().sort((a, b) => a.name.localeCompare(b.name));
    names.forEach((a) => {
      const opt = document.createElement("option");
      opt.value = a.name;
      opt.textContent = a.note ? `${a.name} (${a.note})` : a.name;
      select.appendChild(opt);
    });
    const params = new URLSearchParams(location.search);
    const pre = params.get("artist");
    if (pre) {
      const match = names.find((a) => a.name.toLowerCase() === pre.toLowerCase() || a.slug === pre.toLowerCase());
      if (match) select.value = match.name;
      else {
        const opt = document.createElement("option");
        opt.value = pre;
        opt.textContent = pre;
        opt.selected = true;
        select.appendChild(opt);
      }
    }

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
      const checks = $$('input[type="checkbox"][name^="service"]', form);
      const any = checks.some((c) => c.checked);
      const err = $("#service-error");
      if (!any) {
        e.preventDefault();
        if (err) err.classList.add("is-on");
        checks[0].focus();
      } else if (err) {
        err.classList.remove("is-on");
      }
    });
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
      const t = $("#after-hero");
      if (t) t.scrollIntoView({ behavior: "smooth" });
    });
  }

  document.addEventListener("DOMContentLoaded", () => {
    initHeader();
    initSearch();
    initParticles();
    initCounters();
    initHome();
    initCatalog();
    initArtist();
    initForm();
    initFaq();
    initScrollChevron();
  });
})();
