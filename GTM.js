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


$(function () {

  // 🚀 Inject GTM in <head>
  (function () {
    var gtmScript = document.createElement("script");
    gtmScript.innerHTML = `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','GTM-N5WJ95Q9');`;

    document.head.appendChild(gtmScript);
  })();

  // 🚀 Inject GTM <noscript> right after <body>
  (function () {
    var noscript = document.createElement("noscript");
    noscript.innerHTML = `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-N5WJ95Q9"
    height="0" width="0" style="display:none;visibility:hidden"></iframe>`;

    document.body.insertBefore(noscript, document.body.firstChild);
  })();

});


