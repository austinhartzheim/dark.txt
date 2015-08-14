self.port.on("attachCss", function(url) {
    // Create a <link> element for a resource:// URL to a CSS file
    var style = document.createElement("link");
    style.type = 'text/css';
    style.rel = 'stylesheet';
    style.href = url;
    document.head.appendChild(style);
});

self.port.on("toggleColor", function() {
    // Toggle the class to enable/disable the CSS theme.
    if (document.body.classList.contains('darktxt-enabled')) {
	document.body.classList.remove('darktxt-enabled');
    } else {
	document.body.classList.add('darktxt-enabled');
    }
});

