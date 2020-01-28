$(document).ready(() => {
  console.log("DOM has been loaded");

  const $redBox = $('#red');
  $redBox.on('click', (e) => {
    e.stopPropagation();
    console.log(`Red box was clicked at (${e.clientX}, ${e.clientY})`);
  });

  $('#container').on('click', (e) => {
    console.log(`Document was clicked at (${e.clientX}, ${e.clientY})`);
    $redBox.css({ left: `${e.clientX}px`, top: `${e.clientY}px` });
  });


  // PETS

  const $container = $('#pets-container');
  $container.append('<article class="pet">Ella (Char\'s dog)</article>');

  $container.find('form').on('submit', (e) => {
    e.preventDefault();

    const $form = $(e.target);
    const $name = $form.find('#name');
    const dogName = $name.val();
    const $newDogElement = $('<article>').addClass('pet').text(dogName);
    // const $newDogElement = $(`<article class="pet">${dogName}</article>`);

    $container.append($newDogElement);
  });
});
