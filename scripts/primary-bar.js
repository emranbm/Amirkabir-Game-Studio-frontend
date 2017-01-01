/**
 * Created by emran on 1/1/17.
 */
$('#search-icon').click(search);

$('#search-input').keyup(function(e){
    if(e.keyCode == 13)
    {
        search();
    }
});

function search() {
    let query = $('#search-input').val();

    window.location.href = "games_list.html?q=" + query;
}