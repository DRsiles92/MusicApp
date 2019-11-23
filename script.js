
$.ajax({
    url: "https://www.theaudiodb.com/api/v1/json/1/search.php?s=coldplay",
    method: "GET"
}).then(function (response) {
    console.log(response);
});

