var searchBtnEl = $("#searchBtn");



$(searchBtnEl).click(function () {
    var inputVal = $("#inputInfo").val();
    var inputVal1 = $("#inputInfo1").val();
    event.preventDefault();
    $.ajax({
        url: "https://www.theaudiodb.com/api/v1/json/1/searchtrack.php?s=" + inputVal + "&t=" + inputVal1,
        method: "GET"
    }).then(function (response) {
        console.log(response);
        console.log(response.track[0].strArtist);
        console.log(response.track[0].strAlbum);
        console.log(response.track[0].strTrack);
        


        var songDiv = $("<div class='artist'>");

        var artist = response.track[0].strArtist;
        var pOne = $("<p>").text(artist);
        songDiv.append(pOne);

        var album = response.track[0].strAlbum;
        var pTwo = $("<p>").text(album);
        songDiv.append(pTwo);

        var track = response.track[0].strTrack;
        var pThree = $("<button/>", {
            text: "Click Here For Lyrics",
            id: "searchLyric"
        })
        songDiv.append(pThree);
        

        $("#artistResults").prepend(songDiv)
    })
})

// $(searchBtnEl).click(function () {
//     var inputVal = $("#inputInfo").val();
//     var inputVal1 = $("#inputInfo1").val();
//     event.preventDefault();
//     $.ajax({
//         url: "https://www.theaudiodb.com/api/v1/json/1/searchtrack.php?s=" + inputVal + "&t=" + inputVal1,
//         method: "GET"
//     }).then(function (response) {