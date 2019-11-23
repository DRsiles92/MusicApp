function displaySong(){
    var queryURL = "https://www.theaudiodb.com/api/v1/json/1/search.php?s=coldplay";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {
        console.log(response);
    });
}
