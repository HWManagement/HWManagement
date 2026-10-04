/* HW Entertainment LLC — redesign layer: countdown, roster marquee, scroll reveal, sticky actions.
   Runs after main.js. Everything degrades gracefully without JS or with reduced motion. */
(function () {
  const $ = (s, r) => (r || document).querySelector(s);
  const $$ = (s, r) => Array.from((r || document).querySelectorAll(s));
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function esc(s) {
    return String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  }

  /* Live countdown to the offer end (same timestamp as the element's data-expires) */
  function initCountdown() {
    $$("[data-countdown]").forEach((el) => {
      const end = Date.parse(el.getAttribute("data-countdown"));
      if (isNaN(end)) return;
      const parts = { d: $('[data-cd="d"]', el), h: $('[data-cd="h"]', el), m: $('[data-cd="m"]', el), s: $('[data-cd="s"]', el) };
      const pad = (n) => String(n).padStart(2, "0");
      let timer;
      function tick() {
        const left = end - Date.now();
        if (left <= 0) {
          clearInterval(timer);
          const host = el.closest("[data-expires]");
          if (host) host.remove(); else el.remove();
          return;
        }
        const t = Math.floor(left / 1000);
        parts.d.textContent = pad(Math.floor(t / 86400));
        parts.h.textContent = pad(Math.floor((t % 86400) / 3600));
        parts.m.textContent = pad(Math.floor((t % 3600) / 60));
        parts.s.textContent = pad(t % 60);
      }
      tick();
      el.hidden = false;
      timer = setInterval(tick, 1000);
    });
  }

  /* Roster marquee from the names already on the site (js/artists.js) */
  function initMarquee() {
    const rows = $$(".rd-marquee");
    if (!rows.length || !window.HW || !HW.ARTISTS) return;
    const names = HW.ARTISTS.map((a) => a.name).sort((a, b) => a.localeCompare(b));
    const half = Math.ceil(names.length / 2);
    const sets = [names.slice(0, half), names.slice(half)];
    rows.forEach((row) => {
      const i = Number(row.getAttribute("data-marquee")) || 0;
      const list = sets[i] || names;
      const chunk = list.map((n) => `<span class="rd-name">${esc(n)}</span><span class="rd-dot">✦</span>`).join("");
      const track = $(".rd-marquee-track", row);
      // Two copies so the loop is seamless.
      track.innerHTML = `<div class="rd-marquee-set">${chunk}</div><div class="rd-marquee-set">${chunk}</div>`;
      track.style.setProperty("--dur", Math.round(list.length * 2.6) + "s");
    });
  }

  /* Scroll reveal (only hides content once JS is running and motion is allowed) */
  function initReveal() {
    const sel = [
      ".section-head", ".rd-svc", ".rd-step", ".rd-founder > *", ".rd-final-inner > *",
      ".rd-roster-head", ".sale-banner", ".fact", ".offer-card", ".promo-card", ".bill-card",
      ".about-block", ".about-card", ".faq-item", ".lic-section", ".sku-empty", ".onrequest-list",
      ".teaser", ".cta-band", ".form-shell", ".who-band", ".product-card", ".how-step"
    ].join(",");
    const els = $$(sel).filter((el) => !el.closest(".site-header,.site-footer"));
    if (reduce || !("IntersectionObserver" in window)) return;
    document.documentElement.classList.add("rd-reveal-on");
    els.forEach((el) => {
      el.classList.add("rd-reveal");
      const sibs = Array.from(el.parentElement.children).filter((c) => c.matches(sel));
      const idx = Math.max(0, sibs.indexOf(el));
      el.style.setProperty("--rd-delay", Math.min(idx, 5) * 90 + "ms");
    });
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) { e.target.classList.add("is-in"); io.unobserve(e.target); }
      });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.08 });
    els.forEach((el) => io.observe(el));
  }

  /* Sticky Request + WhatsApp actions (not on the form or thank-you page) */
  function initDock() {
    const page = document.body.getAttribute("data-page");
    if (!page || page === "form" || page === "thanks") return;
    const dock = document.createElement("div");
    dock.className = "rd-dock";
    dock.innerHTML =
      '<a class="rd-dock-wa" href="https://wa.me/13235953611" target="_blank" rel="noopener" aria-label="WhatsApp HW Entertainment at (323) 595-3611">' +
      '<svg viewBox="0 0 32 32" aria-hidden="true"><path fill="currentColor" d="M16 3a13 13 0 0 0-11.2 19.6L3 29l6.6-1.7A13 13 0 1 0 16 3zm0 23.6c-2 0-3.9-.5-5.6-1.5l-.4-.2-3.9 1 1-3.8-.3-.4A10.6 10.6 0 1 1 16 26.6zm5.8-7.9c-.3-.2-1.9-.9-2.2-1-.3-.1-.5-.2-.7.2l-1 1.2c-.2.2-.4.2-.7.1a8.7 8.7 0 0 1-4.3-3.8c-.3-.6.3-.5.9-1.7.1-.2 0-.4 0-.5l-1-2.4c-.3-.6-.5-.5-.7-.5h-.6c-.2 0-.6.1-.9.4-.3.3-1.2 1.1-1.2 2.8s1.2 3.2 1.4 3.5c.2.2 2.4 3.6 5.7 5 2.1.9 2.9 1 4 .8.6-.1 1.9-.8 2.2-1.5.3-.7.3-1.4.2-1.5l-.6-.3z"/></svg>' +
      '<span>WhatsApp</span></a>' +
      '<a class="rd-dock-book" href="request-form.html">Request a Verse <span aria-hidden="true">→</span></a>';
    document.body.appendChild(dock);
    document.body.classList.add("has-dock");
    const hero = $(".hero");
    const update = () => {
      const past = hero ? window.scrollY > hero.offsetHeight * 0.6 : window.scrollY > 240;
      dock.classList.toggle("is-on", past);
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
  }

  /* Subtle pointer tilt on the hero record (desktop, motion allowed) */
  function initTilt() {
    const stage = $(".rd-stage");
    if (!stage || reduce || !window.matchMedia("(pointer: fine)").matches) return;
    const hero = stage.closest(".hero");
    hero.addEventListener("pointermove", (e) => {
      const r = hero.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      stage.style.setProperty("--tx", (x * 14).toFixed(1) + "px");
      stage.style.setProperty("--ty", (y * 14).toFixed(1) + "px");
    });
  }

  document.addEventListener("DOMContentLoaded", () => {
    initCountdown();
    initMarquee();
    initReveal();
    initDock();
    initTilt();
  });
})();
