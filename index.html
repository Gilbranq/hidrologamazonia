/* ═══════════════════════════════════════════════
   HidroLog Amazônia — JavaScript Principal
   Versão 1.1 | GitHub Pages Edition | 2025
═══════════════════════════════════════════════ */

'use strict';

/* ── MAPA DE ROTAS ─────────────────────────────
   Associa IDs de página a segmentos de URL.
   Funciona em: github.io/repo/, domínio próprio e localhost.
────────────────────────────────────────────── */
var ROUTES = {
  'home':       '',
  'servicos':   'servicos',
  'cobertura':  'cobertura',
  'tecnologia': 'tecnologia',
  'sobre':      'sobre',
  'contato':    'contato'
};

var ROUTE_TO_PAGE = {};
Object.keys(ROUTES).forEach(function(k) {
  ROUTE_TO_PAGE[ROUTES[k]] = k;
});
ROUTE_TO_PAGE[''] = 'home';

/* ── BASE PATH ─────────────────────────────────
   Detecta automaticamente se o site está em /repo/ (GitHub Pages
   repositório) ou em / (domínio próprio / user page / localhost).
────────────────────────────────────────────── */
function getBasePath() {
  var host = window.location.hostname;
  var path = window.location.pathname;
  if (host === 'localhost' || host === '127.0.0.1') return '/';
  if (host.endsWith('.github.io')) {
    var parts = path.split('/').filter(Boolean);
    if (parts.length > 0) {
      var firstIsKnownPage = Object.keys(ROUTE_TO_PAGE).indexOf(parts[0]) !== -1;
      if (!firstIsKnownPage) return '/' + parts[0] + '/';
    }
  }
  return '/';
}

var BASE_PATH = getBasePath();

/* ── URL HELPERS ───────────────────────────────*/
function pageToUrl(pageId) {
  if (pageId === 'home') return BASE_PATH;
  return BASE_PATH + ROUTES[pageId];
}

function urlToPage(pathname) {
  var clean = pathname;
  if (BASE_PATH !== '/') clean = pathname.replace(BASE_PATH, '');
  clean = clean.replace(/^\/+|\/+$/g, '');
  return ROUTE_TO_PAGE[clean] || 'home';
}

/* ── NAVEGAÇÃO ENTRE PÁGINAS ───────────────────
   Usa History API para URLs limpas.
   Compatible com GitHub Pages, Apache e Netlify.
────────────────────────────────────────────── */
function showPage(id, pushState) {
  if (!id) id = 'home';

  document.querySelectorAll('.page').forEach(function(p) {
    p.classList.remove('active');
  });

  var target = document.getElementById('page-' + id);
  if (target) {
    target.classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  document.querySelectorAll('.nav-links a, .nav-mobile a').forEach(function(a) {
    a.classList.toggle('nav-active', a.dataset.page === id);
  });

  if (pushState !== false && window.history && window.history.pushState) {
    var url   = pageToUrl(id);
    var title = getPageTitle(id);
    window.history.pushState({ page: id }, title, url);
    document.title = title;
  }

  closeMobileMenu();
  setTimeout(initAnimations, 60);
  return false;
}

function getPageTitle(id) {
  var titles = {
    'home':       'HidroLog Amazônia — Logística Hidroviária Inteligente',
    'servicos':   'Serviços — HidroLog Amazônia',
    'cobertura':  'Cobertura — HidroLog Amazônia',
    'tecnologia': 'Tecnologia — HidroLog Amazônia',
    'sobre':      'Sobre — HidroLog Amazônia',
    'contato':    'Fale Conosco — HidroLog Amazônia'
  };
  return titles[id] || 'HidroLog Amazônia';
}

/* ── BOTÃO VOLTAR DO NAVEGADOR ─────────────────*/
window.addEventListener('popstate', function(e) {
  var pageId = (e.state && e.state.page)
    ? e.state.page
    : urlToPage(window.location.pathname);
  showPage(pageId, false);
});

/* ── RESTORE PÓS-REDIRECT DO 404.html ─────────
   O 404.html grava a página desejada em sessionStorage.
   Aqui a recuperamos e navegamos para ela.
────────────────────────────────────────────── */
function restoreRedirectPage() {
  try {
    var redirectPage = sessionStorage.getItem('ghpages_redirect_page');
    if (redirectPage) {
      sessionStorage.removeItem('ghpages_redirect_page');
      if (redirectPage !== 'home' && ROUTES[redirectPage] !== undefined) {
        showPage(redirectPage, true);
        return true;
      }
    }
  } catch (e) {}
  return false;
}

/* ── ROTA INICIAL ──────────────────────────────*/
function resolveInitialPage() {
  if (restoreRedirectPage()) return;
  var pageFromUrl = urlToPage(window.location.pathname);
  showPage(pageFromUrl, false);
}

/* ── MENU MOBILE ───────────────────────────────*/
function toggleMobileMenu() {
  var menu = document.getElementById('nav-mobile');
  if (!menu) return;
  var isOpen = menu.classList.toggle('open');
  var ham = document.querySelector('.nav-hamburger');
  if (ham) {
    ham.classList.toggle('active', isOpen);
    ham.setAttribute('aria-expanded', String(isOpen));
  }
}

function closeMobileMenu() {
  var menu = document.getElementById('nav-mobile');
  if (menu) menu.classList.remove('open');
  var ham = document.querySelector('.nav-hamburger');
  if (ham) {
    ham.classList.remove('active');
    ham.setAttribute('aria-expanded', 'false');
  }
}

/* ── NAVBAR SCROLL ─────────────────────────────*/
function handleNavbarScroll() {
  var navbar = document.querySelector('.navbar');
  if (navbar) navbar.classList.toggle('scrolled', window.scrollY > 20);
}

/* ── VALIDAÇÃO DO FORMULÁRIO ───────────────────*/
function validateField(id, message) {
  var el = document.getElementById(id);
  if (!el) return true;
  var group   = el.closest('.form-group');
  var errorEl = group ? group.querySelector('.form-error') : null;
  var valid   = el.value.trim() !== '';
  if (group)   group.classList.toggle('has-error', !valid);
  if (errorEl && !valid) errorEl.textContent = message;
  return valid;
}

function validateEmail(id) {
  var el = document.getElementById(id);
  if (!el) return true;
  var group   = el.closest('.form-group');
  var errorEl = group ? group.querySelector('.form-error') : null;
  var valid   = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(el.value.trim());
  if (group)   group.classList.toggle('has-error', !valid);
  if (errorEl && !valid) errorEl.textContent = 'Por favor, insira um e-mail válido.';
  return valid;
}

function submitForm() {
  var ok = true;
  ok = validateField('f-nome',    'Por favor, informe seu nome.')      && ok;
  ok = validateEmail('f-email')                                        && ok;
  ok = validateField('f-assunto', 'Por favor, selecione um assunto.')  && ok;
  ok = validateField('f-msg',     'Por favor, escreva sua mensagem.')  && ok;
  if (!ok) return;

  var btn = document.getElementById('submit-btn');
  if (btn) { btn.disabled = true; btn.textContent = 'Enviando...'; }

  /* ── Para ativar Formspree, substitua o setTimeout abaixo: ──
  fetch('https://formspree.io/f/SEU_ID', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      nome:    document.getElementById('f-nome').value,
      email:   document.getElementById('f-email').value,
      assunto: document.getElementById('f-assunto').value,
      mensagem:document.getElementById('f-msg').value
    })
  }).then(function(r) {
    if (r.ok) {
      document.getElementById('contact-form').style.display = 'none';
      document.getElementById('form-success').classList.add('show');
    }
    if (btn) { btn.disabled = false; btn.textContent = 'Enviar Mensagem'; }
  });
  return;
  ──────────────────────────────────────────────────────────── */

  setTimeout(function() {
    var form    = document.getElementById('contact-form');
    var success = document.getElementById('form-success');
    if (form)    form.style.display = 'none';
    if (success) success.classList.add('show');
    if (btn) { btn.disabled = false; btn.textContent = 'Enviar Mensagem'; }
  }, 900);
}

/* ── ANIMAÇÕES ─────────────────────────────────*/
function initAnimations() {
  if (!('IntersectionObserver' in window)) return;
  var observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -30px 0px' });

  document.querySelectorAll(
    '.svc-mini,.testi-card,.value-card,.plan-card,.tech-card,.river-card,.office-card,.integ-card'
  ).forEach(function(el) {
    if (!el.classList.contains('fade-in'))   el.classList.add('fade-in');
    if (!el.classList.contains('visible'))   observer.observe(el);
  });
}

/* ── INICIALIZAÇÃO ─────────────────────────────*/
document.addEventListener('DOMContentLoaded', function() {

  // Bloqueia href padrão dos links de nav
  document.querySelectorAll('.nav-links a, .nav-mobile a').forEach(function(a) {
    a.addEventListener('click', function(e) { e.preventDefault(); });
  });

  window.addEventListener('scroll', handleNavbarScroll, { passive: true });

  // Resolve página inicial pela URL
  resolveInitialPage();

  // Live validation (event delegation para funcionar mesmo com conteúdo dinâmico)
  document.addEventListener('focusout', function(e) {
    var id = e.target && e.target.id;
    if (!id) return;
    if (id === 'f-email') validateEmail('f-email');
    else if (id === 'f-nome' || id === 'f-msg') {
      var g = e.target.closest('.form-group');
      if (g) g.classList.toggle('has-error', e.target.value.trim() === '');
    }
  });

  // Fecha menu mobile com Escape
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') closeMobileMenu();
  });

  // Fecha menu mobile clicando fora
  document.addEventListener('click', function(e) {
    var menu = document.getElementById('nav-mobile');
    var ham  = document.querySelector('.nav-hamburger');
    if (menu && menu.classList.contains('open') &&
        !menu.contains(e.target) && ham && !ham.contains(e.target)) {
      closeMobileMenu();
    }
  });

  console.log('%cHidroLog Amazônia v1.1 — GitHub Pages Edition',
    'color:#3ECFA0;font-weight:bold;font-size:13px;');
  console.log('%cBase path detectado: ' + BASE_PATH, 'color:#8A9B94;font-size:11px;');
});
