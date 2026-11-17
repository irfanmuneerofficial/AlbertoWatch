/* Alberto Watches - basic version (plain HTML, CSS and JavaScript).
   Data comes from data/data.js. Pages are switched with the URL hash (#men, #gallery ...). */

const { categories, lineups, technologies, products, stores } = SITE_DATA;
const app = document.getElementById('app');

/* ---------- small helpers ---------- */
const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));
const money = n => 'Rs ' + n.toLocaleString('en-US');
const esc = s => String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const load = (key, fallback) => { try { const v = localStorage.getItem(key); return v ? JSON.parse(v) : fallback; } catch (e) { return fallback; } };
const save = (key, value) => { try { localStorage.setItem(key, JSON.stringify(value)); } catch (e) { /* storage not available */ } };
const byId = id => products.find(p => p.id === id);
const catName = id => categories.find(c => c.id === id).label;
const lineName = id => lineups.find(l => l.id === id).label;
const techName = id => technologies.find(t => t.id === id).label;

let cart = load('ab_cart', []);
let user = load('ab_user', null);

function toast(text) {
  const t = $('#toast');
  t.textContent = text;
  t.classList.add('show');
  clearTimeout(toast.timer);
  toast.timer = setTimeout(() => t.classList.remove('show'), 2600);
}

/* a photo inside the ivory plate. Two photos need special handling. */
function photo(src, alt) {
  let cls = '';
  if (src.indexOf('citizen-eco-stiletto/closeup') > -1) cls = ' class="dark"';
  if (src.indexOf('rolex-submariner/rolex-submariner.jpg') > -1) cls = ' class="cover"';
  return '<img src="' + src + '" alt="' + esc(alt) + '" loading="lazy"' + cls + '>';
}

function card(p) {
  return '<article class="card" data-open="' + p.id + '" tabindex="0">' +
    '<span class="tag">' + lineName(p.lineup) + '</span>' +
    '<div class="plate">' + photo(p.images[0], p.name) + '</div>' +
    '<div class="card-body"><small>' + p.brand + '</small><h3>' + esc(p.name) + '</h3>' +
    '<div class="card-row"><span class="price">' + money(p.price) + '</span>' +
    '<button class="add" data-add="' + p.id + '">Add</button></div></div></article>';
}
const grid = list => list.length ? '<div class="grid">' + list.map(card).join('') + '</div>' : '<p class="empty">No watches match your choice.</p>';
const head = (title, text) => '<section class="page-head"><h1>' + title + '</h1>' + (text ? '<p>' + text + '</p>' : '') + '</section>';
const heading = (small, title) => '<div class="center"><span class="small-title">' + small + '</span><h2 class="title">' + title + '</h2><div class="rule"></div></div>';

/* ======================================================================
   PAGES
   ====================================================================== */
const pages = {};

pages.home = () => {
  const hero = byId('rolex-submariner');
  const feat = products.filter(p => p.featured).concat(products.filter(p => !p.featured)).slice(0, 8);
  const cats = categories.map(c => {
    const list = products.filter(p => p.category === c.id);
    const shown = list.find(p => p.featured) || list[0];
    return '<a class="cat-card" href="#' + c.id + '"><div class="plate">' + photo(shown.images[0], shown.name) + '</div><h3>' + c.label + '</h3><p>' + c.blurb + '</p><span>' + list.length + ' timepieces</span></a>';
  }).join('');
  const lines = lineups.map(l => '<a class="lineup" href="#lineup-' + l.id + '"><span>' + l.brand + '</span><h3>' + l.label + '</h3><p>' + l.blurb + '</p></a>').join('');
  return '<section class="hero"><div class="wrap hero-grid"><div>' +
    '<span class="small-title">Fine timepieces, repair and appraisal</span>' +
    '<h1>Timeless<br>by <em>Tradition</em></h1>' +
    '<p class="lead">Rolex, Bulova, Citizen and Michael Kors, chosen with care and serviced by people who love watches.</p>' +
    '<div class="hero-btns"><a class="btn" href="#watches">Explore the collection</a><a class="btn-outline" href="#stores">Visit a boutique</a></div></div>' +
    '<div class="hero-img"><div class="plate" style="border-radius:192px 192px 0 0">' + photo(hero.images[0], hero.name) + '</div></div></div></section>' +
    '<div class="brands"><span>Rolex</span><span>Bulova</span><span>Citizen</span><span>Michael Kors</span></div>' +
    '<section class="section"><div class="wrap">' + heading('Shop by wearer', 'Men, Women and Unisex') + '<div class="three">' + cats + '</div></div></section>' +
    '<section class="section alt"><div class="wrap">' + heading('The Alberto selection', 'Featured timepieces') + grid(feat) +
    '<p class="center" style="margin-top:34px"><a class="btn-outline" href="#watches">View all watches</a></p></div></section>' +
    '<section class="section"><div class="wrap">' + heading('Collections', 'Four line-ups') + '<div class="four">' + lines + '</div></div></section>' +
    '<section class="section alt"><div class="wrap">' + heading('Beyond the counter', 'A full-service watch house') +
    '<div class="services"><div><h3>Retail</h3><p>A considered range of luxury and everyday watches.</p></div><div><h3>Repair</h3><p>Battery, strap and crystal replacement through to full movement servicing.</p></div><div><h3>Appraisal</h3><p>Written valuations for insurance, resale or estate.</p></div></div>' +
    '<p class="center" style="margin-top:34px"><a class="btn" href="#support">Book a service</a></p></div></section>';
};

/* list pages: Men / Women / Unisex / All / each line-up */
function listPage(title, text, base, filterKey) {
  let options = '';
  if (filterKey) {
    const items = filterKey === 'lineup' ? lineups : categories;
    options = '<label>Show <select id="filterSel"><option value="all">All</option>' +
      items.filter(i => base.some(p => p[filterKey] === i.id)).map(i => '<option value="' + i.id + '">' + i.label + '</option>').join('') + '</select></label>';
  }
  const html = head(title, text) + '<section class="section"><div class="wrap"><div class="toolbar"><div>' + options + '</div>' +
    '<span class="count" id="count"></span>' +
    '<label>Sort <select id="sortSel"><option value="featured">Featured</option><option value="low">Price, low to high</option><option value="high">Price, high to low</option><option value="name">Name, A to Z</option></select></label></div>' +
    '<div id="list"></div></div></section>';
  return { html, init() {
    const draw = () => {
      let list = base.slice();
      const f = $('#filterSel');
      if (f && f.value !== 'all') list = list.filter(p => p[filterKey] === f.value);
      const s = $('#sortSel').value;
      if (s === 'low') list.sort((a, b) => a.price - b.price);
      if (s === 'high') list.sort((a, b) => b.price - a.price);
      if (s === 'name') list.sort((a, b) => a.name.localeCompare(b.name));
      $('#list').innerHTML = grid(list);
      $('#count').textContent = list.length + ' timepiece' + (list.length === 1 ? '' : 's');
    };
    $$('select', app).forEach(s => s.addEventListener('change', draw));
    draw();
  } };
}

pages.category = id => { const c = categories.find(x => x.id === id); return listPage(c.label, c.blurb, products.filter(p => p.category === id), 'lineup'); };
pages.watches = () => listPage('The Collection', 'Every timepiece in our case.', products, 'category');
pages.lineup = id => {
  const l = lineups.find(x => x.id === id);
  if (!l) return pages.watches();
  return listPage(l.label, l.brand + '. ' + l.blurb, products.filter(p => p.lineup === id), 'category');
};

pages.search = q => {
  const words = q.toLowerCase().split(/\s+/).filter(Boolean);
  const catWords = { men: 'men', mens: 'men', women: 'women', womens: 'women', ladies: 'women', unisex: 'unisex' };
  const found = products.filter(p => {
    const text = [p.name, p.brand, lineName(p.lineup), p.short, p.description, p.tech.map(techName).join(' '), Object.values(p.specs).join(' ')].join(' ').toLowerCase();
    return words.every(w => catWords[w] ? p.category === catWords[w] : text.indexOf(w) > -1);
  });
  return { html: head('Search', null) + '<section class="section"><div class="wrap"><p class="count" style="margin-bottom:24px">' + found.length + ' result' + (found.length === 1 ? '' : 's') + ' for "' + esc(q) + '"</p>' +
    (found.length ? grid(found) : '<p class="empty">Nothing matched. Try Rolex, automatic, diver or rose gold.</p>') + '</div></section>' };
};

pages.technology = () => {
  const types = [['Wristwatch', 'Worn on the wrist. Everything in our case falls here.'], ['Pocket watch', 'The original portable timepiece, carried on a chain.'], ['Table clock', 'A mantel or desk clock, often mechanical and wound weekly.'], ['Wall clock', 'Large and legible, from quartz to pendulum movements.']]
    .map(t => '<div><h4>' + t[0] + '</h4><p>' + t[1] + '</p></div>').join('');
  const blocks = technologies.map(t => {
    const list = products.filter(p => p.tech.indexOf(t.id) > -1).slice(0, 6);
    return '<div class="tech"><div><span class="small-title">' + t.short + '</span><h3>' + t.label + '</h3><p>' + t.text + '</p></div><div class="mini">' + list.map(card).join('') + '</div></div>';
  }).join('');
  return { html: head('Technology', 'How a watch keeps time, and which of ours use each movement.') +
    '<section class="section"><div class="wrap">' + heading('Watches and clocks', 'Know your timepiece') + '<div class="types">' + types + '</div></div></section>' +
    '<section class="section alt"><div class="wrap">' + blocks + '</div></section>' };
};

/* gallery */
let gallery = [], galleryIndex = 0;
pages.gallery = () => ({
  html: head('Gallery', 'Every watch from every angle. Select a picture to enlarge it.') +
    '<section class="section"><div class="wrap"><div class="toolbar"><label>Show <select id="galSel"><option value="all">All watches</option>' + categories.map(c => '<option value="' + c.id + '">' + c.label + '</option>').join('') + '</select></label></div><div class="masonry" id="masonry"></div></div></section>',
  init() {
    const draw = () => {
      const cat = $('#galSel').value;
      gallery = [];
      products.filter(p => cat === 'all' || p.category === cat).forEach(p => {
        const all = p.images.concat((p.variants || []).reduce((a, v) => a.concat(v.images), []));
        all.filter((s, i) => all.indexOf(s) === i).forEach(src => gallery.push({ src, p }));
      });
      $('#masonry').innerHTML = gallery.map((g, i) => '<figure data-gallery="' + i + '" tabindex="0"><div class="plate">' + photo(g.src, g.p.name) + '</div><figcaption>' + esc(g.p.name) + '</figcaption></figure>').join('');
    };
    $('#galSel').addEventListener('change', draw);
    draw();
  }
});
function showLightbox(i) {
  galleryIndex = (i + gallery.length) % gallery.length;
  const g = gallery[galleryIndex];
  $('#lbImg').src = g.src;
  $('#lbImg').alt = g.p.name;
  $('#lbImg').className = g.src.indexOf('stiletto/closeup') > -1 ? 'dark' : '';
  $('#lbCap').textContent = g.p.name;
  if (!$('#lightbox').open) $('#lightbox').showModal();
}

pages['price-list'] = () => {
  const rows = categories.map(c => '<tr class="group"><td colspan="6">' + c.label + '</td></tr>' +
    products.filter(p => p.category === c.id).sort((a, b) => b.price - a.price).map(p =>
      '<tr data-open="' + p.id + '"><td><div class="plate">' + photo(p.images[0], p.name) + '</div></td><td class="nm">' + esc(p.name) + '</td><td>' + p.brand + '</td><td>' + lineName(p.lineup) + '</td><td class="right price">' + money(p.price) + '</td><td class="right"><button class="add" data-add="' + p.id + '">Add</button></td></tr>').join('')).join('');
  return { html: head('Price List', 'All watches and prices, grouped for men, women and unisex.') +
    '<section class="section"><div class="wrap"><div class="table-wrap"><table><thead><tr><th></th><th>Watch</th><th>Brand</th><th>Line-up</th><th class="right">Price</th><th></th></tr></thead><tbody>' + rows + '</tbody></table></div>' +
    '<p class="note">Prices are in Pakistani rupees (PKR) and are sample data for demonstration.</p></div></section>' };
};

/* store locator (one boutique) */
function storeHtml(s) {
  return '<article class="store"><span class="city">' + s.city + ', ' + s.country + '</span><h3>' + esc(s.name) + '</h3>' +
    '<dl><dt>Address</dt><dd>' + esc(s.address) + '</dd><dt>Phone</dt><dd>' + s.phone + '</dd><dt>Email</dt><dd>' + s.email + '</dd><dt>Hours</dt><dd>' + s.hours.map(h => h[0] + ': ' + h[1]).join('<br>') + '</dd><dt>Services</dt><dd>' + s.services + '</dd></dl>' +
    '<a class="btn-outline" target="_blank" rel="noopener" href="https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(s.address) + '">Open in Maps</a></article>';
}
pages.stores = () => ({
  html: head('Store Locator', 'Visit our boutique in DHA, Karachi to see the watches in person, or bring yours in for service.') +
    '<section class="section"><div class="wrap"><div class="stores one">' + stores.map(storeHtml).join('') + '</div></div></section>'
});

/* forms: simple validation and saving in the browser */
function validForm(form) {
  let ok = true;
  $$('[required]', form).forEach(input => {
    const v = input.value.trim();
    const bad = !v || (input.type === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v));
    input.parentElement.classList.toggle('bad', bad);
    if (bad) ok = false;
  });
  return ok;
}
const FAQ = [
  ['How long does a repair take?', 'Battery and strap changes are usually done while you wait. A full movement service takes four to eight weeks, and we send an estimate before any work begins.'],
  ['Do you appraise watches bought elsewhere?', 'Yes. Bring the watch with any box, papers or receipts. You receive a written valuation.'],
  ['What is Eco-Drive?', 'Eco-Drive watches turn light into energy and store it in a rechargeable cell, so you never change a battery day to day.'],
  ['Can I return a watch?', 'Unworn watches with all tags and packaging can be returned within 14 days for a full refund.']
];
pages.support = () => ({
  html: head('Support', 'Repair, appraisal and care for the watch you already own.') +
    '<section class="section"><div class="wrap">' + heading('How a repair works', 'From counter to wrist') +
    '<div class="steps"><div><h4>Receive</h4><p>Bring or post your watch. We record its condition.</p></div><div><h4>Assess</h4><p>A watchmaker inspects it and sends a written estimate.</p></div><div><h4>Restore</h4><p>Service, polish or part replacement in our workshop.</p></div><div><h4>Return</h4><p>Tested and returned with a service record.</p></div></div></div></section>' +
    '<section class="section alt"><div class="wrap two"><div><h2 class="title">Request a service</h2>' +
    '<form id="supportForm" novalidate><div class="form-grid"><label class="field">Name<input id="sName" required></label><label class="field">Email<input id="sEmail" type="email" required></label>' +
    '<label class="field">Service<select id="sType"><option>Repair</option><option>Appraisal</option><option>Battery or strap</option><option>Warranty question</option></select></label><label class="field">Watch brand and model<input id="sWatch"></label>' +
    '<label class="field full">Details<textarea id="sMsg" required></textarea></label></div><p class="msg" id="sOut" role="status"></p><button class="btn" type="submit">Send request</button></form></div>' +
    '<div><h2 class="title">Common questions</h2>' + FAQ.map(f => '<details><summary>' + f[0] + '</summary><p>' + f[1] + '</p></details>').join('') + '</div></div></section>',
  init() {
    $('#supportForm').addEventListener('submit', e => {
      e.preventDefault();
      if (!validForm(e.target)) { $('#sOut').className = 'msg'; $('#sOut').textContent = 'Please fill in the highlighted fields.'; return; }
      const ref = 'SR-' + Date.now().toString(36).toUpperCase();
      const list = load('ab_requests', []);
      list.push({ ref, name: $('#sName').value, email: $('#sEmail').value, type: $('#sType').value, watch: $('#sWatch').value, message: $('#sMsg').value });
      save('ab_requests', list);
      e.target.reset();
      $('#sOut').className = 'msg ok';
      $('#sOut').textContent = 'Request received. Your reference is ' + ref + '.';
    });
  }
});

pages.contact = () => ({
  html: head('Contact Us', 'Questions about a watch, an order or a repair. Write or call and we will answer.') +
    '<section class="section"><div class="wrap two"><div class="info">' +
    '<p><b>Address</b>DHA, Karachi<br>Pakistan</p><p><b>Email</b>Jamahi@gmail.com</p><p><b>Telephone</b>+923007656609</p>' +
    '<p><b>Hours</b>Monday - Saturday: 11:00 - 20:00<br>Sunday: Closed</p><a class="btn-outline" href="#stores">Store locator</a></div>' +
    '<form id="contactForm" novalidate><div class="form-grid"><label class="field">Name<input id="cName" required></label><label class="field">Email<input id="cEmail" type="email" required></label>' +
    '<label class="field full">Subject<input id="cSubject"></label><label class="field full">Message<textarea id="cMsg" required></textarea></label></div><p class="msg" id="cOut" role="status"></p><button class="btn" type="submit">Send message</button></form></div></section>',
  init() {
    $('#contactForm').addEventListener('submit', e => {
      e.preventDefault();
      if (!validForm(e.target)) { $('#cOut').className = 'msg'; $('#cOut').textContent = 'Please fill in the highlighted fields.'; return; }
      const list = load('ab_messages', []);
      list.push({ name: $('#cName').value, email: $('#cEmail').value, subject: $('#cSubject').value, message: $('#cMsg').value });
      save('ab_messages', list);
      e.target.reset();
      $('#cOut').className = 'msg ok';
      $('#cOut').textContent = 'Thank you. Your message has been received.';
    });
  }
});

pages.about = () => ({
  html: head('About Us', 'Alberto Watch Company is a full-service watch repair, appraisal and retail store.') +
    '<section class="section"><div class="wrap split"><div class="logo-box"><img src="assets/logo/logo-original.png" alt="Alberto Watches logo"></div><div>' +
    '<span class="small-title">Our house</span><h2 class="title">Timeless by tradition</h2>' +
    '<p>We offer a selection of luxury timepieces with first-class service. Alongside Rolex we carry Bulova, Citizen Eco-Drive and Michael Kors, so there is a watch for every wrist.</p>' +
    '<p>The crown in our mark stands for the standard we hold ourselves to. A watch should be chosen carefully, serviced properly and, eventually, passed on.</p></div></div></section>' +
    '<section class="section alt"><div class="wrap"><div class="cols"><div><h3>Selection</h3><p>Luxury, vintage, solar and designer watches for men, women and unisex wearers.</p></div><div><h3>Workshop</h3><p>Repair and servicing from batteries and straps to full movement overhauls.</p></div><div><h3>Appraisal</h3><p>Honest written valuations for insurance, resale and estates.</p></div></div></div></section>' +
    '<section class="section"><div class="wrap two"><div class="info"><p><b>Address</b>DHA, Karachi, Pakistan</p><p><b>Email</b>Jamahi@gmail.com</p><p><b>Telephone</b>+923007656609</p></div>' +
    '<div><p class="lead">Visit our boutique in DHA, Karachi.</p><a class="btn" href="#stores">Store locator</a> <a class="btn-outline" href="#contact">Contact us</a></div></div></section>'
});

pages.sitemap = () => {
  const col = (t, links) => '<div><h3>' + t + '</h3>' + links.map(l => '<a href="' + l[0] + '">' + l[1] + '</a>').join('') + '</div>';
  return { html: head('Site Map', 'Every page on one list.') + '<section class="section"><div class="wrap"><div class="sitemap">' +
    col('Watches', [['#men', 'Men'], ['#women', 'Women'], ['#unisex', 'Unisex'], ['#watches', 'All Watches'], ['#price-list', 'Price List'], ['#gallery', 'Gallery']]) +
    col('Line-ups', lineups.map(l => ['#lineup-' + l.id, l.label + ' (' + l.brand + ')'])) +
    col('Learn', [['#technology', 'Technology'], ['#support', 'Support'], ['#stores', 'Store Locator']]) +
    col('Alberto', [['#home', 'Home'], ['#about', 'About Us'], ['#contact', 'Contact Us'], ['#sitemap', 'Site Map']]) + '</div></div></section>' };
};

/* ======================================================================
   ROUTER (fade out, swap, fade in)
   ====================================================================== */
function currentRoute() {
  const h = (location.hash || '#home').slice(1) || 'home';
  if (h.indexOf('lineup-') === 0) return { page: 'lineup', arg: h.slice(7), key: h };
  if (h.indexOf('search-') === 0) return { page: 'search', arg: h.slice(7).replace(/-/g, ' '), key: 'search' };
  if (['men', 'women', 'unisex'].indexOf(h) > -1) return { page: 'category', arg: h, key: h };
  if (pages[h]) return { page: h, arg: null, key: h };
  return { page: 'home', arg: null, key: 'home' };
}
let firstLoad = true;
function route() {
  const r = currentRoute();
  let view = pages[r.page](r.arg);
  if (typeof view === 'string') view = { html: view };
  const show = () => {
    app.innerHTML = view.html;
    if (view.init) view.init();
    window.scrollTo(0, 0);
    app.classList.remove('fade-out');
  };
  $$('.nav a').forEach(a => a.classList.toggle('active', a.dataset.route === r.key));
  $('#nav').classList.remove('open');
  document.title = 'Alberto Watches' + (r.page === 'home' ? '' : ' | ' + r.key.replace(/-/g, ' '));
  if (firstLoad) { firstLoad = false; show(); return; }
  app.classList.add('fade-out');
  setTimeout(show, 220);
}
window.addEventListener('hashchange', route);

/* ======================================================================
   PRODUCT POPUP
   ====================================================================== */
const popup = { p: null, v: 0, i: 0, qty: 1 };
const popupImages = () => popup.p.variants ? popup.p.variants[popup.v].images : popup.p.images;
function openProduct(id) {
  const p = byId(id);
  Object.assign(popup, { p, v: 0, i: 0, qty: 1 });
  const dlg = $('#productDialog');
  dlg.innerHTML = '<button class="close" data-close aria-label="Close">&times;</button><div class="pop">' +
    '<div class="pop-gallery"><div class="plate pop-main" id="popMain"></div><div class="thumbs" id="popThumbs"></div></div>' +
    '<div class="pop-info"><span class="brand">' + p.brand + ' &middot; ' + lineName(p.lineup) + ' &middot; ' + catName(p.category) + '</span>' +
    '<h2>' + esc(p.name) + '</h2><span class="price">' + money(p.price) + '</span><p>' + esc(p.description) + '</p>' +
    (p.variants ? '<div class="swatches">Finish ' + p.variants.map((v, i) => '<button class="swatch' + (i ? '' : ' on') + '" data-variant="' + i + '" style="background:' + v.color + '" aria-label="' + v.label + '"></button>').join('') + '</div>' : '') +
    '<p style="color:var(--gold);font-size:.75rem;letter-spacing:.15em;text-transform:uppercase">' + p.tech.map(techName).join(' &middot; ') + '</p>' +
    '<table class="spec">' + Object.keys(p.specs).map(k => '<tr><th>' + k + '</th><td>' + esc(p.specs[k]) + '</td></tr>').join('') + '</table>' +
    '<div class="buy"><div class="qty"><button data-qty="-1" aria-label="Less">&minus;</button><span id="popQty">1</span><button data-qty="1" aria-label="More">+</button></div><button class="btn" id="popAdd">Add to cart</button></div></div></div>';
  drawPopupImages();
  dlg.showModal();
}
function drawPopupImages() {
  const imgs = popupImages();
  $('#popMain').innerHTML = photo(imgs[popup.i], popup.p.name);
  $('#popThumbs').innerHTML = imgs.map((src, i) => '<button class="' + (i === popup.i ? 'on' : '') + '" data-thumb="' + i + '" aria-label="Picture ' + (i + 1) + '"><div class="plate">' + photo(src, '') + '</div></button>').join('');
}

/* ======================================================================
   CART AND CHECKOUT
   ====================================================================== */
const cartTotal = () => cart.reduce((sum, l) => sum + byId(l.id).price * l.qty, 0);
function saveCart() { save('ab_cart', cart); drawCart(); }
function addToCart(id, qty) {
  const line = cart.find(l => l.id === id);
  if (line) line.qty = Math.min(10, line.qty + (qty || 1)); else cart.push({ id, qty: qty || 1 });
  saveCart();
  toast(byId(id).name + ' added to cart');
}
function drawCart() {
  $('#cartCount').textContent = cart.reduce((n, l) => n + l.qty, 0);
  if (!cart.length) {
    $('#cartBody').innerHTML = '<p class="cart-empty">Your cart is empty.</p>';
    $('#cartFoot').innerHTML = '';
    return;
  }
  $('#cartBody').innerHTML = cart.map(l => {
    const p = byId(l.id);
    return '<div class="cart-item"><div class="plate">' + photo(p.images[0], p.name) + '</div><div><b>' + esc(p.name) + '</b><div class="qty"><button data-cart-qty="' + l.id + '" data-d="-1">&minus;</button><span>' + l.qty + '</span><button data-cart-qty="' + l.id + '" data-d="1">+</button></div></div>' +
      '<div><span class="price" style="font-size:1.2rem">' + money(p.price * l.qty) + '</span><button class="link" data-cart-remove="' + l.id + '">Remove</button></div></div>';
  }).join('');
  $('#cartFoot').innerHTML = '<div class="total"><span>Subtotal</span><b>' + money(cartTotal()) + '</b></div><button class="btn" id="checkoutBtn">Checkout</button>';
}
function openCart(open) {
  $('#cart').classList.toggle('open', open);
  $('#overlay').classList.toggle('show', open);
}
function checkout() {
  if (!user) { pendingCheckout = true; openCart(false); openLogin('login'); $('#loginMsg').textContent = 'Please sign in to place your order.'; return; }
  const id = 'AW-' + Date.now().toString(36).toUpperCase();
  const orders = load('ab_orders', []);
  orders.push({ id, email: user.email, total: cartTotal(), items: cart.slice() });
  save('ab_orders', orders);
  cart = [];
  saveCart();
  $('#cartBody').innerHTML = '<div class="cart-empty"><h3 style="font-size:1.8rem;color:var(--ivory)">Thank you, ' + esc(user.name.split(' ')[0]) + '</h3><p>Order ' + id + ' is confirmed. No payment is taken in this demo.</p></div>';
}

/* ======================================================================
   LOGIN (demo: saved in this browser)
   ====================================================================== */
let loginMode = 'login', pendingCheckout = false;
function setLoginMode(mode) {
  loginMode = mode;
  $$('.tab').forEach(t => t.classList.toggle('on', t.dataset.mode === mode));
  $('#nameField').hidden = mode !== 'register';
  $('#loginTitle').textContent = mode === 'login' ? 'Sign in' : 'Create account';
  $('#loginSubmit').textContent = mode === 'login' ? 'Sign in' : 'Create account';
  $('#loginMsg').textContent = '';
}
function openLogin(mode) { setLoginMode(mode); $('#loginDialog').showModal(); }
function drawUser() { $('#loginBtn').textContent = user ? user.name.split(' ')[0] + ' (Sign out)' : 'Sign in'; }
$('#loginForm').addEventListener('submit', e => {
  e.preventDefault();
  const email = $('#loginEmail').value.trim().toLowerCase(), pass = $('#loginPass').value, name = $('#loginName').value.trim(), msg = $('#loginMsg');
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { msg.textContent = 'Enter a valid email address.'; return; }
  if (pass.length < 6) { msg.textContent = 'Password must be at least 6 characters.'; return; }
  const users = load('ab_users', {}), code = btoa(unescape(encodeURIComponent(email + ':' + pass)));
  if (loginMode === 'register') {
    if (!name) { msg.textContent = 'Enter your name.'; return; }
    if (users[email]) { msg.textContent = 'That email already has an account. Sign in instead.'; return; }
    users[email] = { name, code };
    save('ab_users', users);
  } else if (!users[email] || users[email].code !== code) {
    msg.textContent = 'Email or password is incorrect.';
    return;
  }
  user = { email, name: users[email].name };
  save('ab_user', user);
  drawUser();
  e.target.reset();
  $('#loginDialog').close();
  toast('Welcome, ' + user.name);
  if (pendingCheckout) { pendingCheckout = false; openCart(true); checkout(); }
});
$$('.tab').forEach(t => t.addEventListener('click', () => setLoginMode(t.dataset.mode)));
$('#loginBtn').addEventListener('click', () => {
  if (user) { user = null; save('ab_user', null); drawUser(); toast('Signed out'); } else openLogin('login');
});

/* ======================================================================
   CLICK HANDLERS
   ====================================================================== */
document.addEventListener('click', e => {
  const t = e.target;
  const add = t.closest('[data-add]');
  if (add) { e.stopPropagation(); addToCart(add.dataset.add); return; }
  const open = t.closest('[data-open]');
  if (open) { openProduct(open.dataset.open); return; }
  const thumb = t.closest('[data-thumb]');
  if (thumb) { popup.i = +thumb.dataset.thumb; drawPopupImages(); return; }
  const variant = t.closest('[data-variant]');
  if (variant) { popup.v = +variant.dataset.variant; popup.i = 0; $$('.swatch').forEach(s => s.classList.remove('on')); variant.classList.add('on'); drawPopupImages(); return; }
  const qty = t.closest('[data-qty]');
  if (qty) { popup.qty = Math.max(1, Math.min(10, popup.qty + +qty.dataset.qty)); $('#popQty').textContent = popup.qty; return; }
  if (t.closest('#popAdd')) { addToCart(popup.p.id, popup.qty); return; }
  const cq = t.closest('[data-cart-qty]');
  if (cq) { const l = cart.find(x => x.id === cq.dataset.cartQty); l.qty += +cq.dataset.d; if (l.qty < 1) cart = cart.filter(x => x !== l); if (l.qty > 10) l.qty = 10; saveCart(); return; }
  const rm = t.closest('[data-cart-remove]');
  if (rm) { cart = cart.filter(x => x.id !== rm.dataset.cartRemove); saveCart(); return; }
  if (t.closest('#checkoutBtn')) { checkout(); return; }
  const g = t.closest('[data-gallery]');
  if (g) { showLightbox(+g.dataset.gallery); return; }
  if (t.closest('[data-close]')) { t.closest('dialog').close(); return; }
  if (t.tagName === 'DIALOG') {   // click on the dark backdrop closes the popup
    const r = t.getBoundingClientRect();
    if (e.clientX < r.left || e.clientX > r.right || e.clientY < r.top || e.clientY > r.bottom) t.close();
  }
});
document.addEventListener('keydown', e => {
  if ((e.key === 'Enter' || e.key === ' ') && e.target.matches('.card, figure[data-gallery]') && !e.target.querySelector(':focus')) {
    e.preventDefault();
    e.target.click();
  }
  if (e.key === 'Escape') openCart(false);
  if ($('#lightbox').open) { if (e.key === 'ArrowLeft') showLightbox(galleryIndex - 1); if (e.key === 'ArrowRight') showLightbox(galleryIndex + 1); }
});
$('#lbPrev').addEventListener('click', () => showLightbox(galleryIndex - 1));
$('#lbNext').addEventListener('click', () => showLightbox(galleryIndex + 1));
$('#cartBtn').addEventListener('click', () => openCart(true));
$('#cartClose').addEventListener('click', () => openCart(false));
$('#overlay').addEventListener('click', () => openCart(false));
$('#menuToggle').addEventListener('click', () => $('#nav').classList.toggle('open'));
$('#searchForm').addEventListener('submit', e => {
  e.preventDefault();
  const q = $('#searchInput').value.trim().toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
  if (q) { location.hash = 'search-' + q; $('#searchInput').value = ''; }
});

/* ======================================================================
   TICKER (date, time, location) AND VISITOR COUNTER
   ====================================================================== */
function startTicker() {
  const zone = 'Karachi, Pakistan';
  const items = () =>
    '<span>Today <b class="t-date"></b></span><span>Local time <b class="t-time"></b></span><span>Location <b class="t-place">' + esc(zone) + '</b></span>' +
    '<span>Complimentary insured delivery on every order</span><span>Repair &amp; appraisal at our DHA boutique</span><span><b>Alberto Watches</b> Timeless by Tradition</span>';
  const set = '<div class="ticker-set">' + items() + items() + '</div>';
  $('#tickerTrack').innerHTML = set + set;
  const update = () => {
    const now = new Date();
    $$('.t-date').forEach(el => { el.textContent = now.toLocaleDateString('en-GB', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' }); });
    $$('.t-time').forEach(el => { el.textContent = now.toLocaleTimeString('en-GB', { hour12: false }); });
  };
  update();
  setInterval(update, 1000);
  $('#tickerTrack').style.animationDuration = Math.round(($('.ticker-set').offsetWidth || 3000) / 55) + 's';
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(pos => {
      const la = pos.coords.latitude, lo = pos.coords.longitude;
      const text = zone + ' (your position ' + Math.abs(la).toFixed(2) + '°' + (la >= 0 ? 'N' : 'S') + ' ' + Math.abs(lo).toFixed(2) + '°' + (lo >= 0 ? 'E' : 'W') + ')';
      $$('.t-place').forEach(el => { el.textContent = text; });
    }, () => { $$('.t-place').forEach(el => { el.textContent = zone; }); }, { timeout: 8000 });
  }
}
function countVisitor() {
  let n = load('ab_visits', 0);
  try { if (!sessionStorage.getItem('ab_counted')) { n++; save('ab_visits', n); sessionStorage.setItem('ab_counted', '1'); } } catch (e) { /* ignore */ }
  $('#visitorCount').textContent = String(n || 1).padStart(6, '0');
}

/* ---------- start ---------- */
$('#year').textContent = new Date().getFullYear();
drawCart();
drawUser();
startTicker();
countVisitor();
route();
