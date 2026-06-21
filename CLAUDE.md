# Opsly — Website Rebuild

## What this project is
Rebuilding an existing personal portfolio site (currently "Ayo Kehinde — CRM & Revenue Operations") into the Opsly company site. Same codebase, same hosting (Vercel), new positioning, new copy, new sections. This is a content and structure update, not a from-scratch build — preserve working components (testimonials, case study cards, calendar booking links, tool stack icons) and rework the copy and section order around them.

## Brand
- Company name: Opsly
- Founder: Ayo Kehinde (personal credibility stays visible — face, certifications, story — since this is a fractional operator brand, not a faceless agency)
- Domain: already purchased, to be connected once rebuild is live

## Logo
Concept: "the flywheel O" — the O in Opsly is rendered as a circle with a gap (dashed arc, not a solid ring) plus a small triangular momentum arrow positioned at the gap, suggesting the O is mid-spin rather than a static letter. This ties directly to the Force and Friction flywheel diagram elsewhere on the site — the logo and that diagram should visually rhyme.

Construction:
- Circle: stroke only, no fill, stroke-dasharray creates the gap (roughly 85% arc, 15% gap)
- Momentum arrow: small filled triangle positioned at the top-right of the gap, pointing in the direction of spin
- Wordmark "psly" follows immediately after the O, set in a bold sans (weight 700)
- Optional mono pairing for tighter/smaller contexts: wordmark in a monospace font instead of sans

Colors:
- Dark backgrounds: circle stroke in off-white (#EDEEF0), arrow in signal amber (#FF6B35), wordmark in off-white (#EDEEF0)
- Light backgrounds: circle stroke in charcoal (#14161A), arrow shifts to a darker amber/coral (#D85A30) for contrast, wordmark in charcoal

Lockups needed:
1. Primary — full wordmark + icon, for hero/nav, large size
2. Medium — for footer, email signature
3. Small — tighter spacing, can pair with mono wordmark
4. Standalone icon mark — just the flywheel-O circle + arrow, no wordmark, used for favicon, app icon, social avatar (must read clearly at 32x32px and smaller)

Implementation note: build as inline SVG component, not a raster image, so it scales cleanly and the dash/arrow can be reused as a motif elsewhere on the site (e.g. loading states, section dividers) if desired later.

Logo files: `images/opsly-logo-full.svg` (full lockup), `images/opsly-icon-mark.svg` (standalone icon, for favicon)

## Brand colors
- Background (dark mode primary): #14161A — charcoal, not pure black
- Text primary: #EDEEF0 — off-white
- Signal accent: #FF6B35 — amber/orange, used ONLY for: the logo arrow, key numbers (e.g. "£79k", "the number"), primary CTA buttons, and the force side of the force/friction diagram. Do not use decoratively or repeat it more than necessary — its power is in scarcity.
- Muted/secondary: #6B7280 — cool gray, for secondary text, borders, captions
- Light mode equivalent for signal accent: #D85A30 (darker amber/coral, for contrast on light backgrounds if a light mode variant is ever built)

This is a dark-mode-first brand. If a light mode is built later, invert background/text but keep the same accent logic (amber for signal, gray for muted).

## Positioning (do not deviate from this without checking with Ayo)
**Headline:** You're already generating revenue. The systems underneath haven't caught up.
**Subhead:** I find exactly where that gap is costing you, then close it — so you scale without adding headcount.
**Core pitch (used in outreach, not necessarily verbatim on site):** I put a number on what your revenue system is quietly costing you.

## Tone
Direct, confident, no fluff, no jargon, no buzzwords like "infrastructure," "blind spots," "leverage" unless earned by context. Specific numbers over vague claims. Plain verbs. Sentence case everywhere, never Title Case or ALL CAPS in headings.

## Critical constraint — do not copy The Conversion Architects (TCA)
Ayo modeled some structural ideas on TCA's site (theconversionarchitects.com) but explicitly does NOT want:
- Their section names ("CRM Spine," "Lead Enrichment & Routing Engine," etc.)
- Their exact phrasing or sentence structures
- A "pattern recognition" section in their style ("The same three problems, every time")
Instead, Ayo's site uses **Force and Friction** as its own equivalent section — an original framework Ayo already uses in his RevOps thinking. This section replaces what would otherwise be a TCA-style pattern section. Do not reintroduce a TCA-style pattern block elsewhere on the page.

## Module names (final, do not use TCA's names)
1. **The Trust Layer** (CRM / data governance)
2. **The Signal Engine** (lead enrichment, outbound, AI SDR, speed-to-lead)
3. **The Continuity Layer** (sales-to-CS handoff, lifecycle, expansion)
4. **The Visibility Layer** (attribution, dashboards, reporting)

## Section order (final)
1. Hero
2. Sound familiar? (pain points list)
3. Force and Friction (original framework section)
4. Before / After table
5. Selected work (case studies — AI SDR case study leads, not CRM)
6. Modules ("What gets installed")
7. Who this is for
8. Testimonials
9. How it works (3 steps: Discovery call → The audit → Review & close)
10. Tools (accordion)
11. About (Ayo's story + certifications)
12. FAQ
13. Final CTA

## Known content gaps / pending assets
- Opsly logo — SVG files exist in `images/`, use those (inline in HTML for nav/footer, favicon for icon mark)
- Dave Pugh's video testimonial — not yet recorded, written quote stays as placeholder until video is ready
- Kelly Sinclair's testimonial — reframed by Ayo, pending her quick sign-off (marked with `<!-- PENDING: Kelly sign-off on reframed quote -->` in code)
- Force and Friction diagram — needs custom SVG/component build per PHASES.md Phase 3 spec

## Testimonials (current — do not invent or alter wording beyond what's provided)
- **David Pugh, CEO, Scrub the Deck** — keep exactly as currently on the live site. Placeholder for future video testimonial.
- **Kelly Sinclair, CEO, Vero Tech Sales** — use reframed quote from PHASES.md Phase 8. Mark with `<!-- PENDING: Kelly sign-off on reframed quote -->`.
- **Isaac Adepoju, CEO, AIoTouch Softwares** — keep exactly as currently on the live site.

## Things to never do
- Never fabricate or alter a client testimonial's substance without it being explicitly provided by Ayo
- Never reintroduce TCA's exact section names or copy structure
- Never block the rebuild on the missing logo or Dave's video — ship with placeholders
- Never use Title Case or ALL CAPS in headings
- Never use the signal accent (#FF6B35) decoratively — only for logo arrow, key numbers, primary CTA buttons, force/friction diagram force side
