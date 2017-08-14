function saveOptions(e) {
  browser.storage.local.set({
    mode: parseInt(document.querySelector("#mode").value, 10),
    theme: document.querySelector("#theme").value
  });
}

function restoreOptions() {
  browser.storage.local.get({
    'mode': 0,
    'theme': 'darktxt-whiteblack'
  }).then((result) => {
    document.querySelector('#mode').selectedIndex = result.mode.toString() || "0";
    document.querySelector('#theme').value = result.theme || "darktxt-whiteblack";
  }, (error) => {});

  // Attach events to automatically save on setting change
  document.querySelectorAll('.option-selector').forEach((elm) => {
    elm.addEventListener('change', saveOptions);
  })
}

document.addEventListener("DOMContentLoaded", restoreOptions);
