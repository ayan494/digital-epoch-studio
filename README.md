# Digital Epoch Studio

Build a complete, production-ready, premium 3D technology/Web3 company website using:

- React
- TypeScript
- Vite
- Tailwind CSS v4
- Motion for React
- Three.js
- @react-three/fiber
- @react-three/drei
- lucide-react
- clsx
- tailwind-merge

IMPORTANT:
Use the attached reference image as the primary visual inspiration for the overall layout, spacing, typography, rounded cards, floating navigation and premium aesthetic.

Do NOT make this only a static landing-page mockup.
Build a COMPLETE responsive website with multiple sections, navigation, interactions, 3D elements, animations and working UI.

==================================================
1. DESIGN DIRECTION
==================================================

Create a premium futuristic technology / Web3 / AI company website.

Visual style:

- Minimal
- Premium
- Clean
- Futuristic
- Soft white background
- Dark navy typography
- Glassmorphism
- Large rounded containers
- Soft shadows
- Subtle gradients
- 3D objects
- Smooth Motion animations
- High-end SaaS/Web3 aesthetic

Primary colors:

Background: #f9fafb
Dark navy: #0a1b33
Button navy: #0a152d
Secondary text: #64748b
Borders: #e2e8f0
White: #ffffff

Use Inter for normal text.
Use Outfit for headings/display typography.

Import:

@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Outfit:wght@400;500;600&display=swap');

Configure Tailwind CSS v4 so:

--font-sans: Inter
--font-display: Outfit

==================================================
2. GLOBAL WEBSITE
==================================================

Body:

- background #f9fafb
- Inter font
- text #0a1b33
- smooth scrolling
- overflow-x-hidden

Create a reusable:

Container
Button
SectionHeading
GlassCard
Badge
Navbar
Footer

component system.

Keep the code clean and modular.

Suggested structure:

src/
  components/
    Navbar.tsx
    Hero.tsx
    LogoMarquee.tsx
    Services.tsx
    About.tsx
    Products.tsx
    Process.tsx
    Stats.tsx
    Showcase3D.tsx
    Testimonials.tsx
    CTA.tsx
    Footer.tsx
    ui/
  components/3d/
    HeroScene.tsx
    FloatingShape.tsx
    ParticleField.tsx
    Orb.tsx
  App.tsx
  main.tsx
  index.css

==================================================
3. FLOATING NAVBAR
==================================================

Create a premium floating navbar.

Position:

fixed
top: 24px
left: 50%
transform: translateX(-50%)

High z-index.

Style:

- white/90 background
- backdrop blur
- rounded-full
- subtle border
- soft shadow
- compact height

Left:

Circular logo:

✦

Center links:

Products
Solutions
Technology
About
Docs

Right:

Get in touch

Add ChevronRight from lucide-react.

Desktop navigation should be visible.

On mobile:

- show logo
- show menu button
- open animated mobile navigation panel using Motion.

Navbar should change slightly when scrolling.

==================================================
4. HERO SECTION
==================================================

Create the hero using the reference image as inspiration.

Main container:

relative
w-full
max-w-[1400px]
mx-auto
rounded-[48px]
overflow-hidden
bg-white
border
border-slate-200/50
shadow-[0_40px_100px_-20px_rgba(0,0,0,0.03)]

Height approximately:

600px desktop

Responsive height on mobile.

Hero should have a premium visual background.

Use a real HTML video background:

https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260505_101331_74f9b798-3f00-4e86-8a01-377aa16ffeaa.mp4

Video attributes:

autoPlay
loop
muted
playsInline

Classes:

w-full
h-full
object-cover
scale-105

Do NOT add a heavy dark overlay.

Instead create subtle white gradient masking so text remains readable while preserving the visual.

==================================================
5. HERO 3D ELEMENT
==================================================

Add an interactive Three.js / React Three Fiber scene inside the hero.

Create:

- floating glass sphere
- small geometric objects
- glowing orb
- rotating abstract 3D structure
- subtle particles
- floating cards

The 3D scene should feel like:

AI + Web3 + digital infrastructure.

Use:

@react-three/fiber
@react-three/drei

Add:

- Float
- Environment
- MeshTransmissionMaterial where appropriate
- OrbitControls only if appropriate

Do NOT make the 3D scene distracting.

It should be elegant and subtle.

Objects should slowly rotate and float.

Mouse movement should slightly influence the 3D scene.

Use Motion for entrance animation.

==================================================
6. HERO CONTENT
==================================================

Headline:

"Foundation of the
new digital epoch"

Use:

font-display
text-[42px]
md:text-[56px]
font-medium
tracking-tight
text-[#0a1b33]

Animate headline:

opacity 0 → 1
y: 30 → 0

Subheadline:

"Designing products, powering ecosystems and laying the foundation of a decentralized web for enterprises, builders and communities alike."

Style:

font-sans
text-[14px]
md:text-[15px]
text-slate-500
max-width approximately 560px

Animate after headline.

Primary button:

Contact Us

Style:

bg-[#0a152d]
text-white
rounded-full
px-6
py-3

Add Motion hover:

scale: 1.04

Add tap:

scale: 0.97

Secondary button:

Explore technology

Use transparent/glass styling.

==================================================
7. FLOATING HERO ACTION BAR
==================================================

At the bottom center of the hero create:

absolute bottom-10 left-1/2 -translate-x-1/2

Use:

motion.nav

Style:

flex
items-center
bg-white/90
backdrop-blur-2xl
px-1.5
py-1.5
rounded-full
shadow-[0_12px_40px_rgba(0,0,0,0.08)]
border
border-slate-200/40

Items:

✦
Products
Docs
Technology
Get in touch >

Get in touch should use ChevronRight.

Animate the entire navbar from:

opacity: 0
y: 20

to:

opacity: 1
y: 0

==================================================
8. LOGO MARQUEE
==================================================

Immediately below hero add a seamless logo marquee.

No title above it.

Use pure CSS animation.

Animation:

transform: translateX(0)
to:
transform: translateX(-50%)

Infinite.

Pause animation on hover.

Use masking gradient on left and right edges.

Logos:

Procure
Shopify
Blender
Figma
Spotify
Lottielab
Google Cloud
Bing

Use SVG assets from svgl.app.

Duplicate the array twice for seamless scrolling.

Each card:

group
relative
h-24
w-40
shrink-0
flex
items-center
justify-center
rounded-full
bg-white
border
border-slate-200/60
shadow-sm
hover:border-slate-300
transition-all
overflow-hidden

Add gradient blob behind each logo.

On hover:

scale 1 → slightly larger
opacity 0 → 100

Logo hover:

brightness-0
invert

==================================================
9. SERVICES SECTION
==================================================

Create a section:

"Built for the next generation of the web"

Create 4 premium service cards:

01 — AI Products
02 — Web3 Infrastructure
03 — Digital Experiences
04 — Developer Ecosystems

Each card should have:

- icon
- title
- description
- arrow
- subtle gradient
- hover animation

Cards should use Motion.

On hover:

translateY(-8px)
scale slightly

Add subtle 3D tilt based on mouse position.

==================================================
10. 3D SHOWCASE SECTION
==================================================

Create a large premium 3D section.

Heading:

"Digital infrastructure, brought to life."

Place a large interactive 3D scene.

Scene concept:

A futuristic floating ecosystem made from:

- glass spheres
- connected nodes
- glowing lines
- floating cubes
- abstract rings
- particles

Create connections between nodes.

Objects should move slowly.

Add parallax based on mouse movement.

The section should feel like a premium Web3 infrastructure visualization.

==================================================
11. PRODUCTS SECTION
==================================================

Create a products section with 3 large cards.

Products:

Nexus
Orbit
Forge

Each card contains:

- product name
- short description
- Explore product button
- 3D mini visualization
- status badge

Cards should have different subtle gradient environments.

Hover should animate the 3D visualization.

==================================================
12. STATS SECTION
==================================================

Create a clean statistics section.

Example:

10M+
Transactions powered

120+
Global builders

40+
Ecosystem partners

99.9%
Infrastructure uptime

Animate numbers when they enter the viewport.

Use Motion's viewport animations.

==================================================
13. PROCESS SECTION
==================================================

Heading:

"From idea to ecosystem."

Create 4 steps:

01
Discover

02
Design

03
Build

04
Scale

Create a horizontal timeline on desktop.

Vertical timeline on mobile.

Animate each step as the user scrolls.

==================================================
14. ABOUT SECTION
==================================================

Create a premium split-layout section.

Left:

Large heading:

"We build the foundation behind ambitious digital products."

Right:

Description explaining that the company combines design, engineering, AI and decentralized technologies.

Add a floating 3D glass object.

==================================================
15. TESTIMONIALS
==================================================

Create 3 testimonial cards.

Use fictional placeholder names.

Each card:

quote
name
role
company

Do not use real people's photos.

Use abstract gradient avatars instead.

Animate cards when scrolling.

==================================================
16. FINAL CTA
==================================================

Create a large rounded CTA container.

Heading:

"Ready to build what comes next?"

Description:

"Let's turn your next digital idea into a product built for scale."

Buttons:

Start a project
Talk to us

Add a subtle animated 3D orb behind the CTA.

==================================================
17. FOOTER
==================================================

Create premium footer.

Logo:

✦

Columns:

Company
About
Careers
Contact

Products
Nexus
Orbit
Forge

Resources
Docs
Blog
Changelog

Social
LinkedIn
GitHub
X

Bottom:

© 2026 Company Name. All rights reserved.

==================================================
18. MOTION & ANIMATIONS
==================================================

Use Motion for React.

Every major section should have viewport-based entrance animations.

Animations should be:

smooth
subtle
premium

Use:

opacity
translateY
scale
blur
stagger

Avoid excessive animation.

Add page-load animation.

Add smooth hover interactions.

Add button press animation.

Add card hover animation.

Add mouse-following subtle parallax.

==================================================
19. 3D PERFORMANCE
==================================================

IMPORTANT:

The website must remain high-performance.

Use:

Suspense
lazy loading
dpr limits
low-poly geometry where possible

Avoid hundreds of expensive meshes.

Respect:

prefers-reduced-motion

If reduced motion is enabled:

- disable major 3D movement
- disable intense parallax
- keep simple fades

On mobile:

reduce 3D complexity significantly.

==================================================
20. RESPONSIVE DESIGN
==================================================

Desktop:

1440px+

Tablet:

768px–1439px

Mobile:

320px–767px

The website must work perfectly on:

Android
iPhone
Tablet
Laptop
Desktop

On mobile:

- hero text becomes smaller
- hero height adjusts
- navbar becomes compact
- 3D scene becomes lighter
- cards become one column
- marquee remains horizontally scrolling
- CTA buttons become full width where appropriate

No horizontal page overflow.

==================================================
21. ACCESSIBILITY
==================================================

Use semantic HTML.

All images require alt text.

Buttons must be keyboard accessible.

Navigation must be keyboard accessible.

Maintain readable contrast.

Respect prefers-reduced-motion.

==================================================
22. PERFORMANCE
==================================================

Optimize:

- lazy load 3D components
- lazy load images
- avoid unnecessary React renders
- use CSS animations for marquee
- use transform/opacity for animations
- avoid expensive layout animations
- compress assets where possible

Do not use huge unnecessary dependencies.

==================================================
23. FUNCTIONAL INTERACTIONS
==================================================

The website must actually work.

Navbar links should scroll to their sections.

Contact Us should scroll to the CTA/contact area.

Get in touch should scroll to contact.

Mobile menu should open/close.

Buttons should have hover and tap feedback.

Cards should have hover interactions.

Marquee should pause on hover.

3D scene should react subtly to pointer movement.

==================================================
24. CODE QUALITY
==================================================

Use TypeScript properly.

Do not use:

any

unless absolutely unavoidable.

Create reusable components.

Keep components reasonably small.

Do not put the entire website into App.tsx.

Use clean naming.

Use semantic HTML.

Use Tailwind CSS instead of unnecessary custom CSS.

Use CSS only where necessary for:

- marquee keyframes
- masks
- special 3D effects

==================================================
25. FINAL RESULT
==================================================

The final result should look like a premium website from a high-end AI/Web3 technology company.

It should NOT look like:

- a generic template
- a basic Bootstrap website
- a simple portfolio
- a flat landing page

It should feel:

premium
futuristic
interactive
3D
minimal
professional
fast

Most importantly:

The attached reference image defines the visual direction of the hero and floating navigation.

Expand that visual language into a COMPLETE multi-section website with real responsive layouts, functional navigation, Motion animations and interactive Three.js 3D elements.

After implementation:

1. Install all required dependencies.
2. Ensure the project runs with npm run dev.
3. Fix all TypeScript errors.
4. Fix all Tailwind errors.
5. Fix all console errors.
6. Ensure the page is responsive.
7. Ensure 3D components do not crash if WebGL is unavailable.
8. Ensure the final website looks polished on desktop and mobile.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/f1a491c9-d74d-467d-94e2-30f2b7eed751).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
