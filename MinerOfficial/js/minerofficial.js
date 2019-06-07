
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
    function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(?:\d{3})+(?!\d))/g, ",");
    }
    $('.points').each(function(){
        var v_pound = $(this).html();
        v_pound = numberWithCommas(v_pound);

        $(this).html(v_pound)

    })

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
        $("#btc_difficulty").text(numberWithCommas((data["btc"]["difficulty"] /1000000).toFixed()));
        $("#ethc_difficulty").text(numberWithCommas((data["ethc"]["difficulty"]/1000000).toFixed()));
        $("#eth_difficulty").text(numberWithCommas((data["eth"]["difficulty"] /1000000).toFixed()));
        $("#ubq_difficulty").text(numberWithCommas((data["ubq"]["difficulty"] /1000000).toFixed()));
        $("#dash_difficulty").text(numberWithCommas((data["dash"]["difficulty"]).toFixed()));
        $("#grin_difficulty").text(numberWithCommas((data["grin"]["difficulty"]).toFixed()));
        $("#ltc_difficulty").text(numberWithCommas((data["ltc"]["difficulty"]).toFixed()));
        $("#btc_nethash").text(numberWithCommas((data["btc"]["nethash"]/1000000000000000).toFixed()));;
        $("#ethc_nethash").text(numberWithCommas((data["ethc"]["nethash"]/1000000000000).toFixed()));
        $("#eth_nethash").text(numberWithCommas((data["eth"]["nethash"]/1000000000000).toFixed()));
        $("#ubq_nethash").text(numberWithCommas((data["ubq"]["nethash"]/1000000000).toFixed()));
        $("#dash_nethash").text(numberWithCommas((data["dash"]["nethash"]/1000000000000000).toFixed()));
        $("#grin_nethash").text(numberWithCommas((data["grin"]["nethash"]/1000000).toFixed()));
        $("#ltc_nethash").text(numberWithCommas((data["ltc"]["nethash"]/1000000000000).toFixed()));
        $("#btc_Exchange").text(data["btc"]["exchange_rate"]);
        $("#ethc_Exchange").text(data["ethc"]["exchange_rate"]);
        $("#eth_Exchange").text(data["eth"]["exchange_rate"]);
        $("#ubq_Exchange").text(data["ubq"]["exchange_rate"]);
        $("#dash_Exchange").text(data["dash"]["exchange_rate"]);
        $("#grin_Exchange").text(data["grin"]["exchange_rate"]);
        $("#ltc_Exchange").text(data["ltc"]["exchange_rate"]);
        $("#btc_market_cap").text(data["btc"]["market_cap"]);
        $("#ethc_market_cap").text(data["ethc"]["market_cap"]);
        $("#eth_market_cap").text(data["eth"]["market_cap"]);
        $("#ubq_market_cap").text(data["ubq"]["market_cap"]);
        $("#dash_market_cap").text(data["dash"]["market_cap"]);
        $("#grin_market_cap").text(data["grin"]["market_cap"]);
        $("#ltc_market_cap").text(data["ltc"]["market_cap"]);
        $("#btc_market_volume").text(numberWithCommas((data["btc"]["exchange_rate_vol"]).toFixed()));
        $("#ethc_market_volume").text(numberWithCommas((data["ethc"]["exchange_rate_vol"]).toFixed()));
        $("#eth_market_volume").text(numberWithCommas((data["eth"]["exchange_rate_vol"]).toFixed()));
        $("#dash_market_volume").text(numberWithCommas((data["ubq"]["exchange_rate_vol"]).toFixed()));
        $("#ubq_market_volume").text(Math.round(data["dash"]["exchange_rate_vol"]).toFixed());
        $("#grin_market_volume").text(numberWithCommas((data["grin"]["exchange_rate_vol"]).toFixed()));
        $("#ltc_market_volume").text(numberWithCommas((data["ltc"]["exchange_rate_vol"]).toFixed()));

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
