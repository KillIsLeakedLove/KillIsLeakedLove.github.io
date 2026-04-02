// Article data
const articles = {
  1: {
    title: { zh: '梵高：燃烧的灵魂', en: 'Van Gogh: Burning Soul' },
    date: '2024-03-15',
    readTime: { zh: '8 分钟', en: '8 min' },
    tags: { zh: ['后印象派', '梵高', '艺术史'], en: ['Post-Impressionism', 'Van Gogh', 'Art History'] },
    image: 'images/starry-night.jpg',
  },
  2: {
    title: { zh: '浮世绘的艺术魅力', en: 'The Art of Ukiyo-e' },
    date: '2024-03-10',
    readTime: { zh: '6 分钟', en: '6 min' },
    tags: { zh: ['浮世绘', '日本艺术', '葛饰北斋'], en: ['Ukiyo-e', 'Japanese Art', 'Hokusai'] },
    image: 'images/great-wave.jpg',
  },
  3: {
    title: { zh: '光影大师维米尔', en: 'Vermeer: Master of Light' },
    date: '2024-03-05',
    readTime: { zh: '7 分钟', en: '7 min' },
    tags: { zh: ['维米尔', '荷兰黄金时代', '光影'], en: ['Vermeer', 'Dutch Golden Age', 'Light'] },
    image: 'images/pearl-earring.jpg',
  },
  4: {
    title: { zh: '达·芬奇的永恒之谜', en: 'Da Vinci: Eternal Mystery' },
    date: '2024-02-28',
    readTime: { zh: '10 分钟', en: '10 min' },
    tags: { zh: ['文艺复兴', '达·芬奇', '蒙娜丽莎'], en: ['Renaissance', 'Da Vinci', 'Mona Lisa'] },
    image: 'images/mona-lisa.jpg',
  },
};

// DOM Elements
const themeBtn = document.getElementById('themeBtn');
const themeMenu = document.getElementById('themeMenu');
const langBtn = document.getElementById('langBtn');
const langMenu = document.getElementById('langMenu');
const backBtn = document.getElementById('backBtn');
const pages = document.querySelectorAll('.page');
const navLinks = document.querySelectorAll('.nav-links a');

// Toggle dropdown menu
function toggleMenu(menu) {
  menu.classList.toggle('active');
  // Close other menu
  if (menu === themeMenu) {
    langMenu.classList.remove('active');
  } else {
    themeMenu.classList.remove('active');
  }
}

// Close menus when clicking outside
document.addEventListener('click', (e) => {
  if (!themeBtn.contains(e.target) && !themeMenu.contains(e.target)) {
    themeMenu.classList.remove('active');
  }
  if (!langBtn.contains(e.target) && !langMenu.contains(e.target)) {
    langMenu.classList.remove('active');
  }
});

// Theme button click
themeBtn.addEventListener('click', () => toggleMenu(themeMenu));

// Language button click
langBtn.addEventListener('click', () => toggleMenu(langMenu));

// Theme selection
themeMenu.querySelectorAll('button').forEach(btn => {
  btn.addEventListener('click', () => {
    const theme = btn.getAttribute('data-theme');
    setTheme(theme);
    themeMenu.classList.remove('active');
    // Update active state
    themeMenu.querySelectorAll('button').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
  });
});

// Language selection
langMenu.querySelectorAll('button').forEach(btn => {
  btn.addEventListener('click', () => {
    const lang = btn.getAttribute('data-lang');
    setLang(lang);
    langMenu.classList.remove('active');
    // Update active state
    langMenu.querySelectorAll('button').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
  });
});

// Navigation
function navigateTo(pageId) {
  // Hide all pages
  pages.forEach(page => page.classList.remove('active'));
  // Show target page
  const targetPage = document.getElementById(pageId);
  if (targetPage) {
    targetPage.classList.add('active');
  }
  // Update nav links
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === '#' + pageId) {
      link.classList.add('active');
    }
  });
  // Scroll to top
  window.scrollTo(0, 0);
}

// Handle navigation clicks
navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const pageId = link.getAttribute('href').slice(1);
    navigateTo(pageId);
  });
});

// Blog card click - open article
document.querySelectorAll('.blog-card').forEach(card => {
  card.addEventListener('click', () => {
    const articleId = card.getAttribute('data-article');
    openArticle(articleId);
  });
});

// Open article
function openArticle(articleId) {
  const article = articles[articleId];
  if (!article) return;

  const content = document.getElementById('articleContent');
  const lang = currentLang;
  const contentKey = 'article' + articleId + 'Content';

  content.innerHTML = `
    <div class="article-header">
      <div class="article-meta">
        <span>${article.date}</span>
        <span>${article.readTime[lang]}</span>
      </div>
      <h1>${article.title[lang]}</h1>
      <div class="article-tags">
        ${article.tags[lang].map(tag => `<span>${tag}</span>`).join('')}
      </div>
    </div>
    <div class="article-image">
      <img src="${article.image}" alt="${article.title[lang]}">
    </div>
    <div class="article-body">
      <p>${i18n[lang][contentKey]}</p>
    </div>
  `;

  navigateTo('article');
}

// Back button
backBtn.addEventListener('click', () => {
  navigateTo('blog');
});

// Initialize active states
document.addEventListener('DOMContentLoaded', () => {
  // Set initial theme active
  themeMenu.querySelectorAll('button').forEach(btn => {
    if (btn.getAttribute('data-theme') === currentTheme) {
      btn.classList.add('active');
    }
  });
  // Set initial language active
  langMenu.querySelectorAll('button').forEach(btn => {
    if (btn.getAttribute('data-lang') === currentLang) {
      btn.classList.add('active');
    }
  });
  // Set initial nav active
  navLinks.forEach(link => {
    if (link.getAttribute('href') === '#home') {
      link.classList.add('active');
    }
  });
});

// Handle browser back/forward
window.addEventListener('hashchange', () => {
  const hash = window.location.hash.slice(1) || 'home';
  navigateTo(hash);
});

// Initial navigation based on hash
const initialHash = window.location.hash.slice(1);
if (initialHash && document.getElementById(initialHash)) {
  navigateTo(initialHash);
}
