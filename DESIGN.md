---
name: Crossed Over Citi Church
description: Sunday Service billed like the headline date on an event tour, dark and cinematic, in the church's own violet and gold.
colors:
  ground: "#0b0514"
  raised: "#170d26"
  line: "#2a1d3d"
  violet: "#8214d9"
  violet-deep: "#6a0fb3"
  violet-text: "#b37cf0"
  gold: "#c9a45c"
  gold-hover: "#ddbe83"
  on-gold: "#1a0b2e"
  text: "#ffffff"
  muted: "#b9aacd"
  on-violet-muted: "#efe4fc"
typography:
  display:
    fontFamily: "Poppins, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2.75rem, 7vw, 6rem)"
    fontWeight: 700
    lineHeight: 0.98
    letterSpacing: "-0.035em"
  display-stack:
    fontFamily: "Poppins, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2.5rem, 5.4vw, 4.75rem)"
    fontWeight: 600
    lineHeight: 1.02
    letterSpacing: "-0.035em"
  headline:
    fontFamily: "Poppins, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2rem, 4.2vw, 3.5rem)"
    fontWeight: 700
    lineHeight: 1.02
    letterSpacing: "-0.03em"
  headline-rail:
    fontFamily: "Poppins, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.75rem, 3.4vw, 2.75rem)"
    fontWeight: 700
    lineHeight: 1.05
    letterSpacing: "-0.03em"
  title:
    fontFamily: "Poppins, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: "-0.02em"
  title-poster:
    fontFamily: "Poppins, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(1.5rem, 2.2vw, 2rem)"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "-0.01em"
  lead:
    fontFamily: "Geist, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: "2rem"
  body:
    fontFamily: "Geist, ui-sans-serif, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: "1.75rem"
  label:
    fontFamily: "Geist, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 600
    lineHeight: "1.25rem"
  caption:
    fontFamily: "Geist, ui-sans-serif, system-ui, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 400
    lineHeight: "1.25rem"
  script:
    fontFamily: "Sacramento, cursive"
    fontSize: "clamp(2.75rem, 7.5vw, 6.5rem)"
    fontWeight: 400
    lineHeight: 1.08
rounded:
  sm: "8px"
  md: "12px"
  lg: "16px"
  full: "9999px"
spacing:
  inset: "12px"
  gutter: "16px"
  gutter-wide: "24px"
  card: "32px"
  card-wide: "40px"
  stack: "56px"
  section: "56px"
  section-wide: "80px"
components:
  button-primary:
    backgroundColor: "{colors.gold}"
    textColor: "{colors.on-gold}"
    typography: "{typography.label}"
    rounded: "{rounded.full}"
    padding: "14px 28px"
  button-primary-hover:
    backgroundColor: "{colors.gold-hover}"
    textColor: "{colors.on-gold}"
  button-ghost:
    textColor: "{colors.text}"
    typography: "{typography.label}"
    rounded: "{rounded.full}"
    padding: "14px 28px"
  button-icon:
    textColor: "{colors.text}"
    rounded: "{rounded.full}"
    size: "44px"
  field:
    backgroundColor: "{colors.ground}"
    textColor: "{colors.text}"
    rounded: "{rounded.md}"
    padding: "12px 14px"
  card-raised:
    backgroundColor: "{colors.raised}"
    textColor: "{colors.text}"
    rounded: "{rounded.lg}"
    padding: "{spacing.card-wide}"
  poster:
    backgroundColor: "{colors.raised}"
    textColor: "{colors.text}"
    typography: "{typography.title-poster}"
    rounded: "{rounded.md}"
  date-tile:
    backgroundColor: "{colors.violet}"
    textColor: "{colors.text}"
    rounded: "{rounded.md}"
    size: "88px"
  violet-field:
    backgroundColor: "{colors.violet}"
    textColor: "{colors.text}"
    rounded: "{rounded.lg}"
    padding: "80px 56px"
  nav-link:
    textColor: "{colors.muted}"
    typography: "{typography.label}"
  nav-link-hover:
    textColor: "{colors.text}"
---

# Design System: Crossed Over Citi Church

## Overview

**Creative North Star: "The Sunday Headliner"**

The page bills Sunday Service the way a tour site bills its headline date: a near-black violet ground, photographs of the church's own people as the only light source, and heavy geometric type set huge and tight across them. The brand violet does not tint text or decorate edges; it takes over whole fields (the closing call band, date tiles, the confirmation panel). Antique gold is the ticket: it fills the one action that matters, "Plan your visit", and almost nothing else.

Density is low and theatrical. Sections breathe with 56 to 80px of vertical room on each side, media sits in softly rounded cards inset from the viewport edge, and the one signature interaction is a poster rail that scrolls sideways with snap points and arrow controls. The requested logo intro, hero entrance, and section-specific scroll scores provide motion while the ministry accordion retains its established interaction.

The world rejects the category default of a pastel church brochure with a banner hero and three feature cards. It also rejects the neon excesses of its cinematic reference: no glows, no decorative gradients, no lit edges.

**Key Characteristics:**
- Dark violet-black ground with white type; every token text pairing measures at least 5.6:1.
- Brand violet as a field color only; gold as the single action color.
- Poppins bold at display sizes with negative tracking; Geist for everything read at length.
- One brand-sourced script, reserved for the Cebuano welcome line.
- Flat surfaces separated by a 1px hairline ring, never by shadow.
- Inset rounded stage for the hero and the closing band; 16px and 12px radii only, pills for controls.
- One orchestrated entrance, fully disabled under reduced motion.

## Colors

A two-color brand (violet and gold) staged on a violet-black night, with white as the reading color.

### Primary
- **Crossed Over Violet** (`violet`): the brand violet from the logo, used as a whole field: the closing "seat saved for you" band, event date tiles, and the form's confirmation panel, always carrying white text (6.9:1). It is also the scrollbar thumb. On the dark ground it measures only 2.9:1, so it is never used for text or thin strokes there.
- **Deep Violet** (`violet-deep`): the loading field behind the hero photograph, so the stage reads as violet before the image paints.
- **Lilac Text** (`violet-text`): the only sanctioned violet for text or strokes on the dark ground (6.7:1). Currently it appears only as the scrollbar thumb's hover state; any future violet-tinted link or label uses this, not the brand violet.

### Secondary
- **Antique Gold** (`gold`): the action color. Filled, it belongs to the primary pill ("Plan your visit", and the form's "Save me a seat" submit). As a stroke or small text it marks wayfinding only: the contact icons (clock, pin, phone, mail), the footer's script echo of the welcome line, and hover and focus states (focus ring, selection, caret, link underline on hover, the sermon play badge on hover). Gold on ground measures 8.6:1.
- **Champagne Gold** (`gold-hover`): the hover fill of the gold pill.
- **Ink Plum** (`on-gold`): text and icons on gold (7.9:1 on gold, 10.4:1 on champagne gold), and the selection text color.

### Neutral
- **Vesper Ground** (`ground`): the page, the header, the footer, form field wells, and the dark scrims laid over photographs (as translucent ground, 60% to 92%).
- **Raised Night** (`raised`): cards that lift off the ground (the visit form), image placeholders, and the hover fill of icon buttons.
- **Hairline Plum** (`line`): every divider and border: header rule when scrolled, event and FAQ row rules, footer rules, field strokes, icon-button strokes, and the 1px ring that stands in for elevation.
- **White** (`text`): headings and primary text (20.1:1 on ground, 18.7:1 on raised). Translucent white (10% to 60%) forms ghost-button borders and soft pill fills; 80% to 90% white is used only for body copy set directly over photographs.
- **Dusk Lavender** (`muted`): secondary text, descriptions, metadata, nav links at rest, footer body (9.3:1 on ground, 8.6:1 on raised).
- **Violet Mist** (`on-violet-muted`): secondary text on violet fields, such as the band's supporting line and the date tile's month (5.6:1 on violet).

### Named Rules
**The One Gold Door Rule.** A gold fill means "come on Sunday". Only the primary action pill wears it. Gold elsewhere is limited to small wayfinding marks and interaction states; never a gold background panel, gold heading, or second gold button with a different job.

**The Violet Field Rule.** Brand violet owns whole surfaces or nothing. It never sets text on the dark ground; violet-tinted text uses Lilac Text.

**The Photographs Are the Light Rule.** Light comes only from photography. Gradients exist solely as ground-colored scrims that protect text over images; there are no glows, colored gradients, or neon edges.

## Typography

**Display Font:** Poppins (500, 600, 700), with ui-sans-serif and system-ui fallback
**Body Font:** Geist, with ui-sans-serif and system-ui fallback
**Script Font:** Sacramento (400), with cursive fallback

**Character:** Poppins is the face on the church's own Sunday banner; set bold, huge and tightly tracked, it gives the page its headliner voice. Geist is quiet and even, so information reads calmly underneath. Sacramento comes from the same banner's script welcome and exists only to carry that line.

### Hierarchy
- **Display** (700, `clamp(2.75rem, 7vw, 6rem)`, 0.98, -0.035em): the hero headline only.
- **Display Stack** (600, `clamp(2.5rem, 5.4vw, 4.75rem)`, 1.02, -0.035em): the stacked pillar words, one per line.
- **Headline** (700, `clamp(2rem, 4.2vw, 3.5rem)`, 1.02, -0.03em): section headings. The closing violet band runs larger (`clamp(2.25rem, 5vw, 4.25rem)`, -0.035em).
- **Headline Rail** (700, `clamp(1.75rem, 3.4vw, 2.75rem)`, 1.05): the heading that sits beside a poster rail's arrows.
- **Title** (600, 1.25rem to 1.5rem, -0.02em): sermon and event titles, FAQ questions (1.125rem), form headings (1.5rem to 1.875rem, 700). Visit facts ("When", "Where" values) set at 1.875rem, 600, -0.03em.
- **Title Poster** (700, `clamp(1.5rem, 2.2vw, 2rem)`, 1, uppercase, -0.01em): ministry names on poster cards, the one place Poppins is set in capitals.
- **Lead** (400, 1.125rem, 2rem line): hero and band supporting copy, capped at 44ch to 50ch. Section descriptions run at 1.0625rem with the same 2rem line, capped at 56ch.
- **Body** (400, 1rem, 1.75rem line): event descriptions and FAQ answers, capped at 52ch to 60ch.
- **Label** (600, 0.875rem): buttons, nav links (500), field labels (500), footer column headings.
- **Caption** (400, 0.75rem): helper text, the legal line. The event date tile's month uses 600 with 0.12em tracking in capitals, as a data label.
- **Script** (400, `clamp(2.75rem, 7.5vw, 6.5rem)`, 1.08): the Cebuano welcome line in the photo band, one phrase per line; its footer echo sets at 1.875rem in gold.

Headings use balanced wrapping; paragraphs use pretty wrapping. Times, dates and phone numbers use tabular numerals.

### Named Rules
**The Headliner Rule.** Display and headline type is Poppins at 600 to 700 with tracking between -0.02em and -0.035em and line height near 1. Poppins at display size is never set loose or light.

**The One Script Rule.** Sacramento sets the Cebuano welcome line ("Kung kinsa man ka, unsa man ka, welcome ka!") and its footer echo, nothing else. It is brand-sourced from the church's banner, not an ornament.

## Layout

A single centered container of 88rem (1408px) with 16px side gutters, widening to 24px from 640px. The hero and the closing violet band are inset stages: they sit 12px from the viewport edge on phones (16px at 640px, 24px at 1024px), rounded, so the page opens and closes on a framed card rather than a full-bleed slab. The welcome photo band is the one deliberate full-bleed section.

The site is six routes sharing one header, footer and closing band: Home (hero plus teasers that link out), About, Ministries, Watch, Events and Visit. Photography ships as WebP from `public/brand` and `public/img`; the PNG app icons stay PNG because the icon and social-image pipelines require it.

Vertical rhythm: every content section takes the same 56px of top and bottom padding, 80px from 640px, so the gap between two sections on the ground is 112px on phones and 160px from 640px. Inset panels (verse of the day, closing band) sit on bottom padding only. A section heading sits 56px above its content; a poster rail sits 40px below its heading. Cards pad 32px, 40px from 640px.

The hero is about 78svh on phones (min 34rem, max 56rem) and fills the viewport under the header from 1024px (`100svh - 6rem`, min 40rem). Its copy anchors bottom left and states the service day, time and venue, so the first viewport answers when and where at every width.

Breakpoints are Tailwind's defaults (640, 768, 1024, 1280). Two-column splits (pillars beside a photo, visit facts beside the form) open at 1024px; sermon thumbnails go three-up at 768px. The poster rail shows about 1.4 posters on phones, stepping to about 5 at 1280px, and its padding tracks the container edge so the first poster aligns with the headings above it while later posters bleed off the right.

## Elevation & Depth

Flat. There are no drop shadows anywhere. Depth comes from three things: tonal steps (ground to raised), a 1px hairline ring in the line color on containers that must separate from the ground (the hero stage, the visit form), and photographs with ground-colored scrims. Photo tiles inside rails and grids go without the ring; their image edge is enough. The header gains a hairline bottom rule and an 85% ground backdrop blur once the page scrolls.

### Shadow Vocabulary
- **Hairline Ring** (`box-shadow: 0 0 0 1px var(--line)`): the only box-shadow in the system, used as a border that does not affect layout.

### Named Rules
**The Hairline Rule.** Separation is a 1px ring or rule in the line color, or a tonal step to raised. Never a drop shadow, glow, or colored outline.

## Shapes

Soft rectangles and full pills, nothing else. Large media and containers (hero stage, pillars photo, visit form, confirmation panel, closing band) use gently rounded 16px corners. Posters, sermon thumbnails, leader portraits, event date tiles, form fields and the footer logo use 12px. The header logo mark uses 8px. Pills (fully rounded) are reserved for controls: buttons, icon buttons, the skip link, and the sermon play badge. The focus outline rounds to 4px.

## Components

### Buttons
Confident pills with a small forward arrow that opens up on hover.
- **Shape:** full pill (9999px).
- **Primary:** Metallic gold fill using `--gold-metal`, Ink Plum label, 0.875rem at 600, 14px by 28px padding, trailing arrow icon at 16px. The header's compact version pads 10px by 20px without the arrow. The angled gold highlight is reserved for filled action links and buttons; icons, text, and wayfinding keep the flat Antique Gold token.
- **Hover / Focus:** the metallic highlight shifts across the button over 650ms and the arrow gap widens from 8px to 12px over 300ms. Reduced motion disables the highlight movement. Focus shows the global 2px gold outline at 3px offset.
- **Ghost:** transparent with a 1px white border at 30% (40% on violet), white label. Hover raises the border to 60% (full white on violet) and adds a 10% white wash. Used for "Watch online", "Watch on Facebook", "Get directions", "Message us on Facebook".
- **Icon:** 44px circle, 1px line border, white icon. Hover takes a raised fill and a 50% white border. Disabled drops to 35% opacity with no hover.

### Cards / Containers
- **Corner Style:** 16px for stages and panels, 12px for tiles and posters.
- **Background:** raised on ground; violet for full-field panels.
- **Shadow Strategy:** none; hairline ring where the card must separate (see Elevation & Depth).
- **Border:** the ring, or none.
- **Internal Padding:** 32px, 40px from 640px. Tiles pad 12px.

### Inputs / Fields
- **Style:** ground-colored well inside the raised form card, 1px line stroke, 12px radius, 12px by 14px padding, 0.875rem text. Placeholder in muted at 70%.
- **Hover:** stroke brightens to 35% white.
- **Focus:** stroke turns gold, plus the global gold focus outline.
- **Disabled:** the whole fieldset disables while pending; the submit pill drops to 60% opacity.
- **Labels:** 0.875rem at 500 in white above the field; optional markers and helper text in muted.

### Navigation
- **Header:** sticky, 64px tall (72px from 1024px). Logo mark and uppercase Poppins wordmark left, links centered, compact gold pill right. At rest the header is solid ground with no rule; after 8px of scroll it gains the hairline rule and an 85% ground backdrop blur, transitioning over 500ms.
- **Links:** 0.875rem at 500 in muted, white on hover.
- **Mobile:** below 1024px a 44px ghost icon button opens a full-width panel of Poppins 1.5rem links separated by hairline rules, closed by Escape, with a full-width gold pill at the bottom. Page scroll locks while open.

### Poster Card
Tall 3:4 photograph tiles for ministries, 12px radius, raised placeholder. A ground scrim (92% at the bottom fading out by the top) carries a centered uppercase Poppins name and a two-line description in 80% white. On hover the photograph scales to 1.04 over 700ms on an expo-out curve.

### Date Tile
A square 12px-radius violet tile (72px on phones, 88px from 640px) holding the month in Violet Mist capitals above the day in Poppins 700 white. It leads each event row in a list separated by hairline rules.

### Page Header
Inner pages (/about, /ministries, /watch, /events, /visit) open with a shorter version of the home hero: the same inset 16px card with a hairline ring, one photograph under a ground scrim, and the same unveil and rise entrance. It is 46svh tall (min 24rem, max 34rem). The page title is the page's only h1, in Poppins 700 up to 5rem, with an optional lead and an optional action row (the gold pill only when the page's main action is external, such as Watch on Facebook). The home page keeps the full hero.

### Leader Cards
"Meet our leaders" follows the standard section heading, with leaders below in a two-column grid from 640px (stacked on phones). Each photo is 4:3 at 12px radius, close to the source photos' own proportions so they are shown near their native resolution rather than enlarged, and cropped to keep the person in frame. The name is set in Poppins 700 below, with an optional muted role line. No role or bio is shown unless the church has confirmed it.

### Poster Rail (signature)
A horizontal list with mandatory scroll-snap to each poster's start, 16px gaps, hidden scrollbar and contained horizontal overscroll. Its heading sits left with two icon buttons right (previous, next). Each press scrolls 80% of the rail's width, smoothly unless reduced motion is requested. The buttons disable at each end, measured within 4px of the edge on scroll and resize. The rail's inline padding and scroll padding match the container edge at every width.

### Motion

The homepage opens with a roughly six-second cinematic intro in `CinematicIntro.tsx`. The server renders the dark curtains immediately, so the hero cannot flash first. The original solid metallic gold centerline tracing writes the four COCC fish letters strictly one after another using measured SVG path lengths and native dash attributes driven continuously by GSAP, followed by the church name and tagline before the curtains open. It plays on every homepage visit; other routes, direct hash links, and reduced motion bypass it. Skip and Escape dismiss immediately. The site shell is inert while the dialog owns focus, with a Tab loop and focus restoration. A seven-second JavaScript fallback releases the page after stalled animation setup; an eight-second CSS fallback and noscript stylesheet keep content reachable without hydration or JavaScript. Hero entrances pause while the interactive intro runs.

The pillars have one shared scroll sequence in `PillarsMotion.tsx`: six stationary words receive white ink from left to right as a thin gold frame draws around the worship photograph. This is an original adaptation of the scroll-scrubbed word emphasis identified in Jitter's public `ScrollAppearText` module, not a copied animation asset. At desktop widths of at least 1024px and heights of at least 850px, and only when the measured scene fits with 140px of viewport room reserved, the composition pins 108px below the viewport top for 1.1 viewport heights, with 0.4s scroll smoothing. Smaller screens use normal scrolling across the word list. The sequence reverses with scrolling; it never autoplays or loops. Reduced motion and missing JavaScript keep the complete text readable in white. GSAP matchMedia reverts pinning and styling on navigation or preference changes.

The user requested motion throughout the content. `ContentMotion.tsx` supplies separate scroll scores: sermon panels settle into alignment; the uncropped book cover turns toward the reader; the events divider draws horizontally and real date tiles unfold; scripture lines unfold upward through masks at full white contrast, keeping the original centered typography; the violet invitation field expands behind stationary text; leaders' portraits turn inward; the Visit guide draws down the existing ordered steps. Mobile reduces rotation, and reduced motion disables these nonessential scores. All content remains visible before JavaScript and no animation loops or hides controls. GSAP matchMedia scopes and reverts every score on route or preference changes.

Supporting states retain 300ms color/gap transitions and 700ms image zoom. Text motion should be authored as a specific composition rather than repeated fade-and-rise effects across sections. The ministry accordion stays intact.

## Do's and Don'ts

### Do:
- **Do** give the primary action ("Plan your visit") the gold pill with Ink Plum text and a trailing arrow, and keep it the only gold-filled control on screen.
- **Do** set violet as a whole field carrying white text (6.9:1) and Violet Mist secondary text (5.6:1).
- **Do** use Lilac Text when text or a stroke needs a violet tint on the dark ground.
- **Do** set headlines in Poppins 600 to 700 with -0.02em to -0.035em tracking and line height near 1.
- **Do** separate surfaces with the 1px line ring, a hairline rule, or a step from ground to raised.
- **Do** keep radii to 16px (stages, panels), 12px (posters, tiles, fields) and full pills for controls.
- **Do** lay ground-colored scrims over photographs whenever text sits on them.
- **Do** use tabular numerals for times, dates and phone numbers.
- **Do** gate any entrance animation behind prefers-reduced-motion: no-preference.

### Don't:
- **Don't** set the brand violet as text or thin strokes on the dark ground (2.9:1).
- **Don't** use gold as a panel fill, heading color, or second button with a different job.
- **Don't** add drop shadows, glows, neon edges, or colored decorative gradients. The user-requested metallic gold action fills and logo tracing are the gradient exceptions.
- **Don't** use Sacramento for anything but the Cebuano welcome line and its footer echo.
- **Don't** add load motion beyond the hero entrance and the requested homepage logo intro.
- **Don't** use pills for containers or square corners for controls.
- **Don't** put em dashes in copy.
