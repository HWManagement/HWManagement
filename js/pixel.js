/* HW Entertainment — Meta Pixel loader. No-ops unless an ID is provided.
   Set window.HW_PIXEL_ID in this file, or localStorage.hw_pixel, then the
   standard fbevents snippet is injected. Do not invent an ID. */
(function () {
  var id = window.HW_PIXEL_ID || (function () {
    try { return localStorage.getItem("hw_pixel"); } catch (e) { return null; }
  })();
  if (!id) return;
  if (window.fbq) return;
  !function (f, b, e, v, n, t, s) {
    if (f.fbq) return;
    n = f.fbq = function () { n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments); };
    if (!f._fbq) f._fbq = n;
    n.push = n; n.loaded = !0; n.version = "2.0"; n.queue = [];
    t = b.createElement(e); t.async = !0; t.src = v;
    s = b.getElementsByTagName(e)[0]; s.parentNode.insertBefore(t, s);
  }(window, document, "script", "https://connect.facebook.net/en_US/fbevents.js");
  fbq("init", id);
  fbq("track", "PageView");
})();
