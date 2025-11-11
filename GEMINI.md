# Project: DinoPrehistoric

This project is a static website about dinosaurs. It provides information about their history, classification, and offers photo and video galleries.

## Pages

The website consists of the following pages:

- **index.html**: The main landing page with an overview of dinosaurs.
- **about.html**: Provides information about the origin and classification of dinosaurs.
- **contact.html**: Contains contact information, a map, and a contact form.
- **history.html**: A detailed page about the evolutionary history of dinosaurs.
- **photo.html**: A photo gallery of dinosaur images.
- **video.html**: A video gallery of dinosaur videos.

## Technologies

The website is built using the following technologies:

- HTML
- CSS (including Bootstrap 5 on some pages)
- JavaScript (for minor functionalities like a back-to-top button)

## Structure and Style

The website has a navigation bar that is consistent across most pages, linking to all the main sections. However, the design and structure are inconsistent across the files:

- Some pages like `index.html`, `about.html`, and `history.html` use modern HTML5 and Bootstrap 5 for a responsive layout.
- Other pages like `photo.html` and `video.html` are built with older HTML 4 and use tables for layout, which is not responsive and considered outdated.
- The styling, fonts, and colors vary between the modern and older pages, creating an inconsistent user experience.

## Assets

The project uses various assets located in the `Images` directory, including:

- Background images
- Banners and logos
- Animated GIFs for titles
- Image galleries

## Potential Improvements

- **Consistency**: The most significant improvement would be to unify the design and codebase. All pages should be updated to use modern HTML5 and a single, consistent CSS framework like Bootstrap 5.
- **Responsiveness**: The pages using table-based layouts (`photo.html`, `video.html`) should be rewritten to be responsive, ensuring they work well on all devices.
- **Broken Links**: There are broken image links in `history.html` that should be fixed.
- **Code Cleanup**: The HTML on the older pages could be cleaned up and modernized.
- **File Cleanup**: The `:Zone.Identifier` files are unnecessary and can be removed.
- **Video Files**: The video files are linked from a `Videoder Downloads` directory which is not present in the project. This should be addressed.
