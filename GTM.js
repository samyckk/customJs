if (location.pathname === "/moas/") {

  // 1. Add GTM script in <head>
  (function(w, d, s, l, i) {
    w[l] = w[l] || [];
    w[l].push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });

    var f = d.getElementsByTagName(s)[0],
        j = d.createElement(s),
        dl = l != 'dataLayer' ? '&l=' + l : '';

    j.async = true;
    j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl;

    f.parentNode.insertBefore(j, f);
  })(window, document, 'script', 'dataLayer', 'GTM-N5WJ95Q9');


  // 2. Add noscript immediately after <body>
  var noscript = document.createElement('noscript');
  noscript.innerHTML = `
    <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-N5WJ95Q9"
    height="0" width="0" style="display:none;visibility:hidden"></iframe>
  `;

  document.body.insertBefore(noscript, document.body.firstChild);
}
