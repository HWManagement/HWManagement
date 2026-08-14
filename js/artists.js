/* HW Entertainment LLC — roster data (union of unreleased, exclusive, featured, form lists) */
(function (global) {
  const artists = [
    // ——— Unreleased verses ———
    { slug: "inspectah-deck", photo: "assets/artists/inspectah-deck.jpg", name: "Inspectah Deck", note: "Wu-Tang Clan", tags: ["Hip-Hop", "East Coast", "Legacy"], unreleased: true, exclusive: false, featured: true, line: "Wu-Tang Clan lyricist and a core voice on Enter the Wu-Tang. Known for dense, technical verses across decades of East Coast hip-hop." },
    { slug: "celly-cel", photo: "assets/artists/celly-cel.jpg", name: "Celly Cel", tags: ["Hip-Hop", "West Coast"], unreleased: true, exclusive: false, featured: false, line: "Vallejo rapper who helped define 1990s Bay Area street rap. Known for Killa Kali and a long run of West Coast radio records." },
    { slug: "rbl-posse", name: "RBL Posse", tags: ["Hip-Hop", "West Coast", "Legacy"], unreleased: true, exclusive: false, featured: false, line: "San Francisco street-rap group from Hunters Point. Known for early-90s Bay Area anthems and a raw Hunters Point sound." },
    { slug: "necro", photo: "assets/artists/necro.jpg", name: "Necro", tags: ["Hip-Hop", "East Coast"], unreleased: true, exclusive: false, featured: false, line: "Brooklyn underground MC and producer in a grimy East Coast horrorcore lane. Known for dense, violent lyricism and self-produced beats." },
    { slug: "chuck-d", photo: "assets/artists/chuck-d.jpg", name: "Chuck D", note: "Public Enemy", tags: ["Hip-Hop", "East Coast", "Legacy"], unreleased: true, exclusive: false, featured: true, line: "Public Enemy founder and one of hip-hop's most forceful political voices. Known for Fight the Power and decades of East Coast protest rap." },
    { slug: "afroman", photo: "assets/artists/afroman.jpg", name: "Afroman", tags: ["Hip-Hop", "West Coast"], unreleased: true, exclusive: true, featured: false, line: "Hattiesburg-born rapper behind the cult hit Because I Got High. Known for deadpan humor and stoner-rap storytelling." },
    { slug: "iamsu", photo: "assets/artists/iamsu.jpg", name: "IAMSU!", tags: ["Hip-Hop", "West Coast"], unreleased: true, exclusive: false, featured: false, line: "Oakland rapper and HBK Gang architect who helped shape 2010s Bay Area club rap. Known for sleek records that bridged hyphy and trap." },
    { slug: "vinnie-paz", photo: "assets/artists/vinnie-paz.jpg", name: "Vinnie Paz", note: "Jedi Mind Tricks", tags: ["Hip-Hop", "East Coast"], unreleased: true, exclusive: false, featured: false, line: "Philadelphia MC and Jedi Mind Tricks frontman. Known for militant underground lyricism and a long East Coast independent catalog." },
    { slug: "ra-the-rugged-man", photo: "assets/artists/ra-the-rugged-man.jpg", name: "RA the Rugged Man", tags: ["Hip-Hop", "East Coast"], unreleased: true, exclusive: false, featured: false, line: "Long Island lyricist known for dense, technical verses and marathon bars. A cult East Coast name across decades of underground hip-hop." },
    { slug: "berner", photo: "assets/artists/berner.jpg", name: "Berner", tags: ["Hip-Hop", "West Coast"], unreleased: true, exclusive: false, featured: false, line: "San Francisco rapper and Cookies founder. Known for weed-culture records and a deep independent Bay Area catalog." },
    { slug: "crooked-i", photo: "assets/artists/crooked-i.jpg", name: "Crooked I", note: "Slaughterhouse", tags: ["Hip-Hop", "West Coast"], unreleased: true, exclusive: false, featured: false, line: "Long Beach lyricist and Slaughterhouse member. Known for technical West Coast bars and a long run as one of Cali's sharpest MCs." },
    { slug: "krayzie-bone", photo: "assets/artists/krayzie-bone.jpg", name: "Krayzie Bone", tags: ["Hip-Hop", "Legacy"], unreleased: true, exclusive: false, featured: false, line: "Cleveland rapper and a core voice in Bone Thugs-n-Harmony. Known for rapid, melodic flows that helped define 1990s Midwest hip-hop." },
    { slug: "rappin-4-tay", name: "Rappin' 4-Tay", tags: ["Hip-Hop", "West Coast", "Legacy"], unreleased: true, exclusive: false, featured: false, line: "Fillmore District legend from San Francisco. Known for Playaz Club and a classic 1990s Bay Area street-rap run." },
    { slug: "rittz", photo: "assets/artists/rittz.jpg", name: "Rittz", tags: ["Hip-Hop"], unreleased: true, exclusive: false, featured: false, line: "Atlanta-based Southern lyricist known for fast, technical verses. Came up through Strange Music with a distinctive Southern punchline style." },
    { slug: "mayday", name: "¡MAYDAY!", tags: ["Hip-Hop"], unreleased: true, exclusive: false, featured: false, line: "Miami hip-hop group known for live-band energy and independent touring. A South Florida staple mixing rap, rock, and club records." },
    { slug: "lil-b", photo: "assets/artists/lil-b.jpg", name: "Lil B The Based God", tags: ["Hip-Hop", "West Coast"], unreleased: true, exclusive: false, featured: false, line: "Berkeley rapper known as The Based God. Pioneer of based rap and a hugely influential internet-era voice from the Bay." },
    { slug: "king-lil-g", photo: "assets/artists/king-lil-g.jpg", name: "King Lil G", tags: ["Hip-Hop", "West Coast"], unreleased: true, exclusive: false, featured: false, line: "Inglewood rapper known for bilingual West Coast street records. A Southern California independent voice with a long catalog of gangsta and love tracks." },
    { slug: "blu", photo: "assets/artists/blu.jpg", name: "Blu", tags: ["Hip-Hop", "West Coast"], unreleased: true, exclusive: false, featured: false, line: "Los Angeles independent lyricist behind Below the Heavens. Known for soulful West Coast boom-bap and a deep underground catalog." },
    { slug: "talib-kweli", photo: "assets/artists/talib-kweli.jpg", name: "Talib Kweli", tags: ["Hip-Hop", "East Coast", "Legacy"], unreleased: true, exclusive: false, featured: false, line: "Brooklyn lyricist and Black Star member with Mos Def. Known for conscious East Coast rap and a long independent career after Reflection Eternal." },
    { slug: "planet-asia", photo: "assets/artists/planet-asia.jpg", name: "Planet Asia", tags: ["Hip-Hop", "West Coast"], unreleased: true, exclusive: false, featured: false, line: "Fresno MC and Cali underground staple. Known for dense lyricism, Cali Agents, and a vast independent West Coast catalog." },
    { slug: "ice-t", photo: "assets/artists/ice-t.jpg", name: "Ice-T", tags: ["Hip-Hop", "West Coast", "Legacy"], unreleased: true, exclusive: true, featured: true, line: "South Central pioneer who helped define West Coast gangsta rap. Known for 6 in the Mornin' and a career that stretches from hip-hop into acting." },
    { slug: "b-real", photo: "assets/artists/b-real.jpg", name: "B-Real", note: "Cypress Hill", tags: ["Hip-Hop", "West Coast", "Legacy"], unreleased: true, exclusive: false, featured: false, line: "Cypress Hill frontman with one of the most recognizable deliveries in rap. A South Gate voice who helped take West Coast hip-hop worldwide." },
    { slug: "doggystyleee", name: "Doggystyleee", tags: ["Hip-Hop", "West Coast"], unreleased: true, exclusive: false, featured: false, line: "West Coast independent rapper working in a classic Cali street-rap lane. Known for G-funk-leaning records on the indie circuit." },

    // ——— Exclusive licenses ———
    { slug: "lil-wayne", photo: "assets/artists/lil-wayne.jpg", name: "Lil Wayne", tags: ["Hip-Hop"], unreleased: false, exclusive: true, featured: true, line: "New Orleans rapper and Cash Money / Young Money architect. One of the most prolific voices in hip-hop, from Tha Carter through a generation of features." },
    { slug: "snoop-dogg", photo: "assets/artists/snoop-dogg.jpg", name: "Snoop Dogg", tags: ["Hip-Hop", "West Coast", "Legacy"], unreleased: false, exclusive: true, featured: true, line: "Long Beach icon who defined West Coast rap from Doggystyle onward. One of the most recognizable voices in hip-hop." },
    { slug: "nate-dogg", name: "Nate Dogg", note: "catalog licensed features", tags: ["Hip-Hop", "R&B", "West Coast", "Legacy"], unreleased: false, exclusive: true, featured: true, line: "Long Beach singer who defined the West Coast rap hook. Known for G-funk choruses alongside Snoop, Warren G, and 213." },
    { slug: "t-pain", photo: "assets/artists/t-pain.jpg", name: "T-Pain", tags: ["Hip-Hop", "R&B"], unreleased: false, exclusive: true, featured: true, line: "Tallahassee singer who made Auto-Tune a pop-rap signature. Known for mid-2000s hits and a long run of R&B and hip-hop features." },
    { slug: "flo-rida", photo: "assets/artists/flo-rida.jpg", name: "Flo Rida", tags: ["Hip-Hop"], unreleased: false, exclusive: true, featured: false, line: "Miami rapper behind a streak of late-2000s pop-rap smashes. Known for club records that crossed hip-hop onto global radio." },
    { slug: "dababy", photo: "assets/artists/dababy.jpg", name: "DaBaby", tags: ["Hip-Hop"], unreleased: false, exclusive: true, featured: false, line: "Charlotte rapper who broke through with a bounce-heavy, punchline style. Known for late-2010s chart runs and a distinctive ad-lib-heavy delivery." },
    { slug: "g-perico", name: "G Perico", tags: ["Hip-Hop", "West Coast"], unreleased: false, exclusive: true, featured: false, line: "South Central Los Angeles rapper known for crisp street records. A contemporary West Coast voice out of the 2010s L.A. renaissance." },
    { slug: "ne-yo", photo: "assets/artists/ne-yo.jpg", name: "Ne-Yo", tags: ["R&B"], unreleased: false, exclusive: true, featured: false, line: "Las Vegas R&B singer and songwriter behind mid-2000s pop-soul hits. Known for In My Own Words and a long run of radio ballads and features." },
    { slug: "rich-the-kid", photo: "assets/artists/rich-the-kid.jpg", name: "Rich The Kid", tags: ["Hip-Hop"], unreleased: false, exclusive: true, featured: false, line: "Queens-born, Atlanta-based rapper known for melodic trap and a 2010s hit run. Crossed between East Coast and Southern scenes with Rich Forever." },
    { slug: "2-chainz", photo: "assets/artists/2-chainz.jpg", name: "2 Chainz", tags: ["Hip-Hop"], unreleased: false, exclusive: true, featured: true, line: "College Park, Georgia rapper who became a trap elder statesman. Known for Playaz Circle, punchline features, and a long Atlanta catalog." },
    { slug: "krs-one", photo: "assets/artists/krs-one.jpg", name: "KRS-One", tags: ["Hip-Hop", "East Coast", "Legacy"], unreleased: false, exclusive: true, featured: false, line: "The Teacha — Bronx MC and Boogie Down Productions founder. A foundational East Coast voice for lyricism, battle rap, and hip-hop history." },
    { slug: "jadakiss", photo: "assets/artists/jadakiss.jpg", name: "Jadakiss", tags: ["Hip-Hop", "East Coast", "Legacy"], unreleased: false, exclusive: true, featured: false, line: "Yonkers MC from The Lox and Ruff Ryders. Known for hard East Coast punchlines and one of the most respected features in 2000s rap." },
    { slug: "royce-da-59", photo: "assets/artists/royce-da-59.jpg", name: "Royce da 5'9\"", tags: ["Hip-Hop", "East Coast"], unreleased: false, exclusive: true, featured: false, line: "Detroit lyricist, Slaughterhouse member, and Eminem collaborator in Bad Meets Evil. Known for dense bars and a long independent catalog." },
    { slug: "e-40", photo: "assets/artists/e-40.jpg", name: "E-40", tags: ["Hip-Hop", "West Coast", "Legacy"], unreleased: false, exclusive: true, featured: true, line: "Vallejo legend and Bay Area ambassador. Known for slang-heavy delivery, independent hustle, and decades of West Coast hits." },
    { slug: "mac-dre", name: "Mac Dre", note: "catalog licensed features", tags: ["Hip-Hop", "West Coast", "Legacy"], unreleased: false, exclusive: true, featured: false, line: "Vallejo pioneer who helped invent the hyphy movement. Known for Thizz and a catalog that still defines Northern California rap." },
    { slug: "tha-jacka", name: "Tha Jacka", note: "catalog licensed features", tags: ["Hip-Hop", "West Coast", "Legacy"], unreleased: false, exclusive: true, featured: false, line: "Pittsburg, California rapper and Mob Figaz member. Known for street storytelling and a deep Bay Area independent catalog." },
    { slug: "gucci-mane", photo: "assets/artists/gucci-mane.jpg", name: "Gucci Mane", tags: ["Hip-Hop"], unreleased: false, exclusive: true, featured: true, line: "Atlanta trap architect out of East Atlanta. Known for a massive mixtape run and a voice that shaped 2000s and 2010s Southern rap." },
    { slug: "rick-ross", photo: "assets/artists/rick-ross.jpg", name: "Rick Ross", tags: ["Hip-Hop"], unreleased: false, exclusive: true, featured: false, line: "Miami rapper and MMG founder. Known for luxurious, booming street records from Port of Miami onward." },
    { slug: "juice-wrld", photo: "assets/artists/juice-wrld.jpg", name: "Juice WRLD", note: "catalog licensed features", tags: ["Hip-Hop"], unreleased: false, exclusive: true, featured: false, line: "Chicago melodic-rap star who helped define late-2010s emo rap. Known for Goodbye & Good Riddance and a generation of singing-rap records." },
    { slug: "wc", photo: "assets/artists/wc.jpg", name: "WC", tags: ["Hip-Hop", "West Coast", "Legacy"], unreleased: false, exclusive: true, featured: false, line: "South Central MC from Westside Connection and Lench Mob. Known for Bow Down-era West Coast anthems and a long L.A. street-rap run." },
    { slug: "brotha-lynch-hung", photo: "assets/artists/brotha-lynch-hung.jpg", name: "Brotha Lynch Hung", tags: ["Hip-Hop", "West Coast"], unreleased: false, exclusive: true, featured: false, line: "Sacramento horrorcore pioneer. Known for a grim, narrative West Coast style that influenced a generation of independent rap." },
    { slug: "bryson-tiller", photo: "assets/artists/bryson-tiller.jpg", name: "Bryson Tiller", tags: ["R&B"], unreleased: false, exclusive: true, featured: true, line: "Louisville singer who helped popularize trap-soul. Known for Trapsoul and a smoky R&B delivery that crossed onto hip-hop radio." },
    { slug: "dmx", photo: "assets/artists/dmx.jpg", name: "DMX", note: "catalog licensed features", tags: ["Hip-Hop", "East Coast", "Legacy"], unreleased: false, exclusive: true, featured: false, line: "Yonkers legend and Ruff Ryders cornerstone. Known for raw East Coast anthems, barking ad-libs, and a run of late-90s chart-topping albums." },
    { slug: "mr-capone-e", photo: "assets/artists/mr-capone-e.jpg", name: "Mr. Capone-E", tags: ["Hip-Hop", "West Coast"], unreleased: false, exclusive: true, featured: false, line: "Inland Empire West Coast independent rapper known for gangsta and love jams. A long-running Cali catalog voice on the indie circuit." },
    { slug: "j-cole", photo: "assets/artists/j-cole.jpg", name: "J. Cole", tags: ["Hip-Hop"], unreleased: false, exclusive: true, featured: true, line: "Fayetteville rapper, producer, and Dreamville founder. Known for introspective, album-first hip-hop from Cole World onward." },
    { slug: "lil-yachty", photo: "assets/artists/lil-yachty.jpg", name: "Lil Yachty", tags: ["Hip-Hop"], unreleased: false, exclusive: true, featured: false, line: "Atlanta artist who moved from 2010s bubblegum trap into experimental and melodic records. Known for a colorful, shape-shifting catalog." },

    // ——— Homepage featured extras ———
    { slug: "mozzy", photo: "assets/artists/mozzy.jpg", name: "Mozzy", tags: ["Hip-Hop", "West Coast"], unreleased: false, exclusive: true, featured: true, line: "Sacramento street-rap voice known for mournful, melody-heavy records. A defining Northern California name of the 2010s." },
    { slug: "ray-j", photo: "assets/artists/ray-j.jpg", name: "Ray J", tags: ["R&B", "West Coast"], unreleased: false, exclusive: true, featured: true, line: "Los Angeles R&B singer from the Norwood family. Known for 2000s radio records and a pop-R&B feature presence." },
    { slug: "sean-paul", photo: "assets/artists/sean-paul.jpg", name: "Sean Paul", tags: ["Hip-Hop"], unreleased: false, exclusive: true, featured: true, line: "Kingston dancehall star who took Jamaican club music global. Known for Dutty Rock-era hits and a long run of crossover features." },
    { slug: "yukmouth", photo: "assets/artists/yukmouth.jpg", name: "Yukmouth", note: "Luniz", tags: ["Hip-Hop", "West Coast", "Legacy"], unreleased: false, exclusive: true, featured: true, line: "Oakland rapper, Luniz member, and Smoke-A-Lot Records founder. Known for I Got 5 on It and a deep Bay Area independent catalog." },
    { slug: "suga-free", name: "Suga Free", tags: ["Hip-Hop", "West Coast", "Legacy"], unreleased: false, exclusive: true, featured: false, line: "Pomona pimp-rap stylist with a rubbery, talk-sung flow. A West Coast cult voice from the late-90s Street Life era onward." },

    // ——— Form roster (exclusive unless also unreleased above) ———
    { slug: "herman-watson", photo: "assets/artists/herman-watson.jpg", name: "Herman Watson", tags: ["Hip-Hop", "West Coast"], unreleased: false, exclusive: true, featured: false, line: "West Coast independent artist and founder of HW Entertainment." },
    { slug: "atmosphere", photo: "assets/artists/atmosphere.jpg", name: "Atmosphere", tags: ["Hip-Hop"], unreleased: false, exclusive: true, featured: false, line: "Minneapolis independent duo of Slug and Ant. Known for Rhymesayers storytelling rap and a long catalog of Midwestern indie hip-hop." },
    { slug: "baby-bash", photo: "assets/artists/baby-bash.jpg", name: "Baby Bash", tags: ["Hip-Hop", "West Coast"], unreleased: false, exclusive: true, featured: false, line: "Houston rapper who crossed West Coast and Southern club radio. Known for Suga Suga and a run of early-2000s crossover hits." },
    { slug: "the-doc", photo: "assets/artists/the-doc.jpg", name: "The D.O.C.", note: "N.W.A", tags: ["Hip-Hop", "West Coast", "Legacy"], unreleased: false, exclusive: true, featured: false, line: "Dallas lyricist closely tied to N.W.A and Ruthless Records. Known for No One Can Do It Better and writing that helped shape late-80s West Coast rap." },
    { slug: "sage-francis", photo: "assets/artists/sage-francis.jpg", name: "Sage Francis", tags: ["Hip-Hop", "East Coast"], unreleased: false, exclusive: true, featured: false, line: "Providence independent lyricist from the Strange Famous lane. Known for dense, personal East Coast underground records." },
    { slug: "sleep-of-oldominion", photo: "assets/artists/sleep-of-oldominion.jpg", name: "Sleep of Oldominion", tags: ["Hip-Hop", "West Coast"], unreleased: false, exclusive: true, featured: false, line: "Pacific Northwest independent MC and Oldominion crew member. Known for underground West Coast and PNW lyricism." },
    { slug: "freddie-gibbs", photo: "assets/artists/freddie-gibbs.jpg", name: "Freddie Gibbs", tags: ["Hip-Hop"], unreleased: false, exclusive: true, featured: false, line: "Gary, Indiana rapper known for precise street bars. Built a cult independent catalog that crossed into mainstream hip-hop." },
    { slug: "andre-nickatina", photo: "assets/artists/andre-nickatina.jpg", name: "Andre Nickatina", tags: ["Hip-Hop", "West Coast"], unreleased: false, exclusive: true, featured: false, line: "San Francisco independent legend with a vast self-released catalog. Known for psychedelic Bay Area storytelling and a cult Fillmore voice." },
    { slug: "lazy-dubb", name: "Lazy Dubb", tags: ["Hip-Hop"], unreleased: false, exclusive: true, featured: false, line: "Independent hip-hop artist. A contemporary voice on the HW Entertainment roster." },
    { slug: "mr-nickel", name: "Mr. Nickel", tags: ["Hip-Hop"], unreleased: false, exclusive: true, featured: false, line: "Independent hip-hop artist. A contemporary voice on the HW Entertainment roster." },
    { slug: "ill-bill", photo: "assets/artists/ill-bill.jpg", name: "Ill Bill", note: "Heavy Metal Kings", tags: ["Hip-Hop", "East Coast"], unreleased: false, exclusive: true, featured: false, line: "Brooklyn MC from Non Phixion and Heavy Metal Kings. Known for grimy East Coast underground rap and a long independent catalog." },
    { slug: "nhale", name: "Nhale", tags: ["Hip-Hop", "West Coast"], unreleased: false, exclusive: true, featured: false, line: "West Coast independent rapper. A contemporary Cali voice on the HW Entertainment roster." },
    { slug: "mistah-fab", photo: "assets/artists/mistah-fab.jpg", name: "Mistah F.A.B.", tags: ["Hip-Hop", "West Coast"], unreleased: false, exclusive: true, featured: false, line: "Oakland rapper, hyphy-era star, and independent hustler. Known for club records, battle-rap roots, and a long Bay Area catalog." },
    { slug: "kokane", photo: "assets/artists/kokane.jpg", name: "Kokane", tags: ["Hip-Hop", "R&B", "West Coast", "Legacy"], unreleased: false, exclusive: true, featured: false, line: "Pomona G-funk singer and former C.P.O. member. Known for rubbery hooks on West Coast classics with Above the Law, Snoop, and others." },
    { slug: "edi-mean", photo: "assets/artists/edi-mean.jpg", name: "Edi Mean", note: "The Outlawz", tags: ["Hip-Hop", "West Coast", "Legacy"], unreleased: false, exclusive: true, featured: false, line: "Outlawz member known for records alongside Tupac. A core voice from Still I Rise and the group's post-90s catalog." },
    { slug: "reverie", name: "Reverie", tags: ["Hip-Hop", "West Coast"], unreleased: false, exclusive: true, featured: false, line: "Los Angeles lyricist known for fast, technical independent rap. A West Coast underground voice with a long self-released catalog." },
    { slug: "the-grouch", name: "The Grouch", tags: ["Hip-Hop", "West Coast"], unreleased: false, exclusive: true, featured: false, line: "Oakland MC and Living Legends co-founder. Known for backpack indie West Coast rap and a deep independent catalog." },
    { slug: "sunspot-jonz", photo: "assets/artists/sunspot-jonz.jpg", name: "Sunspot Jonz", tags: ["Hip-Hop", "West Coast"], unreleased: false, exclusive: true, featured: false, line: "Living Legends member and Bay Area independent MC. Known for underground West Coast records and the crew's 1990s–2000s run." },
    { slug: "eligh", name: "Eligh", tags: ["Hip-Hop", "West Coast"], unreleased: false, exclusive: true, featured: false, line: "Living Legends producer-MC from Los Angeles. Known for moody indie-rap production and a long West Coast underground catalog." },
    { slug: "murs", photo: "assets/artists/murs.jpg", name: "Murs", tags: ["Hip-Hop", "West Coast"], unreleased: false, exclusive: true, featured: false, line: "Los Angeles independent lyricist known for Living Legends, Felt, and a long storytelling catalog. A West Coast backpack-rap staple." },
    { slug: "luckyiam", name: "Luckyiam", tags: ["Hip-Hop", "West Coast"], unreleased: false, exclusive: true, featured: false, line: "Living Legends member from Los Angeles. Known as The Superstar and a long-running West Coast independent MC." },
    { slug: "tommy-skit", name: "Tommy Skit", note: "Power", tags: ["Hip-Hop"], unreleased: false, exclusive: true, featured: false, line: "Independent hip-hop artist associated with Power. A contemporary voice on the HW Entertainment roster." },
    { slug: "ceschi-ramos", photo: "assets/artists/ceschi-ramos.jpg", name: "Ceschi Ramos", note: "Codefendants", tags: ["Hip-Hop"], unreleased: false, exclusive: true, featured: false, line: "Connecticut independent artist and Codefendants member. Known for punk-rap and folk-hop records and a long DIY catalog." },
    { slug: "the-iinterceptorzz", name: "The IInterceptorzz", tags: ["Hip-Hop"], unreleased: false, exclusive: true, featured: false, line: "Independent hip-hop act. A contemporary voice on the HW Entertainment roster." },
    { slug: "acee-ville-da-real", name: "Acee-Ville Da Real", tags: ["Hip-Hop"], unreleased: false, exclusive: true, featured: false, line: "Independent hip-hop artist. A contemporary voice on the HW Entertainment roster." },
    { slug: "mic-bles", name: "Mic Bles", tags: ["Hip-Hop"], unreleased: false, exclusive: true, featured: false, line: "Independent hip-hop artist. A contemporary voice on the HW Entertainment roster." },
    { slug: "dru-down", name: "Dru Down", tags: ["Hip-Hop", "West Coast", "Legacy"], unreleased: false, exclusive: true, featured: false, line: "Oakland veteran known for 1990s Bay Area hits like Pimp of the Year. A classic Northern California street-rap voice." },
    { slug: "tony-b", name: "Tony B", tags: ["Hip-Hop"], unreleased: false, exclusive: true, featured: false, line: "Independent hip-hop artist. A contemporary voice on the HW Entertainment roster." },
    { slug: "g-battles", name: "G Battles", tags: ["Hip-Hop"], unreleased: false, exclusive: true, featured: false, line: "Independent hip-hop artist. A contemporary voice on the HW Entertainment roster." },
    { slug: "bizzy-bone", photo: "assets/artists/bizzy-bone.jpg", name: "Bizzy Bone", tags: ["Hip-Hop", "Legacy"], unreleased: false, exclusive: true, featured: false, line: "Cleveland rapper and Bone Thugs-n-Harmony member. Known for rapid, harmonic flows that helped define 1990s Midwest hip-hop." },
    { slug: "flesh-n-bone", photo: "assets/artists/flesh-n-bone.jpg", name: "Flesh-N-Bone", tags: ["Hip-Hop", "Legacy"], unreleased: false, exclusive: true, featured: false, line: "Bone Thugs-n-Harmony member from Cleveland. Known for the group's harmonic, double-time Midwest sound." },
    { slug: "layzie-bone", photo: "assets/artists/layzie-bone.jpg", name: "Layzie Bone", tags: ["Hip-Hop", "Legacy"], unreleased: false, exclusive: true, featured: false, line: "Bone Thugs-n-Harmony member and a core voice on the group's 1990s run. Known for melodic, rapid Midwest flows." },
    { slug: "wish-bone", photo: "assets/artists/wish-bone.jpg", name: "Wish Bone", tags: ["Hip-Hop", "Legacy"], unreleased: false, exclusive: true, featured: false, line: "Bone Thugs-n-Harmony member from Cleveland. Known for the group's sing-rap harmonies and 1990s Midwest hits." }
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
