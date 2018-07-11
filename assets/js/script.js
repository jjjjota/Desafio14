// 01: inicializar con evento ready
$(function() {


  // 02: Añadir/eliminar la clase .card--open al hacer click sobre .card
  $(".card").click(function(event) {
    $(this).toggleClass('card--open');
  });

  // 03: Añadir/eliminar la clase .card__like--red al hacer click sobre .card__like
  $(".card__like").click(function(event) {
    event.stopPropagation();
    event.preventDefault();
    $(this).toggleClass('card__like--red');
  });

  // 04: Añadir/eliminar la clase .card__follow-btn--following al hacer click sobre .card__follow-btn
  $(".card__follow-btn").click(function(event) {
    event.stopPropagation();
    event.preventDefault();
    $(this).toggleClass('card__follow-btn--following');
  });

  // 05: Agegar imagen seleccionada en el select #image
  $("select#image").change(function(event) {
    // ANOTHER WAY: var value = $(this).find("option:selected").attr('value');
    var value = $(event.target).val();
    var source = `assets/images/squared/${value}`;

    $(this).parent().siblings('.create__image').children().attr('src', source);
  });

  // 06: Agegar imagen seleccionada en el select #author
  $("select#author").change(function(event) {
    var value = $(event.target).val();
    var source = `assets/images/profiles/${value}`;

    $(this).parent().siblings('.create__profile').children().attr('src', source);
  });

});
