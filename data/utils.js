self.port.on("attachCss", function(url) {
    // Create a <link> element for a resource:// URL to a CSS file
    var style = document.createElement("link");
    style.type = 'text/css';
    style.rel = 'stylesheet';
    style.href = url;
    document.head.appendChild(style);
});

self.port.on("toggleColor", function(themeclass) {
    // Toggle the class to enable/disable the CSS theme.
    if (document.body.classList.contains('darktxt-enabled')) {
	document.body.classList.remove('darktxt-enabled');
	document.body.classList.remove('darktxt-whiteblack');
	document.body.classList.remove('darktxt-greenblack');
	document.body.classList.remove('darktxt-pinkblack');
	document.body.classList.remove('darktxt-yellowblack');
	document.body.classList.remove('darktxt-redblack');
	document.body.classList.remove('darktxt-whitegray');
    } else {
	document.body.classList.add('darktxt-enabled');
	document.body.classList.add(themeclass);
    }
});

