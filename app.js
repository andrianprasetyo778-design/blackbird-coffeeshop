/**
 * Blackbird Coffeeshop - Interactive Application Logic
 * Pure Vanilla JavaScript (No SQL, No External Heavy Libraries)
 */

// Fallback dataset to guarantee 100% functionality even when opened directly via file://
const DEFAULT_DATA = {
  "coffeeshop": {
    "name": "Blackbird Coffeeshop",
    "location": "Jl. Menggerwangi, Kec. Lemahwangi, Kota Surakarta",
    "currentUser": {
      "name": "Andrian",
      "tier": "Member Blackbird Coffeeshop",
      "loyaltyStamps": 4,
      "totalStamps": 8
    }
  },
  "tables": [
    { "id": "A1", "area": "Ruang Utama", "capacity": "2 Tamu", "seats": "Kursi A1-1 & A1-2", "status": "available", "coord": "Depan Bar" },
    { "id": "A2", "area": "Ruang Utama", "capacity": "2 Tamu", "seats": "Kursi A2-1 & A2-2", "status": "available", "coord": "Dekat Jendela" },
    { "id": "A3", "area": "Ruang Utama", "capacity": "2 Tamu", "seats": "Kursi A3-1 & A3-2", "status": "selected", "coord": "Tengah Cafe" },
    { "id": "A4", "area": "Ruang Utama", "capacity": "4 Tamu", "seats": "Sofa A4 (1-4)", "status": "occupied", "coord": "Sudut Santai" },
    { "id": "B1", "area": "Teras Luar", "capacity": "2 Tamu", "seats": "Kursi B1-1 & B1-2", "status": "available", "coord": "Outdoor Semi" },
    { "id": "B2", "area": "Teras Luar", "capacity": "4 Tamu", "seats": "Kursi B2 (1-4)", "status": "occupied", "coord": "Smoking Area" },
    { "id": "C1", "area": "Teras Luar", "capacity": "2 Tamu", "seats": "Kursi C1-1 & C1-2", "status": "available", "coord": "Balkon Taman" }
  ],
  "menu": [
    {
      "id": "m1",
      "name": "Kopi Susu Gula Aren",
      "category": "kopi",
      "temp": "dingin",
      "badge": "Best Seller",
      "rating": "4.9",
      "reviews": 182,
      "price": 28000,
      "description": "Espresso kental, susu segar creamy, dan gula aren asli racikan barista. Rasa klasik yang selalu pas di lidah.",
      "image": "https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=600&q=80",
      "isFavorite": true
    },
    {
      "id": "m2",
      "name": "Cappuccino",
      "category": "kopi",
      "temp": "panas",
      "badge": "Signature",
      "rating": "4.8",
      "reviews": 94,
      "price": 30000,
      "description": "Perpaduan seimbang espresso premium dengan foam susu tebal bertekstur lembut dan taburan bubuk cokelat.",
      "image": "https://images.unsplash.com/photo-1572442388796-11668ba67e53?auto=format&fit=crop&w=600&q=80",
      "isFavorite": true
    },
    {
      "id": "m3",
      "name": "Iced Americano",
      "category": "kopi",
      "temp": "dingin",
      "badge": "Pilihan Sehat",
      "rating": "4.7",
      "reviews": 110,
      "price": 24000,
      "description": "Double shot espresso dengan es batu kristal dan air dingin. Bersih, segar, dan menonjolkan aroma fruity beans.",
      "image": "https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&w=600&q=80",
      "isFavorite": false
    },
    {
      "id": "m4",
      "name": "Iced Mocha",
      "category": "kopi",
      "temp": "dingin",
      "badge": "Favorit",
      "rating": "4.8",
      "reviews": 75,
      "price": 32000,
      "description": "Kombinasi kaya dark chocolate artisan, espresso berkualitas tinggi, dan susu segar dingin yang nikmat.",
      "image": "https://images.unsplash.com/photo-1578314675249-a6910f80cc4e?auto=format&fit=crop&w=600&q=80",
      "isFavorite": false
    },
    {
      "id": "m5",
      "name": "Caramel Macchiato",
      "category": "kopi",
      "temp": "dingin",
      "badge": "Best Seller",
      "rating": "4.9",
      "reviews": 140,
      "price": 34000,
      "description": "Susu vanila segar dengan lapisan espresso tebal dan siraman saus karamel panggang manis gurih.",
      "image": "https://images.unsplash.com/photo-1485808191679-5f86510681a2?auto=format&fit=crop&w=600&q=80",
      "isFavorite": false
    },
    {
      "id": "m6",
      "name": "Vanilla Oat Latte",
      "category": "kopi",
      "temp": "panas",
      "badge": "Plant-Based",
      "rating": "4.8",
      "reviews": 88,
      "price": 36000,
      "description": "Latte menggunakan oat milk creamy impor dengan ekstrak vanila Madagaskar dan espresso single-origin.",
      "image": "https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&w=600&q=80",
      "isFavorite": false
    },
    {
      "id": "m7",
      "name": "Matcha Latte Premium",
      "category": "non-kopi",
      "temp": "dingin",
      "badge": "Signature",
      "rating": "4.9",
      "reviews": 160,
      "price": 30000,
      "description": "Bubuk Uji Matcha asli Jepang dipadukan dengan susu segar. Rasa earthy yang halus dengan manis alami.",
      "image": "https://images.unsplash.com/photo-1536256263959-770b48d82b0a?auto=format&fit=crop&w=600&q=80",
      "isFavorite": false
    },
    {
      "id": "m8",
      "name": "Earl Grey Milk Tea",
      "category": "non-kopi",
      "temp": "dingin",
      "badge": "Segar",
      "rating": "4.7",
      "reviews": 62,
      "price": 26000,
      "description": "Seduhan teh hitam beraroma bergamot khas dipadukan dengan susu krim lembut dan es batu melimpah.",
      "image": "https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=600&q=80",
      "isFavorite": false
    },
    {
      "id": "m9",
      "name": "Artisan Butter Croissant",
      "category": "cemilan",
      "temp": "panas",
      "badge": "Panggang Tiap Hari",
      "rating": "4.9",
      "reviews": 115,
      "price": 22000,
      "description": "Pastry Prancis renyah di luar, berongga lembut di dalam dengan aroma mentega murni Prancis yang wangi.",
      "image": "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=600&q=80",
      "isFavorite": false
    },
    {
      "id": "m10",
      "name": "Cinnamon Sugar Roll",
      "category": "cemilan",
      "temp": "panas",
      "badge": "Favorit",
      "rating": "4.8",
      "reviews": 92,
      "price": 25000,
      "description": "Roti gulung kayu manis hangat dengan lelehan cream cheese glaze di atasnya. Cocok dinikmati bersama kopi hitam.",
      "image": "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=600&q=80",
      "isFavorite": false
    },
    {
      "id": "m11",
      "name": "Truffle Fries with Dip",
      "category": "cemilan",
      "temp": "panas",
      "badge": "Cemilan Gurih",
      "rating": "4.8",
      "reviews": 84,
      "price": 28000,
      "description": "Kentang goreng renyah dibaluri minyak truffle aromatik, taburan keju parmesan, dan saus garlic mayo.",
      "image": "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=600&q=80",
      "isFavorite": false
    },
    {
      "id": "m12",
      "name": "Fudgy Chocolate Brownie",
      "category": "cemilan",
      "temp": "panas",
      "badge": "Manis",
      "rating": "4.9",
      "reviews": 103,
      "price": 24000,
      "description": "Brownie cokelat padat dan lumer dengan taburan almond panggang renyah.",
      "image": "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=600&q=80",
      "isFavorite": false
    }
  ]
};

// Global State
const state = {
  data: DEFAULT_DATA,
  currentView: 'home',
  orderMode: 'dine-in', // 'dine-in' or 'take-away'
  selectedDate: 'Hari ini',
  selectedGuests: '2 orang',
  selectedTime: '16.00-18.00',
  selectedTable: { id: 'A3', area: 'Ruang Utama', capacity: '2 Tamu', seats: 'Kursi A3-1 & A3-2' },
  activeFilter: 'semua',
  searchQuery: '',
  cart: [
    {
      id: 'cart-1',
      productId: 'm1',
      name: 'Kopi Susu Gula Aren',
      size: 'Sedang - 350 ml',
      sugar: 'Kurang manis',
      milk: 'Susu segar',
      extraEspresso: false,
      price: 32000,
      qty: 2,
      image: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=600&q=80'
    },
    {
      id: 'cart-2',
      productId: 'm2',
      name: 'Cappuccino',
      size: 'Reguler - panas',
      sugar: 'Satu gula',
      milk: 'Susu sapi',
      extraEspresso: false,
      price: 30000,
      qty: 1,
      image: 'https://images.unsplash.com/photo-1572442388796-11668ba67e53?auto=format&fit=crop&w=600&q=80'
    }
  ],
  voucherApplied: {
    code: 'KOPIPERTAMA',
    discount: 10000
  },
  currentCustomization: null,
  activeOrder: {
    code: '#KK-024',
    step: 2, // 1: dibayar, 2: menunggu check-in, 3: diracik, 4: diantar, 5: selesai
    statusText: 'Menunggu check-in'
  },
  loyaltyStamps: 4
};

// Format Rupiah Currency
function formatRupiah(amount) {
  return 'Rp' + amount.toLocaleString('id-ID');
}

// Show Toast Message
function showToast(message) {
  const toast = document.getElementById('toastNotice');
  if (!toast) return;
  toast.innerHTML = `<span>☕</span> <span>${message}</span>`;
  toast.classList.add('show');
  setTimeout(() => {
    toast.classList.remove('show');
  }, 2500);
}

// App Initialization
document.addEventListener('DOMContentLoaded', async () => {
  try {
    const res = await fetch('data.json');
    if (res.ok) {
      state.data = await res.json();
    }
  } catch (e) {
    console.log('Menggunakan data internal (offline/local ready).');
  }

  initNavigation();
  initDeviceBar();
  initOrderModeToggle();
  renderFavorites();
  initTableScreen();
  initMenuScreen();
  initCustomizationModal();
  renderCart();
  renderTracking();
  renderAccount();
  updateCartBadge();
});

// View Navigation Router
function navigateTo(viewName) {
  state.currentView = viewName;

  document.querySelectorAll('.view-section').forEach(sec => sec.classList.remove('active'));
  const targetView = document.getElementById(`view-${viewName}`);
  if (targetView) targetView.classList.add('active');

  // Update Bottom Nav
  document.querySelectorAll('.nav-tab').forEach(tab => {
    if (tab.dataset.view === viewName) {
      tab.classList.add('active');
    } else {
      tab.classList.remove('active');
    }
  });

  // Update Desktop Nav
  document.querySelectorAll('.desktop-nav-item').forEach(item => {
    if (item.dataset.view === viewName) {
      item.classList.add('active');
    } else {
      item.classList.remove('active');
    }
  });

  window.scrollTo({ top: 0, behavior: 'smooth' });

  // Refresh dynamic contents
  if (viewName === 'cart') renderCart();
  if (viewName === 'tracking') renderTracking();
  if (viewName === 'account') renderAccount();
  if (viewName === 'table') updateSelectedTableUI();
}

function initNavigation() {
  document.querySelectorAll('[data-view]').forEach(el => {
    el.addEventListener('click', (e) => {
      e.preventDefault();
      const view = el.dataset.view;
      if (view) navigateTo(view);
    });
  });
}

// Device Mode Switcher (📱 Mobile View vs 💻 Desktop View)
function initDeviceBar() {
  const btnMobile = document.getElementById('btnModeMobile');
  const btnDesktop = document.getElementById('btnModeDesktop');

  if (btnMobile && btnDesktop) {
    btnMobile.addEventListener('click', () => {
      document.body.classList.remove('mode-desktop');
      btnMobile.classList.add('active');
      btnDesktop.classList.remove('active');
    });

    btnDesktop.addEventListener('click', () => {
      document.body.classList.add('mode-desktop');
      btnDesktop.classList.add('active');
      btnMobile.classList.remove('active');
    });
  }
}

// Toggle Dine-In vs Take-Away
function initOrderModeToggle() {
  const buttons = document.querySelectorAll('.mode-btn');
  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      buttons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      state.orderMode = btn.dataset.mode;
      showToast(`Beralih ke mode ${state.orderMode === 'dine-in' ? 'Dine-In / Meja' : 'Take-Away'}`);
      
      const locHead = document.querySelector('.order-loc-text h4');
      if (locHead) {
        locHead.textContent = state.orderMode === 'dine-in' 
          ? 'Pesan dari rumah, antar ke meja di kafe' 
          : 'Ambil langsung di konter kasir (Take-Away)';
      }
    });
  });
}

// Render "Favorit Teman Kita" on Home View
function renderFavorites() {
  const container = document.getElementById('homeFavGrid');
  if (!container) return;

  const favs = state.data.menu.filter(m => m.isFavorite || m.badge === 'Best Seller').slice(0, 4);
  container.innerHTML = favs.map(item => createProductCardHtml(item)).join('');
  attachProductCardEvents(container);
}

// HTML Generator for Product Cards
function createProductCardHtml(item) {
  return `
    <div class="product-card" data-product-id="${item.id}">
      <div class="card-img-wrapper">
        <img class="card-img" src="${item.image}" alt="${item.name}" loading="lazy" />
        <span class="badge-tag">${item.badge}</span>
        <span class="rating-tag">★ ${item.rating}</span>
      </div>
      <div class="card-body">
        <h4 class="card-title">${item.name}</h4>
        <p class="card-desc">${item.description}</p>
        <div class="card-footer">
          <span class="card-price">${formatRupiah(item.price)}</span>
          <button class="btn-add-mini" title="Kustomisasi & Tambah" data-id="${item.id}">+</button>
        </div>
      </div>
    </div>
  `;
}

// Attach clicks to product cards
function attachProductCardEvents(container) {
  container.querySelectorAll('.product-card').forEach(card => {
    card.addEventListener('click', (e) => {
      const prodId = card.dataset.productId;
      openCustomizationModal(prodId);
    });
  });

  container.querySelectorAll('.btn-add-mini').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const prodId = btn.dataset.id;
      openCustomizationModal(prodId);
    });
  });
}

// ==========================================================================
// SCREEN 2: PILIH MEJA & KURSI
// ==========================================================================
function initTableScreen() {
  const timeChips = document.querySelectorAll('.time-chip');
  timeChips.forEach(chip => {
    chip.addEventListener('click', () => {
      timeChips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      state.selectedTime = chip.dataset.time;
      updateSelectedTableUI();
    });
  });

  const tableNodes = document.querySelectorAll('.table-node');
  tableNodes.forEach(node => {
    node.addEventListener('click', () => {
      if (node.classList.contains('occupied')) {
        showToast('Meja ini sudah penuh terisi untuk jam ini');
        return;
      }

      tableNodes.forEach(n => {
        if (!n.classList.contains('occupied')) n.classList.remove('selected');
      });

      node.classList.add('selected');
      const tableId = node.dataset.tableId;
      const found = state.data.tables.find(t => t.id === tableId);
      if (found) {
        state.selectedTable = found;
        updateSelectedTableUI();
        showToast(`Meja ${found.id} dipilih (${found.area})`);
      }
    });
  });

  const btnConfirm = document.getElementById('btnConfirmTable');
  if (btnConfirm) {
    btnConfirm.addEventListener('click', () => {
      showToast(`Meja ${state.selectedTable.id} dikonfirmasi! Pilih minumanmu.`);
      navigateTo('menu');
    });
  }

  // Switch [Lihat Denah] vs [Daftar Meja]
  const btnDenah = document.getElementById('btnViewDenah');
  const btnDaftar = document.getElementById('btnViewDaftar');
  const floorPlanView = document.getElementById('floorPlanView');
  const tableListView = document.getElementById('tableListView');

  if (btnDenah && btnDaftar) {
    btnDenah.addEventListener('click', () => {
      btnDenah.classList.add('active');
      btnDaftar.classList.remove('active');
      floorPlanView.style.display = 'block';
      tableListView.style.display = 'none';
    });

    btnDaftar.addEventListener('click', () => {
      btnDaftar.classList.add('active');
      btnDenah.classList.remove('active');
      floorPlanView.style.display = 'none';
      tableListView.style.display = 'block';
      renderTableList();
    });
  }
}

function renderTableList() {
  const listContainer = document.getElementById('tableListItems');
  if (!listContainer) return;

  listContainer.innerHTML = state.data.tables.map(t => {
    const isSelected = state.selectedTable.id === t.id;
    const isOcc = t.status === 'occupied';
    return `
      <div class="cart-item-card" style="cursor: ${isOcc ? 'not-allowed' : 'pointer'}; border-color: ${isSelected ? 'var(--primary)' : 'var(--border-card)'};" onclick="selectTableFromList('${t.id}')">
        <div class="profile-avatar" style="width: 44px; height: 44px; font-size: 14px; background: ${isSelected ? 'var(--espresso)' : 'var(--bg-muted)'}; color: ${isSelected ? 'white' : 'var(--espresso)'}">
          ${t.id}
        </div>
        <div style="flex:1">
          <h4 style="font-size: 13px; font-weight:700;">Meja ${t.id} - ${t.area}</h4>
          <p style="font-size: 11px; color: var(--text-muted);">${t.capacity} • ${t.seats} (${t.coord})</p>
        </div>
        <div>
          <span style="font-size: 10px; font-weight:800; padding: 3px 8px; border-radius: var(--radius-full); ${isOcc ? 'background:#EEE; color:#888' : isSelected ? 'background:var(--primary); color:white' : 'background:#E8F5E9; color:#2E7D32'}">
            ${isOcc ? 'PENUH' : isSelected ? 'TERPILIH' : 'TERSEDIA'}
          </span>
        </div>
      </div>
    `;
  }).join('');
}

window.selectTableFromList = function(id) {
  const found = state.data.tables.find(t => t.id === id);
  if (found && found.status !== 'occupied') {
    state.selectedTable = found;
    updateSelectedTableUI();
    renderTableList();
    showToast(`Meja ${found.id} dipilih`);
  }
};

function updateSelectedTableUI() {
  const t = state.selectedTable;
  const title = document.getElementById('summaryTableTitle');
  const subtext = document.getElementById('summaryTableSub');
  const menuTableChip = document.getElementById('menuSelectedTableLabel');

  if (title) title.textContent = `Meja ${t.id}`;
  if (subtext) subtext.textContent = `${t.seats} • ${t.area} • ${state.selectedDate} (${state.selectedTime})`;
  if (menuTableChip) menuTableChip.textContent = `Meja ${t.id} (${t.capacity})`;

  const quickTableText = document.getElementById('quickTableText');
  if (quickTableText) quickTableText.textContent = `${t.id} - ${t.capacity}`;
}

// ==========================================================================
// SCREEN 3: KATALOG MENU
// ==========================================================================
function initMenuScreen() {
  const searchInput = document.getElementById('menuSearchInput');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      state.searchQuery = e.target.value.toLowerCase().trim();
      renderMenuCatalog();
    });
  }

  const chips = document.querySelectorAll('.category-filter-chips .filter-chip');
  chips.forEach(chip => {
    chip.addEventListener('click', () => {
      chips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      state.activeFilter = chip.dataset.filter;
      renderMenuCatalog();
    });
  });

  renderMenuCatalog();
}

function renderMenuCatalog() {
  const container = document.getElementById('menuCatalogGrid');
  if (!container) return;

  let filtered = state.data.menu;

  // Filter category / temperature
  if (state.activeFilter === 'dingin') {
    filtered = filtered.filter(m => m.temp === 'dingin');
  } else if (state.activeFilter === 'panas') {
    filtered = filtered.filter(m => m.temp === 'panas');
  } else if (state.activeFilter === 'signature') {
    filtered = filtered.filter(m => m.badge === 'Signature' || m.badge === 'Best Seller');
  } else if (state.activeFilter === 'cemilan') {
    filtered = filtered.filter(m => m.category === 'cemilan');
  }

  // Filter search
  if (state.searchQuery) {
    filtered = filtered.filter(m => 
      m.name.toLowerCase().includes(state.searchQuery) ||
      m.description.toLowerCase().includes(state.searchQuery)
    );
  }

  if (filtered.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 40px 20px; color: var(--text-muted);">
        <p style="font-size: 14px; font-weight: 700;">Menu tidak ditemukan</p>
        <p style="font-size: 12px; margin-top: 4px;">Coba gunakan kata kunci lain seperti "kopi", "matcha", atau "croissant".</p>
      </div>
    `;
    return;
  }

  container.innerHTML = filtered.map(item => createProductCardHtml(item)).join('');
  attachProductCardEvents(container);
}

// ==========================================================================
// SCREEN 4: PRODUCT DETAIL & CUSTOMIZATION MODAL
// ==========================================================================
function initCustomizationModal() {
  const modal = document.getElementById('customizationModal');
  const closeBtn = document.getElementById('modalCloseBtn');
  const btnAddToCart = document.getElementById('btnAddToCart');

  if (closeBtn && modal) {
    closeBtn.addEventListener('click', () => {
      modal.classList.remove('active');
    });

    modal.addEventListener('click', (e) => {
      if (e.target === modal) modal.classList.remove('active');
    });
  }

  if (btnAddToCart) {
    btnAddToCart.addEventListener('click', () => {
      if (!state.currentCustomization) return;
      
      const c = state.currentCustomization;
      const cartItem = {
        id: 'cart-' + Date.now(),
        productId: c.product.id,
        name: c.product.name,
        size: `${c.size.name} - ${c.size.volume}`,
        sugar: c.sugar.name,
        milk: c.milk.name,
        extraEspresso: c.extraEspresso,
        price: c.calculatedPrice,
        qty: 1,
        image: c.product.image
      };

      state.cart.push(cartItem);
      updateCartBadge();
      showToast(`${c.product.name} berhasil dimasukkan keranjang!`);
      modal.classList.remove('active');
    });
  }
}

function openCustomizationModal(productId) {
  const product = state.data.menu.find(m => m.id === productId);
  if (!product) return;

  const modal = document.getElementById('customizationModal');
  if (!modal) return;

  // Set initial customization defaults
  state.currentCustomization = {
    product: product,
    size: { id: 'medium', name: 'Sedang', volume: '350 ml', extra: 4000 },
    sugar: { id: 'less', name: 'Kurang manis' },
    milk: { id: 'fresh', name: 'Susu segar', extra: 0 },
    extraEspresso: false,
    calculatedPrice: product.price + 4000
  };

  // Populate UI
  document.getElementById('modalImg').src = product.image;
  document.getElementById('modalTitle').textContent = product.name;
  document.getElementById('modalBasePrice').textContent = formatRupiah(product.price);
  document.getElementById('modalDesc').textContent = product.description;

  // Render Cup Size Choices
  const cupContainer = document.getElementById('cupSizesContainer');
  cupContainer.innerHTML = `
    <div class="cup-card" data-size="small" data-extra="0" onclick="selectCupSize('small', 'Kecil', '250 ml', 0)">
      <div class="cup-silhouette">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 8h1a4 4 0 0 1 0 8h-1M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/></svg>
      </div>
      <div class="cup-label">Kecil</div>
      <div class="cup-vol">250 ml</div>
      <div class="cup-extra">+Rp0</div>
    </div>
    <div class="cup-card active" data-size="medium" data-extra="4000" onclick="selectCupSize('medium', 'Sedang', '350 ml', 4000)">
      <div class="cup-silhouette">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 8h1a4 4 0 0 1 0 8h-1M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/></svg>
      </div>
      <div class="cup-label">Sedang</div>
      <div class="cup-vol">350 ml</div>
      <div class="cup-extra">+Rp4.000</div>
    </div>
    <div class="cup-card" data-size="large" data-extra="8000" onclick="selectCupSize('large', 'Besar', '500 ml', 8000)">
      <div class="cup-silhouette">
        <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 8h1a4 4 0 0 1 0 8h-1M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z"/></svg>
      </div>
      <div class="cup-label">Besar</div>
      <div class="cup-vol">500 ml</div>
      <div class="cup-extra">+Rp8.000</div>
    </div>
  `;

  // Render Sugar Level Choices
  const sugarContainer = document.getElementById('sugarChipsContainer');
  sugarContainer.innerHTML = `
    <div class="radio-chip" onclick="selectSugar('Tanpa gula (0%)', this)">Tanpa gula</div>
    <div class="radio-chip active" onclick="selectSugar('Kurang manis (50%)', this)">Kurang manis</div>
    <div class="radio-chip" onclick="selectSugar('Normal (100%)', this)">Normal</div>
  `;

  // Render Milk Choices
  const milkContainer = document.getElementById('milkChipsContainer');
  milkContainer.innerHTML = `
    <div class="radio-chip active" onclick="selectMilk('Susu segar', 0, this)">Susu segar (+Rp0)</div>
    <div class="radio-chip" onclick="selectMilk('Oat milk', 6000, this)">Oat milk (+Rp6.000)</div>
  `;

  // Reset espresso switch
  const espressoToggle = document.getElementById('toggleExtraEspresso');
  if (espressoToggle) {
    espressoToggle.checked = false;
    espressoToggle.onchange = (e) => {
      state.currentCustomization.extraEspresso = e.target.checked;
      recalcCustomizationPrice();
    };
  }

  recalcCustomizationPrice();
  modal.classList.add('active');
}

window.selectCupSize = function(id, name, vol, extra) {
  document.querySelectorAll('.cup-card').forEach(c => c.classList.remove('active'));
  const target = document.querySelector(`.cup-card[data-size="${id}"]`);
  if (target) target.classList.add('active');

  state.currentCustomization.size = { id, name, volume: vol, extra };
  recalcCustomizationPrice();
};

window.selectSugar = function(label, element) {
  element.parentElement.querySelectorAll('.radio-chip').forEach(c => c.classList.remove('active'));
  element.classList.add('active');
  state.currentCustomization.sugar = { name: label };
  recalcCustomizationPrice();
};

window.selectMilk = function(label, extra, element) {
  element.parentElement.querySelectorAll('.radio-chip').forEach(c => c.classList.remove('active'));
  element.classList.add('active');
  state.currentCustomization.milk = { name: label, extra };
  recalcCustomizationPrice();
};

function recalcCustomizationPrice() {
  const c = state.currentCustomization;
  if (!c) return;

  const base = c.product.price;
  const sizeExtra = c.size.extra || 0;
  const milkExtra = c.milk.extra || 0;
  const espExtra = c.extraEspresso ? 5000 : 0;

  const total = base + sizeExtra + milkExtra + espExtra;
  c.calculatedPrice = total;

  // Update Summary Card in Modal
  document.getElementById('sumSize').textContent = `${c.size.name} - ${c.size.volume}`;
  document.getElementById('sumSugar').textContent = c.sugar.name;
  document.getElementById('sumMilk').textContent = c.milk.name;
  document.getElementById('sumEspresso').textContent = c.extraEspresso ? 'Tambah 1 Shot (+Rp5.000)' : 'Normal';

  // Update Sticky CTA
  const ctaBtn = document.getElementById('btnAddToCart');
  if (ctaBtn) {
    ctaBtn.textContent = `Tambah ke Keranjang • ${formatRupiah(total)}`;
  }
}

// ==========================================================================
// SCREEN 5: KERANJANG (CART & CHECKOUT)
// ==========================================================================
function renderCart() {
  const listContainer = document.getElementById('cartItemsList');
  if (!listContainer) return;

  if (state.cart.length === 0) {
    listContainer.innerHTML = `
      <div style="text-align: center; padding: 40px 10px; background: white; border-radius: var(--radius-md); border: 1px solid var(--border-card);">
        <p style="font-size: 14px; font-weight: 700; color: var(--espresso);">Keranjangmu masih kosong</p>
        <p style="font-size: 11px; color: var(--text-muted); margin: 6px 0 16px 0;">Yuk temukan kopi dan cemilan favoritmu sekarang!</p>
        <button class="btn-primary" style="margin: 0 auto;" onclick="navigateTo('menu')">Lihat Menu</button>
      </div>
    `;
    updatePricingBreakdown(0);
    return;
  }

  let subtotal = 0;
  listContainer.innerHTML = state.cart.map(item => {
    const itemTotal = item.price * item.qty;
    subtotal += itemTotal;
    return `
      <div class="cart-item-card">
        <img class="cart-item-img" src="${item.image}" alt="${item.name}" />
        <div class="cart-item-info">
          <h4 class="cart-item-name">${item.name}</h4>
          <p class="cart-item-customs">${item.size} • ${item.sugar} • ${item.milk}</p>
          <div class="cart-item-price">${formatRupiah(itemTotal)}</div>
        </div>
        <div class="cart-qty-ctrl">
          <button class="qty-btn" onclick="updateItemQty('${item.id}', -1)">-</button>
          <span class="qty-number">${item.qty}</span>
          <button class="qty-btn" onclick="updateItemQty('${item.id}', 1)">+</button>
        </div>
      </div>
    `;
  }).join('');

  renderCrossSellSnacks();
  updatePricingBreakdown(subtotal);
}

window.updateItemQty = function(cartId, change) {
  const index = state.cart.findIndex(i => i.id === cartId);
  if (index === -1) return;

  state.cart[index].qty += change;
  if (state.cart[index].qty <= 0) {
    state.cart.splice(index, 1);
    showToast('Menu dihapus dari keranjang');
  }

  updateCartBadge();
  renderCart();
};

function renderCrossSellSnacks() {
  const container = document.getElementById('crossSellScroll');
  if (!container) return;

  const snacks = state.data.menu.filter(m => m.category === 'cemilan').slice(0, 3);
  container.innerHTML = snacks.map(s => `
    <div class="cross-sell-card">
      <img class="cross-sell-img" src="${s.image}" alt="${s.name}" />
      <span class="cross-sell-title">${s.name}</span>
      <span class="cross-sell-price">${formatRupiah(s.price)}</span>
      <button class="btn-secondary" style="padding: 4px; font-size: 11px; border-radius: var(--radius-sm);" onclick="addDirectSnack('${s.id}')">+ Tambah</button>
    </div>
  `).join('');
}

window.addDirectSnack = function(productId) {
  const snack = state.data.menu.find(m => m.id === productId);
  if (!snack) return;

  state.cart.push({
    id: 'cart-' + Date.now(),
    productId: snack.id,
    name: snack.name,
    size: '1 Porsi hangat',
    sugar: 'Standar resep',
    milk: 'Tanpa susu',
    extraEspresso: false,
    price: snack.price,
    qty: 1,
    image: snack.image
  });

  updateCartBadge();
  renderCart();
  showToast(`${snack.name} ditambahkan ke keranjang!`);
};

function updatePricingBreakdown(subtotal) {
  const discount = state.voucherApplied ? state.voucherApplied.discount : 0;
  const serviceFee = subtotal > 0 ? 2000 : 0;
  const total = Math.max(0, subtotal - discount + serviceFee);

  const subEl = document.getElementById('cartSubtotal');
  const discEl = document.getElementById('cartDiscount');
  const feeEl = document.getElementById('cartServiceFee');
  const totalEl = document.getElementById('cartTotal');
  const ctaBtn = document.getElementById('btnCheckoutPay');

  if (subEl) subEl.textContent = formatRupiah(subtotal);
  if (discEl) discEl.textContent = `- ${formatRupiah(discount)}`;
  if (feeEl) feeEl.textContent = formatRupiah(serviceFee);
  if (totalEl) totalEl.textContent = formatRupiah(total);

  if (ctaBtn) {
    ctaBtn.disabled = subtotal === 0;
    ctaBtn.textContent = `Pesan & Bayar • ${formatRupiah(total)}`;
  }
}

function updateCartBadge() {
  const totalQty = state.cart.reduce((sum, item) => sum + item.qty, 0);
  const badges = document.querySelectorAll('.cart-count-badge');
  badges.forEach(b => {
    b.textContent = totalQty;
    b.style.display = totalQty > 0 ? 'flex' : 'none';
  });
}

// Checkout Action
document.addEventListener('click', (e) => {
  if (e.target && e.target.id === 'btnCheckoutPay') {
    if (state.cart.length === 0) return;

    state.activeOrder.code = '#KK-0' + Math.floor(10 + Math.random() * 90);
    state.activeOrder.step = 2;
    state.activeOrder.statusText = 'Menunggu check-in di kafe';
    state.loyaltyStamps = Math.min(8, state.loyaltyStamps + 1);

    showToast('Pembayaran berhasil! Mejamu sedang dipersiapkan.');
    navigateTo('tracking');
  }
});

// ==========================================================================
// SCREEN 6: STATUS & TRACKING PESANAN (#KK-024)
// ==========================================================================
function renderTracking() {
  const codeEl = document.getElementById('trackingOrderCode');
  const badgeEl = document.getElementById('trackingStatusBadge');
  const qrContainer = document.getElementById('trackingQrBox');

  if (codeEl) codeEl.textContent = state.activeOrder.code;
  if (badgeEl) badgeEl.textContent = state.activeOrder.statusText;

  // Generate crisp SVG QR Code pattern
  if (qrContainer) {
    qrContainer.innerHTML = generateCrispQrSvg(state.activeOrder.code);
  }

  // Render Stepper State
  const steps = [
    { num: 1, title: 'Pesanan dibayar', sub: 'Lunas • GoPay / QRIS' },
    { num: 2, title: 'Menunggu check-in', sub: `Tunjukkan kode ${state.activeOrder.code} di kasir` },
    { num: 3, title: 'Diracikkan barista', sub: 'Kopi akan diseduh segar saat kamu tiba' },
    { num: 4, title: `Diantar ke meja ${state.selectedTable.id}`, sub: 'Barista mengantar ke posisi mejamu' },
    { num: 5, title: 'Selesai', sub: 'Selamat menikmati kopimu!' }
  ];

  const stepperContainer = document.getElementById('orderStepperContainer');
  if (stepperContainer) {
    const curStep = state.activeOrder.step;
    stepperContainer.innerHTML = steps.map(s => {
      const isDone = s.num < curStep;
      const isActive = s.num === curStep;
      const stateClass = isDone ? 'done' : (isActive ? 'active' : '');
      const icon = isDone ? '✓' : s.num;

      return `
        <div class="stepper-item ${stateClass}">
          <div class="stepper-dot">${icon}</div>
          <div class="stepper-text">
            <h5>${s.title}</h5>
            <p>${s.sub}</p>
          </div>
        </div>
      `;
    }).join('');
  }

  // Render tracking items
  const summaryContainer = document.getElementById('trackingItemsSummary');
  if (summaryContainer) {
    summaryContainer.innerHTML = state.cart.map(item => `
      <div style="display:flex; justify-content:space-between; margin-bottom:8px; font-size:12px;">
        <span>${item.qty}x ${item.name} (${item.size})</span>
        <span style="font-weight:700;">${formatRupiah(item.price * item.qty)}</span>
      </div>
    `).join('');
  }
}

// Generate Realistic SVG QR Code
function generateCrispQrSvg(text) {
  return `
    <svg width="124" height="124" viewBox="0 0 100 100" fill="#1E1712">
      <!-- Corners -->
      <rect x="5" y="5" width="28" height="28" rx="4" fill="none" stroke="#1E1712" stroke-width="6"/>
      <rect x="12" y="12" width="14" height="14" rx="2" fill="#1E1712"/>
      
      <rect x="67" y="5" width="28" height="28" rx="4" fill="none" stroke="#1E1712" stroke-width="6"/>
      <rect x="74" y="12" width="14" height="14" rx="2" fill="#1E1712"/>

      <rect x="5" y="67" width="28" height="28" rx="4" fill="none" stroke="#1E1712" stroke-width="6"/>
      <rect x="12" y="74" width="14" height="14" rx="2" fill="#1E1712"/>

      <!-- Random QR Pixel Pattern -->
      <rect x="38" y="8" width="6" height="6" />
      <rect x="48" y="12" width="6" height="6" />
      <rect x="42" y="24" width="6" height="6" />
      <rect x="54" y="28" width="6" height="6" />
      <rect x="10" y="44" width="6" height="6" />
      <rect x="22" y="48" width="6" height="6" />
      <rect x="38" y="40" width="8" height="8" rx="2" fill="#94532B" />
      <rect x="52" y="44" width="6" height="6" />
      <rect x="64" y="38" width="6" height="6" />
      <rect x="78" y="44" width="6" height="6" />
      <rect x="44" y="60" width="6" height="6" />
      <rect x="56" y="68" width="6" height="6" />
      <rect x="70" y="72" width="6" height="6" />
      <rect x="84" y="64" width="6" height="6" />
      <rect x="40" y="80" width="6" height="6" />
      <rect x="62" y="86" width="6" height="6" />
      <rect x="76" y="82" width="6" height="6" />
    </svg>
  `;
}

// Interactive Barista Progression Simulator (Great for Testing / Demonstration)
window.simulateNextStatus = function() {
  if (state.activeOrder.step < 5) {
    state.activeOrder.step += 1;
    const labels = [
      '',
      'Pesanan dibayar',
      'Menunggu check-in',
      'Sedang diracik barista ☕',
      `Sedang diantar ke Meja ${state.selectedTable.id} 🚶`,
      'Pesanan telah sampai! Selesai'
    ];
    state.activeOrder.statusText = labels[state.activeOrder.step];
    renderTracking();
    showToast(`Status pesanan: ${labels[state.activeOrder.step]}`);
  } else {
    showToast('Pesanan sudah selesai. Terima kasih!');
  }
};

// ==========================================================================
// SCREEN 7: AKUN & PROFILE
// ==========================================================================
function renderAccount() {
  const stampsContainer = document.getElementById('accountStampsGrid');
  if (!stampsContainer) return;

  const total = 8;
  const current = state.loyaltyStamps;

  let html = '';
  for (let i = 1; i <= total; i++) {
    const isStamped = i <= current;
    html += `
      <div class="stamp-slot ${isStamped ? 'stamped' : ''}">
        ${isStamped ? '✓' : i}
      </div>
    `;
  }
  stampsContainer.innerHTML = html;

  const progLabel = document.getElementById('accountLoyaltyLabel');
  if (progLabel) {
    progLabel.textContent = `${current} dari ${total} stempel terkumpul`;
  }
}
