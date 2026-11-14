/* マグロスタンダード 錦糸町本店 - 共通スクリプト */
(function () {
  'use strict';

  var toggle = document.querySelector('.menu-toggle');
  var drawer = document.querySelector('.mobile-nav');

  function closeDrawer() {
    if (!toggle || !drawer) return;
    toggle.setAttribute('aria-expanded', 'false');
    drawer.classList.remove('is-open');
    document.body.style.overflow = '';
  }

  if (toggle && drawer) {
    toggle.addEventListener('click', function () {
      var open = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', open ? 'false' : 'true');
      drawer.classList.toggle('is-open', !open);
      document.body.style.overflow = open ? '' : 'hidden';
    });

    drawer.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', closeDrawer);
    });

    window.addEventListener('resize', function () {
      if (window.innerWidth >= 1024) closeDrawer();
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') closeDrawer();
    });
  }

  /* PC ナビのサブメニュー (キーボード・タップ対応) */
  document.querySelectorAll('.global-nav .has-sub > button').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var li = btn.parentElement;
      var open = li.classList.toggle('is-open');
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  });

  document.addEventListener('click', function (e) {
    if (!e.target.closest('.has-sub')) {
      document.querySelectorAll('.global-nav .has-sub.is-open').forEach(function (li) {
        li.classList.remove('is-open');
        var b = li.querySelector('button');
        if (b) b.setAttribute('aria-expanded', 'false');
      });
    }
  });

  /* 現在ページのナビをハイライト */
  function navTarget(a) {
    var raw = a.getAttribute('href') || '';
    if (!raw || raw.indexOf('#') !== -1 || /^(https?:|mailto:|tel:)/.test(raw)) return null;
    return { p: new URL(raw, location.href).pathname.replace(/index\.html$/, ''), home: /^(\.\.?\/)*$/.test(raw) };
  }
  var path = location.pathname.replace(/index\.html$/, '');
  document.querySelectorAll('.global-nav a, .mobile-nav a').forEach(function (a) {
    var t = navTarget(a);
    if (t && !t.home && path.indexOf(t.p) === 0) {
      a.setAttribute('aria-current', 'page');
      a.style.color = '#d3b574';
    }
  });
})();
