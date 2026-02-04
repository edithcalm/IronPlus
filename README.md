# IronPlus Gym

A single-page website for **IronPlus Gym** — a fitness brand based in Westlands, Nairobi, Kenya. The site showcases facilities, training programs, membership plans, and contact information with a bold, modern design.

---

## View the website live

To see the site in action without running it locally, use this link:

**(https://iron-plus.netlify.app/)**

---

## About the project

IronPlus is a responsive, mobile-first marketing site for a gym. It presents:

- **Hero** — Main headline (“Forge Your Strength”) and call-to-action
- **About** — Brand story, stats (members, trainers, years, programs), and an image
- **Facilities** — Equipment zones (Strength, Cardio, Boxing, Recovery, Functional Training, Locker Rooms) with images from the `assets/` folder
- **Programs** — Training options (Strength, Fat Loss, Athlete Performance, Beginner, Personal Training, Group Classes) with “Learn More” modals
- **Merchandise** — Official gear (tees, vest, shorts, joggers) with prices in KES
- **Membership** — Pricing tiers (Basic, Pro, Elite) and special offers
- **Community** — Testimonials and values (Support, Dedication, Excellence, Family)
- **Contact** — Form plus location, phone, email, hours, and social links
- **Footer** — Quick links, programs, and contact summary

The design uses a dark theme with aqua accent color, smooth scrolling, and basic animations. Navigation includes a desktop menu and a mobile hamburger menu.

---

## Tech stack

- **HTML5** — Semantic structure, meta tags, and accessibility attributes
- **CSS3** — Custom properties, Flexbox/Grid, responsive breakpoints, animations
- **JavaScript** — Mobile menu toggle, scroll effects, program modals, contact form handling, toast notifications
- **Lucide Icons** (CDN) — UI icons
- **Google Fonts** — Inter and Oswald

---

## Project structure

```
IronPlus/
├── index.html      # Main HTML page
├── styles.css      # Global styles and layout
├── scripts.js      # Interactivity (menu, modals, form, toasts)
├── assets/         # Images (gym, merch, etc.)
└── README.md       # This file
```

---

## Running locally

1. Clone or download the repo.
2. Open `index.html` in a browser, or serve the folder with a local server (e.g. Live Server in VS Code, or `npx serve .`).
3. Ensure the `assets/` folder stays next to `index.html` so images load correctly.

---

## License

© IronPlus Gym. All rights reserved.
