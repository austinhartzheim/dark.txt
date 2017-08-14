const DEFAULT_THEME = 'darktxt-whiteblack';
const DEFAULT_MODE = 0;  // By default, activate automatically on text documents

function toggle(tabId) {
  browser.tabs.insertCSS(tabId, {
    allFrames: true,
    cssOrigin: 'user',
    file: 'data/darktxt-inject.css',
    runAt: 'document_start'
  })

  browser.storage.local.get({
    'theme': 'darktxt-whiteblack'
  }).then((result) => {
      browser.tabs.sendMessage(tabId, {
        type: 'toggle',
        themeclass: result.theme
      });
    },
    (error) => {
      browser.tabs.sendMessage(tabId, {
        type: 'toggle',
        themeclass: DEFAULT_THEME
      });
    })

}

browser.browserAction.onClicked.addListener((tab) => {
  toggle(tab.id);
});

browser.tabs.onCreated.addListener((tab) => {
  if (tab.url && endsWith(tab.url, ".txt")) {
    toggle(tab.id);
  }
})

browser.tabs.onUpdated.addListener((tabId, changedInfo, tabInfo) => {
  if (changedInfo.url && endsWith(changedInfo.url, ".txt")) {
    browser.storage.local.get({
      'mode': DEFAULT_MODE
    }).then((result) => {
      // If mode is 0, automatically activate on .txt documents.
      if (result.mode != 0) {
        return;
      }
      toggle(tabId);
    });
  }
});

function endsWith(str, suffix) {
  return str.indexOf(suffix, str.length - suffix.length) !== -1;
}
