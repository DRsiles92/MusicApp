var searchBtnEl = $("#searchBtn");



$(searchBtnEl).click(function () {
    var inputVal = $("#inputInfo").val();
    console.log(!inputVal);
    var inputVal1 = $("#inputInfo1").val();
    
    if (!inputVal || !inputVal1){
        return;
        console.log('input is null')
    }else{
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
        var pOne = $("<p>").text("Artist: " + artist);
        songDiv.append(pOne);

        var album = response.track[0].strAlbum;
        var pTwo = $("<p>").text("Album: " + album);
        songDiv.append(pTwo);

        var track = response.track[0].strTrack;
        var pThree = $("<p>").text("Song Title: " + track);
        songDiv.append(pThree);


        var pFour = $("<button/>", {
            text: "Click for Bio",
            id: "readBio"

        })
        var bioBtnEl = $(pFour);

        $(bioBtnEl).click(function () {
            var inputVal = $("#inputInfo").val();
            event.stopPropagation();
            $.ajax({
                url: "https://www.theaudiodb.com/api/v1/json/1/search.php?s=" + inputVal,
                method: "GET"
            }).then(function (response) {
                console.log(response);

                var infoDiv = $("<div class='artistInfo'>");

                var artInfo = response.artists[0].strBiographyEN;
                var pFive = $("<p>").text("Biography: " + artInfo);
                infoDiv.append(pFive);

                $("#artist-info").html(infoDiv);
                
                
            })
        })

        songDiv.append(pFour);



        $("#songInfo").html(songDiv)
    })
}
});


$(searchBtnEl).click(function () {
    var inputVal = $("#inputInfo").val();
    var inputVal1 = $("#inputInfo1").val();
    if (!inputVal || !inputVal1){
        return;
        console.log('input is null')
    }else{
    event.preventDefault();
    $.ajax({
        url: "https://api.lyrics.ovh/v1/" + inputVal + "/" + inputVal1,
        method: "GET"
    }).then(function (response) {
        console.log(response);

        var lyricDiv = $("<div class='lyrics'>");

        var lyrics = response.lyrics;
        var pOne = $("<p>").text(lyrics);
        lyricDiv.append(pOne);

        $("#lyricResults").html(lyricDiv)

    })
}
});

$(searchBtnEl).click(function () {
    var inputVal = $("#inputInfo").val();
    var inputVal1 = $("#inputInfo1").val();
    if (!inputVal || !inputVal1){
        return;
        console.log('input is null')
    }else{
    event.preventDefault();
    $.ajax({
        url: "https://www.theaudiodb.com/api/v1/json/1/search.php?s=" + inputVal,
        method: "GET"
    }).then(function (response) {
        console.log(response);

        var artistPic = response.artists[0].strArtistThumb;
                console.log(artistPic);

        $("#artistImage").html($('<img>',{id: 'artistName' ,src: artistPic, width: '100%', height: '100%' }));
        


    })
}
})



	$(document).ready(function(){
		$('#clearBtn').click(function(){				
			$("#inputInfo").val(null);
            $("#inputInfo1").val(null);
		});
	});
