var searchBtnEl = $("#searchBtn");



$(searchBtnEl).click(function () {
    var inputVal = $("#inputInfo").val();
    event.preventDefault();
    $.ajax({
        url: "https://www.theaudiodb.com/api/v1/json/1/search.php?s=" + inputVal,
        method: "GET"
    }).then(function (response) {
        console.log(response);
        console.log(response.artists[0].strArtist)

        var artistDiv = $("<div class='artist'>");

        var artist = response.artists[0].strArtist;
        var pOne = $("<p>").text(artist);
        artistDiv.append(pOne);

        $("#artistResults").prepend(artistDiv)
    })
})