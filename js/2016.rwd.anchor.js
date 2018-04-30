function anchor(){
  $(function(){
    $('[data-scroll]').each(function(i){
      var aHref = $(this).attr('href'),
      hash = aHref.split('#');

      $(this).click(function(e){
        $('nav a[href='+aHref+']').addClass('active') .parent('li').siblings('li').children('a')
        .removeClass('active').end();

      });
    }); //each
    if($(window).scrollTop() < $('header').height() / 2){
      $('[data-scroll]').removeClass('active').end();

    }
    $(document).bind('scroll', function (e) {
      var windscroll = $(window).scrollTop(),
      targetElm =  $('#target'),
      aniElm = $('[id*="a-"]');
      if (windscroll >= targetElm.position().top + targetElm.height()) {
        $('[id*="a-"]').each(function (i) {

          if ($(this).offset().top <= windscroll + 120) {
            $('nav a.active').removeClass('active');
            $('nav a').eq(i+1).addClass('active');
            $(this).next(aniElm).addClass('current').end();
          }else{
            $(this).next(aniElm).removeClass('current').end();
          }
        });
      } else {// window scroll
        $('nav a.active').removeClass('active');
        //$('nav a:first').addClass('active');
      }

    })
  });//func

}
anchor();
