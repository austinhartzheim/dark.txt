function saveOptions(e) {
  e.preventDefault();
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
}

document.addEventListener("DOMContentLoaded", restoreOptions);
document.querySelector("form").addEventListener("submit", saveOptions);
