function toggle(themeclass) {
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
}

browser.runtime.onMessage.addListener((request, sender, sendResponse) => {
  switch (request.type) {
    case "toggle":
    toggle(request.themeclass);
    break;
  }
});
