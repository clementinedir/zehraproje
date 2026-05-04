// ==========================================
// DATA
// ==========================================

const dessertMenu = [
  { id: 1, name: 'Cannoli Siciliani', nameEnglish: 'Sicilian Cannoli', category: 'Pastries', description: 'Crispy pastry tubes filled with sweet, creamy ricotta and chocolate chips.', price: '£4.50', tags: ['V'], image: 'https://giuseppedellanno.com/wp-content/uploads/giuseppe-cannoli-siciliani-700-1.jpg' },
  { id: 2, name: 'Tiramisù', nameEnglish: 'Tiramisu', category: 'Cakes & Torte', description: 'Espresso-soaked ladyfingers layered with mascarpone cream and dusted with cocoa.', price: '£6.00', tags: ['V'], image: 'https://thescranline.com/wp-content/uploads/2025/12/TIRAMISU-25-S-01.jpg' },
  { id: 3, name: 'Sfogliatelle', nameEnglish: 'Lobster Tail Pastry', category: 'Pastries', description: 'Flaky, shell-shaped pastry filled with citrus-scented ricotta.', price: '£4.80', tags: ['V'], image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRA9fnfCLqNnSM_bXWk43svTJG7G7NKp5DXKdD_AUJ-pg&s=10' },
  { id: 4, name: 'Panna Cotta', nameEnglish: 'Cooked Cream', category: 'Cakes & Torte', description: 'Silky vanilla cream dessert served with seasonal berry compote.', price: '£5.50', tags: ['GF', 'V'], image: 'https://picsum.photos/seed/pannacotta/400/300' },
  { id: 5, name: 'Gelato al Pistacchio', nameEnglish: 'Pistachio Gelato', category: 'Gelato', description: 'Rich, creamy gelato made with Bronte pistachios.', price: '£3.50', tags: ['GF', 'V'], image: 'https://picsum.photos/seed/pistachio/400/300' },
  { id: 6, name: 'Sorbetto al Limone', nameEnglish: 'Lemon Sorbet', category: 'Gelato', description: 'Refreshing Amalfi lemon sorbet.', price: '£3.00', tags: ['GF', 'Vegan'], image: 'https://picsum.photos/seed/lemon/400/300' },
  { id: 7, name: 'Crostata di Frutta', nameEnglish: 'Fruit Tart', category: 'Pastries', description: 'Shortcrust pastry shell filled with pastry cream and topped with fresh fruit.', price: '£5.00', tags: ['V'], image: 'https://picsum.photos/seed/tart/400/300' },
  { id: 8, name: 'Cantuccini', nameEnglish: 'Almond Biscotti', category: 'Pastries', description: 'Twice-baked almond biscuits, perfect for dipping in Vin Santo.', price: '£3.00', tags: ['V'], image: 'https://picsum.photos/seed/biscotti/400/300' },
  { id: 9, name: 'Bigné', nameEnglish: 'Cream Puffs', category: 'Pastries', description: 'Choux pastry filled with chocolate, vanilla, or pistachio cream.', price: '£2.50', tags: ['V'], image: 'https://picsum.photos/seed/puff/400/300' },
  { id: 10, name: 'Caprese', nameEnglish: 'Flourless Chocolate Cake', category: 'Cakes & Torte', description: 'Dense, rich chocolate and almond cake originating from Capri.', price: '£6.50', tags: ['GF', 'V'], image: 'https://picsum.photos/seed/chocolate/400/300' },
  { id: 11, name: 'Millefoglie', nameEnglish: 'Thousand Leaves', category: 'Cakes & Torte', description: 'Layers of puff pastry and diplomat cream, topped with powdered sugar.', price: '£5.50', tags: ['V'], image: 'https://picsum.photos/seed/millefoglie/400/300' },
  { id: 12, name: 'Zeppole di San Giuseppe', nameEnglish: 'St. Joseph\'s Pastry', category: 'Seasonal', description: 'Deep-fried dough topped with pastry cream and an Amarena cherry.', price: '£4.50', tags: ['V'], image: 'https://picsum.photos/seed/zeppole/400/300' },
  { id: 13, name: 'Coda d\'Aragosta', nameEnglish: 'Giant Lobster Tail', category: 'Pastries', description: 'Similar to sfogliatelle but larger and filled with Chantilly cream.', price: '£5.50', tags: ['V'], image: 'https://picsum.photos/seed/lobster/400/300' },
  { id: 14, name: 'Cassata Siciliana', nameEnglish: 'Sicilian Cassata', category: 'Cakes & Torte', description: 'Sponge cake moistened with fruit juices or liqueur, layered with ricotta.', price: '£6.50', tags: ['V'], image: 'https://picsum.photos/seed/cassata/400/300' },
  { id: 15, name: 'Affogato', nameEnglish: 'Drowned Gelato', category: 'Beverages', description: 'A scoop of vanilla gelato "drowned" in a shot of hot espresso.', price: '£5.00', tags: ['GF', 'V'], image: 'https://picsum.photos/seed/affogato/400/300' },
  { id: 16, name: 'Espresso', nameEnglish: 'Espresso', category: 'Beverages', description: 'Classic Italian short black coffee.', price: '£2.00', tags: ['GF', 'Vegan'], image: 'https://picsum.photos/seed/espresso/400/300' },
  { id: 17, name: 'Cappuccino', nameEnglish: 'Cappuccino', category: 'Beverages', description: 'Espresso with steamed milk and a thick layer of foam.', price: '£3.00', tags: ['GF', 'V'], image: 'https://picsum.photos/seed/cappuccino/400/300' },
  { id: 18, name: 'Panettone', nameEnglish: 'Christmas Bread', category: 'Seasonal', description: 'Sweet bread loaf with candied citrus and raisins.', price: '£15.00', tags: ['V'], image: 'https://picsum.photos/seed/panettone/400/300' },
  { id: 19, name: 'Colomba', nameEnglish: 'Easter Dove Bread', category: 'Seasonal', description: 'Traditional Easter bread shaped like a dove, topped with pearl sugar and almonds.', price: '£15.00', tags: ['V'], image: 'https://picsum.photos/seed/colomba/400/300' },
  { id: 20, name: 'Bomboloni', nameEnglish: 'Italian Doughnuts', category: 'Pastries', description: 'Soft, fried dough filled with Nutella or pastry cream.', price: '£3.50', tags: ['V'], image: 'https://picsum.photos/seed/bomboloni/400/300' }
];

const teamMembers = [
  { name: 'Giovanni', role: 'Master Baker', fact: 'Brings his grandmother\'s 100-year-old sourdough starter to work every day.', imageSeed: 'giovanni' },
  { name: 'Maria', role: 'Pastry Chef', fact: 'Can pipe a perfect cannolo blindfolded.', imageSeed: 'maria' },
  { name: 'Luca', role: 'Barista', fact: 'Won a regional latte art competition in Naples.', imageSeed: 'luca' }
];

const cateringPackages = [
  { name: 'Piccolo Assaggio', description: 'Perfect for small gatherings. A delightful mix of our miniature classics.', includes: ['24 Mini Cannoli', '12 Bigné', '12 Mini Fruit Tarts'], price: '£75' },
  { name: 'La Grande Festa', description: 'The ultimate Italian dessert table for your celebration.', includes: ['Whole Tiramisù', '24 Large Cannoli', '24 Sfogliatelle', 'Assorted Cantuccini'], price: '£180' },
  { name: 'Gelato Cart', description: 'Bring our authentic gelato to your event with our charming vintage cart.', includes: ['3 Flavours of Gelato', 'Cones & Cups', 'Server for 2 hours'], price: '£250' }
];

// ==========================================
// UTILITIES
// ==========================================

function createTagHTML(tags) {
  return tags.map(tag => {
    let tagClass = '';
    if (tag === 'GF') tagClass = 'tag-gf';
    else if (tag === 'V') tagClass = 'tag-v';
    else if (tag === 'Vegan') tagClass = 'tag-vegan';
    return `<span class="tag ${tagClass}">${tag}</span>`;
  }).join('');
}

// ==========================================
// RENDERING FUNCTIONS
// ==========================================

function renderMenu() {
  const menuContainer = document.getElementById('menu-grid');
  if (!menuContainer) return;

  const html = dessertMenu.map(item => `
    <div class="card menu-item" data-category="${item.category}" data-tags="${item.tags.join(',')}">
      <img src="${item.image}" alt="${item.nameEnglish}" class="card-img" loading="lazy">
      <div class="card-content">
        <div class="card-header">
          <div>
            <h3 class="italian-name">${item.name}</h3>
            <p class="meta-text">${item.nameEnglish}</p>
          </div>
          <span class="price">${item.price}</span>
        </div>
        <p>${item.description}</p>
        <div class="tags">
          ${createTagHTML(item.tags)}
        </div>
      </div>
    </div>
  `).join('');

  menuContainer.innerHTML = html;
}

function renderHighlights() {
  const highlightsContainer = document.getElementById('highlights-grid');
  if (!highlightsContainer) return;

  // Grab first 3 items as highlights
  const highlights = dessertMenu.slice(0, 3);

  const html = highlights.map(item => `
    <div class="card">
      <img src="${item.image}" alt="${item.nameEnglish}" class="card-img" loading="lazy">
      <div class="card-content">
        <div class="card-header">
          <div>
            <h3 class="italian-name">${item.name}</h3>
          </div>
          <span class="price">${item.price}</span>
        </div>
        <p>${item.description}</p>
        <div class="tags">
          ${createTagHTML(item.tags)}
        </div>
      </div>
    </div>
  `).join('');

  highlightsContainer.innerHTML = html;
}

function renderTeam() {
  const teamContainer = document.getElementById('team-grid');
  if (!teamContainer) return;

  const html = teamMembers.map(member => `
    <div class="card text-center" style="padding: var(--space-xl) var(--space-lg);">
      <img src="https://picsum.photos/seed/${member.imageSeed}/200/200" alt="${member.name}" class="staff-img" loading="lazy">
      <h3>${member.name}</h3>
      <h4>${member.role}</h4>
      <p style="margin-top: var(--space-md); font-style: italic;">"${member.fact}"</p>
    </div>
  `).join('');

  teamContainer.innerHTML = html;
}

function renderCatering() {
  const cateringContainer = document.getElementById('catering-grid');
  if (!cateringContainer) return;

  const html = cateringPackages.map(pkg => `
    <div class="card">
      <div class="card-content" style="height: 100%; display: flex; flex-direction: column;">
        <h3 class="italian-name">${pkg.name}</h3>
        <p>${pkg.description}</p>
        <ul style="margin: var(--space-md) 0 var(--space-lg) var(--space-lg); flex-grow: 1;">
          ${pkg.includes.map(item => `<li>${item}</li>`).join('')}
        </ul>
        <div style="border-top: var(--border); padding-top: var(--space-md); display: flex; justify-content: space-between; align-items: center;">
          <span class="meta-text">Starting from</span>
          <span class="price" style="font-size: 20px;">${pkg.price}</span>
        </div>
      </div>
    </div>
  `).join('');

  cateringContainer.innerHTML = html;
}

// ==========================================
// INTERACTIVE LOGIC
// ==========================================

function initFilters() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const menuItems = document.querySelectorAll('.menu-item');

  if (filterBtns.length === 0 || menuItems.length === 0) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Update active state
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterType = btn.dataset.filterType; // 'category' or 'diet'
      const filterValue = btn.dataset.filterValue; // 'all', 'Pastries', 'GF', etc.

      menuItems.forEach(item => {
        // First add filtering class for animation
        item.classList.add('filtering');

        setTimeout(() => {
          let show = false;

          if (filterValue === 'all') {
            show = true;
          } else if (filterType === 'category') {
            show = item.dataset.category === filterValue;
          } else if (filterType === 'diet') {
            const tags = item.dataset.tags.split(',');
            show = tags.includes(filterValue);
          }

          if (show) {
            item.classList.remove('hidden');
            // Allow display block to apply before animating opacity
            setTimeout(() => {
              item.classList.remove('filtering');
            }, 50);
          } else {
            item.classList.add('hidden');
          }
        }, 250); // wait for opacity to fade out
      });
    });
  });
}

function initSeasonalBanner() {
  const banner = document.getElementById('seasonal-banner');
  const bannerText = document.getElementById('seasonal-banner-text');
  const bannerClose = document.getElementById('banner-close');

  if (!banner) return;

  const currentMonth = new Date().getMonth(); // 0 = Jan, 11 = Dec
  let message = '';

  if (currentMonth >= 2 && currentMonth <= 4) { // Mar, Apr, May
    message = "Easter Colomba & Hot Cross Sfogliatelle — Available Now";
  } else if (currentMonth >= 5 && currentMonth <= 7) { // Jun, Jul, Aug
    message = "Summer Gelato Festival — New Flavours Every Friday";
  } else if (currentMonth >= 8 && currentMonth <= 10) { // Sep, Oct, Nov
    message = "Chestnuts & Figs — Our Autumn Specials Are Here";
  } else { // Dec, Jan, Feb
    message = "Panettone & Struffoli — Order Now for the Festive Season";
  }

  bannerText.textContent = message;

  // Check localStorage
  const currentMonthStr = currentMonth.toString();
  const dismissedMonth = localStorage.getItem('bannerDismissedMonth');

  if (dismissedMonth !== currentMonthStr) {
    banner.style.display = 'block';
  }

  bannerClose.addEventListener('click', () => {
    banner.style.display = 'none';
    localStorage.setItem('bannerDismissedMonth', currentMonthStr);
  });
}

function initForm() {
  const form = document.getElementById('custom-order-form');
  const dateInput = document.getElementById('desired-date');
  const successMsg = document.getElementById('form-success');
  const refNumberSpan = document.getElementById('ref-number');
  const customerNameSpan = document.getElementById('customer-name');

  if (!form) return;

  // Pre-fill from localStorage
  const savedData = localStorage.getItem('lastOrderSubmission');
  if (savedData) {
    try {
      const data = JSON.parse(savedData);
      Object.keys(data).forEach(key => {
        const input = form.elements[key];
        if (input) input.value = data[key];
      });
    } catch (e) {
      console.error("Error parsing saved form data", e);
    }
  }

  // Set min date to 7 days from today
  if (dateInput) {
    const today = new Date();
    today.setDate(today.getDate() + 7);
    const minDate = today.toISOString().split('T')[0];
    dateInput.min = minDate;
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Validate Date again just in case
    const selectedDate = new Date(dateInput.value);
    const minAllowedDate = new Date();
    minAllowedDate.setDate(minAllowedDate.getDate() + 6); // Add 6 because time components can be messy, min attribute handles the strict client side

    if (selectedDate < minAllowedDate) {
      alert("Please select a date at least 7 days in advance.");
      return;
    }

    // Save to localStorage
    const formData = new FormData(form);
    const dataObj = Object.fromEntries(formData.entries());
    localStorage.setItem('lastOrderSubmission', JSON.stringify(dataObj));

    // Submit via Web3Forms API asynchronously
    fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData
    })
      .then(response => response.json())
      .then(result => {
        // Generate ref
        const ref = Math.floor(100000 + Math.random() * 900000); // 6 digits

        refNumberSpan.textContent = ref;
        customerNameSpan.textContent = dataObj['name'] || dataObj['full-name'];

        form.style.display = 'none';
        successMsg.style.display = 'block';
      })
      .catch(error => {
        alert('There was an issue sending your form. Please try again.');
      });
  });
}

function initLightbox() {
  const items = document.querySelectorAll('.gallery-item');
  const lightbox = document.getElementById('lightbox');
  if (!lightbox || items.length === 0) return;

  const lightboxImg = lightbox.querySelector('img');
  const btnClose = lightbox.querySelector('.lightbox-close');
  const btnPrev = lightbox.querySelector('.lightbox-prev');
  const btnNext = lightbox.querySelector('.lightbox-next');

  let currentIndex = 0;
  const imageSrcs = Array.from(items).map(item => item.querySelector('img').src.replace('400/400', '1200/900'));

  function showImage(index) {
    if (index < 0) index = imageSrcs.length - 1;
    if (index >= imageSrcs.length) index = 0;
    currentIndex = index;
    lightboxImg.src = imageSrcs[currentIndex];
  }

  function openLightbox(index) {
    showImage(index);
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden'; // Prevent scrolling
  }

  function closeLightbox() {
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
  }

  items.forEach((item, index) => {
    item.addEventListener('click', () => openLightbox(index));
  });

  btnClose.addEventListener('click', closeLightbox);
  btnPrev.addEventListener('click', () => showImage(currentIndex - 1));
  btnNext.addEventListener('click', () => showImage(currentIndex + 1));

  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox || e.target.classList.contains('lightbox-content')) {
      closeLightbox();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (!lightbox.classList.contains('active')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowLeft') showImage(currentIndex - 1);
    if (e.key === 'ArrowRight') showImage(currentIndex + 1);
  });
}

// ==========================================
// INITIALIZATION
// ==========================================

document.addEventListener('DOMContentLoaded', () => {
  renderMenu();
  renderHighlights();
  renderTeam();
  renderCatering();

  initFilters();
  initSeasonalBanner();
  initForm();
  initLightbox();

  // Active Nav Link Logic
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(link => {
    if (link.getAttribute('href') === currentPath) {
      link.classList.add('active');
    }
  });
});
