
$('.question-answers').click(function () {
    let index = $(this).index()
    let currCard = $('.question-answers').eq(index)
    let currBody = $(`.question-answers:eq(${index}) .answer`)

    if (currBody.css('display') == 'block') {
        currBody.slideUp()
    } else {
        $('.answer').slideUp()
        currBody.slideDown()
    }
});


$(document).ready(function(){
    $(".menu-burger").click(function(){
        $(this).toggleClass("fa-xmark");
        $(".nav-menu").toggle(500)
    });
    $(window).resize(function(){
        if(screen.width > 768)
            $(".nav-menu").show();
    })
});


