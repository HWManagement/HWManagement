/* HW Entertainment LLC — Catalog License SKUs.

   A SKU is shown on catalog.html ONLY when every required field below is filled in with a
   real, confirmed value AND `clip` points to a real 15-second watermarked audio file in this
   repo (e.g. "assets/clips/<id>.mp3"). Anything incomplete is skipped (see console warning).
   Never add a SKU with guessed values.

   Fields:
     id            unique catalog ID, e.g. "HW-C-001"
     title         working title of the recording
     artist        artist name as the license allows it to be shown
     associated    true -> card reads "Catalog verse associated with <artist>"
     exclusive     true = exclusive license; false = non-exclusive
     licensesLeft  required when exclusive === false (number of licenses still available)
     year          year recorded (number)
     length        e.g. "0:48"
     bpm           number
     key           e.g. "F# minor"
     clip          path to the 15-second watermarked preview in this repo
     price         number in USD
     featCredit    true/false: is a "feat." credit allowed under the license
     unreleased    true if the recording has never been released
*/
(function (global) {
  const SKUS = [
    // No SKUs yet: add one only when its clip file and license facts are confirmed.
  ];

  function isComplete(s) {
    const need = ["id", "title", "artist", "year", "length", "bpm", "key", "clip", "price"];
    for (const k of need) {
      if (s[k] === undefined || s[k] === null || String(s[k]).trim() === "") return false;
    }
    if (typeof s.exclusive !== "boolean" || typeof s.featCredit !== "boolean") return false;
    if (s.exclusive === false && !(Number.isInteger(s.licensesLeft) && s.licensesLeft >= 0)) return false;
    return true;
  }

  function esc(v) {
    return String(v).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  }

  function disclaimer(s) {
    const kind = s.exclusive ? "Exclusive" : "Non-exclusive";
    const tail = s.featCredit
      ? "name use limited to \u2018feat.\u2019 in metadata as the license specifies."
      : "no artist-name credit is allowed under this license.";
    return kind + " licensed recording from our catalog, not a new session, not an endorsement; " + tail;
  }

  function cardHTML(s) {
    const who = s.associated ? "Catalog verse associated with " + esc(s.artist) : esc(s.artist);
    const excl = s.exclusive ? "Exclusive (1 license)" : s.licensesLeft + " license" + (s.licensesLeft === 1 ? "" : "s") + " left";
    const price = "$" + Number(s.price).toLocaleString("en-US");
    return `<article class="sku-card" id="sku-${esc(s.id)}">
      <header class="sku-head">
        <p class="sku-id">${esc(s.id)}${s.unreleased ? " · Unreleased" : ""}</p>
        <h3>${esc(s.title)}</h3>
        <p class="sku-artist">${who}</p>
      </header>
      <p class="sku-disclaimer">${esc(disclaimer(s))}</p>
      <audio class="sku-audio" controls preload="none" controlslist="nodownload" src="${esc(s.clip)}" aria-label="15-second watermarked preview of ${esc(s.title)}"></audio>
      <dl class="sku-facts">
        <div><dt>License</dt><dd>${esc(excl)}</dd></div>
        <div><dt>Year recorded</dt><dd>${esc(s.year)}</dd></div>
        <div><dt>Length</dt><dd>${esc(s.length)}</dd></div>
        <div><dt>BPM / key</dt><dd>${esc(s.bpm)} / ${esc(s.key)}</dd></div>
        <div><dt>feat. credit allowed</dt><dd>${s.featCredit ? "Yes" : "No"}</dd></div>
        <div><dt>Price</dt><dd class="sku-price">${price}</dd></div>
      </dl>
      <div class="sku-actions">
        <a class="btn" href="request-form.html?product=catalog&sku=${encodeURIComponent(s.id)}">Request this license</a>
        <a class="tiny-link" href="license-sample.html">Sample license</a>
      </div>
    </article>`;
  }

  function listable() {
    return SKUS.filter((s) => {
      const ok = isComplete(s);
      if (!ok && global.console) console.warn("SKU hidden (incomplete or no clip):", s && s.id);
      return ok;
    });
  }

  global.HW = global.HW || {};
  global.HW.SKUS = SKUS;
  global.HW.skuCardHTML = cardHTML;
  global.HW.listableSkus = listable;
})(window);
