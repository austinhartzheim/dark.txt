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
    if (document.body.className.match(/(?:^|\s)darktxt-enabled(?!\S)/)) {
	document.body.className = document.body.className
	    .replace(/(?:^|\s)darktxt-enabled(?!\S)/g , '');
    } else {
	document.body.className += " darktxt-enabled";
    }
});

