# Specification

## Summary
**Goal:** Build a premium, reading-focused, single-page responsive Islamic documentary website for “Hazrat Sakhi Habib Sultan Nangiana” using an emerald & gold digital-archive aesthetic, with gallery/lightbox and a visitor message form backed by Motoko storage.

**Planned changes:**
- Create a fully responsive single-page layout with emerald/royal-gold theme, premium typography, subtle geometric pattern background, glassmorphism cards, and accessibility basics.
- Add sticky navbar with section anchors (Hero, Documentary, Timeline, Reflection, Shrine & Legacy, Storytelling, Gallery, Contact) plus an on-page scroll progress indicator and active-section indication.
- Implement a cinematic hero with blurred shrine-style background, exact title/subtitle text, and “Read Documentary” CTA that smooth-scrolls to Documentary.
- Add Documentary long-form reading section with structured paragraphs, drop-cap first paragraph, and readability-focused spacing/max-width.
- Add Timeline section with the four requested themes in a minimal, responsive timeline layout.
- Add Spiritual Reflection highlighted module referencing Mitha Masoom and teachings of sabr and tawakkul.
- Add Shrine & Legacy narrative referencing Dharema, Sargodha, with at least two symbolic animated counters that trigger on scroll.
- Add “Why We Are Nangiana” premium storytelling card with subtle animation and the requested folklore/name-origin concepts.
- Add at least two quote highlight cards styled with gold accents/geometric motifs.
- Build Gallery using the 3 uploaded images with respectful display, captions/alt text, and a keyboard-accessible lightbox (open/next/prev/close, focus handling).
- Add Contact section with Name + Message form, client validation, success/error states, and submit to backend.
- Implement single-actor Motoko backend storage for visitor messages (name, message, timestamp) with a submit method (and optional list method for future use).
- Add modern animations (fade-in on scroll, subtle parallax, gold dividers) respecting prefers-reduced-motion.
- Add SEO essentials (title, meta description, Open Graph tags including og:image) and performance-friendly image loading.
- Add and integrate an Islamic-style favicon.
- (Optional) Add “Spiritual Mode” toggle for ambient audio: no autoplay, muted by default, explicit user interaction required, session-persisted state.

**User-visible outcome:** Visitors can smoothly navigate a single-page documentary experience with premium Islamic archive styling, read structured content with timeline/reflection/storytelling highlights, view a respectful image gallery in a lightbox, and submit a message via a contact form that is saved by the backend.
