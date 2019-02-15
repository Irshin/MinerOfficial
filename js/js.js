
// url (required), options (optional)
fetch( 'table.json', {
    method: 'get'
}).then( function( response ) {
    console.log(response.json());
    // Success
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
/*
var collection = '{"tr": [{"td1": "name1","td2": "name2"},{"td1": "name1","td2": "name2"}]}';
var tr += '';
$.each(collection, function(i, tr){
    tr += '<tr><td>'+tr.td1+'</td><td>'+tr.td2+'</td></tr>';
});
$('table').html(tr);
*/
