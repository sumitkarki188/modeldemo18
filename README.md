# Luxe Portfolios

Create a modern, premium fashion model portfolio website using **React + Vite**.

The website is a **client demo for a fashion/model agency**, so the design should feel high-end, editorial, elegant, minimal, and visually impressive. Focus heavily on photography, typography, whitespace, smooth animations, and a luxury fashion aesthetic.

### Technology

* React + Vite
* JavaScript or TypeScript
* React Router for navigation
* Tailwind CSS or clean modern CSS
* Framer Motion for subtle animations
* Use reusable React components
* Fully responsive for desktop, tablet, and mobile
* Organize the project into clean components and pages

### Website Structure

Create the following navigation bar:

**Logo:** `MODELS`

Navigation links:

* Home
* Models
* Women
* Men
* About
* Contact

Right side:

* Search icon
* Menu/hamburger icon on mobile

The navbar should be transparent/overlayed on the hero section initially and transition to a solid/blurred background when scrolling.

---

## HOME PAGE — LANDING PAGE

The Home page should immediately showcase the fashion/model brand.

### Hero Section

Create a full-screen cinematic hero section.

Use a large professional fashion-model image as the background.

Overlay:

**MODELS**

`Where individuality meets fashion.`

Add a CTA:

**EXPLORE MODELS →**

Include a subtle scroll-down indicator.

The hero should have:

* Full viewport height
* Large editorial typography
* Dark gradient overlay for readability
* Smooth entrance animation
* Slow image zoom/parallax effect
* Minimal UI
* Premium fashion-magazine aesthetic

---

## Featured Models Section

After the hero, create a section titled:

**FEATURED MODELS**

Subtitle:

`Discover our latest faces.`

Display 4–6 model cards in an editorial grid.

Each card should contain:

* Large portrait image
* Model name
* Category
* Height
* Location
* Hover animation
* "VIEW PROFILE →"

Example models:

* Sofia Anderson — Female — Paris
* Emma Laurent — Female — London
* Aria Williams — Female — New York
* Olivia Martin — Female — Milan
* Daniel Carter — Male — London
* Noah Bennett — Male — Paris

Use realistic placeholder fashion photography from a suitable image source.

The images should look like professional fashion/editorial photography rather than generic stock images.

---

## Model Categories

Create a visually attractive section with three large cards:

### WOMEN

`Explore our female models`

### MEN

`Explore our male models`

### NEW FACES

`Discover emerging talent`

Each card should use a large image with a dark overlay and reveal an arrow/CTA on hover.

---

## Agency Introduction

Create an editorial-style section:

**MORE THAN A MODEL**

Text:

`We represent distinctive talent with individuality, character and a unique point of view. From established faces to emerging talent, our models work across fashion, beauty, editorial and commercial projects worldwide.`

Add:

**DISCOVER OUR AGENCY →**

Use an asymmetrical image/text layout.

---

## Latest Editorial Section

Create a section titled:

**LATEST EDITORIAL**

Display 3 large editorial cards.

Each card should contain:

* Fashion photograph
* Editorial title
* Date
* Category
* Hover animation

Example:

`Summer 2026 — New Perspectives`

`Paris Fashion Week — Behind the Scenes`

`New Faces — Editorial Collection`

---

## Statistics Section

Create a minimal dark section containing:

`120+ MODELS`

`18 COUNTRIES`

`35+ GLOBAL CLIENTS`

`12 YEARS OF EXPERIENCE`

Animate the numbers when they enter the viewport.

---

## CTA Section

Create a large full-width image section near the bottom.

Text:

**LOOKING FOR THE NEXT FACE?**

Subtitle:

`Let's create something unforgettable.`

Button:

**GET IN TOUCH →**

---

## Footer

Create a premium minimalist footer.

Include:

**MODELS**

`Independent talent. Global vision.`

Navigation:

* Home
* Models
* About
* Contact

Social links:

* Instagram
* Facebook
* LinkedIn

Contact:
`hello@models.com`

Add:

`© 2026 MODELS. All Rights Reserved.`

---

# MODELS PAGE

Create a dedicated Models page.

Top section:

**OUR MODELS**

`Meet the people behind the image.`

Add filter buttons:

* All
* Women
* Men
* New Faces

Display models in a responsive masonry/editorial grid.

Each model card should open a detailed model profile page.

---

# MODEL PROFILE PAGE

When clicking a model, navigate to:

`/models/:id`

Create a premium model profile containing:

* Large hero image
* Model name
* Category
* Location
* Height
* Measurements
* Shoe size
* Hair
* Eyes

Then show a large image gallery with multiple editorial photographs.

Add:

**BOOK THIS MODEL →**

CTA button.

Also show:

**SIMILAR MODELS**

with 3–4 related model cards.

---

# ABOUT PAGE

Create an elegant agency introduction page.

Include:

* Agency story
* Mission
* Global presence
* Team
* Large editorial imagery

Use large typography and editorial layouts rather than a standard corporate design.

---

# CONTACT PAGE

Create a premium contact page.

Heading:

**LET'S WORK TOGETHER**

Include form fields:

* Name
* Email
* Company
* Project Type
* Message

Button:

**SEND INQUIRY →**

Also show agency contact information and social links.

---

# DESIGN DIRECTION

The overall visual identity should resemble a **luxury fashion magazine / professional modeling agency website**.

Use:

* Black / white / neutral color palette
* Large serif typography for headings
* Clean sans-serif typography for UI
* Generous whitespace
* Full-width photography
* Editorial asymmetric layouts
* Thin borders
* Minimal icons
* Smooth hover effects
* Subtle page transitions
* Scroll animations
* Image reveal animations
* Elegant cursor interactions where appropriate

Avoid:

* Generic SaaS dashboard styling
* Excessive gradients
* Bright colors
* Rounded cards everywhere
* Overly complicated animations
* Cartoon-style UI
* Generic Bootstrap-looking components

---

# RESPONSIVENESS

Desktop:

* Large editorial layouts
* Multi-column model grids
* Full-screen hero

Tablet:

* 2-column layouts

Mobile:

* Hamburger navigation
* Single-column model grid
* Optimized typography
* Full-screen hero
* Touch-friendly buttons
* Proper image cropping

---

# IMPORTANT IMPLEMENTATION REQUIREMENTS

Build this as a **real working React + Vite website**, not a static mockup.

Create reusable components such as:

`Navbar`
`Hero`
`ModelCard`
`ModelGrid`
`CategoryCard`
`EditorialCard`
`Stats`
`CTA`
`Footer`

Create routes:

`/`
`/models`
`/models/:id`
`/about`
`/contact`

Use realistic placeholder model images and ensure all navigation buttons and model cards work.

Add loading states where appropriate.

The final result should look like a **real premium fashion modeling agency website that can be presented directly to a client as a polished demo**.

This project was built with [Lovable](https://lovable.dev).

**Live app**: https://modeldemo18.lovable.app

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/27bcb8b6-35be-478d-98fc-cbd3e139a32e).

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
