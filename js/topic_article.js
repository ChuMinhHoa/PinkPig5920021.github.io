$(document).ready(function () {
    $(".viewmore a").click(function (e) {
        e.preventDefault();
        var elem = $(this).text();
        e.preventDefault();
        if (elem == "Read More") {
            //Stuff to do when btn is in the read more state
            $(this).html('Read Less');
            $(this).closest('.rp-discrible-wrapper').find('.text').slideDown();
        } else {
            //Stuff to do when btn is in the read less state
            $(this).html('Read More');
            $(this).closest('.rp-discrible-wrapper').find('.text').slideUp();
        }
    });
});