let btn = document.querySelector(`.mobile-btn`);

const burgerFunc = (menuClassName, showClassName) => {
  let menu = document.querySelector(`.${menuClassName}`);

  if (menu.className.includes(showClassName)) {
    menu.className = menuClassName;
  } else {
    menu.className += ` ${showClassName}`;
  }
};

btn.addEventListener("click", () => {
  burgerFunc("header__menu", "header__menu-show top");
});
