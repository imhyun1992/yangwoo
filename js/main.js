$(function(){
    //pc
    quick();
    header();
    banner();
    con1();
    con2();
    var w = $(window).width();
    if(w<=1024){
        tog();
        // menuplus();
        tabletM();
    }
})
// width 1024
$(window).resize(function(){
    var w = $(window).width();
    if(w<=1024){
        // navT(); 
        tog();
        // menuplus();
        tabletM();
    }
    location.reload();
})
//pc
function quick(){
    //포트폴리오 부분 퀵메뉴
    $('#quickDot01').addClass('out');
    $('#portfolioBar').addClass('in');
    //클릭시 변화

    $('.quickDots').click(function(){
        //클릭하면 점 들어가고 해당메뉴 나오기
        $('.quickDots').removeClass('out');
        $('.quickDots').prev('p').removeClass('in');
        //해당 점 out
        $(this).addClass('out');
        //해당메뉴 in
        $(this).prev('p').addClass('in')
    })
    //클릭하면 해당 컨탠츠로 이동하기
    $('.quickDots').click(function(){
        var i = $(this).parent('div').index();
        var t = $('.quickCon').eq(i).offset().top;
        $('html,body').animate({scrollTop:t},700);
    })

    //top으로 가는 퀵
    $('.top').click(function(){
        $('html,body').animate({scrollTop:'0'},700);
    })

    // 스크롤이 배너 밑으로 내려가면 나타나기 
    $(window).scroll(function(){

        var sct = $(window).scrollTop();

        var target = $('#portfolio').offset().top;
        if(sct>=600){
            $('#quick').addClass('screenIn');
        }else{
            $('#quick').removeClass('screenIn');
        }
    })
    
    //스크롤에 따른 메뉴 활성화
    $(window).scroll(function(){

        var sct = $(window).scrollTop();

        $('#fullpage>div').each(function(){
            var i = $(this).index();
            var conSct = $(this).offset().top;
            if(conSct+100<=sct){
                $('.quickDots').removeClass('out');
                $('.quickDots').prev('p').removeClass('in');
                //해당 점 out
                $('#quick>div').eq(i).find('.quickDots').addClass('out');
                //해당메뉴 in
                $('#quick>div').eq(i).find('.quickDots').prev('p').addClass('in')
            }
        })
    })
}

function header(){
    //주메뉴에 마우스 올리면 서브메뉴 나오게
    $('#navM>li').on('mouseover',function(){
        //서브메뉴 나오게
        $(this).find('.sub_menu').stop().slideDown();
    })
    $('#navM>li').on('mouseleave',function(){
        $(this).find('.sub_menu').stop().slideUp();
    })
}

function banner(){
    //베너에 마우스 올리면
    $('.visual').on('mouseover',function(){
        $('.visual').removeClass('overB');
        $(this).addClass('overB');
    }).on('mouseleave',function(){
        $('.visual').removeClass('overB');
    });
}

function con1(){
    

    $('.center').slick({
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 3,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 3
            }
          },
          {
            breakpoint: 480,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 1
            }
          }
        ]
      });
}

function con2(){
    //subTitle클릭시 클래스 on 추가
    $('.first').addClass('on');
    //subTitle 클릭시 
    $('#map_sub>a').click(function(){
        //span에 on Class 추가
        $('#map_sub>a').removeClass('on');
        $(this).addClass('on');
        return false;
    })


    //subTitle클릭시 해당 점 나타나기
    $('#map_sub>a').eq(0).click(function(){
        $('.dots').css({display:'none'});
        $('.builddingDots').css({display:'block'});
    })
    $('#map_sub>a').eq(1).click(function(){
        $('.dots').css({display:'none'});
        $('.civilDots').css({display:'block'});
    })
    $('#map_sub>a').eq(2).click(function(){
        $('.dots').css({display:'none'});
        $('.plantDots').css({display:'block'});
    })

    $('.buildInfo1').css({display:'block'});
    //점 클릭시 해당 info 나타나기 build
    $('#buildDot1').click(function(){
        $('.table').fadeOut();
        $('.buildInfo1').css({display:'block'});
    })
    $('#buildDot2').click(function(){
        $('.table').fadeOut();
        $('.buildInfo2').css({display:'block'});
    })
    $('#buildDot3').click(function(){
        $('.table').fadeOut();
        $('.buildInfo3').css({display:'block'});
    })
    $('#buildDot4').click(function(){
        $('.table').fadeOut();
        $('.buildInfo4').css({display:'block'});
    })
    $('#buildDot5').click(function(){
        $('.table').fadeOut();
        $('.buildInfo5').css({display:'block'});
    })

    //점 클릭시 해당 info 나타나기 civil
    $('#civilDot1').click(function(){
        $('.table').fadeOut();
        $('.civilInfo1').css({display:'block'});
    })
    $('#civilDot2').click(function(){
        $('.table').fadeOut();
        $('.civilInfo2').css({display:'block'});
    })
    $('#civilDot3').click(function(){
        $('.table').fadeOut();
        $('.civilInfo3').css({display:'block'});
    })
    $('#civilDot4').click(function(){
        $('.table').fadeOut();
        $('.buildInfo4').css({display:'block'});
    })
    $('#civilDot5').click(function(){
        $('.table').fadeOut();
        $('.civilInfo5').css({display:'block'});
    })

    //점 클릭시 해당 info 나타나기 plant
    $('#plantDot1').click(function(){
        $('.table').fadeOut();
        $('.plantInfo1').css({display:'block'});
    })
    $('#plantDot2').click(function(){
        $('.table').fadeOut();
        $('.plantInfo2').css({display:'block'});
    })
    $('#plantDot3').click(function(){
        $('.table').fadeOut();
        $('.plantInfo3').css({display:'block'});
    })
    $('#plantDot4').click(function(){
        $('.table').fadeOut();
        $('.plantInfo4').css({display:'block'});
    })
    $('#plantDot5').click(function(){
        $('.table').fadeOut();
        $('.plantInfo5').css({display:'block'});
    })
    
    // $('.dot').addClass('flash');
    //새로고침 하면 buildDot1 flash
    $('#buildDot1').addClass('flash');
    $('.dot').on('click',function(){
        $('.dot').removeClass('flash');
        $(this).addClass('flash');
    })
}


//삼선 버튼 클릭시 변화
var menuOpen; //menu가 보이는 상태라는 논리형 변수 선언
function tog(){
    $('#toggleM').click(function(){
        if(menuOpen==true){//메뉴가 보이고 있다면
            //navM 사라지게
            $('#navM').animate({width:'0'},500);//ok
            //삼선버튼중 위아래 border 나타나게
            $('.to').removeClass('disN');
            $('.bo').removeClass('disN');
            //가운데 before와 after 요소 removeClass
            $('.af').removeClass('rotA');
            $('.bf').removeClass('rotB');
        }else{//메뉴가 안보인다면
            //navM 나타나게
            $('#navM').animate({width:'344px'},500);
            //삼선버튼중 위아래 border사라지게
            $('.to').addClass('disN');
            $('.bo').addClass('disN');
            //가운데 before와after 요소를 +45,-45deg 로 변화
            $('.af').addClass('rotA');
            $('.bf').addClass('rotB');
        }
        menuOpen = !menuOpen; //true면 false로 false면 true 로  
    });
}

//메뉴 클릭시 하위메뉴 나오기
function tabletM(){
    $('#navM>li').on('focus',function(){
        //서브메뉴 나오게
        $(this).find('.sub_menu').stop().slideToggle();
        //+가 -로 변경
        $(this).find('.pl').attr({})
    });
}

//메뉴의 + 클릭시 변화
var plusOpen;
function menuplus(){
        if(plusOpen==true){//메뉴가 오픈 상태라면
        //    $(this).next('after').attr('content').replace('-','+');
        }else{//메뉴가 닫힌 상태라면
        //    $(this).next('after').attr('content').replace('+','-');
        }
        plusOpen = !plusOpen;
}


