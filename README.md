# HW Entertainment LLC

Production static site for HW Entertainment — licensed features, promotion, and billboard bookings.

## Preview locally

From this folder:

```bash
python3 -m http.server 8080
```

Then open [http://localhost:8080](http://localhost:8080). `index.html` is at the site root.

Any static server works (`npx serve`, GitHub Pages, Netlify). Do not open files via `file://` if you want Formspree redirects and fetch-free routing to behave normally; the pages themselves are plain HTML/CSS/JS.

## GitHub Pages

The intended live path is `/HWManagement/` (for example `https://hwmanagement.github.io/HWManagement/`). All internal links, assets, and scripts are **relative** (not `/`-rooted), so the site works from a domain root and from that subpath.

## Form

The booking form POSTs to Formspree `https://formspree.io/f/xnnevzwa` and redirects to `thanks.html`.

## Notes

- Roster data lives in `js/artists.js`. Artist detail is the single template `artist.html?name=slug`.
- Artist cards use freely licensed photographs from Wikimedia Commons / Wikidata P18 when available. Otherwise a typographic initials fallback is shown. No AI-generated portraits.
- Book Now goes to `request-form.html`. There is no public WhatsApp number on this site.
- Footer socials: YouTube `https://www.youtube.com/@HermanWatsonHw_Management`, TikTok `https://www.tiktok.com/@hwentertainmentllc`, Instagram `https://www.instagram.com/hw_management/`.

## Photo attributions

Artist photographs are stored in `assets/artists/` and were sourced from **Wikimedia Commons** via Wikidata property P18 (image), except Herman Watson (HW logo). Only files under CC0, CC BY, CC BY-SA, or public domain were used. Fair-use Wikipedia thumbs were skipped. If no free photo exists, the card uses initials.

- **Inspectah Deck** — Wikimedia Commons `Inspectah Deck in Paris, 2013 (cropped).jpg` (CC BY-SA 2.0, photo: Coup d'Oreille).
- **Celly Cel** — Wikimedia Commons `Celly Cel, 2018.png` (CC BY 3.0, photo: RapkindTV).
- **Necro** — Wikimedia Commons `Necro.JPG` (Public domain, photo: The original uploader was Thetruth777 at English Wikipedia.).
- **Chuck D** — Wikimedia Commons `Chuck D Public Enemy Way Out West 2013 (cropped).jpg` (CC BY-SA 3.0, photo: Kim Metso).
- **Afroman** — Wikimedia Commons `Afroman @ Gainesville 2011 (3) (cropped).jpg` (CC BY-SA 2.0, photo: Chris Gilmore).
- **IAMSU!** — Wikimedia Commons `Iamsu!.jpg` (CC BY 2.0, photo: Treefort Music Fest).
- **Vinnie Paz** — Wikimedia Commons `Vinnie Paz JMT.jpg` (CC BY-SA 4.0, photo: JmtTouring).
- **RA the Rugged Man** — Wikimedia Commons `RA The Rugged Man live at Club 120 (36397360632) (cropped).png` (CC BY 2.0, photo: The Come Up Show from Canada).
- **Berner** — Wikimedia Commons `TheBerner.jpg` (CC BY-SA 4.0, photo: Migu2000oc).
- **Crooked I** — Wikimedia Commons `Mike Smith BET One Shot DJ Khaled (cropped).jpg` (CC BY-SA 4.0, photo: Sharonwalker553).
- **Krayzie Bone** — Wikimedia Commons `Krayzie Bone - Bone Thugs-n-Harmony (21365737206).jpg` (CC BY 2.0, photo: The Come Up Show).
- **Rittz** — Wikimedia Commons `Rittz 2013.jpg` (CC BY 3.0, photo: 7EVENSIQS).
- **Lil B The Based God** — Wikimedia Commons `Lil B 2011 (cropped).png` (CC BY 2.0, photo: https://www.flickr.com/photos/generationbass/).
- **King Lil G** — Wikimedia Commons `KinglilG.jpg` (CC BY-SA 4.0, photo: Migu2000oc).
- **Blu** — Wikimedia Commons `Blu getting interviewed in Atlanta.jpg` (CC BY 2.0, photo: Dom Brady from Atlanta, Georgia, United States).
- **Talib Kweli** — Wikimedia Commons `Talib Kweli - Ilosaarirock 2012.jpg` (CC BY-SA 3.0, photo: Tuomas Vitikainen).
- **Planet Asia** — Wikimedia Commons `Planet Asia.jpg` (CC BY-SA 2.5, photo: Justin Penner (Entertheinferno)).
- **Ice-T** — Wikimedia Commons `Body Count feat. Ice-T - 2019214172411 2019-08-02 Wacken - 2311 - AK8I3133 (cropped).jpg` (CC BY-SA 4.0, photo: Sven Mandel).
- **B-Real** — Wikimedia Commons `Cypress Hill - B-Real - Nova Rock - 2016-06-11-17-17-51.jpg` (CC BY-SA 4.0, photo: Biha).
- **Lil Wayne** — Wikimedia Commons `Lil Wayne Feb. 2020.jpg` (CC BY-SA 4.0, photo: Chris Allmeid).
- **Snoop Dogg** — Wikimedia Commons `Snoop Dogg 2019 by Glenn Francis.jpg` (CC BY-SA 4.0, photo: Toglenn).
- **T-Pain** — Wikimedia Commons `T-Pain @ SXSW 2022 - 51958513356.jpg` (CC BY 2.0, photo: Daniel Benavides).
- **Flo Rida** — Wikimedia Commons `Flo Rida2012.jpg` (CC BY-SA 2.0, photo: Liam Mendes).
- **DaBaby** — Wikimedia Commons `DaBaby 2026.jpg` (CC BY 4.0, photo: MILLION DOLLAZ WORTH OF GAME).
- **Ne-Yo** — Wikimedia Commons `Ne-Yo 2013.jpg` (CC BY 2.0, photo: Jennifer Su).
- **Rich The Kid** — Wikimedia Commons `Rich the Kid - Openair Frauenfeld 2019 04.jpg` (CC BY-SA 4.0, photo: Frank Schwichtenberg).
- **2 Chainz** — Wikimedia Commons `2 Chainz 2013.JPG` (CC BY 2.0, photo: demxx).
- **KRS-One** — Wikimedia Commons `KRS-One 2002.jpg` (CC BY-SA 4.0, photo: MikaV).
- **Jadakiss** — Wikimedia Commons `Jadakiss.jpg` (CC BY 3.0, photo: Kevin O'Garro , Wordtaangewerkt.nl).
- **Royce da 5'9"** — Wikimedia Commons `Royce feeling it.jpg` (CC BY-SA 2.0, photo: kEVVY KEV).
- **E-40** — Wikimedia Commons `E-40.jpg` (CC BY-SA 2.0, photo: Gamerscore Blog from USA).
- **Gucci Mane** — Wikimedia Commons `Gucci Mane, Clout Festival 2024 03 (cropped).jpg` (CC BY 4.0, photo: Wojciech Pędzich).
- **Rick Ross** — Wikimedia Commons `Rick Ross in the trap! (cropped).jpg` (CC BY 3.0, photo: The 85 South Comedy Show).
- **Juice WRLD** — Wikimedia Commons `Juice Wrld VMAs.png` (CC BY 3.0, photo: MTV International).
- **WC** — Wikimedia Commons `WC (rapper).jpg` (CC BY 2.5, photo: Tana Cox from Long Beach, Ca, USA).
- **Brotha Lynch Hung** — Wikimedia Commons `Brotha Lynch Hung.jpg` (CC BY 3.0, photo: Kevin21555).
- **Bryson Tiller** — Wikimedia Commons `Bryson Tiller August 2018 (cropped).jpg` (CC BY 3.0, photo: AtlantaFX).
- **DMX** — Wikimedia Commons `DMX.rapper (cropped).jpg` (CC BY-SA 3.0, photo: Mika-photography).
- **Mr. Capone-E** — Wikimedia Commons `MrCapone-E.jpg` (CC BY-SA 3.0, photo: Aeg12521).
- **J. Cole** — Wikimedia Commons `HOTSPOTATL - 21 Savage & J.Cole Light Birthday Bash ATL 2023 On FIRE (xu6HKf40MX0 - 2m38s) (cropped).jpg` (CC BY 3.0, photo: HOTSPOTATL).
- **Lil Yachty** — Wikimedia Commons `Lil Yachty 2025.jpg` (CC BY-SA 4.0, photo: Lygonstreet).
- **Mozzy** — Wikimedia Commons `Mozzy.jpg` (CC BY 3.0, photo: MILLION DOLLAZ WORTH OF GAME).
- **Ray J** — Wikimedia Commons `Ray J 2011.jpg` (CC BY-SA 3.0, photo: Toglenn).
- **Sean Paul** — Wikimedia Commons `Sean Paul 2024 (cropped).jpg` (CC BY 3.0, photo: BOSS TALK 101).
- **Yukmouth** — Wikimedia Commons `Yukmouth 2025.jpg` (CC BY 3.0, photo: BOSS TALK 101).
- **Herman Watson** — HW Entertainment logo (company-owned), saved as `assets/artists/herman-watson.jpg`.
- **Atmosphere** — Wikimedia Commons `Atmosphere 8-17-2023.jpg` (CC BY-SA 4.0, photo: Constantino14).
- **Baby Bash** — Wikimedia Commons `Baby Bash 2010.jpg` (CC BY-SA 3.0, photo: Toglenn).
- **The D.O.C.** — Wikimedia Commons `DOC 2025.jpg` (CC BY 3.0, photo: BOSS TALK 101).
- **Sage Francis** — Wikimedia Commons `Sage Francis.jpg` (CC BY-SA 2.0, photo: Joseph Nicolia).
- **Sleep of Oldominion** — Wikimedia Commons `Sleepperforminglive.png` (CC BY-SA 4.0, photo: Ryu Sheshup).
- **Freddie Gibbs** — Wikimedia Commons `MadGibbs2014 (cropped).jpg` (CC BY-SA 2.0, photo: Carl Pocket).
- **Andre Nickatina** — Wikimedia Commons `Andre Nickatina (cropped).jpg` (CC BY-SA 2.0, photo: Kamyar Shahmoradi from Santa Monica, U.S.).
- **Ill Bill** — Wikimedia Commons `Ill Bill.jpg` (CC BY-SA 3.0, photo: ldbergeron (Flickr profile)).
- **Mistah F.A.B.** — Wikimedia Commons `Mistah F.A.B. (cropped).jpg` (CC BY 2.0, photo: Brian Solis).
- **Kokane** — Wikimedia Commons `Kokane, 2011.jpg` (CC BY-SA 3.0, photo: Budeboyjournalist).
- **Edi Mean** — Wikimedia Commons `E.D.I. Mean.jpg` (CC BY 3.0, photo: GrindFace TV).
- **Sunspot Jonz** — Wikimedia Commons `Sunspot Jonz 2022.jpg` (CC BY-SA 4.0, photo: CleophusJ).
- **Murs** — Wikimedia Commons `9th Wonder & Murs.jpg` (CC BY 2.0, photo: Flowizm).
- **Ceschi Ramos** — Wikimedia Commons `Ceschi in 2015.png` (CC BY 3.0, photo: Svenja Klemp and Mark van de Korput).
- **Bizzy Bone** — Wikimedia Commons `Bizzybone(by Scott Dudelson).jpg` (CC BY 3.0, photo: zura kiknadze[1]).
- **Flesh-N-Bone** — Wikimedia Commons `Flesh-n-Bone (cropped).jpg` (CC BY 2.0, photo: Chase Stevens).
- **Layzie Bone** — Wikimedia Commons `Layzie-bone-travis-glodt.jpg` (CC BY-SA 4.0, photo: Glodt2123).
- **Wish Bone** — Wikimedia Commons `Wish Bone - Danforth Music Hall 2015.jpg` (CC BY 2.0, photo: The Come Up Show).
- Sunset Spectacular — Wikimedia Commons File:TWA West Hollywood Sunset Spectacular.jpg (CC BY-SA 4.0)
- Times Square — Wikimedia Commons File:Times Square, NYC at night - August 2025.jpg (CC BY 4.0)
