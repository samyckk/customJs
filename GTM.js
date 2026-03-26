$(document).ready(function () {

  // Check if URL starts with /moas/
  if (location.pathname.startsWith("/moas/")) {

    // duplicate injection (important)
    if (window.gtmInjected) return;
    window.gtmInjected = true;

    // 1. Inject GTM script into <head>
    (function (w, d, s, l, i) {
      w[l] = w[l] || [];
      w[l].push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });

      var f = d.getElementsByTagName(s)[0],
          j = d.createElement(s),
          dl = l !== 'dataLayer' ? '&l=' + l : '';

      j.async = true;
      j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl;

      f.parentNode.insertBefore(j, f);
    })(window, document, 'script', 'dataLayer', 'GTM-N5WJ95Q9');


    // 2. Inject noscript right after <body>
    var noscriptTag = `
      <noscript>
        <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-N5WJ95Q9"
        height="0" width="0" style="display:none;visibility:hidden"></iframe>
      </noscript>
    `;

    $("body").prepend(noscriptTag);
  }

});
