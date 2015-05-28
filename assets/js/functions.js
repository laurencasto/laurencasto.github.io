function nextAnimate(){

  if($('aside div').last().hasClass('is-animating')){
    $('aside').find('.is-animating')
      .removeClass('is-animating').addClass('was-animating')
      .siblings().first().addClass('is-animating');
      setTimeout(function(){$('.was-animating').removeClass('was-animating')}, 3000);
  } else {
    $('aside').find('.is-animating')
      .removeClass('is-animating').addClass('was-animating')
      .next().addClass('is-animating');
      setTimeout(function(){$('.was-animating').removeClass('was-animating')}, 3000);
  }
}

$( document ).ready(function() {

  setInterval(function(){nextAnimate()}, 8000);

});
