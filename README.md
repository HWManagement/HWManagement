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
- Cards are typographic (initials / gold line). There are no celebrity photographs and no AI faces.
- Book Now goes to `request-form.html`. There is no public WhatsApp number on this site.
- YouTube and TikTok footer links are placeholders (`#`) until official channels are provided. Instagram is `https://instagram.com/hwatson27`.
