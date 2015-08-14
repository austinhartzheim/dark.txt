console.log('hello');
var prefs = require("sdk/simple-prefs").prefs;
var self = require('sdk/self');
var tabs = require("sdk/tabs");

try {
    var buttons = require('sdk/ui/button/action');
    var button = buttons.ActionButton({
	id: 'darktxt-button',
	label: 'dark.txt',
	icon: {
	    '16': self.data.url('icon-16.png'),
	    '32': self.data.url('icon-32.png'),
	    '64': self.data.url('icon-64.png')
	},
	onClick: function(state) {
            if (endsWith(tabs.activeTab.url, ".txt")) {
		worker = tabs.activeTab.attach({
                    contentScriptFile: self.data.url('utils.js')
		});
		worker.port.emit('toggleColor');
            }
	}
    });
} catch (e) {  // sdk/ui/button/action not available (old versions, mobile)
    console.log('Unsupported version of Firefox');
}

tabs.on('ready', function(tab) {
    if (prefs.mode == "0" && endsWith(tab.url, '.txt')) {
	tab.attach({
	    contentScript: 'document.body.style.background="black"; document.body.style.color="white";'
	});
    }
});

function endsWith(str, suffix) {
    return str.indexOf(suffix, str.length - suffix.length) !== -1;
}
