/*
const btn = document.getElementById('btn');

btn.addEventListener('click', () => {
  const form = document.getElementById('form');

  if (form.style.display === 'none') {
    form.style.display = 'block';
  } else {
    form.style.display = 'none';
  }
});
 */

function formVisibility() {

  const form = document.getElementById('form');
  const button = document.getElementById('visibility-button');

  if (form.style.display === 'none') {
    form.style.display = 'block';
    button.innerHTML = 'Hide';
  } else {
    form.style.display = 'none';
    button.innerHTML = 'Show';
  }
};