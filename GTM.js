(function () {

    function injectGTM() {

        // duplicate loading
        if (window.dataLayer) return;

        console.log("GTM Injecting....");

        // Initialize dataLayer
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
            'gtm.start': new Date().getTime(),
            event: 'gtm.js'
        });

        // Create GTM script
        var script = document.createElement("script");
        script.async = true;
        script.src = "https://www.googletagmanager.com/gtm.js?id=GTM-N5WJ95Q9";

        // Insert into head (top)
        var firstScript = document.getElementsByTagName("script")[0];
        firstScript.parentNode.insertBefore(script, firstScript);

        // Create noscript iframe
        var noscript = document.createElement("noscript");
        noscript.innerHTML = `
            <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-N5WJ95Q9"
            height="0" width="0" style="display:none;visibility:hidden"></iframe>
        `;

        // Insert at top of body safely
        function insertNoScript() {
            document.body.insertBefore(noscript, document.body.firstChild);
        }

        if (document.body) {
            insertNoScript();
        } else {
            document.addEventListener("DOMContentLoaded", insertNoScript);
        }
    }

    // ✅ Run when path contains "/moas/login"
    if (window.location.pathname.includes("/moas/login")) {
        injectGTM();
    }

})();
