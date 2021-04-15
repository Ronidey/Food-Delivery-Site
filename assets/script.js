const elmsToAnimate = document.getElementsByClassName('animate');
const sidebar = document.getElementById('sidebar');

window.addEventListener('load', function () {
  document.getElementById('loader').classList.add('hide');

  for (let elm of elmsToAnimate) {
    elm.style.animationPlayState = 'running';
  }
});

function isElementInViewport(el) {
  var rect = el.getBoundingClientRect();
  return rect.top + rect.height / 4 < innerHeight && rect.bottom > 0;
}

function viewportCheck() {
  for (let elm of elmsToAnimate) {
    if (isElementInViewport(elm)) {
      elm.classList.add('in-viewport');
    }
  }

  requestAnimationFrame(viewportCheck);
}

viewportCheck();

document.getElementById('btnOpenNav').addEventListener('click', function () {
  sidebar.classList.add('is-open');
});

document.getElementById('btnCloseNav').addEventListener('click', function () {
  sidebar.classList.remove('is-open');
});
