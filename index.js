Hooks.on("renderSceneControls", (dialog, $element) => {
  const html = document.querySelector('.flexrow#controls');
  html.style.width = 'fit-content';
  html.style.pointerEvents = 'visible';
  html.style.overflowY = "scroll";
});