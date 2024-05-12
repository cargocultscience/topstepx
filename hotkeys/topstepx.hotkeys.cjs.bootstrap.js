customjsReady('body', function(element) {
  fetch('https://raw.githubusercontent.com/cargocultscience/topstepx/main/hotkeys/topstepx.hotkeys.cjs.js')
    .then((res) => res.text())
    .then((js) => {
      eval(js);
      accounts = ['practice', '31043'];
      //hotkey_override_url = 'https://raw.githubusercontent.com/cargocultscience/topstepx/main/hotkeys/topstepx.hotkeys.cjs.override.test.js';
      hotkey_override_url = null;
      setupHotkeys(accounts, hotkey_override_url);
    })
});