function toggle(tabId) {
  browser.tabs.insertCSS(tabId, {
    allFrames: true,
    cssOrigin: 'user',
    file: 'data/darktxt-inject.css',
    runAt: 'document_start'
  });
  browser.tabs.sendMessage(tabId, {
    type: "toggle",
    themeclass: "darktxt-whiteblack"
  });
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
    toggle(tabId);
  }
});

function endsWith(str, suffix) {
  return str.indexOf(suffix, str.length - suffix.length) !== -1;
}
