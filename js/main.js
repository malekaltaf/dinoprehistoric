// DinoPrehistoric Modern Core Scripts
document.addEventListener('DOMContentLoaded', () => {
  // 1. Back to Top Button
  const backToTopButton = document.getElementById('backToTop');
  if (backToTopButton) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 350) {
        backToTopButton.classList.add('visible');
      } else {
        backToTopButton.classList.remove('visible');
      }
    });

    backToTopButton.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  // 2. Image Lightbox
  const lightboxModal = document.getElementById('lightboxModal');
  const lightboxImage = document.getElementById('lightboxImage');
  const lightboxCaption = document.getElementById('lightboxCaption');

  if (lightboxModal && lightboxImage) {
    document.querySelectorAll('.gallery-card, .lightbox-trigger').forEach(card => {
      card.addEventListener('click', () => {
        const img = card.querySelector('img') || card;
        const src = img.getAttribute('src');
        const alt = img.getAttribute('alt') || 'Dinosaur Image';
        lightboxImage.src = src;
        if (lightboxCaption) {
          lightboxCaption.textContent = alt;
        }
        const modal = new bootstrap.Modal(lightboxModal);
        modal.show();
      });
    });
  }

  // 3. Video Modal Player
  const videoModal = document.getElementById('videoPlayerModal');
  const videoFrame = document.getElementById('videoFrame');
  const videoTitleElem = document.getElementById('videoPlayerTitle');

  if (videoModal && videoFrame) {
    document.querySelectorAll('.video-card').forEach(card => {
      card.addEventListener('click', (e) => {
        e.preventDefault();
        const videoUrl = card.getAttribute('data-video-url') || 'https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1';
        const videoTitle = card.getAttribute('data-video-title') || card.querySelector('.video-card-title')?.innerText || 'Prehistoric Video';
        
        videoFrame.src = videoUrl.includes('autoplay') ? videoUrl : `${videoUrl}?autoplay=1`;
        if (videoTitleElem) videoTitleElem.textContent = videoTitle;
        
        const modal = new bootstrap.Modal(videoModal);
        modal.show();
      });
    });

    videoModal.addEventListener('hidden.bs.modal', () => {
      videoFrame.src = '';
    });
  }

  // 4. Gallery Category Filter
  const filterButtons = document.querySelectorAll('.filter-btn');
  const galleryItems = document.querySelectorAll('.gallery-filter-item');

  if (filterButtons.length && galleryItems.length) {
    filterButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        filterButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filter = btn.getAttribute('data-filter');
        galleryItems.forEach(item => {
          const category = item.getAttribute('data-category');
          if (filter === 'all' || category === filter || category?.includes(filter)) {
            item.style.display = '';
            item.classList.add('animate__fadeIn');
          } else {
            item.style.display = 'none';
          }
        });
      });
    });
  }

  // 5. Video & Resource Live Search
  const searchInput = document.getElementById('itemSearch');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      const term = e.target.value.toLowerCase().trim();
      document.querySelectorAll('.searchable-item').forEach(item => {
        const title = item.querySelector('.searchable-title')?.innerText.toLowerCase() || '';
        const desc = item.querySelector('.searchable-desc')?.innerText.toLowerCase() || '';
        if (title.includes(term) || desc.includes(term)) {
          item.style.display = '';
        } else {
          item.style.display = 'none';
        }
      });
    });
  }

  // 6. Contact Form Validation and Submission
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      if (!contactForm.checkValidity()) {
        e.stopPropagation();
        contactForm.classList.add('was-validated');
        return;
      }
      
      const alertBox = document.getElementById('contactSuccessAlert');
      if (alertBox) {
        alertBox.classList.remove('d-none');
        contactForm.reset();
        contactForm.classList.remove('was-validated');
        alertBox.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
    });
  }
});

// ── Header: scroll-shrink effect ──────────────────────────────────────────────
(function () {
  const header = document.querySelector('.site-header');
  if (!header) return;
  const onScroll = () => {
    header.classList.toggle('scrolled', window.scrollY > 60);
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();
})();

// ── Header: search bar toggle ─────────────────────────────────────────────────
(function () {
  const btn   = document.getElementById('navSearchBtn');
  const input = document.getElementById('navSearchInput');
  if (!btn || !input) return;

  btn.addEventListener('click', () => {
    const isOpen = input.classList.toggle('open');
    btn.setAttribute('aria-expanded', isOpen);
    btn.querySelector('i').className = isOpen ? 'fas fa-times' : 'fas fa-search';
    if (isOpen) {
      input.focus();
    } else {
      input.value = '';
    }
  });

  // Close on Escape
  input.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') btn.click();
  });
})();
