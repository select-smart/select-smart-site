/* ═══════════════ SelectSmart — app.js ═══════════════ */

const PAGE_META = {
  home:      { title: 'SelectSmart — IT Estate Assessments for Financial Services',
               desc: 'Fixed-fee IT estate assessments, cloud architecture, and security posture reviews. AI-augmented diagnostics backed by 20 years of hands-on enterprise IT leadership.' },
  about:     { title: 'About — SelectSmart',
               desc: 'Two decades of hands-on enterprise IT leadership, encoded into a repeatable AI-augmented diagnostic. A senior practitioner does the work.' },
  services:  { title: 'Services — SelectSmart',
               desc: 'Five fixed-fee ways to engage: The Diagnostic, The Build, On-Call CTO, Digital Downloads, and Workshops.' },
  insights:  { title: 'Insights — SelectSmart',
               desc: 'Practical perspectives on IT strategy, cloud, cost optimization, and leadership — written by a practitioner.' },
  resources: { title: 'Resources — SelectSmart',
               desc: 'Practitioner frameworks, templates, and reference guides built from 18+ years of hands-on IT leadership.' },
  contact:   { title: 'Contact — SelectSmart',
               desc: 'Every engagement starts with a conversation. No commitment, no pitch deck.' },
};

function setMeta(title, desc) {
  document.title = title;
  const set = (sel, attr, val) => {
    const el = document.querySelector(sel);
    if (el) el.setAttribute(attr, val);
  };
  set('meta[name="description"]', 'content', desc);
  set('meta[property="og:title"]', 'content', title);
  set('meta[property="og:description"]', 'content', desc);
  set('meta[name="twitter:title"]', 'content', title);
  set('meta[name="twitter:description"]', 'content', desc);
}

/* ─────────────── PAGE ROUTING ─────────────── */
function showPage(name, opts = {}) {
  const target = document.getElementById('page-' + name);
  if (!target) return;

  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-links a').forEach(a => a.classList.remove('active'));
  target.classList.add('active');

  const navEl = document.getElementById('nav-' + name);
  if (navEl) navEl.classList.add('active');

  const meta = PAGE_META[name];
  if (meta) setMeta(meta.title, meta.desc);

  if (name === 'insights') renderArticles();

  if (!opts.fromHash) {
    const hash = name === 'home' ? '#/' : '#/' + name;
    if (location.hash !== hash) history.pushState(null, '', hash);
  }
  window.scrollTo(0, 0);
}

function toggleService(id) {
  const el = document.getElementById(id);
  if (!el) return;
  const isOpen = el.classList.contains('open');
  document.querySelectorAll('.service-item').forEach(s => s.classList.remove('open'));
  if (!isOpen) el.classList.add('open');
}

/* ─────────────── FAQ ─────────────── */
function toggleFaq(btn) {
  const item = btn.closest('.faq-item');
  if (!item) return;
  const wasOpen = item.classList.contains('open');
  document.querySelectorAll('.faq-item').forEach(f => f.classList.remove('open'));
  if (!wasOpen) item.classList.add('open');
}

/* ═══════════════ SUBSTACK ═══════════════
   ONE PLACE TO EDIT. Set this to your Substack address once the
   publication exists, e.g. 'https://selectsmart.substack.com'.
   Everything else — the subscribe buttons, the article links and the
   footer link — reads from this constant.                              */
const SUBSTACK_URL = 'https://selectsmart.substack.com';

/* ─────────────── INSIGHTS ─────────────── */
/* To add a post: append an object to the `articles` array in articles.js */

let activeFilter = 'all';

function renderArticles() {
  const list = document.getElementById('articles-list');
  if (!list) return;

  if (typeof articles === 'undefined' || articles.length === 0) {
    list.innerHTML = '<div class="no-posts"><div class="no-posts-title">First article coming soon.</div>' +
      '<p style="font-size:14px;color:var(--ink-dim);">Check back shortly or follow along on LinkedIn.</p></div>';
    return;
  }

  const filtered = activeFilter === 'all'
    ? articles
    : articles.filter(a => a.category === activeFilter);

  if (filtered.length === 0) {
    list.innerHTML = '<div class="no-posts"><div class="no-posts-title">No posts in this category yet.</div></div>';
    return;
  }

  list.innerHTML = filtered.map(a => {
    return `
    <article class="art-card" onclick="window.open('${a.url}','_blank','noopener')">
      <div class="art-card-meta">
        <span>${a.category}</span>
        <span class="sep">•</span>
        <span class="muted">${a.date}</span>
        <span class="sep">•</span>
        <span class="muted">${a.readTime}</span>
      </div>
      <h3>${a.title}</h3>
      <p>${a.excerpt}</p>
      <span class="readmore">Read on Substack &nearr;</span>
    </article>`;
  }).join('');
}

function filterPosts(cat) {
  activeFilter = cat;
  document.querySelectorAll('.cat-btn').forEach(b => {
    b.classList.toggle('active', b.dataset.cat === cat);
  });
  renderArticles();
}

/* ─────────────── HASH ROUTER ─────────────── */
function routeFromHash() {
  const raw = (location.hash || '').replace(/^#\/?/, '');
  const parts = raw.split('/').filter(Boolean);

  if (parts.length === 0) { showPage('home', { fromHash: true }); return; }

  const page = parts[0];
  if (!PAGE_META[page]) { showPage('home', { fromHash: true }); return; }

  showPage(page, { fromHash: true });
}

/* Point every Substack link and subscribe form at the constant above */
function wireSubstackLinks() {
  const base = SUBSTACK_URL.replace(/\/$/, '');

  // Plain links
  document.querySelectorAll('[data-substack]').forEach(a => {
    const path = a.getAttribute('data-substack') || '';
    a.href = base + path;
    a.target = '_blank';
    a.rel = 'noopener';
  });

  const el = document.getElementById('social-substack');
  if (el) el.href = SUBSTACK_URL;
  const sd = document.querySelector('script[type="application/ld+json"]');
  if (sd) {
    try {
      const o = JSON.parse(sd.textContent);
      if (Array.isArray(o.sameAs) && !o.sameAs.includes(SUBSTACK_URL)) {
        o.sameAs.push(SUBSTACK_URL);
        sd.textContent = JSON.stringify(o);
      }
    } catch { /* leave structured data alone if it won't parse */ }
  }
}

window.addEventListener('popstate', routeFromHash);
document.addEventListener('DOMContentLoaded', () => { wireSubstackLinks(); routeFromHash(); });

// If DOM is already parsed by the time this runs, route immediately.
if (document.readyState !== 'loading') { wireSubstackLinks(); routeFromHash(); }
