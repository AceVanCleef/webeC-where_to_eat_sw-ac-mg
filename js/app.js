
$(document).ready(function() {
    $(document.body).find('#where').hide();
    $(document.body).find('#who').hide();


    $(document.body).find('nav').on('click', '#whatLink', function(event) {
        $(document.body).find('#where').hide();
        $(document.body).find('#who').hide();
        $(document.body).find('#what').show();
    });

    $(document.body).find('nav').on('click', '#whereLink', function(event) {
        $(document.body).find('#where').show();
        $(document.body).find('#who').hide();
        $(document.body).find('#what').hide();
    });

    $(document.body).find('nav').on('click', '#whoLink', function(event) {
        $(document.body).find('#where').hide();
        $(document.body).find('#who').show();
        $(document.body).find('#what').hide();
    });
});