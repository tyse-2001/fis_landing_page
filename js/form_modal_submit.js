var $modal_form = $('form#contact-form-2'),
url = 'https://script.google.com/macros/s/AKfycbwvDoDs4FJ65sE_Uh_jWAVe7DKI9Gg_vKsnhfTuPcoVexUBd8hu/exec'

$('#submit-form-2').on('click', function(e) {
    if (checkform("contact-form-2") == true) {
        e.preventDefault();
        var jqxhr = $.ajax({
            url: url,
            method: "GET",
            dataType: "json",
            data: $modal_form.serializeObject()
        }).success(
            alert("Form sucessfully submitted"),
            location.reload()
        );
    }
})