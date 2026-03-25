/* ═══════════════════════════════════════════════════════════════
   main.js — Dr Wong Chee Wai Homepage
   All inline scripts consolidated into one deferred external file.
   Loaded with <script defer> so DOM is ready when this runs.
   ═══════════════════════════════════════════════════════════════ */
;(function () {
  'use strict';

  /* ── CRITICAL: Navbar + Scroll Reveal + Mobile Nav + Scroll Bar ── */

  // Navbar scroll effect
  var navbar = document.getElementById('navbar');
  window.addEventListener('scroll', function () {
    navbar.classList.toggle('scrolled', window.scrollY > 40);
  }, { passive: true });

  // Scroll reveal
  var revealEls = document.querySelectorAll('.reveal');
  var revealObserver = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
  revealEls.forEach(function (el) { revealObserver.observe(el); });

  // Mobile nav
  var btn = document.getElementById('navHamburger');
  var panel = document.getElementById('mobileNav');
  if (btn && panel) {
    function close() {
      panel.classList.remove('open');
      navbar.classList.remove('mob-open');
      btn.setAttribute('aria-expanded', 'false');
      panel.setAttribute('aria-hidden', 'true');
    }
    btn.addEventListener('click', function () {
      var isOpen = panel.classList.toggle('open');
      navbar.classList.toggle('mob-open', isOpen);
      btn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      panel.setAttribute('aria-hidden', isOpen ? 'false' : 'true');
    });
    panel.querySelectorAll('a').forEach(function (a) { a.addEventListener('click', close); });
    document.addEventListener('click', function (e) {
      if (!navbar.contains(e.target) && !panel.contains(e.target)) close();
    });
  }

  // Scroll progress bar — lazy layout reads (no forced reflow at parse time)
  var bar = document.getElementById('scroll-progress');
  var _docH = 0;
  var hero = document.getElementById('hero');
  var _heroH = 600;
  var _measured = false;
  function _measure() {
    _docH = document.documentElement.scrollHeight - window.innerHeight;
    _heroH = hero ? hero.offsetHeight : 600;
    _measured = true;
  }
  function updateBar() {
    if (!_measured) _measure();
    bar.style.transform = 'scaleX(' + (_docH > 0 ? (window.scrollY || window.pageYOffset) / _docH : 0) + ')';
  }
  window.addEventListener('scroll', updateBar, { passive: true });
  window.addEventListener('resize', _measure, { passive: true });

  /* ── DEFERRED: Non-critical features (run when browser is idle) ── */
  var _defer = window.requestIdleCallback || function (cb) { setTimeout(cb, 200); };
  _defer(function () {

    /* Sticky mini-nav */
    (function () {
      var mn = document.getElementById('miniNav');
      if (!mn || !hero) return;
      var pills = mn.querySelectorAll('.mini-nav-pill');
      var ids = [];
      pills.forEach(function(p){ ids.push(p.dataset.section); });
      function vis() {
        mn.classList.toggle('visible', (window.scrollY || window.pageYOffset) > _heroH * 0.8);
      }
      window.addEventListener('scroll', vis, {passive:true});
      vis();
      var so = new IntersectionObserver(function(entries){
        entries.forEach(function(e){
          if (e.isIntersecting) {
            var id = e.target.id;
            pills.forEach(function(p){ p.classList.toggle('active', p.dataset.section === id); });
          }
        });
      }, { threshold: 0, rootMargin: '-100px 0px -60% 0px' });
      ids.forEach(function(id){ var s = document.getElementById(id); if(s) so.observe(s); });
      pills.forEach(function(pill){
        pill.addEventListener('click', function(e){
          e.preventDefault();
          var t = document.getElementById(this.dataset.section);
          if(t){ window.scrollTo({ top: t.getBoundingClientRect().top + window.scrollY - 120, behavior: 'smooth' }); }
        });
      });
    })();

    /* Rotating hero text */
    (function () {
      var el = document.getElementById('rotateWord');
      if (!el) return;
      var words = ['retinal detachment','macular degeneration','high myopia','cataract surgery','diabetic retinopathy'];
      var idx = 0;
      setInterval(function () {
        el.classList.add('out');
        setTimeout(function () {
          idx = (idx + 1) % words.length;
          el.textContent = words[idx];
          el.classList.remove('out');
          el.classList.add('in');
          void el.offsetWidth;
          el.classList.remove('in');
        }, 400);
      }, 3200);
    })();

    /* Hero parallax (desktop only) */
    (function () {
      if (window.innerWidth <= 768) return;
      var img = document.querySelector('.hero-photo-frame img');
      if (!hero || !img) return;
      var ticking = false;
      function update() {
        var scrollY = window.scrollY || window.pageYOffset;
        if (scrollY <= _heroH) {
          img.style.transform = 'translateY(' + (scrollY * 0.3) + 'px)';
        }
        ticking = false;
      }
      window.addEventListener('scroll', function () {
        if (!ticking) { ticking = true; requestAnimationFrame(update); }
      }, { passive: true });
    })();

    /* Stat counter animation */
    (function () {
      function animateCounter(el) {
        if (el._counted) return;
        el._counted = true;
        var target = parseInt(el.dataset.countTo, 10);
        var prefix = el.dataset.prefix || '';
        var suffix = el.dataset.suffix || '';
        var useComma = el.hasAttribute('data-comma');
        var duration = 1600;
        var startTime = null;
        function format(n) {
          var rounded = Math.round(n);
          if (useComma) return rounded.toLocaleString('en-US');
          return rounded.toString();
        }
        function tick(timestamp) {
          if (!startTime) startTime = timestamp;
          var elapsed = timestamp - startTime;
          var progress = Math.min(elapsed / duration, 1);
          var ease = 1 - Math.pow(1 - progress, 3);
          el.textContent = prefix + format(ease * target) + suffix;
          if (progress < 1) { requestAnimationFrame(tick); }
          else { el.textContent = prefix + format(target) + suffix; }
        }
        requestAnimationFrame(tick);
      }
      var heroStats      = document.querySelector('.hero-stats-row');
      var heroStatsMobile = document.querySelector('.hero-stats-mobile');
      var researchGrid   = document.querySelector('.research-grid');
      var obs = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          var delay = entry.target === researchGrid ? 400 : 0;
          entry.target.querySelectorAll('[data-count-to]').forEach(function (el) {
            setTimeout(function () { animateCounter(el); }, delay);
          });
          obs.unobserve(entry.target);
        });
      }, { threshold: 0.25 });
      if (heroStats)       obs.observe(heroStats);
      if (heroStatsMobile) obs.observe(heroStatsMobile);
      if (researchGrid)    obs.observe(researchGrid);
    })();

    /* FAQ accordion (CSS grid animation — no maxHeight reflow) */
    (function () {
      var items = document.querySelectorAll('.faq-item');
      items.forEach(function (item) {
        var btn = item.querySelector('.faq-question');
        btn.addEventListener('click', function () {
          var isOpen = item.classList.contains('active');
          items.forEach(function (other) {
            other.classList.remove('active');
            other.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
          });
          if (!isOpen) {
            item.classList.add('active');
            btn.setAttribute('aria-expanded', 'true');
          }
        });
      });
    })();

    /* Testimonial carousel */
    (function () {
      var track = document.getElementById('testimonialTrack');
      var dotsC = document.getElementById('carouselDots');
      if (!track || !dotsC) return;
      var cards = track.querySelectorAll('.tcard');
      var total = cards.length, cur = 0, timer;
      function isMobile() { return window.innerWidth <= 768; }
      function perView() { return isMobile() ? 1 : 2; }
      function pages() { return Math.ceil(total / perView()); }
      function buildDots() {
        dotsC.innerHTML = '';
        for (var i = 0; i < pages(); i++) {
          var d = document.createElement('button');
          d.className = 'carousel-dot' + (i === cur ? ' active' : '');
          d.setAttribute('role','tab');
          d.setAttribute('aria-label','Page '+(i+1));
          d.dataset.i = i;
          d.addEventListener('click', function(){ goTo(parseInt(this.dataset.i)); });
          dotsC.appendChild(d);
        }
      }
      function goTo(i) {
        var p = pages();
        if (i < 0) i = p - 1;
        if (i >= p) i = 0;
        cur = i;
        var w = isMobile() ? track.parentElement.offsetWidth : (cards[0].offsetWidth + 24);
        var off = cur * perView() * w;
        var max = track.scrollWidth - track.parentElement.offsetWidth;
        if (off > max) off = max;
        track.style.transform = 'translateX(-' + off + 'px)';
        var dots = dotsC.querySelectorAll('.carousel-dot');
        dots.forEach(function(d, j) { d.classList.toggle('active', j === cur); });
      }
      function start() { stop(); timer = setInterval(function(){ goTo(cur+1); }, 5500); }
      function stop() { if (timer) clearInterval(timer); }
      document.querySelector('.carousel-prev').addEventListener('click', function(){ goTo(cur-1); start(); });
      document.querySelector('.carousel-next').addEventListener('click', function(){ goTo(cur+1); start(); });
      var wrap = track.parentElement;
      wrap.addEventListener('mouseenter', stop);
      wrap.addEventListener('mouseleave', start);
      wrap.addEventListener('touchstart', stop, {passive:true});
      wrap.addEventListener('touchend', function(){ setTimeout(start, 3000); }, {passive:true});
      var sx=0, dx=0;
      track.addEventListener('touchstart', function(e){ sx=e.touches[0].clientX; }, {passive:true});
      track.addEventListener('touchmove', function(e){ dx=e.touches[0].clientX-sx; }, {passive:true});
      track.addEventListener('touchend', function(){ if(Math.abs(dx)>50){ dx<0?goTo(cur+1):goTo(cur-1); } dx=0; }, {passive:true});
      var rt;
      window.addEventListener('resize', function(){ clearTimeout(rt); rt=setTimeout(function(){ buildDots(); goTo(0); },200); });
      buildDots(); start();
    })();

    /* Contact form */
    (function () {
      var form     = document.getElementById('contactForm');
      var success  = document.getElementById('formSuccess');
      var netErr   = document.getElementById('formNetworkError');
      var submitBtn = document.getElementById('formSubmitBtn');
      if (!form) return;
      function markValid(el, groupId) {
        var g = document.getElementById(groupId);
        if (!g) return;
        el.classList.remove('invalid');
        g.classList.remove('has-error');
      }
      function markInvalid(el, groupId) {
        var g = document.getElementById(groupId);
        if (!g) return;
        el.classList.add('invalid');
        g.classList.add('has-error');
      }
      function validate() {
        var ok = true;
        var first  = document.getElementById('f-first');
        var last   = document.getElementById('f-last');
        var email  = document.getElementById('f-email');
        var reason = document.getElementById('f-reason');
        if (!first.value.trim())  { markInvalid(first,  'fg-first');  ok = false; } else { markValid(first,  'fg-first'); }
        if (!last.value.trim())   { markInvalid(last,   'fg-last');   ok = false; } else { markValid(last,   'fg-last'); }
        if (!email.value.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) { markInvalid(email, 'fg-email'); ok = false; } else { markValid(email, 'fg-email'); }
        if (!reason.value)        { markInvalid(reason, 'fg-reason'); ok = false; } else { markValid(reason, 'fg-reason'); }
        return ok;
      }
      ['f-first','f-last','f-email','f-reason'].forEach(function(id) {
        var el = document.getElementById(id);
        if (!el) return;
        el.addEventListener('input', function () { el.classList.remove('invalid'); document.getElementById('fg-' + id.replace('f-',''))?.classList.remove('has-error'); });
      });
      form.addEventListener('submit', function (e) {
        e.preventDefault();
        netErr.style.display = 'none';
        if (!validate()) return;
        submitBtn.disabled = true;
        submitBtn.textContent = 'Sending\u2026';
        fetch(form.action, {
          method: 'POST',
          body: new FormData(form),
          headers: { 'Accept': 'application/json' }
        }).then(function (res) {
          if (res.ok) {
            form.style.display = 'none';
            success.style.display = 'block';
            if (typeof gtag === 'function') {
              gtag('event', 'form_submit', { event_category: 'contact', event_label: 'appointment_request' });
              gtag('event', 'conversion', { 'send_to': 'AW-17969566370/X_lTCKTP8_8bEKKlx_hC', 'value': 1.0, 'currency': 'SGD' });
            }
          } else {
            res.json().then(function () { netErr.style.display = 'block'; }).catch(function () { netErr.style.display = 'block'; });
            submitBtn.disabled = false;
            submitBtn.textContent = 'Request Appointment \u2192';
          }
        }).catch(function () {
          netErr.style.display = 'block';
          submitBtn.disabled = false;
          submitBtn.textContent = 'Request Appointment \u2192';
        });
      });
    })();

  }); /* end requestIdleCallback — deferred block 1 */


  /* ── DEFERRED BLOCK 2: UI floats, social proof, lazy images, ads tracking ── */
  var _defer2 = window.requestIdleCallback || function (cb) { setTimeout(cb, 200); };
  _defer2(function () {

    /* Social proof toast (desktop only) */
    (function () {
      if (window.innerWidth <= 768) return;
      var toast = document.getElementById('socialProofToast');
      var textEl = document.getElementById('spToastText');
      var timeEl = document.getElementById('spToastTime');
      if (!toast || !textEl) return;
      var msgs = [
        { text: 'Trusted by patients from 15+ countries', time: 'Asia Pacific Eye Centre' },
        { text: '116+ peer-reviewed publications', time: 'Top 2% researcher worldwide' },
        { text: '3 Gold Medals in ophthalmology exit examination', time: 'Best performance award' },
        { text: 'Located at Gleneagles Hospital, Singapore', time: '6A Napier Road' }
      ];
      var idx = 0, dismissed = false;
      function show() {
        if (dismissed) return;
        var m = msgs[idx % msgs.length];
        textEl.textContent = m.text;
        timeEl.textContent = m.time;
        toast.classList.add('visible');
        setTimeout(function () { toast.classList.remove('visible'); idx++; }, 5000);
      }
      toast.querySelector('.sp-toast-close').addEventListener('click', function () {
        toast.classList.remove('visible'); dismissed = true;
      });
      setTimeout(function () { show(); setInterval(show, 35000); }, 9000);
    })();

    /* Back to top, WhatsApp float, Floating CTA — single scroll listener */
    (function () {
      var btt = document.getElementById('backToTop');
      var wa  = document.getElementById('waFloat');
      var fCta = document.getElementById('floatCta');
      function updateFloats() {
        var scrollY = window.scrollY || window.pageYOffset;
        var threshold = _heroH * 0.6;
        if (btt) btt.classList.toggle('visible', scrollY > threshold);
        if (wa)  wa.classList.toggle('visible', scrollY > threshold);
        if (fCta) fCta.classList.toggle('visible', scrollY > threshold);
      }
      window.addEventListener('scroll', updateFloats, { passive: true });
      updateFloats();
      if (btt) btt.addEventListener('click', function () { window.scrollTo({ top: 0, behavior: 'smooth' }); });
    })();

    /* Lazy image blur-up */
    document.querySelectorAll('.img-lazy-wrap img[loading="lazy"]').forEach(function (img) {
      function reveal() { img.classList.add('loaded'); }
      if (img.complete) { reveal(); }
      else { img.addEventListener('load', reveal); }
    });

    /* Google Ads conversion tracking */
    document.querySelectorAll('a[href^="tel:"]').forEach(function(link) {
      link.addEventListener('click', function() {
        if (typeof gtag === 'function') {
          gtag('event', 'conversion', { 'send_to': 'AW-17969566370/JDIHCOuH944cEKKlx_hC', 'value': 1.0, 'currency': 'SGD' });
          gtag('event', 'phone_call_click', { event_category: 'contact', event_label: 'tel_link' });
        }
      });
    });
    document.querySelectorAll('a[href*="wa.me"]').forEach(function(link) {
      link.addEventListener('click', function() {
        if (typeof gtag === 'function') {
          gtag('event', 'conversion', { 'send_to': 'AW-17969566370/XBc0CInI8v8bEKKlx_hC' });
          gtag('event', 'whatsapp_click', { event_category: 'contact', event_label: 'whatsapp_link' });
        }
      });
    });

  }); /* end requestIdleCallback — deferred block 2 */

})();
