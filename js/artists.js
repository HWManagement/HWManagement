/* HW Entertainment LLC — roster data (union of unreleased, exclusive, featured, form lists) */
(function (global) {
  const artists = [
    // ——— Unreleased verses ———
    { slug: "inspectah-deck", name: "Inspectah Deck", note: "Wu-Tang Clan", tags: ["Hip-Hop", "East Coast", "Legacy"], unreleased: true, exclusive: false, featured: true, line: "Wu-Tang Clan lyricist available as a fully cleared unreleased feature — stems, paperwork, and sign-offs included." },
    { slug: "celly-cel", name: "Celly Cel", tags: ["Hip-Hop", "West Coast"], unreleased: true, exclusive: false, featured: false, line: "Bay Area veteran whose unreleased verse work is cleared for commercial placement with full session files." },
    { slug: "rbl-posse", name: "RBL Posse", tags: ["Hip-Hop", "West Coast", "Legacy"], unreleased: true, exclusive: false, featured: false, line: "San Francisco street-rap pioneers available for licensed unreleased features with contracts and splits." },
    { slug: "necro", name: "Necro", tags: ["Hip-Hop", "East Coast"], unreleased: true, exclusive: false, featured: false, line: "Brooklyn underground producer-MC offering cleared unreleased verses with full stems and documentation." },
    { slug: "chuck-d", name: "Chuck D", note: "Public Enemy", tags: ["Hip-Hop", "East Coast", "Legacy"], unreleased: true, exclusive: false, featured: true, line: "Public Enemy founder available for licensed unreleased features — commercially cleared, contract-backed." },
    { slug: "afroman", name: "Afroman", tags: ["Hip-Hop", "West Coast"], unreleased: true, exclusive: true, featured: false, line: "West Coast cult figure available for both exclusive catalog licenses and unreleased verses." },
    { slug: "iamsu", name: "IAMSU!", tags: ["Hip-Hop", "West Coast"], unreleased: true, exclusive: false, featured: false, line: "HBK Gang architect from the Bay — unreleased verses fully cleared for commercial use." },
    { slug: "vinnie-paz", name: "Vinnie Paz", note: "Jedi Mind Tricks", tags: ["Hip-Hop", "East Coast"], unreleased: true, exclusive: false, featured: false, line: "Jedi Mind Tricks frontman available as a cleared unreleased feature with stems and sign-offs." },
    { slug: "ra-the-rugged-man", name: "RA the Rugged Man", tags: ["Hip-Hop", "East Coast"], unreleased: true, exclusive: false, featured: false, line: "East Coast lyricist known for dense, technical verses — licensed unreleased placements with full paperwork." },
    { slug: "berner", name: "Berner", tags: ["Hip-Hop", "West Coast"], unreleased: true, exclusive: false, featured: false, line: "San Francisco artist and Cookies founder — unreleased features cleared with contracts and splits." },
    { slug: "crooked-i", name: "Crooked I", note: "Slaughterhouse", tags: ["Hip-Hop", "West Coast"], unreleased: true, exclusive: false, featured: false, line: "Slaughterhouse lyricist from Long Beach available for cleared unreleased commercial features." },
    { slug: "krayzie-bone", name: "Krayzie Bone", tags: ["Hip-Hop", "Legacy"], unreleased: true, exclusive: false, featured: false, line: "Bone Thugs-n-Harmony voice available as a licensed unreleased verse with full stems and sign-offs." },
    { slug: "rappin-4-tay", name: "Rappin' 4-Tay", tags: ["Hip-Hop", "West Coast", "Legacy"], unreleased: true, exclusive: false, featured: false, line: "Fillmore District legend — unreleased features delivered with contracts, splits, and commercial clearance." },
    { slug: "rittz", name: "Rittz", tags: ["Hip-Hop"], unreleased: true, exclusive: false, featured: false, line: "Southern lyricist available for cleared unreleased verses with session files and licensing paperwork." },
    { slug: "mayday", name: "¡MAYDAY!", tags: ["Hip-Hop"], unreleased: true, exclusive: false, featured: false, line: "Miami hip-hop group available for licensed unreleased features — stems, paperwork, and sign-offs." },
    { slug: "lil-b", name: "Lil B The Based God", tags: ["Hip-Hop", "West Coast"], unreleased: true, exclusive: false, featured: false, line: "Based God catalog energy as a cleared unreleased feature for independent commercial releases." },
    { slug: "king-lil-g", name: "King Lil G", tags: ["Hip-Hop", "West Coast"], unreleased: true, exclusive: false, featured: false, line: "Inglewood artist available for licensed unreleased verses with full commercial clearance." },
    { slug: "blu", name: "Blu", tags: ["Hip-Hop", "West Coast"], unreleased: true, exclusive: false, featured: false, line: "Los Angeles independent lyricist — unreleased features with stems, contracts, and splits." },
    { slug: "talib-kweli", name: "Talib Kweli", tags: ["Hip-Hop", "East Coast", "Legacy"], unreleased: true, exclusive: false, featured: false, line: "Black Star lyricist available as a fully cleared unreleased feature for commercial projects." },
    { slug: "planet-asia", name: "Planet Asia", tags: ["Hip-Hop", "West Coast"], unreleased: true, exclusive: false, featured: false, line: "Fresno / Cali underground staple — licensed unreleased verses with session files and paperwork." },
    { slug: "ice-t", name: "Ice-T", tags: ["Hip-Hop", "West Coast", "Legacy"], unreleased: true, exclusive: true, featured: true, line: "West Coast pioneer available for exclusive catalog licenses and unreleased verses, fully cleared." },
    { slug: "b-real", name: "B-Real", note: "Cypress Hill", tags: ["Hip-Hop", "West Coast", "Legacy"], unreleased: true, exclusive: false, featured: false, line: "Cypress Hill frontman available as a licensed unreleased feature with stems and artist sign-offs." },
    { slug: "doggystyleee", name: "Doggystyleee", tags: ["Hip-Hop", "West Coast"], unreleased: true, exclusive: false, featured: false, line: "West Coast artist available for cleared unreleased verse placements with full documentation." },

    // ——— Exclusive licenses ———
    { slug: "lil-wayne", name: "Lil Wayne", tags: ["Hip-Hop"], unreleased: false, exclusive: true, featured: true, line: "Licensed catalog features from one of hip-hop's most recorded voices, cleared for commercial release." },
    { slug: "snoop-dogg", name: "Snoop Dogg", tags: ["Hip-Hop", "West Coast", "Legacy"], unreleased: false, exclusive: true, featured: true, line: "West Coast icon — exclusive licensed features with full stems and a licensing agreement." },
    { slug: "nate-dogg", name: "Nate Dogg", note: "catalog licensed features", tags: ["Hip-Hop", "R&B", "West Coast", "Legacy"], unreleased: false, exclusive: true, featured: true, line: "Catalog-licensed hooks and features from the legendary West Coast crooner, commercially cleared." },
    { slug: "t-pain", name: "T-Pain", tags: ["Hip-Hop", "R&B"], unreleased: false, exclusive: true, featured: true, line: "Auto-Tune pioneer available as an exclusive licensed feature with stems and commercial clearance." },
    { slug: "flo-rida", name: "Flo Rida", tags: ["Hip-Hop"], unreleased: false, exclusive: true, featured: false, line: "Chart-proven hitmaker available for exclusive licensed guest features on independent releases." },
    { slug: "dababy", name: "DaBaby", tags: ["Hip-Hop"], unreleased: false, exclusive: true, featured: false, line: "Exclusive licensed features cleared for commercial use with contracts and ownership splits." },
    { slug: "g-perico", name: "G Perico", tags: ["Hip-Hop", "West Coast"], unreleased: false, exclusive: true, featured: false, line: "South Central voice available as an exclusive licensed feature with full stems and paperwork." },
    { slug: "ne-yo", name: "Ne-Yo", tags: ["R&B"], unreleased: false, exclusive: true, featured: false, line: "Grammy-winning R&B songwriter available for exclusive licensed features, commercially cleared." },
    { slug: "rich-the-kid", name: "Rich The Kid", tags: ["Hip-Hop"], unreleased: false, exclusive: true, featured: false, line: "Atlanta / Queens artist available as an exclusive licensed catalog feature." },
    { slug: "2-chainz", name: "2 Chainz", tags: ["Hip-Hop"], unreleased: false, exclusive: true, featured: true, line: "Trap elder statesman — exclusive licensed features with stems and a licensing agreement." },
    { slug: "krs-one", name: "KRS-One", tags: ["Hip-Hop", "East Coast", "Legacy"], unreleased: false, exclusive: true, featured: false, line: "The Teacha — exclusive licensed features from a foundational East Coast catalog, fully cleared." },
    { slug: "jadakiss", name: "Jadakiss", tags: ["Hip-Hop", "East Coast", "Legacy"], unreleased: false, exclusive: true, featured: false, line: "The Lox / Ruff Ryders lyricist available as an exclusive licensed commercial feature." },
    { slug: "royce-da-59", name: "Royce da 5'9\"", tags: ["Hip-Hop", "East Coast"], unreleased: false, exclusive: true, featured: false, line: "Slaughterhouse / Bad Meets Evil lyricist — exclusive licenses with full stems and contracts." },
    { slug: "e-40", name: "E-40", tags: ["Hip-Hop", "West Coast", "Legacy"], unreleased: false, exclusive: true, featured: true, line: "Bay Area ambassador available as an exclusive licensed feature, commercially cleared." },
    { slug: "mac-dre", name: "Mac Dre", note: "catalog licensed features", tags: ["Hip-Hop", "West Coast", "Legacy"], unreleased: false, exclusive: true, featured: false, line: "Catalog-licensed features from the Vallejo hyphy architect, cleared for commercial release." },
    { slug: "tha-jacka", name: "Tha Jacka", note: "catalog licensed features", tags: ["Hip-Hop", "West Coast", "Legacy"], unreleased: false, exclusive: true, featured: false, line: "Catalog-licensed Pittsburg / Mob Figaz features with full clearance and documentation." },
    { slug: "gucci-mane", name: "Gucci Mane", tags: ["Hip-Hop"], unreleased: false, exclusive: true, featured: true, line: "Trap godfather available as an exclusive licensed feature with stems and a licensing agreement." },
    { slug: "rick-ross", name: "Rick Ross", tags: ["Hip-Hop"], unreleased: false, exclusive: true, featured: false, line: "MMG boss available for exclusive licensed guest verses, fully cleared for commercial use." },
    { slug: "juice-wrld", name: "Juice WRLD", note: "catalog licensed features", tags: ["Hip-Hop"], unreleased: false, exclusive: true, featured: false, line: "Catalog-licensed features from the late melodic-rap star, commercially cleared with contracts." },
    { slug: "wc", name: "WC", tags: ["Hip-Hop", "West Coast", "Legacy"], unreleased: false, exclusive: true, featured: false, line: "Westside Connection / Lench Mob veteran — exclusive licensed features with full paperwork." },
    { slug: "brotha-lynch-hung", name: "Brotha Lynch Hung", tags: ["Hip-Hop", "West Coast"], unreleased: false, exclusive: true, featured: false, line: "Sacramento horrorcore pioneer available as an exclusive licensed commercial feature." },
    { slug: "bryson-tiller", name: "Bryson Tiller", tags: ["R&B"], unreleased: false, exclusive: true, featured: true, line: "Trap-soul voice available as an exclusive licensed R&B feature with stems and clearance." },
    { slug: "dmx", name: "DMX", note: "catalog licensed features", tags: ["Hip-Hop", "East Coast", "Legacy"], unreleased: false, exclusive: true, featured: false, line: "Catalog-licensed features from the Ruff Ryders legend, cleared for commercial placement." },
    { slug: "mr-capone-e", name: "Mr. Capone-E", tags: ["Hip-Hop", "West Coast"], unreleased: false, exclusive: true, featured: false, line: "West Coast independent staple available as an exclusive licensed feature." },
    { slug: "j-cole", name: "J. Cole", tags: ["Hip-Hop"], unreleased: false, exclusive: true, featured: true, line: "Exclusive licensed features from the Dreamville catalog, commercially cleared and contract-backed." },
    { slug: "lil-yachty", name: "Lil Yachty", tags: ["Hip-Hop"], unreleased: false, exclusive: true, featured: false, line: "Melodic-rap / experimental voice available as an exclusive licensed catalog feature." },

    // ——— Homepage featured extras ———
    { slug: "mozzy", name: "Mozzy", tags: ["Hip-Hop", "West Coast"], unreleased: false, exclusive: true, featured: true, line: "Sacramento street-rap voice available as an exclusive licensed feature with full clearance." },
    { slug: "ray-j", name: "Ray J", tags: ["R&B", "West Coast"], unreleased: false, exclusive: true, featured: true, line: "R&B singer available for exclusive licensed features on independent commercial releases." },
    { slug: "sean-paul", name: "Sean Paul", tags: ["Hip-Hop"], unreleased: false, exclusive: true, featured: true, line: "Dancehall superstar available as an exclusive licensed feature, commercially cleared." },
    { slug: "yukmouth", name: "Yukmouth", note: "Luniz", tags: ["Hip-Hop", "West Coast", "Legacy"], unreleased: false, exclusive: true, featured: true, line: "Luniz / Smoke-A-Lot Records artist — exclusive licensed features with contracts and splits." },
    { slug: "suga-free", name: "Suga Free", tags: ["Hip-Hop", "West Coast", "Legacy"], unreleased: false, exclusive: true, featured: false, line: "Pomona pimp-rap stylist available as an exclusive licensed catalog feature." },

    // ——— Form roster (exclusive unless also unreleased above) ———
    { slug: "herman-watson", name: "Herman Watson", tags: ["Hip-Hop", "West Coast"], unreleased: false, exclusive: true, featured: false, line: "Founder of HW Entertainment — exclusive licensed features with full documentation." },
    { slug: "atmosphere", name: "Atmosphere", tags: ["Hip-Hop"], unreleased: false, exclusive: true, featured: false, line: "Minneapolis independent duo available as an exclusive licensed feature." },
    { slug: "baby-bash", name: "Baby Bash", tags: ["Hip-Hop", "West Coast"], unreleased: false, exclusive: true, featured: false, line: "Houston / West Coast crossover artist available for exclusive licensed features." },
    { slug: "the-doc", name: "The D.O.C.", note: "N.W.A", tags: ["Hip-Hop", "West Coast", "Legacy"], unreleased: false, exclusive: true, featured: false, line: "N.W.A-affiliated lyricist available as an exclusive licensed catalog feature." },
    { slug: "sage-francis", name: "Sage Francis", tags: ["Hip-Hop", "East Coast"], unreleased: false, exclusive: true, featured: false, line: "Providence independent lyricist — exclusive licensed features with stems and clearance." },
    { slug: "brockett-parsons", name: "Brockett Parsons", tags: ["Hip-Hop"], unreleased: false, exclusive: true, featured: false, line: "Keys / session player available for exclusive licensed placements on independent records." },
    { slug: "sy", name: "SY", tags: ["Hip-Hop"], unreleased: false, exclusive: true, featured: false, line: "Exclusive licensed feature available through HW Entertainment with full commercial clearance." },
    { slug: "sleep-of-oldominion", name: "Sleep of Oldominion", tags: ["Hip-Hop", "West Coast"], unreleased: false, exclusive: true, featured: false, line: "Pacific Northwest independent MC available as an exclusive licensed feature." },
    { slug: "freddie-gibbs", name: "Freddie Gibbs", tags: ["Hip-Hop"], unreleased: false, exclusive: true, featured: false, line: "Gary, Indiana lyricist available as an exclusive licensed commercial feature." },
    { slug: "andre-nickatina", name: "Andre Nickatina", tags: ["Hip-Hop", "West Coast"], unreleased: false, exclusive: true, featured: false, line: "San Francisco independent legend — exclusive licensed features with contracts and splits." },
    { slug: "lazy-dubb", name: "Lazy Dubb", tags: ["Hip-Hop"], unreleased: false, exclusive: true, featured: false, line: "Exclusive licensed feature available through HW Entertainment, fully cleared." },
    { slug: "mr-nickel", name: "Mr. Nickel", tags: ["Hip-Hop"], unreleased: false, exclusive: true, featured: false, line: "Exclusive licensed feature available through HW Entertainment with paperwork on payment." },
    { slug: "ill-bill", name: "Ill Bill", note: "Heavy Metal Kings", tags: ["Hip-Hop", "East Coast"], unreleased: false, exclusive: true, featured: false, line: "Non Phixion / Heavy Metal Kings MC available as an exclusive licensed feature." },
    { slug: "nhale", name: "Nhale", tags: ["Hip-Hop", "West Coast"], unreleased: false, exclusive: true, featured: false, line: "West Coast artist available for exclusive licensed features with full clearance." },
    { slug: "mistah-fab", name: "Mistah F.A.B.", tags: ["Hip-Hop", "West Coast"], unreleased: false, exclusive: true, featured: false, line: "Oakland hyphy / independent voice — exclusive licensed features, commercially cleared." },
    { slug: "kokane", name: "Kokane", tags: ["Hip-Hop", "R&B", "West Coast", "Legacy"], unreleased: false, exclusive: true, featured: false, line: "G-funk hook specialist available as an exclusive licensed R&B / hip-hop feature." },
    { slug: "edi-mean", name: "Edi Mean", note: "The Outlawz", tags: ["Hip-Hop", "West Coast", "Legacy"], unreleased: false, exclusive: true, featured: false, line: "Outlawz member available as an exclusive licensed catalog feature." },
    { slug: "reverie", name: "Reverie", tags: ["Hip-Hop", "West Coast"], unreleased: false, exclusive: true, featured: false, line: "Los Angeles lyricist available for exclusive licensed features with stems and contracts." },
    { slug: "the-grouch", name: "The Grouch", tags: ["Hip-Hop", "West Coast"], unreleased: false, exclusive: true, featured: false, line: "Living Legends co-founder available as an exclusive licensed independent feature." },
    { slug: "sunspot-jonz", name: "Sunspot Jonz", tags: ["Hip-Hop", "West Coast"], unreleased: false, exclusive: true, featured: false, line: "Living Legends artist available for exclusive licensed commercial placements." },
    { slug: "eligh", name: "Eligh", tags: ["Hip-Hop", "West Coast"], unreleased: false, exclusive: true, featured: false, line: "Living Legends producer-MC — exclusive licensed features with full documentation." },
    { slug: "murs", name: "Murs", tags: ["Hip-Hop", "West Coast"], unreleased: false, exclusive: true, featured: false, line: "Los Angeles independent lyricist available as an exclusive licensed feature." },
    { slug: "luckyiam", name: "Luckyiam", tags: ["Hip-Hop", "West Coast"], unreleased: false, exclusive: true, featured: false, line: "Living Legends member available for exclusive licensed features, commercially cleared." },
    { slug: "tommy-skit", name: "Tommy Skit", note: "Power", tags: ["Hip-Hop"], unreleased: false, exclusive: true, featured: false, line: "Exclusive licensed feature available through HW Entertainment with contracts and splits." },
    { slug: "ceschi-ramos", name: "Ceschi Ramos", note: "Codefendants", tags: ["Hip-Hop"], unreleased: false, exclusive: true, featured: false, line: "Codefendants / independent artist available as an exclusive licensed feature." },
    { slug: "the-iinterceptorzz", name: "The IInterceptorzz", tags: ["Hip-Hop"], unreleased: false, exclusive: true, featured: false, line: "Exclusive licensed feature available through HW Entertainment, fully cleared." },
    { slug: "acee-ville-da-real", name: "Acee-Ville Da Real", tags: ["Hip-Hop"], unreleased: false, exclusive: true, featured: false, line: "Exclusive licensed feature available through HW Entertainment with commercial clearance." },
    { slug: "mic-bles", name: "Mic Bles", tags: ["Hip-Hop"], unreleased: false, exclusive: true, featured: false, line: "Exclusive licensed feature available through HW Entertainment with paperwork on payment." },
    { slug: "dru-down", name: "Dru Down", tags: ["Hip-Hop", "West Coast", "Legacy"], unreleased: false, exclusive: true, featured: false, line: "Oakland veteran available as an exclusive licensed catalog feature." },
    { slug: "tony-b", name: "Tony B", tags: ["Hip-Hop"], unreleased: false, exclusive: true, featured: false, line: "Exclusive licensed feature available through HW Entertainment, contract-backed." },
    { slug: "g-battles", name: "G Battles", tags: ["Hip-Hop"], unreleased: false, exclusive: true, featured: false, line: "Exclusive licensed feature available through HW Entertainment with full clearance." },
    { slug: "bizzy-bone", name: "Bizzy Bone", tags: ["Hip-Hop", "Legacy"], unreleased: false, exclusive: true, featured: false, line: "Bone Thugs-n-Harmony member available as an exclusive licensed feature." },
    { slug: "flesh-n-bone", name: "Flesh-N-Bone", tags: ["Hip-Hop", "Legacy"], unreleased: false, exclusive: true, featured: false, line: "Bone Thugs-n-Harmony member available as an exclusive licensed catalog feature." },
    { slug: "layzie-bone", name: "Layzie Bone", tags: ["Hip-Hop", "Legacy"], unreleased: false, exclusive: true, featured: false, line: "Bone Thugs-n-Harmony member available for exclusive licensed commercial features." },
    { slug: "wish-bone", name: "Wish Bone", tags: ["Hip-Hop", "Legacy"], unreleased: false, exclusive: true, featured: false, line: "Bone Thugs-n-Harmony member available as an exclusive licensed feature." }
  ];

  function initials(name) {
    const clean = name.replace(/[¡!']/g, "").trim();
    const parts = clean.split(/\s+/).filter(Boolean);
    if (parts.length === 1) {
      const p = parts[0];
      if (/^\d/.test(p)) return p.slice(0, 2).toUpperCase();
      return p.slice(0, 2).toUpperCase();
    }
    const skip = new Set(["the", "da", "of"]);
    const keep = parts.filter((p, i) => i === 0 || !skip.has(p.toLowerCase()));
    return (keep[0][0] + (keep[1] ? keep[1][0] : keep[0][1] || "")).toUpperCase();
  }

  function startingPrice(a) {
    if (a.exclusive) return 500;
    if (a.unreleased) return 1500;
    return 500;
  }

  function priceLabel(a) {
    return "from $" + startingPrice(a).toLocaleString("en-US");
  }

  function getBySlug(slug) {
    return artists.find((a) => a.slug === slug);
  }

  function getByName(name) {
    if (!name) return null;
    const n = name.trim().toLowerCase();
    return artists.find((a) => a.name.toLowerCase() === n || a.slug === n);
  }

  function search(q) {
    const s = (q || "").trim().toLowerCase();
    if (!s) return [];
    return artists.filter((a) => {
      return a.name.toLowerCase().includes(s) ||
        (a.note && a.note.toLowerCase().includes(s)) ||
        a.tags.some((t) => t.toLowerCase().includes(s));
    }).slice(0, 8);
  }

  function related(artist, n) {
    n = n || 4;
    const pool = artists.filter((a) => a.slug !== artist.slug);
    const scored = pool.map((a) => {
      const overlap = a.tags.filter((t) => artist.tags.includes(t)).length;
      const tier = (a.unreleased === artist.unreleased || a.exclusive === artist.exclusive) ? 1 : 0;
      return { a, s: overlap * 2 + tier };
    }).sort((x, y) => y.s - x.s || x.a.name.localeCompare(y.a.name));
    return scored.slice(0, n).map((x) => x.a);
  }

  global.HW = global.HW || {};
  global.HW.ARTISTS = artists;
  global.HW.initials = initials;
  global.HW.startingPrice = startingPrice;
  global.HW.priceLabel = priceLabel;
  global.HW.getBySlug = getBySlug;
  global.HW.getByName = getByName;
  global.HW.search = search;
  global.HW.related = related;
})(window);
