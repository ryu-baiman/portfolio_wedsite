$(function()  {
    
    // menuボタンがクリックされた時の処理
    $('#menu_btn').on('click',function(){
        // #menu_btnに.activeがあるかどうか
        if($(this).hasClass('active')){
            // .activeがある時の処理
            $(this).removeClass('active');
            $('#menu').removeClass('open');
        } else {
            // .activeがないときの処理
            $(this).addClass('active');
            $('#menu').addClass('open');
        }
    });

    // 各項目までスクロール
    $('a[href^="#"]').click(function()  {
        var speed = 500;
        var id = $(this).attr('href');
        var position = $(id).offset().top;
        $('html, body').animate({
          'scrollTop': position
        }, speed, 'swing');
        return false;
    });

    //ロード時に表示
    load_effect();
    function load_effect(){
        var tt = $(window).scrollTop();
        var hh = $(window).height();
        $('.main').each(function(){
            var yy = $(this).offset().top;
            if (tt > yy - hh){
                $(this).addClass('done');
            }
        });
    }

    //フェードイン
    $(window).scroll(function (){
        $(".myself").each(function(){
          var imgPos = $(this).offset().top;
          var scroll = $(window).scrollTop();
          var windowHeight = $(window).height();
          if (scroll > imgPos - windowHeight + windowHeight/5){
            $(this).addClass("fade_on");
          } else {
            $(this).removeClass("fade_on");
          }
        });
      });
    
    //HTMLの場合
    $(window).scroll(function (){
      $(".html").each(function(){
        var imgPos = $(this).offset().top;
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll > imgPos - windowHeight - 150){
          $(this).addClass("below");
        } else {
          $(this).removeClass("below");
        }
      });
    });

    $(window).scroll(function (){
      $(".js").each(function(){
        var imgPos = $(this).offset().top;
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll > imgPos - windowHeight - 150){
          $(this).addClass("below");
        } else {
          $(this).removeClass("below");
        }
      });
    });

    $(window).scroll(function (){
      $(".wp").each(function(){
        var imgPos = $(this).offset().top;
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll > imgPos - windowHeight - 150){
          $(this).addClass("below");
        } else {
          $(this).removeClass("below");
        }
      });
    });

    
    
});

