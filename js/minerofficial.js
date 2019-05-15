
// url (required), options (optional)
/*fetch( 'table.json', {
fetch( 'table.json', {
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


    $.getJSON('http://localhost:8080/', function(data) {
        //data is the JSON string
        $("#btc_block_time").text(Math.round(data["btc"]["block_time"]));
        $("#ethc_block_time").text(Math.round(data["ethc"]["block_time"]));
        $("#eth_block_time").text(data["eth"]["block_time"]);
        $("#ubq_block_time").text(data["ubq"]["block_time"]);
        $("#dash_block_time").text(data["dash"]["block_time"]);
        $("#grin_block_time").text(data["grin"]["block_time"]);
        $("#ltc_block_time").text(data["ltc"]["block_time"]);
        $("#btc_block_reward").text(data["btc"]["block_reward"]);
        $("#ethc_block_reward").text(data["ethc"]["block_reward"]);
        $("#eth_block_reward").text(data["eth"]["block_reward"]);
        $("#ubq_block_reward").text(data["ubq"]["block_reward"]);
        $("#dash_block_reward").text(Math.round(data["dash"]["block_reward"]));
        $("#grin_block_reward").text(data["grin"]["block_reward"]);
        $("#ltc_block_reward").text(data["ltc"]["block_reward"]);
        $("#btc_last_block").text(Math.ceil(data["btc"]["last_block"]));
        $("#ethc_last_block").text(data["ethc"]["last_block"]);
        $("#eth_last_block").text(data["eth"]["last_block"]);
        $("#dash_last_block").text(data["ubq"]["last_block"]);
        $("#ubq_last_block").text(data["dash"]["last_block"]);
        $("#grin_last_block").text(data["grin"]["last_block"]);
        $("#ltc_last_block").text(data["ltc"]["last_block"]);

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
