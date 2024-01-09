// POINTER CURSOR SCALE (APPLIES TO ANY <a> TAG)
$('a').hover(function(){
    $('.pointer').addClass('scale-pointer');
  }, function(){
    $('.pointer').removeClass('scale-pointer');
  });
// ______________________________



  // ITALIST
$('.italist-main').hover(function(){
  $('#italist-display').addClass('text-hover');
  $('.pointer').addClass('scale-pointer');
}, function(){
  $('#italist-display').removeClass('text-hover');
  $('.pointer').removeClass('scale-pointer');
});

// DOSSIER
$('.dossier-main').hover(function(){
  $('#dossier-display').addClass('text-hover');
  $('.pointer').addClass('scale-pointer');
}, function(){
  $('#dossier-display').removeClass('text-hover');
  $('.pointer').removeClass('scale-pointer');
});

// LA BATIE
$('.labatie-main').hover(function(){
  $('#labatie-display').addClass('text-hover');
  $('.pointer').addClass('scale-pointer');
}, function(){
  $('#labatie-display').removeClass('text-hover');
  $('.pointer').removeClass('scale-pointer');
});

// SUMMIT
$('.summit-main').hover(function(){
  $('#summit-display').addClass('text-hover');
  $('.pointer').addClass('scale-pointer');
}, function(){
  $('#summit-display').removeClass('text-hover');
  $('.pointer').removeClass('scale-pointer');
});
