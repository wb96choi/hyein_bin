$(function(){
    // 헤더의 네비게이션 슬라이드 코드
    $('#main-header #header-nav .gnb li').mouseenter(function(){
        $('.sub').stop().slideDown();
        $('#main-header #header-nav .nav_bg').stop().slideDown();
    });
    $('#main-header #header-nav .gnb > li').mouseleave(function(){
        $('.sub').stop().slideUp();
        $('#main-header #header-nav .nav_bg').stop().slideUp();
    });
    // --


    // 토글메뉴버튼 코드
    $('#toggle-menu-btn .bi-list').click(function(){
        // 헤더배경색
        $('#main-header').addClass('on');
        // 로고
        $('#main-header .logo img:first-child').css({'transition':'.5s', 'display':'none'});
        $('#main-header .logo .logoOn').css({'transition':'.5s', 'display':'block'});
        // 헤더nav
        $('#header-nav').addClass('on');
        // intranet버튼
        $('#intranet').addClass('on');
        // 토글메뉴버튼
        $('#toggle-menu-btn').addClass('on');
        $('#main-header #header-nav .gnb li .sub').stop().slideDown();
        $('#main-header #header-nav .nav_bg').stop().slideDown();
        $('#toggle-menu-btn .bi-list').addClass('change');
        $('#toggle-menu-btn .bi-x-circle').removeClass('change');
    });
    $('#toggle-menu-btn .bi-x-circle').click(function(){
        // 헤더배경색
        $('#main-header').removeClass('on');
        // 로고
        $('#main-header .logo img:first-child').css({'transition':'.5s', 'display':'block'});
        $('#main-header .logo .logoOn').css({'transition':'.5s', 'display':'none'});
        // 헤더nav
        $('#header-nav').removeClass('on');
        // intranet버튼
        $('#intranet').removeClass('on');
        // 토글메뉴버튼
        $('#toggle-menu-btn').removeClass('on');
        $('#main-header').removeClass('on');
        $('#main-header #header-nav .gnb li .sub').stop().slideUp();
        $('#main-header #header-nav .nav_bg').stop().slideUp();
        $('#toggle-menu-btn .bi-list').removeClass('change');
        $('#toggle-menu-btn .bi-x-circle').addClass('change');
    });
    // --
});

// 모바일 토글메뉴
$(function(){
    $('#toggle-menu-btn .bi-list').click(function(){
        $('#mobile-toggle-menu').addClass('on');
    });
    $('#toggle-menu-btn .bi-x-circle').click(function(){
        $('#mobile-toggle-menu').removeClass('on');
    });

    $('#mobile-toggle-menu .gnb > li > #plus').click(function(){
        $(this).siblings('.sub').toggle(function(){
            $(this).find('.sub').stop().slideDown(500);
            $(this).find('.sub').stop().slideUp(500);
        });
    })
});




// 스크롤좌표값 구하기
$(function () {
    $(window).scroll(function () {
        // scrollposition이 현재 스크롤 좌표임
        var scrollposition = $(window).scrollTop();
        console.log(scrollposition);


        // 
        if (scrollposition >= 1) {
            // 헤더배경색
            $('#main-header').addClass('on');
            // 로고
            $('#main-header .logo img:first-child').css({'transition':'.5s', 'display':'none'});
            $('#main-header .logo .logoOn').css({'transition':'.5s', 'display':'block'});
            // 헤더nav
            $('#header-nav').addClass('on');
            // intranet버튼
            $('#intranet').addClass('on');
            // 토글메뉴버튼
            $('#toggle-menu-btn').addClass('on');
        } else {
            // 헤더배경색
            $('#main-header').removeClass('on');
            // 로고
            $('#main-header .logo img:first-child').css({'transition':'.5s', 'display':'block'});
            $('#main-header .logo .logoOn').css({'transition':'.5s', 'display':'none'});
            // 헤더nav
            $('#header-nav').removeClass('on');
            // intranet버튼
            $('#intranet').removeClass('on');
            // 토글메뉴버튼
            $('#toggle-menu-btn').removeClass('on');
        }
    });
});


// 페이드 슬라이드
$(function(){
    var num = 0;
    function changeslider(img_num){
        if(num == 2){
            num = 0;
        }   else{
            num++;
        }
        $('#main-visual .slider img').eq(num).fadeIn(500);
        $('#main-visual .slider img').eq(num - 1).fadeOut(500);
    };

    setInterval(function(){
        changeslider();
    }, 3000);
});