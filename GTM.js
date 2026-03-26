// (function () {

//     var GTM_ID = "GTM-N5WJ95Q9";

//     // Add GTM script to <head>

//     function addGTMToHead() {

//         var script = document.createElement("script");

//         script.innerHTML = `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':

// new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],

// j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=

// 'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);

// })(window,document,'script','dataLayer','${GTM_ID}');`;

//         document.head.appendChild(script);

//     }

//     //Add noscript iframe to <body>

//     function addNoScriptToBody() {

//         var noscript = document.createElement("noscript");

//         noscript.innerHTML = `<iframe src="https://www.googletagmanager.com/ns.html?id=${GTM_ID}"

// height="0" width="0" style="display:none;visibility:hidden"></iframe>`;

//         function insert() {

//             document.body.insertBefore(noscript, document.body.firstChild);

//         }

//         if (document.body) {

//             insert();

//         } else {

//             document.addEventListener("DOMContentLoaded", insert);

//         }

//     }

//     // Execute both

//     addGTMToHead();



//     addNoScriptToBody();
// })();


// $(function () {

//   // 🚀 Inject GTM in <head>
//   (function () {
//     var gtmScript = document.createElement("script");
//     gtmScript.innerHTML = `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
//     new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
//     j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
//     'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
//     })(window,document,'script','dataLayer','GTM-N5WJ95Q9');`;

//     document.head.appendChild(gtmScript);
//   })();

//   // 🚀 Inject GTM <noscript> right after <body>
//   (function () {
//     var noscript = document.createElement("noscript");
//     noscript.innerHTML = `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-N5WJ95Q9"
//     height="0" width="0" style="display:none;visibility:hidden"></iframe>`;

//     document.body.insertBefore(noscript, document.body.firstChild);
//   })();

// });

(function () {
  'use strict';

  var containerId = 'GTM-N5WJ95Q9';

  // Prevent double-injection (useful for SPAs / re-rendering layouts).
  var initKey = '__GTM_INIT__' + containerId;
  if (window[initKey]) return;
  window[initKey] = true;

  var d = document;

  // --- Head snippet (equivalent to the provided GTM code) ---
  // Paste from GTM (script part):
  // <script>(function(w,d,s,l,i){...})(window,document,'script','dataLayer','GTM-N5WJ95Q9');</script>
  (function (w, d, s, l, i) {
    w[l] = w[l] || [];
    w[l].push({
      'gtm.start': new Date().getTime(),
      event: 'gtm.js'
    });
    var f = d.getElementsByTagName(s)[0],
      j = d.createElement(s),
      dl = l != 'dataLayer' ? '&l=' + l : '';
    j.async = true;
    j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
    f.parentNode.insertBefore(j, f);
  })(window, d, 'script', 'dataLayer', containerId);

  // --- Body snippet (noscript iframe) ---
  // We insert it as soon as <body> exists, which is the closest possible
  // equivalent to "immediately after the opening <body> tag".
  var noscriptId = 'gtm-noscript-' + containerId;

  function insertNoscript() {
    if (!d.body) return;
    if (d.getElementById(noscriptId)) return;

    var noscript = d.createElement('noscript');
    noscript.id = noscriptId;

    var iframe = d.createElement('iframe');
    iframe.src = 'https://www.googletagmanager.com/ns.html?id=' + containerId;
    iframe.height = '0';
    iframe.width = '0';
    iframe.style.display = 'none';
    iframe.style.visibility = 'hidden';

    noscript.appendChild(iframe);
    d.body.insertBefore(noscript, d.body.firstChild);
  }

  if (d.body) {
    insertNoscript();
  } else {
    var obs = new MutationObserver(function () {
      if (d.body) {
        obs.disconnect();
        insertNoscript();
      }
    });
    obs.observe(d.documentElement, { childList: true, subtree: true });
  }
})();


