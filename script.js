function displaySong(){
    var songTitles = 
    var queryURL = theaudiodb.com/api/v1/json/1/searchtrack.php?s={Artist_Name}&t={Single_Name};

    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function(response) {
        var songDiv = $("<div class='searchResults'>");
    })
}