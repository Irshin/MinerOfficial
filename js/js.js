
// url (required), options (optional)
<<<<<<< HEAD
/*fetch( 'table.json', {
=======
fetch( 'table.json', {
>>>>>>> 0e8216fbcbb1da4027e411617459cfa283da4b56
    method: 'get'
}).then( function( response ) {
    console.log(response.json());
    // Success
<<<<<<< HEAD
}).catch( function( err ) {*/
    // Error
(function($) {
    "use strict"; // Start of use strict
    function validateEmail(email) {
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
               return re.test(email);
    }
    var encoded = "&bull;&nbsp;";
    var bull = $("<div/>").html(encoded).text();
    // Select all links with hashes

    //Collect email
    $("#emailSubmit").click(function () {
        if (validateEmail($("#userEmail").val()) === true ) {
            try {
                gaSendEvent('Email Subscription', $("#userEmail").val());
                FS.setUserVars({
                    "displayName": $("#userEmail").val(),
                    "email": $("#userEmail").val()
                });
            } catch (e) {
            }
            alert("Спасибо за подписку на новости: " + $("#userEmail").val().toString() + "!");
            $("#userEmail").val("");
        } else {
            var infoText = "";
            if (validateEmail($("#userEmail").val()) === false) {
                infoText += bull + "Email указан не верно\n";
            }
            alert(infoText);
        }
        function infoalerto() {
            alert("Запуск сайта будет произведен в ближайшее время");
        }
        $("#fourm").click(function()
            {infoalerto()

    $("#news").click(function() {
    infoalerto()
});
$("#node").click(function() {
    infoalerto()

});
$("#contact").click(function() {
    infoalerto()

});
            });
                });

})(jQuery); // End of use strict
=======
}).catch( function( err ) {
    // Error
});

function infoalert() {
    alert("Запуск сайта будет произведен в ближайшее время");
}
$("#platform").click(function() {
    infoalert()
});
$("#news").click(function() {
    infoalert()
});
$("#node").click(function() {
    infoalert()
});
$("#contact").click(function() {
    infoalert()
});
>>>>>>> 0e8216fbcbb1da4027e411617459cfa283da4b56
/*
var collection = '{"tr": [{"td1": "name1","td2": "name2"},{"td1": "name1","td2": "name2"}]}';
var tr += '';
$.each(collection, function(i, tr){
    tr += '<tr><td>'+tr.td1+'</td><td>'+tr.td2+'</td></tr>';
});
$('table').html(tr);
*/
