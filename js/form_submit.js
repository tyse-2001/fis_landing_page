var $form = $('form#contact-form'),
url = 'https://script.google.com/macros/s/AKfycbwvDoDs4FJ65sE_Uh_jWAVe7DKI9Gg_vKsnhfTuPcoVexUBd8hu/exec'

$('#submit-form').on('click', function(e) {
e.preventDefault();
var jqxhr = $.ajax({
    url: url,
    method: "GET",
    dataType: "json",
    data: $form.serializeObject()
}).success(
    alert("Form sucessfully submitted"),
    location.reload()
);
})