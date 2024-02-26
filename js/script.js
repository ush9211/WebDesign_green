$(function(){
    $('.gnb>li').hover(function(){
        $('.lnbbox').stop().fadeToggle();
        $('.lnb').stop().fadeToggle();
    });

    setInterval(slide, 3000);

    $('.popup').click(function(e){
        e.preventDefault();
        $('.pop').fadeIn();
    });
    $('.close').click(function(){
        $('.pop').fadeOut();
    })

    $('.myfamily').change(function(){
        let $link = $(this).val();
        if($link){
            window.location.href=$link;
        }
    })
});


// 이미지를 float left 시켜서 가로정렬 시켜놓은 뒤, 왼쪽으로 슬라이드 되게 만듦
function slide(){
    $('.slidein').animate({
        'left':'-1200px'
    }, 1000, function(){
        $('.slidein img:eq(0)').clone().appendTo('.slidein');
        $('.slidein img:eq(0)').remove();
        $('.slidein').css('left',0);
    })
}