const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (eachButton) {
  eachButton.addEventListener('click', function (s) {
    if (s.target.id === 'grey') {
      body.style.backgroundColor = s.target.id;
    }
    if (s.target.id === 'white') {
      body.style.backgroundColor = s.target.id;
    }
    if (s.target.id === 'blue') {
      body.style.backgroundColor = s.target.id;
    }
    if (s.target.id === 'yellow') {
      body.style.backgroundColor = s.target.id;
    }
    if (s.target.id === 'purple') {
      body.style.backgroundColor = s.target.id;
    }
    if (s.target.id === 'lavender') {
      body.style.backgroundColor = s.target.id;
    }
  });
});
