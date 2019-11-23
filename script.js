var searchBtnEl = $("#searchBtn");



$(searchBtnEl).click(function () {
    var inputVal = $("#inputInfo").val();
    var addDiv = $("<div>", {
        'class': "searchObject"
    });
    $.ajax({
        url: "https://www.theaudiodb.com/api/v1/json/1/search.php?s=" + inputVal,
        method: "GET"
    }).then(function (response) {
        $(addDiv).appendTo(".results");
        $(".searchObject").text(response);
        console.log(response);
    })
})