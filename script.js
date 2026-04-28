/* ============================================================
   Caspian Flame · interactions
============================================================ */

// ---------- Menu data ----------
const MENU = {
  doner: {
    label: 'Döner',
    icon: '🥙',
    items: [
      { name: 'Beef Döner Plate', price: '25.99', desc: 'Marinated AAA beef over saffron rice or bulgur, fresh herbs and signature sauces.' },
      { name: 'Chicken Döner Plate', price: '24.99', desc: 'Juicy marinated chicken with rice or bulgur, herbs and signature sauces.' },
      { name: 'Beef Döner Lavash Wrap', price: '23.99', desc: 'AAA beef, fresh veggies and herbs in soft lavash with our signature sauces.' },
      { name: 'Chicken Döner Lavash Wrap', price: '22.99', desc: 'Marinated chicken with veggies and herbs in soft lavash.' },
      { name: 'Beef Döner Bread', price: '21.99', desc: 'AAA beef, fresh veggies and signature sauces in warm baked bread.' },
      { name: 'Chicken Döner Bread', price: '20.99', desc: 'Marinated chicken, veggies and signature sauces in warm baked bread.' },
      { name: 'Beef Döner Lavash (Reg)', price: '17.99', desc: 'Regular size — large includes free pops.' },
      { name: 'Chicken Döner Lavash (Reg)', price: '16.99', desc: 'Regular size — large includes free pops.' },
      { name: 'Beef Döner Bread (Reg)', price: '15.99', desc: 'Regular size — large includes free pops.' },
      { name: 'Chicken Döner Bread (Reg)', price: '14.99', desc: 'Regular size — large includes free pops.' },
    ]
  },
  pide: {
    label: 'Pide',
    icon: '🫓',
    items: [
      { name: 'Beef Pide', price: '23.99', desc: 'Hand-stretched flatbread with AAA beef, mozzarella, roasted onions, peppers and mushrooms.' },
      { name: 'Chicken Pide', price: '22.99', desc: 'Hand-stretched flatbread with marinated chicken and our signature toppings.' },
      { name: 'Lahmacun', price: '17.99', desc: 'Crispy thin flatbread with spiced ground veal, red onions, tomatoes and parsley.' },
      { name: 'Pita', price: '9.99', desc: 'Handmade dough stretched paper-thin, stuffed with various fillings, rolled in a unique shape.' },
    ]
  },
  pizza: {
    label: 'Pizza',
    icon: '🍕',
    items: [
      { name: 'Margherita Pizza', price: '24.99', desc: 'Tomato sauce, Fior di Latte mozzarella and fresh basil. The classic.' },
      { name: 'Mexico Pizza', price: '24.99', desc: 'Mozzarella, taco sauce, jalapeños, red onions and bolognese.' },
      { name: 'Tuna Pizza', price: '24.99', desc: 'Mozzarella, tuna, red onions, jalapeños and taco sauce.' },
      { name: 'Isabella Pizza', price: '24.99', desc: 'Mozzarella, olives, roasted peppers, caramelised onions and roasted mushrooms.' },
      { name: 'Banana Curry Pizza', price: '24.99', desc: 'Banana slices, pineapple and a hint of curry. Sweet, savory & exotic.' },
    ]
  },
  tantuni: {
    label: 'Tantuni',
    icon: '🌯',
    items: [
      { name: 'Tantuni Lavash (Large)', price: '24.99', desc: 'Chopped AAA beef, tomato, red onion & parsley in soft lavash. Lemon & chili on the side.' },
      { name: 'Tantuni Bread (Large)', price: '22.99', desc: 'Chopped AAA beef in warm bread with lemon & spicy chili pepper.' },
      { name: 'Tantuni Lavash (Reg)', price: '18.99', desc: 'Chopped AAA beef in soft lavash. Regular size.' },
      { name: 'Tantuni Bread (Reg)', price: '17.99', desc: 'Chopped AAA beef in warm bread. Regular size — large includes free pops.' },
    ]
  },
  pasta: {
    label: 'Pasta',
    icon: '🍝',
    items: [
      { name: 'Spaghetti Bolognese', price: '23.99', desc: 'Spaghetti with rich slow-simmered beef bolognese, finished with parmesan.' },
      { name: 'Lasagna', price: '23.99', desc: 'Layers of pasta, beef bolognese, creamy béchamel, mozzarella and parmesan, baked golden.' },
    ]
  },
  mezze: {
    label: 'Mezze',
    icon: '🥣',
    items: [
      { name: 'Hummus', price: '9.99', desc: 'Chickpeas, tahini, lemon, garlic and extra virgin olive oil. Smooth and creamy.' },
      { name: 'Lentil Soup', price: '9.99', desc: 'Red lentils, onions and aromatic spices. Smooth, nourishing — served with lemon.' },
      { name: 'Falafel (10 pcs)', price: '22.99', desc: 'Chickpea balls seasoned with herbs and spices.' },
      { name: 'Falafel (6 pcs)', price: '31.98', desc: 'Chickpea balls seasoned with herbs and spices.' },
      { name: 'Dolma / Cabbage', price: '31.98', desc: 'Cabbage leaves stuffed with ground beef, rice, onions and herbs, simmered to perfection.' },
      { name: 'Börek', price: '9.99', desc: 'Flaky filo pastry — choose meat, cheese, spinach-cheese or potato filling.' },
      { name: 'Ayran with Veggies & Greens', price: '7.99', desc: 'Chilled yogurt, diced cucumber, smashed garlic and fresh herbs. Refreshing.' },
    ]
  },
  burger: {
    label: 'Burger',
    icon: '🍔',
    items: [
      { name: 'Smashed Double Veal Patty', price: '24.99', desc: 'Two smashed veal patties, melted cheese, lettuce, tomato, onion, pickles, signature sauces.' },
      { name: 'Smashed Single Veal Patty', price: '17.99', desc: 'Single smashed veal patty with melted cheese and the works in a toasted bun.' },
      { name: 'Chicken Burger', price: '14.99', desc: 'Grilled chicken breast, lettuce, tomato, red onion, pickles and house sauces.' },
    ]
  },
  sweets: {
    label: 'Sweets',
    icon: '🍰',
    items: [
      { name: 'Honey Cake / Medovik', price: '9.99', desc: 'Layers of honey-infused sponge filled with rich homemade cream. A Caucasian classic.' },
      { name: 'Stacked Sweet', price: '4.99', desc: 'Caucasian-Anatolian layered pastry with a rich walnut filling. Buttery, lightly sweet.' },
    ]
  },
  drinks: {
    label: 'Drinks',
    icon: '🥤',
    items: [
      { name: 'Coca Cola Glass', price: '4.49', desc: 'Classic Coca Cola in a glass bottle.' },
      { name: 'Apple Juice', price: '4.49', desc: 'Crisp apple juice.' },
      { name: 'Perrier', price: '4.49', desc: 'Sparkling mineral water.' },
      { name: 'Coca Cola', price: '3.99', desc: 'The original.' },
      { name: 'Coca Cola Zero', price: '3.99', desc: 'Zero sugar.' },
      { name: 'Coca Cola Diet', price: '3.99', desc: 'Diet.' },
      { name: 'Pepsi', price: '3.99', desc: 'Classic Pepsi.' },
      { name: 'Pepsi Zero', price: '3.99', desc: 'Zero sugar Pepsi.' },
      { name: 'Pepsi Diet', price: '3.99', desc: 'Diet Pepsi.' },
      { name: 'Sprite', price: '3.99', desc: 'Crisp lemon-lime.' },
      { name: 'Fanta', price: '3.99', desc: 'Orange soda.' },
      { name: 'Ginger Ale', price: '3.99', desc: 'Ginger ale.' },
      { name: 'Ice Tea', price: '3.99', desc: 'Chilled ice tea.' },
      { name: 'Spring Water', price: '1.99', desc: 'Still water.' },
    ]
  },
};

// ---------- Loader ----------
window.addEventListener('load', () => {
  setTimeout(() => document.getElementById('loader')?.classList.add('gone'), 600);
});

// ---------- Year ----------
document.getElementById('year').textContent = new Date().getFullYear();

// ---------- Nav scroll & mobile ----------
const nav = document.getElementById('nav');
const onScroll = () => nav.classList.toggle('scrolled', window.scrollY > 30);
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

const burger = document.getElementById('navBurger');
burger.addEventListener('click', () => nav.classList.toggle('open'));
document.querySelectorAll('.nav-links a').forEach(a =>
  a.addEventListener('click', () => nav.classList.remove('open'))
);

// ---------- Cursor flame ----------
const cursor = document.getElementById('cursorFlame');
let cx = 0, cy = 0, tx = 0, ty = 0;
window.addEventListener('mousemove', e => { tx = e.clientX; ty = e.clientY; });
function tickCursor(){
  cx += (tx - cx) * 0.18;
  cy += (ty - cy) * 0.18;
  cursor.style.transform = `translate(${cx}px,${cy}px) translate(-50%,-50%)`;
  requestAnimationFrame(tickCursor);
}
tickCursor();
document.querySelectorAll('a, button, .dish, .tilt').forEach(el => {
  el.addEventListener('mouseenter', () => { cursor.style.width = '60px'; cursor.style.height = '60px'; });
  el.addEventListener('mouseleave', () => { cursor.style.width = '24px'; cursor.style.height = '24px'; });
});

// ---------- Hero parallax ----------
const heroStage = document.getElementById('heroStage');
const heroLayers = document.querySelectorAll('.hero-stage [data-depth]');
heroStage.addEventListener('mousemove', e => {
  const r = heroStage.getBoundingClientRect();
  const px = (e.clientX - r.left) / r.width - 0.5;
  const py = (e.clientY - r.top) / r.height - 0.5;
  heroLayers.forEach(l => {
    const d = parseFloat(l.dataset.depth);
    l.style.transform = `translate3d(${px * d * 40}px, ${py * d * 40}px, 0) rotateX(${-py * d * 8}deg) rotateY(${px * d * 8}deg)`;
  });
});
heroStage.addEventListener('mouseleave', () => {
  heroLayers.forEach(l => l.style.transform = '');
});

// ---------- Tilt card (story & others) ----------
document.querySelectorAll('[data-tilt], .visit-card, .cater-form').forEach(card => {
  card.addEventListener('mousemove', e => {
    const r = card.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    card.style.transform = `perspective(1400px) rotateY(${px * 12}deg) rotateX(${-py * 12}deg) scale3d(1.02, 1.02, 1.02)`;
    card.style.zIndex = 10;
  });
  card.addEventListener('mouseleave', () => {
    card.style.transform = '';
    card.style.zIndex = 1;
  });
});

// ---------- Menu rendering ----------
const rail = document.getElementById('menuRail');
const tabs = document.getElementById('menuTabs');

function renderMenu(key){
  const data = MENU[key];
  rail.innerHTML = data.items.map((it, i) => `
    <article class="dish" style="animation-delay:${i * 60}ms">
      <span class="dish-cat">${data.label}</span>
      <div class="dish-icon">${data.icon}</div>
      <h3 class="dish-name">${it.name}</h3>
      <p class="dish-desc">${it.desc}</p>
      <div class="dish-foot">
        <span class="dish-price">$${it.price.split('.')[0]}<sup>.${it.price.split('.')[1]}</sup></span>
        <span class="dish-arrow">↗</span>
      </div>
    </article>
  `).join('');
  // re-bind 3D tilt for new dishes
  rail.querySelectorAll('.dish').forEach(bindDishTilt);
  rail.scrollTo({ left: 0, behavior: 'smooth' });
}

function bindDishTilt(el){
  el.addEventListener('mousemove', e => {
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    el.style.transform = `translateY(-10px) rotateY(${px * 14}deg) rotateX(${-py * 14}deg)`;
  });
  el.addEventListener('mouseleave', () => el.style.transform = '');
}

tabs.addEventListener('click', e => {
  const btn = e.target.closest('button[data-tab]');
  if (!btn) return;
  tabs.querySelectorAll('button').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  renderMenu(btn.dataset.tab);
});
renderMenu('doner');

// ---------- Rail nav ----------
const cardStep = () => {
  const c = rail.querySelector('.dish');
  return c ? c.getBoundingClientRect().width + 28 : 320;
};
document.getElementById('railPrev').addEventListener('click',
  () => rail.scrollBy({ left: -cardStep(), behavior: 'smooth' }));
document.getElementById('railNext').addEventListener('click',
  () => rail.scrollBy({ left: cardStep(), behavior: 'smooth' }));

// ---------- Drag-to-scroll on rail ----------
let isDown = false, startX = 0, startScroll = 0;
rail.addEventListener('pointerdown', e => {
  isDown = true; startX = e.clientX; startScroll = rail.scrollLeft;
  rail.setPointerCapture(e.pointerId);
});
rail.addEventListener('pointermove', e => {
  if (!isDown) return;
  rail.scrollLeft = startScroll - (e.clientX - startX);
});
['pointerup','pointercancel','pointerleave'].forEach(ev =>
  rail.addEventListener(ev, () => isDown = false));

// ---------- Signature parallax ----------
const parallaxLayers = document.querySelectorAll('.signature .parallax-layer');
const sigSection = document.querySelector('.signature');
window.addEventListener('scroll', () => {
  const r = sigSection.getBoundingClientRect();
  if (r.bottom < 0 || r.top > window.innerHeight) return;
  const progress = (window.innerHeight - r.top) / (window.innerHeight + r.height);
  parallaxLayers.forEach(l => {
    const d = parseFloat(l.dataset.depth || 0.3);
    l.style.transform = `translate3d(0, ${(progress - 0.5) * d * 200}px, 0) scale(${1 + d * 0.1})`;
  });
}, { passive: true });

// ---------- Reveal on scroll ----------
const io = new IntersectionObserver(entries => {
  entries.forEach(e => e.isIntersecting && e.target.classList.add('in'));
}, { threshold: 0.15 });
document.querySelectorAll('.reveal').forEach(el => io.observe(el));

// ---------- Promo bar ----------
const PROMO_SLIDES = [
  { pill: 'Today', text: '<strong>Beef Döner Plate</strong> — chef\'s pick of the day · $25.99' },
  { pill: 'Free Pops', text: 'Large döner combos — <strong>free pops included</strong>' },
  { pill: 'New', text: '<strong>Banana Curry Pizza</strong> — sweet, savory, exotic' },
  { pill: 'Catering', text: 'Book us for your event — <strong>20 to 500 guests</strong>' },
  { pill: 'Hand-Stretched', text: 'All <strong>pide & lavash</strong> baked fresh every morning' },
];
const promoTrack = document.getElementById('promoTrack');
const promoEl = document.getElementById('promo');
const promoClose = document.getElementById('promoClose');

if (!localStorage.getItem('cf_promo_dismissed')) {
  promoTrack.innerHTML = PROMO_SLIDES.map((s, i) =>
    `<div class="slide${i === 0 ? ' active' : ''}"><span class="pill">${s.pill}</span><span>${s.text}</span></div>`
  ).join('');
  let pi = 0;
  setInterval(() => {
    const slides = promoTrack.querySelectorAll('.slide');
    slides[pi].classList.remove('active');
    pi = (pi + 1) % slides.length;
    slides[pi].classList.add('active');
  }, 4000);
} else {
  document.body.classList.add('promo-dismissed');
}

promoClose.addEventListener('click', () => {
  document.body.classList.add('promo-dismissed');
  localStorage.setItem('cf_promo_dismissed', '1');
});

// ---------- Catering form ----------
document.getElementById('cateringForm').addEventListener('submit', e => {
  e.preventDefault();
  const f = e.target;
  const msg = document.getElementById('cateringMsg');
  msg.textContent = `Thanks ${f.name.value.trim()}! We'll send a custom quote for ${f.guests.value} guests on ${f.date.value} to ${f.email.value}.`;
  setTimeout(() => f.reset(), 100);
});

// ---------- Reservation form ----------
document.getElementById('reserveForm').addEventListener('submit', e => {
  e.preventDefault();
  const f = e.target;
  const msg = document.getElementById('reserveMsg');
  msg.textContent = `Thank you, ${f.name.value.trim()} — we’ll confirm your table for ${f.guests.value} on ${f.date.value} at ${f.time.value}.`;
  f.reset(); f.guests.value = 2;
});
