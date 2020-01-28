document.addEventListener('DOMContentLoaded', (e) => {
  console.log('DOM Has been loaded', e);

  const redBox = document.getElementById('red');
  console.log('redBox', redBox);

  redBox.addEventListener('click', (e) => {
    e.stopPropagation();
    console.log(`Red box was clicked at (${e.clientX}, ${e.clientY})`);
  });

  document.addEventListener('click', (e) => {
    console.log(`Document was clicked at (${e.clientX}, ${e.clientY})`);
    redBox.style.left = `${e.clientX}px`;
    redBox.style.top = `${e.clientY}px`;
  });
});

