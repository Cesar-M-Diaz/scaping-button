const cursor = document.querySelector('#cursor');
const cursorPoint = document.querySelector('#cursor-point');
const body = document.querySelector('body');

window.addEventListener('mousemove', (e) => {
  cursorPoint.style.transform = `translate(calc(-50% + ${e.clientX}px), calc(-50% + ${e.clientY}px))`;
  cursor.style.transform = `translate(calc(-50% + ${e.clientX}px), calc(-50% + ${e.clientY}px))`;
  body.style.background = `radial-gradient(circle at ${e.clientX + 'px'} ${
    e.clientY + 'px'
  }, #3f87a6, #ebf8e1, #f69d3c)`;
});
