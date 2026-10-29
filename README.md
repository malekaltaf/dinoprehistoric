# 🦕 DinoPrehistoric

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![Bootstrap 5.3](https://img.shields.io/badge/Bootstrap-5.3-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white)](https://getbootstrap.com/)
[![JavaScript ES6+](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Web Audio API](https://img.shields.io/badge/Web_Audio_API-Synthesizer-0f4c5c?style=for-the-badge)](https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API)
[![License: MIT](https://img.shields.io/badge/License-MIT-e36414?style=for-the-badge)](LICENSE)

> A modern, responsive, museum-grade web portal dedicated to paleontology, evolutionary biology, Mesozoic geology, and prehistoric Earth history.

---

## 📖 Table of Contents

- [Overview](#-overview)
- [Key Features](#-key-features)
- [Page Directory](#-page-directory)
- [Interactive Systems & Technologies](#-interactive-systems--technologies)
  - [Web Audio Bio-Acoustic Synthesizer](#1-web-audio-bio-acoustic-synthesizer)
  - [Universal Modal Lightbox & Video Player](#2-universal-modal-lightbox--video-player)
  - [Dynamic Filter & Instant Live Search](#3-dynamic-filter--instant-live-search)
- [Design System & Typography](#-design-system--typography)
- [Project Structure](#-project-structure)
- [Getting Started & Local Setup](#-getting-started--local-setup)
- [Browser Compatibility](#-browser-compatibility)
- [Contributing & License](#-contributing--license)

---

## 🌍 Overview

**DinoPrehistoric** bridges academic paleontology and interactive modern web design. Built with clean semantic HTML5, Bootstrap 5.3, custom glassmorphism styles, and vanilla modern JavaScript (ES6+), it offers students, researchers, and dinosaur enthusiasts an immersive deep-time journey spanning the Permian-Triassic extinction, the Triassic, Jurassic, and Cretaceous epochs, down to the modern avian dinosaur lineage.

---

## ✨ Key Features

- **🦕 Deep-Time Evolutionary Timelines:** Complete historical narratives covering continental drift (Pangaea breakup), mass extinctions, and anatomical transitions.
- **🦴 Cladistic & Pelvic Classification:** Comparative anatomical explorations of *Saurischia* (lizard-hipped) vs. *Ornithischia* (bird-hipped) clades.
- **🔊 In-Browser Acoustic Bio-Resonance Lab:** Real-time Web Audio API frequency synthesis simulating T-Rex infrasound rumble, raptor calls, hadrosaur crest resonance, sauropod footsteps, and pterosaur screeches—requiring zero external audio files.
- **🖼️ Curated High-Definition Specimen Galleries:**
  - Modern categorized gallery (Theropods, Sauropods, Armored, Fossils) with active filter buttons.
  - Complete 2018 vintage archive featuring 50 dinosaur illustration plates with instant live search.
- **🎬 Documentary Video Vault:** Curated video showcase with thematic filter tabs and an embedded 16:9 YouTube modal player that auto-stops on close.
- **📚 Academic Resources & Global Databases:** Reference monographs, downloadable field guide previews, and direct access to PBDB (Paleobiology Database), Natural History Museum London, and Smithsonian.
- **📍 Discovery Center & Visitor Services:** Interactive inquiry form with client-side validation, scheduled visitor hours, embedded maps, and collapsible FAQ accordions.
- **📱 Fully Responsive & Accessible:** Fluid mobile-first grid, accessible ARIA attributes, glassmorphic navigation with scroll-shrink animations, and back-to-top navigation.

---

## 📑 Page Directory

| File | Page Name | Description |
|---|---|---|
| [`index.html`](index.html) | **Home Portal** | Main landing hub featuring deep-time stats, major dinosaur clades, classification hierarchy, and interactive exhibit previews. |
| [`history.html`](history.html) | **Evolutionary History** | Mesozoic timeline covering the Great Dying, Triassic/Jurassic/Cretaceous epochs, Pangaea breakup, and pelvic anatomy. |
| [`about.html`](about.html) | **Dawn of Paleontology** | Historical narrative detailing early fossil discoveries, Buckland's *Megalosaurus*, Owen coining *Dinosauria* (1842), and the Bone Wars. |
| [`photo.html`](photo.html) | **Specimen Photo Gallery** | Categorized photo exhibit with interactive filter buttons (Theropods, Sauropods, Armored, Fossils) and full-screen lightbox. |
| [`photo2018.html`](photo2018.html) | **2018 Specimen Archive** | Extensive collection of 50 cataloged dinosaur plates with client-side real-time keyword search. |
| [`video.html`](video.html) | **Documentary Video Vault** | Curated prehistoric documentaries with category filtering, instant keyword search, and responsive 16:9 modal video player. |
| [`resources.html`](resources.html) | **Academic Research Hub** | Downloadable field guide preview modals, external scientific database links, and the Web Audio Bio-Acoustic Synthesizer. |
| [`contact.html`](contact.html) | **Discovery Center & Contact** | Interactive visitor inquiry form with real-time feedback, operational hours, facility location, and FAQ accordion. |
| [`sitemap.html`](sitemap.html) | **Categorized Site Directory** | Visual architectural map indexing all portals, media vaults, research tools, and visitor services. |

---

## 🛠️ Interactive Systems & Technologies

### 1. Web Audio Bio-Acoustic Synthesizer
Built natively into [`resources.html`](resources.html) using the browser's **Web Audio API** (`AudioContext`, `OscillatorNode`, `BiquadFilterNode`, `GainNode`):
- **T-Rex Infrasound:** Generates a sub-bass sawtooth sweep ($65\,\text{Hz} \to 28\,\text{Hz}$) through a $90\,\text{Hz}$ lowpass filter to emulate chest-rattling low-frequency vocalizations.
- **Parasaurolophus Crest Resonance:** Dual-ramp triangle-wave oscillator simulating resonant cranial acoustic chambers ($140\,\text{Hz} \to 180\,\text{Hz} \to 110\,\text{Hz}$).
- **Raptor Chirp:** Frequency-modulated dual high-pitch sine chirps ($1200\,\text{Hz} \to 450\,\text{Hz}$ and $1500\,\text{Hz} \to 600\,\text{Hz}$).
- **Sauropod Thud:** Sub-100 Hz exponential drop simulating ground impact shockwaves.
- **Pterosaur Screech:** High-frequency sawtooth frequency ramp ($1800\,\text{Hz} \to 900\,\text{Hz}$).
- **Mesozoic Ambient Wind:** White-noise buffer with narrow $400\,\text{Hz}$ bandpass resonance.

### 2. Universal Modal Lightbox & Video Player
- **Image Lightbox:** Global modal in [`js/main.js`](js/main.js) triggered by `.gallery-card` and `.lightbox-trigger` elements, displaying dynamic high-resolution sources with custom captions.
- **Video Player:** Embedded responsive 16:9 modal automatically populating YouTube video embed URLs with `autoplay=1`, clearing `src` on modal dismissal to ensure audio stops playing immediately.

### 3. Dynamic Filter & Instant Live Search
- **Filter Tabs:** Category buttons (`.filter-btn`) instantly show/hide matching specimen cards using data attributes (`data-filter` & `data-category`) with fade-in animations.
- **Instant Search:** Dynamic debounced listener (`#itemSearch`) performing real-time sub-string matching against titles and descriptions without page reload.

---

## 🎨 Design System & Typography

### Color Palette

| Token | Variable | Hex Code | Purpose |
|---|---|---|---|
| Deep Teal | `--primary-teal` | `#0f4c5c` | Primary brand tone, headers, and hero accents |
| Ocean Teal | `--primary-teal-light` | `#16697a` | Card headers, badges, and gradient stops |
| Midnight Slate | `--dark-bg` | `#0f172a` | Footers, dark modal surfaces, and contrast panels |
| Amber Amber | `--accent-orange` | `#e36414` | Primary call-to-actions, highlights, active tabs |
| Soft Amber | `--accent-orange-light` | `#fb8b24` | Hover states, glowing badges, accent text |
| Clean White | `--light-surface` | `#ffffff` | Elevated glass cards and readability surfaces |
| Slate Mist | `--light-bg` | `#f8fafc` | Main body background |

### Typography

- **Headings & Brand Title:** [Cinzel](https://fonts.google.com/specimen/Cinzel) (Google Fonts, serif) — evokes monumental classical antiquity and fossil history.
- **Body & Interface:** [Plus Jakarta Sans](https://fonts.google.com/specimen/Plus+Jakarta+Sans) (Google Fonts, sans-serif) — clean geometric typography optimized for high legibility across screens.
- **Iconography:** [Font Awesome 6.4](https://fontawesome.com/) — scalable vectors for clades, media controls, and badges.

---

## 📂 Project Structure

```text
dinoprehistoric/
├── index.html               # Main landing portal & clade overview
├── history.html             # Evolutionary chronology & pelvic classification
├── about.html               # History of paleontology & historical figures
├── photo.html               # Modern filtered photo gallery with lightbox
├── photo2018.html           # 50-specimen vintage archive with live search
├── video.html               # Curated documentary video library & modal player
├── resources.html           # Field guides, bio-acoustic lab & research links
├── contact.html             # Inquiry portal, discovery center hours & FAQ
├── sitemap.html             # Categorized visual site map
├── css/
│   └── style.css            # Unified design system, CSS variables & components
├── js/
│   └── main.js              # Core UI interactivity (lightbox, player, filter, search)
├── partials/
│   └── navbar.html          # Shared navbar template
└── Images/
    ├── favicon.svg          # Brand vector icon
    ├── Backgrounds/         # High-resolution prehistoric environment art
    ├── Gallery60/           # Cataloged archive illustration plates (1-50)
    ├── PhotoGallery/        # Modern specimen photography & skeletal mounts
    ├── Big Size/            # Landscape panoramic dinosaur scenes
    ├── Maps/                # Paleogeographic & visitor center maps
    └── Small/               # Thumbnail plates
```

---

## 🚀 Getting Started & Local Setup

Because **DinoPrehistoric** is constructed as a clean static website with zero compilation dependencies, you can run it immediately on any local environment.

### Option 1: Live Server (VS Code Extension)
1. Open this repository in [Visual Studio Code](https://code.visualstudio.com/).
2. Install the **Live Server** extension by Ritwick Dey.
3. Right-click [`index.html`](index.html) and select **Open with Live Server**.

### Option 2: Python Static Server
If you have Python installed, run in your terminal:

```bash
# Python 3
python -m http.server 8000
```
Then visit [`http://localhost:8000`](http://localhost:8000) in your web browser.

### Option 3: Node.js `npx serve`
```bash
npx serve .
```

---

## 🌐 Browser Compatibility

Tested and fully supported across modern evergreen browsers:

- **Google Chrome** (v90+)
- **Mozilla Firefox** (v88+)
- **Microsoft Edge** (v90+)
- **Apple Safari** (v14.1+)
- **Mobile Browsers** (Chrome for Android, iOS Safari)

*Note: Web Audio API synthesis requires user interaction (e.g. clicking the "Play Sound" button) to initialize audio context in accordance with modern browser autoplay policies.*

---

## 📜 Contributing & License

Contributions, corrections to taxonomic data, and new media additions are welcome! Feel free to submit an issue or pull request.

Distributed under the [MIT License](LICENSE). Educational and non-commercial paleontological study use encouraged.

---

*Curated with passion for prehistoric life on Earth.* 🌿🦖🦕

