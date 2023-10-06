document.querySelectorAll('.sect, .video-sect, .book-sect').forEach(item => {
  item.addEventListener('click', () => {
      const content = item.nextElementSibling;
      content.style.maxHeight = content.style.maxHeight ? null : content.scrollHeight + 'px';
      item.querySelector('i').classList.toggle('fa-chevron-up');
  });
});

document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();
      
      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});

