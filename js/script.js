
$(document).ready(function () { //makes sure the html is fully loaded before executing the javascript
    var searchBtn = $('#MaterialButton-addon2'); //Link the id for the search button

    $(searchBtn).on('click', function () {//when clicked on the button run this functions
        var artist = $('#artist').val();
        console.log(artist);
        var title = $('#title').val();
        console.log(title);

        var artAPIKey = '05491a370a54ea7716568aaa45951396'; //key for the album art API
        var queryArtURL = 'http://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=' + artAPIKey + '&artist=' + artist + '&album=' + title + '&format=json'; //complete url for album art API
        var queryLyricURL = 'https://api.lyrics.ovh/v1/' + artist + '/' + title; //complete url for lyric API

        $.ajax({
            url: queryArtURL,//'http://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=05491a370a54ea7716568aaa45951396&artist=Prince&album=1999&format=json',
            method: 'GET'
        }).then(function (response) {
            console.log(response);
            $.ajax({ //calling data from the Lyric api
                url: queryLyricURL,
                method: "GET"
            }).then(function (response) {
                console.log(response); //testing the response
            });
        });
    });

});