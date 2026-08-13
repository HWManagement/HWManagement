/* HW Entertainment — capture UTMs and persist across ads → form */
(function () {
  const KEYS = ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term"];
  const params = new URLSearchParams(location.search);
  let stored = {};
  try { stored = JSON.parse(sessionStorage.getItem("hw_utm") || "{}"); } catch (e) { stored = {}; }
  KEYS.forEach((k) => {
    const v = params.get(k);
    if (v) stored[k] = v;
  });
  const artist = params.get("artist") || params.get("name");
  if (artist) stored.artist = artist;
  if (/ads\.html$/i.test(location.pathname) && !stored.utm_source) stored.utm_source = "ads";
  try { sessionStorage.setItem("hw_utm", JSON.stringify(stored)); } catch (e) {}
  window.HW_UTM = stored;

  function fill() {
    KEYS.forEach((k) => {
      const el = document.querySelector('[name="' + k + '"]');
      if (el && stored[k]) el.value = stored[k];
    });
    const artistEl = document.querySelector('[name="artist"]');
    if (artistEl && stored.artist && !artistEl.value) artistEl.value = stored.artist;
  }
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", fill);
  else fill();
})();
