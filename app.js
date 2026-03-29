function showPage(name) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-links a').forEach(a => a.classList.remove('active'));
  document.getElementById('page-' + name).classList.add('active');
  const navEl = document.getElementById('nav-' + name);
  if (navEl) navEl.classList.add('active');
  window.scrollTo(0, 0);
  if (name === 'insights') renderArticles();
}

function toggleService(id) {
  const el = document.getElementById(id);
  const isOpen = el.classList.contains('open');
  document.querySelectorAll('.service-item').forEach(s => s.classList.remove('open'));
  if (!isOpen) el.classList.add('open');
}

// ── INSIGHTS ARTICLES ──
// TO ADD A NEW POST: copy the object template and add to articles array


let activeFilter = 'all';

function renderArticles() {
  const list = document.getElementById('articles-list');
  if (!list) return;
  const filtered = activeFilter === 'all' ? articles : articles.filter(a => a.category === activeFilter);
  if (articles.length === 0) {
    list.innerHTML = '<div class="no-posts"><div class="no-posts-title">First article coming soon.</div><p style="font-size:14px;font-family:var(--font-body);color:var(--dim);">Check back shortly or follow on LinkedIn.</p></div>';
    return;
  }
  if (filtered.length === 0) {
    list.innerHTML = '<div class="no-posts"><div class="no-posts-title">No posts in this category yet.</div></div>';
    return;
  }
  list.innerHTML = filtered.map(a => `
    <div class="article-row" onclick="openArticle(${a.id})">
      <div class="article-meta-col">
        <div class="article-cat">${a.category}</div>
        <div class="article-date">${a.date}</div>
        <div class="article-read-time">${a.readTime}</div>
      </div>
      <div>
        <div class="article-title">${a.title}</div>
        <div class="article-excerpt">${a.excerpt}</div>
        <div class="article-cta">Read article →</div>
      </div>
    </div>
  `).join('');
}

function filterPosts(cat) {
  activeFilter = cat;
  document.querySelectorAll('.cat-btn').forEach(b => {
    b.classList.toggle('active', b.dataset.cat === cat);
  });
  renderArticles();
}

function openArticle(id) {
  const article = articles.find(a => a.id === id);
  if (!article) return;
  document.getElementById('articles-list').style.display = 'none';
  document.getElementById('category-filters').style.display = 'none';
  document.getElementById('article-reader').style.display = 'block';
  document.getElementById('article-content').innerHTML = `
    <div class="article-cat" style="margin-bottom:12px;">${article.category}</div>
    <div class="article-reader-title">${article.title}</div>
    <div class="article-reader-meta">
      <span style="font-size:13px;color:var(--mid);font-family:var(--font-body);">${article.date}</span>
      <span style="color:var(--dimmer);">·</span>
      <span style="font-size:13px;color:var(--mid);font-family:var(--font-body);">${article.readTime}</span>
    </div>
    <div class="article-reader-body">${article.body}</div>
  `;
  window.scrollTo(0, 0);
}

function closeArticle() {
  document.getElementById('articles-list').style.display = 'block';
  document.getElementById('category-filters').style.display = 'flex';
  document.getElementById('article-reader').style.display = 'none';
  window.scrollTo(0, 0);
}

// Initialize
renderArticles();
