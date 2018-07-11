// 01: inicializar con evento ready
$(function() {


  // 02: Añadir/eliminar la clase .card--open al hacer click sobre .card
  $(".cards").on('click', '.card', function(event) {
    $(this).toggleClass('card--open');
  });

  // 03: Añadir/eliminar la clase .card__like--red al hacer click sobre .card__like
  $(".cards").on('click', '.card__like', function(event) {
    event.stopPropagation();
    event.preventDefault();

    $(this).toggleClass('card__like--red');
  });

  // 04: Añadir/eliminar la clase .card__follow-btn--following al hacer click sobre .card__follow-btn
  $(".cards").on('click', '.card__follow-btn', function(event) {
    event.stopPropagation();
    event.preventDefault();

    // Añadir/quitar clase .card__follow-btn--following y cambiar conjugación del texto
    if ($(this).hasClass('card__follow-btn--following')) {
      $(this).removeClass('card__follow-btn--following');
      $(this).text('Seguir');
    } else {
      $(this).addClass('card__follow-btn--following');
      $(this).text('Siguiendo');
    }
  });

  // 05: Agegar imagen seleccionada en el select #image
  $("select#image").change(function(event) {
    var value = $(event.target).val(),
        source = `assets/images/squared/${value}`;

    $(this).parent().siblings('.create__image').children().attr('src', source);
  });

  // 06: Agegar imagen seleccionada en el select #author
  $("select#author").change(function(event) {
    var value = $(event.target).val(),
        source = `assets/images/profiles/${value}`;

    $(this).parent().siblings('.create__profile').children().attr('src', source);
  });

  // 07: Capturar el evento del form y obtener la info de éste
  $("form").submit(function(event) {
    // prevenir el comportamiento por defecto
    event.preventDefault();

    // obtener la información entregada por el usuario
    var data = $(this).serializeArray();

    name = data[0].value;
    imageSource = data[1].value;
    // image = $("select#image").children(':selected').text();
    authorSource = data[2].value;
    author = $("select#author").children(':selected').text();
    followers = data[3].value;
    likes = data[4].value;
    following = data[5].value;

    // 08: Agregar una tarjeta dentro de .cards
    $(".cards").append(`<li class="card card--open">\
      <div class="card__highlight">\
        <img class="card__img" src="./assets/images/squared/${imageSource}" alt="">\
      </div>\
      <div class="card__content">\
        <div class="card__profile-container">\
          <img class="card__profile" src="./assets/images/profiles/${authorSource}" alt="">\
        </div>\
        <div class="card__title">\
          <h2>${name}</h2>\
        </div>\
        <div class="card__author">\
          <h3 class="card__author-name">${author}</h3>\
        </div>\
        <a class="card__like" href="#">\
          <i class="fas fa-heart"></i>\
        </a>\
        <div class="card__hidden">\
          <ul class="social">\
            <li class="social__element">\
              <div class="social__number">${followers}</div>\
              <div class="social__text">Followers</div>\
            </li>\
            <li class="social__element">\
              <div class="social__number">${likes}</div>\
              <div class="social__text">Likes</div>\
            </li>\
            <li class="social__element">\
              <div class="social__number">${following}</div>\
              <div class="social__text">Following</div>\
            </li>\
          </ul>\
          <div class="card__follow">\
            <button class="card__follow-btn">Seguir</button>\
          </div>\
        </div>\
      </div>\
    </li>`);

    // 09: Limpiar form
    // cambiar imágenes
    var divImages = $(this).children('.create__display_images');

    divImages.children('.create__image').children().attr('src', 'assets/images/squared/uk.png');
    divImages.children('.create__profile').children().attr('src', 'assets/images/profiles/uk.png');

    // poner valores por defecto de inputs
    $(this)[0].reset();
  });

});
