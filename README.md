# ForgeWorks Industrial Website

A responsive, multi-page static website concept for Steel Fabrication & Structural Works.

## Pages
- `index.html` — Home 1 (Image Duo Right Hero)
- `home-2.html` — Home 2 (Geometric Right Hero)
- `about.html`
- `services.html`
- `projects.html`
- `capabilities.html`
- `contact.html`

## Run locally
Open `index.html` in a browser, or run a local server from this folder:
`python -m http.server 8000`
Then visit `http://localhost:8000`.

## Features
- Light and dark theme switcher (saved in local storage)
- LTR / RTL layout switcher (saved in local storage)
- Responsive navigation drawer with theme and direction controls
- Consistent responsive inner-page hero height
- Contact form front-end validation and demo success message
- Scroll reveal effects and reduced-motion support
- Industrial image-led layouts and responsive cards

## Before production
Replace the demo company phone, email and address with verified business details. Connect the contact form to a backend, CRM or email service. Photography is loaded from Unsplash image URLs and therefore requires an internet connection. The visual direction is an original implementation inspired by the supplied industrial template reference and screenshots; it does not include the reference theme's proprietary source files.

## Latest design refinement
- Home 1: interactive timeline slider, team introduction ribbon and flip cards with brand standards/client feedback.
- Home 2: hexagon capability slider and horizontally scrollable project gallery with testimonial panel.
- Services: circular team/specialty gallery, service values and masonry project gallery with client feedback.
- Refined angular industrial CTA buttons; decorative arrow glyphs are hidden in primary buttons.
- Flip cards support pointer, keyboard and tap interaction; timeline and hexagon controls are interactive.

## Image handling update
- Replaced the unrelated stock imagery with industrial steel fabrication, structural beam, welding and workshop photography from opened image-source previews.
- Added an image fallback chain to prevent broken-image icons if a third-party image host becomes unavailable.
- Third-party image hosting remains external; for production, obtain permission/licensing as appropriate and download approved originals into `assets/` for self-hosting.
## Contact page update
- Rebuilt as a focused enquiry page with neatly formatted phone, email and location details, a Hyderabad map preview, FAQ accordion and next-step process.
- The map pin is a generic Hyderabad preview, not a verified ForgeWorks office address.
- Contact details are demonstration placeholders and must be replaced before launch.

## Latest refinement (team, process flows and navigation)
- Home 1 team feature now uses an actual human industrial team photograph, role-based responsibility details and a three-card illustrative feedback wall.
- Home 2 hexagon carousel uses human worker/team photography on both side hexagons; only the active centre hexagon shows a heading and description, including after carousel navigation.
- Home 2 team area now uses a human team photograph and deeper role breakdown plus three illustrative feedback cards.
- About page now has a circular animated orbit workflow (Listen → Engineer → Fabricate → Deliver).
- Services page now has a separate linear animated production route (Scope → Prepare → Produce → Inspect & deliver), not a duplicate of the About flow.
- Services masonry gallery now contains six related visual tiles.
- Compact desktop/tablet navigation switches to the drawer before the quote CTA can be clipped; the CTA is full-width inside the drawer.
- Pexels image references are free stock previews discovered from the source pages; confirm applicable licensing and attribution terms before commercial deployment.
- Review text is illustrative placeholder copy and should be replaced with approved customer testimonials.

## Latest requested refinement
- Projects and Capabilities have been rebuilt as separate page experiences: Projects is now a case-study/portfolio layout; Capabilities is a visual filmstrip and editorial mosaic.
- All non-home inner-page hero titles and descriptions are centred, and the breadcrumb line (including the Home / About wording) has been removed.
- Services now uses human/worker fabrication imagery in the People & Specialties circles and a seventh masonry tile that fills the final gallery slot.
- Home 1 timeline now has four clickable progress stops, a live step label, working previous/next controls, scroll snapping and a responsive two-card carousel view.
- Home 1 review cards reflow at tablet and mobile widths to keep readable text and consistent card heights.
- About orbital workflow stacks above the diagram at tablet widths to prevent text/diagram overlap.
- Theme, RTL and Request a Quote controls now share a consistent 36px control height; the quote link has an explicit nav-specific padding override.
- Image source references are unique across the HTML pages; all image elements have alt text. Remote image hosts may still change availability, so self-host approved licensed images for production.

## Image stability and page redesign update
- Replaced third-party hotlinked HTML images and hero images with 72 self-hosted, locally bundled SVG industrial illustrations. The pages no longer depend on remote photo hosts for their core imagery.
- Removed the broken-image fallback label that previously overlaid cards and timeline content.
- Projects and Capabilities now each contain seven sections and use different section systems: project milestone route vs. editorial detail gallery.
- Services now contains a dedicated Technical Support section covering drawing/detail review, revision coordination and workshop/site queries. The former Technical Support specialty label has been refined to Engineering Coordination.
- Verified all local image paths exist, there are no duplicate image references in HTML, JavaScript syntax passes, and Projects/Capabilities/Services have seven sections each.

## Capabilities and photographic image update
- Removed the Gallery page and replaced it with `capabilities.html`, a steel-fabrication-focused page with exactly six sections.
- Capabilities uses six distinct compositions: centered photo hero, offset capability cards, split fabrication scope, three-step process cards, bento applications grid, and technical coordination stack.
- Replaced the generated vector-style industrial drawings throughout the HTML pages with real industrial/fabrication photography served from Pexels photo CDN URLs.
- Added a multi-source image fallback for inline images. Failed images try alternate industrial photographs and are never covered by a fake brand label.
- Every image URL is unique within its own page (including hero background) to avoid repeating the same photo on a page.
- Pexels photos are remote assets; a working internet connection is required for the photographs to load. The page retains a dark gradient fallback for hero backgrounds.

## Latest screenshot-driven refinements
- Projects page now uses a continuous left-to-right image flow with seven unique steel/fabrication photos and seven different card sizes. The seven-card run is duplicated in the markup only to create a seamless continuous loop.
- Contact method icons are inline SVGs (phone, email, location) with fixed visible dimensions and contrast.
- Theme and RTL controls are icon-only in desktop navigation and the mobile hamburger panel; text labels are hidden while accessible labels/tooltips remain.
- About page orbital workflow nodes and central logo text are constrained to fit inside the circles at 360px and narrower mobile widths.
- JavaScript syntax and HTML structure counts were checked after the updates.

## Contact icon padding correction
- Contact icon squares now use fixed 44 × 44 px dimensions and flex centering.
- Inline SVGs are fixed at 20 × 20 px, with zero padding/margins and centered alignment.
- Text is separated by a consistent 16 px gap; contact text wraps without pushing icons out of alignment.
