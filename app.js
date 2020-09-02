// checkbox as a variable
let themeSwitch = document.getElementById('change-theme');
let body = document.querySelector('body');
let a = document.querySelector('a');

console.log(a);

// Checkbox click event to switch theme
themeSwitch.addEventListener('click', e => {
  if (themeSwitch.checked === true) {
    // switch to change to dark theme
    body.classList.remove('light-mode')
    body.classList.add('dark-mode');
    a.classList.remove('light-mode')
    a.classList.add('dark-mode');
  } else {
    // switch to change to light theme
    body.classList.remove('dark-mode');
    body.classList.add('light-mode');
    a.classList.remove('dark-mode');
    a.classList.add('light-mode');
  }
})