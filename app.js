$(function(){
    $('#main-header #header-nav .gnb  li').mouseenter(function(){
        $('.sub').stop().slideDown();
        $('#main-header #header-nav .nav_bg').stop().slideDown();
    });
    $('#main-header #header-nav .gnb > li').mouseout(function(){
        $('.sub').stop().slideUp();
        $('#main-header #header-nav .nav_bg').stop().slideUp();
    });

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
        $('.sub').stop().slideDown();
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
        $('.sub').stop().slideUp();
        $('#main-header #header-nav .nav_bg').stop().slideUp();
        $('#toggle-menu-btn .bi-list').removeClass('change');
        $('#toggle-menu-btn .bi-x-circle').addClass('change');
    });
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