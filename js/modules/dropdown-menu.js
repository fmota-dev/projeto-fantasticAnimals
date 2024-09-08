import outsideClick from './outsideclick.js';

export default function initDropdownMenu() {
  const dropdownMenus = document.querySelectorAll('[data-dropdown]');
  for (const menu of dropdownMenus) {
    for (const userEvent of ['touchstart', 'click']) {
      menu.addEventListener(userEvent, handleClick);
    }
  }

  function handleClick(event) {
    event.preventDefault();
    this.classList.add('active');
    outsideClick(this, ['touchstart', 'click'], () => {
      this.classList.remove('active');
    });
  };
}