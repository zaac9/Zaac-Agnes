// POINTER CURSOR SCALE (APPLIES TO ANY <a> TAG)
$('a').hover(function(){
    $('.pointer').addClass('scale-pointer');
  }, function(){
    $('.pointer').removeClass('scale-pointer');
  });
// ______________________________



  // ITALIST
$('.italist-main').hover(function(){
  $('.italist-link').addClass('text-hover');
  $('.pointer').addClass('scale-pointer');
}, function(){
  $('.italist-link').removeClass('text-hover');
  $('.pointer').removeClass('scale-pointer');
});

// DOSSIER
$('.dossier-main').hover(function(){
  $('.dossier-link').addClass('text-hover');
  $('.pointer').addClass('scale-pointer');
}, function(){
  $('.dossier-link').removeClass('text-hover');
  $('.pointer').removeClass('scale-pointer');
});

// LA BATIE
$('.labatie-main').hover(function(){
  $('.labatie-link').addClass('text-hover');
  $('.pointer').addClass('scale-pointer');
}, function(){
  $('.labatie-link').removeClass('text-hover');
  $('.pointer').removeClass('scale-pointer');
});

// SUMMIT
$('.summit-main').hover(function(){
  $('.summit-link').addClass('text-hover');
  $('.pointer').addClass('scale-pointer');
}, function(){
  $('.summit-link').removeClass('text-hover');
  $('.pointer').removeClass('scale-pointer');
});
