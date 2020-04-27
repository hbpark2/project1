$(document).ready(function () {



            var el = document.querySelector('.main-text')
            var options = {
                text: '지 금 이 ─ 아 니 면 세 상 어 디 에 도 없 는 \n 주 도 적 인 ─ 퍼 블 리 셔 \n 박 형 빈 입 니 다',
                textSpeed: 95,
                blinkSpeed: 0.06
            }

            var instance = new tinytyper(el, options);


        //변수 ht에 브라우저의 높이값을 저장
        var ht = $(window).height();
    //브라우저의 높이값을 section의 높이값으로 지정
    $("section").height(ht);

    //브라우저가 리사이즈 될 때마다 브라우저와 section의 높이값을 갱신
    $(window).on("resize", function () {
        var ht = $(window).height();
        $("section").height(ht);
    });


    /*  주 메뉴 클릭시 자동으로 상하 스크롤 시키기  */

    //메뉴 버튼 클릭시
    $("#menu li").on("click", function (e) {
        e.preventDefault();
        //

        //변수 ht에 브라우저의 높이값 저장
        var ht = $(window).height();

        //변수 i에 현재 클릭한 li의 순서값을 저장
        var i = $(this).index();

        //브라우저의 높이값*박스의 순서값은 현재 박스의 스크롤 위치값과 동일
        var nowTop = i * ht;

        //해당 스크롤 위치값으로 문서를 이동
        $("html,body").stop().animate({
            "scrollTop": nowTop
        }, 1400);
    });


    /*	화면이 스크롤 될때마다 현재 영역에 해당하는 메뉴 활성화하기 */

    $(window).on("scroll", function () {

        console.log($(window).scrollTop())

        //변수 ht에 현재 브라우저의 넓이값 저장
        var ht = $(window).height();

        //변수 scroll에 현재 문서가 스크롤된 거리 저장
        var scroll = $(window).scrollTop();
        // scroll이 0보다 크면 메뉴가 안보이는 조건문
        if (scroll > 0) {
            $("#menu").stop().animate({
                opacity: 1
            }, 500)
        } else {
            $("#menu").stop().animate({
                opacity: 0
            }, 500)
        }

        for (var i = 0; i < 7; i++) {
            if (scroll >= ht * i && scroll < ht * (i + 1)) {
                $("#menu li").removeClass();
                $("#menu li").eq(i).addClass("on");
            };
        }


    });

    //section위에서 마우스 휠을 움직이면
    $("section").on("mousewheel", function (event, delta) {

        //마우스 휠을 올렸을때	
        if (delta > 0) {
            //변수 prev에 현재 휠을 움직인 section에서 이전 section의 offset().top위치 저장
            var prev = $(this).prev().offset().top;
            //문서 전체를 prev에 저장된 위치로 이동
            $("html,body").stop().animate({
                "scrollTop": prev
            }, 500);

            return false;

            //마우스 휠을 내렸을때	 
        } else if (delta < 0) {

            //변수 next에 현재 휠을 움직인 section에서 다음 section의 offset().top위치 저장
            var next = $(this).next().offset().top;
            //문서 전체를 next에 저장된 위치로 이동
            $("html,body").stop().animate({
                "scrollTop": next
            }, 500);

            return false;

        }

    });


});
