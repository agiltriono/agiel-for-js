$("input.nightcheck").each(function() {
    var mycookie = $.cookie($(this).attr('name'));
    if (mycookie && mycookie == "true") {
        $(this).prop('checked', mycookie);
    }
});
$("input.nightcheck").change(function() {
    $.cookie($(this).attr("name"), $(this).prop('checked'), {
        path: '/',
        expires: 365
    });
});
