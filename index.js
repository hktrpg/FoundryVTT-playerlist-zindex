Hooks.on("renderSceneControls", (dialog, $element) => {
  const html = document.querySelector('.flexrow#controls');
  html.style.width = 'fit-content';
  html.style.pointerEvents = 'visible';
  html.style.overflowY = "scroll";
  const style = document.createElement("style");
  style.innerHTML = ".flexrow#controls::-webkit-scrollbar { display: none;} .flexrow#controls::-webkit-scrollbar-thumb { display: none;}";
  document.head.appendChild(style);
});