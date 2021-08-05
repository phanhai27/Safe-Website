$(document).ready(function(){
    AOS.init({
    });

    $("#gocontact").click(function(e){
        e.preventDefault();
        
        grecaptcha.ready(function() {
            grecaptcha.execute('6LcUv5MaAAAAAFdSHhVVXoQTYoHRr2SKSSMqHU0F', {action: 'contact'}).then(function(token) {
                var formData = {
                    "fullname": $("#name").val(),
                    "email": $("#email").val(),
                    "message": $("#message").val(),
                    "token": token,
                };
                $.ajax({
                    type: "POST",
                    url: "/api/v1/website/contact/submit",
                    data: JSON.stringify(formData),
                    contentType: "application/json; charset=utf-8",
                    dataType: "json",
                })
                .done(function (data) {
                    if (data.error == 0) {
                        $("form").html('<div class="alert alert-success">' + data.message + "</div>");
                    } else {
                        $("form").html('<div class="alert alert-danger">' + data.message + "</div>");
                    }
                })
                .fail(function (data) {
                    $("form").html('<div class="alert alert-danger">Could not reach server, please try again later.</div>');
                });
            });
        });
    });
});