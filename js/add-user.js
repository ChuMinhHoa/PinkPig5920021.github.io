$('.form-group input').focus(function () {
    $(this).closest('.form-group').addClass('not-empty');
})

$('.form-group input').blur(function () {
    if($(this).val() === '') {
        $(this).closest('.form-group').removeClass('not-empty');
    }
})

$('input[type=date]').blur(function() {
    if($(this).val() !== '') {
        $(this).css('color', '#ff8d00');
    }
})

