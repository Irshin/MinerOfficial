
// url (required), options (optional)

/*fetch( 'table.json', {

fetch( 'table.json', {
>>>>>>> 0e8216fbcbb1da4027e411617459cfa283da4b56
    method: 'get'
}).then( function( response ) {
    console.log(response.json());
    // Success

}).catch( function( err ) {*/
    // Error
(function($) {
    "use strict"; // Start of use strict
    function validateEmail(email) {
        var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
               return re.test(email);
    }
    function infoalert() {
        alert("Эта функция скоро будет доступна");
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
            alert("Спасибо за подписку: " + $("#userEmail").val().toString() + "!");
            $("#userEmail").val("");
        } else {
            var infoText = "";
            if (validateEmail($("#userEmail").val()) === false) {
                infoText += bull + "Пожалуйста укажите Email верно \n";
            }
            alert(infoText);
        }
    });
        $("#forum").click(function() {
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

})(jQuery); // End of use strict



/*
var collection = '{"tr": [{"td1": "name1","td2": "name2"},{"td1": "name1","td2": "name2"}]}';
var tr += '';
$.each(collection, function(i, tr){
    tr += '<tr><td>'+tr.td1+'</td><td>'+tr.td2+'</td></tr>';
});
$('table').html(tr);
*/
