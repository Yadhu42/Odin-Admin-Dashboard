const NightMode = document.querySelector(`#modeBtn`);

function switchTheme(){
  const root = document.documentElement;

  const theme = root.className === `light` ? `dark` : `light`;
  root.className = theme;
}

NightMode.addEventListener(`click`,switchTheme);