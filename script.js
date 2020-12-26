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
    $('header a').click(function()  {
        var id = $(this).attr('href');
        var position = $(id).offset().top;
        $('html, body').animate({
          'scrollTop': position
        });
      });
});