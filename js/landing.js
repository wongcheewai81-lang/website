/* ═══════════════════════════════════════════════════════════════
   landing.js — Dr Wong Chee Wai Landing Page
   All inline scripts consolidated into one deferred external file.
   Loaded with <script defer> so DOM is ready when this runs.
   ═══════════════════════════════════════════════════════════════ */
;(function () {
  'use strict';

  /* ── Contact form validation & submission ── */
  (function () {
    var form = document.getElementById('lpContactForm');
    var success = document.getElementById('lpFormSuccess');
    var submitBtn = document.getElementById('lpFormSubmitBtn');
    var netErr = document.getElementById('lpFormNetError');
    if (!form) return;

    var rules = [
      { id: 'lp-fg-first', el: 'lp-first', test: function(v) { return v.trim().length > 0; } },
      { id: 'lp-fg-last',  el: 'lp-last',  test: function(v) { return v.trim().length > 0; } },
      { id: 'lp-fg-email', el: 'lp-email', test: function(v) { return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v); } },
      { id: 'lp-fg-reason', el: 'lp-reason', test: function(v) { return v !== ''; } }
    ];

    form.addEventListener('submit', function(e) {
      e.preventDefault();
      netErr.style.display = 'none';
      var valid = true;
      rules.forEach(function(r) {
        var input = document.getElementById(r.el);
        var group = document.getElementById(r.id);
        if (!r.test(input.value)) {
          input.classList.add('form-error');
          group.querySelector('.form-error-msg').style.display = 'block';
          valid = false;
        } else {
          input.classList.remove('form-error');
          group.querySelector('.form-error-msg').style.display = 'none';
        }
      });
      if (!valid) return;

      submitBtn.disabled = true;
      submitBtn.textContent = 'Sending...';
      fetch(form.action, {
        method: 'POST',
        body: new FormData(form),
        headers: { 'Accept': 'application/json' }
      }).then(function(res) {
        if (res.ok) {
          form.style.display = 'none';
          success.style.display = 'block';
          if (typeof gtag === 'function') {
            gtag('event', 'form_submit', { event_category: 'contact', event_label: 'appointment_request', page_source: 'google_ads_landing' });
            gtag('event', 'conversion', { 'send_to': 'AW-17969566370/X_lTCKTP8_8bEKKlx_hC', 'value': 1.0, 'currency': 'SGD' });
          }
        } else {
          netErr.style.display = 'block';
          submitBtn.disabled = false;
          submitBtn.textContent = 'Request Appointment \u2192';
        }
      }).catch(function() {
        netErr.style.display = 'block';
        submitBtn.disabled = false;
        submitBtn.textContent = 'Request Appointment \u2192';
      });
    });
  })();

  /* ── Google Ads conversion tracking ── */
  (function () {
    /* Track tel: link clicks */
    document.querySelectorAll('a[href^="tel:"]').forEach(function(link) {
      link.addEventListener('click', function() {
        if (typeof gtag === 'function') {
          gtag('event', 'conversion', { 'send_to': 'AW-17969566370/phone_call' });
          gtag('event', 'phone_call_click', { event_category: 'contact', event_label: 'tel_link', page_source: 'google_ads_landing' });
        }
      });
    });
    /* Track WhatsApp link clicks */
    document.querySelectorAll('a[href*="wa.me"]').forEach(function(link) {
      link.addEventListener('click', function() {
        if (typeof gtag === 'function') {
          gtag('event', 'conversion', { 'send_to': 'AW-17969566370/XBc0CInI8v8bEKKlx_hC' });
          gtag('event', 'whatsapp_click', { event_category: 'contact', event_label: 'whatsapp_link', page_source: 'google_ads_landing' });
        }
      });
    });
  })();

})();
