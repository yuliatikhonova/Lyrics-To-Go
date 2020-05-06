//---------------------------Variables------------------------

var lyricAPIKey = ''; //key for the lyric API
var queryLyricURL = 'https://api.lyrics.ovh/v1/artist/title' + lyricAPIKey; //complete url for lyric API
console.log(); //test if the url and key are working

var artAPIKey = ''; //key for the album art API
var queryArtURL = '' + artAPIKey; //complete url for album art API
console.log(); //test if the url and key are working

var searchBtn = $('#'); //Link the id for the search button
var searchInput = $('#').val(); //Link the id for the input that the user typed in


//---------------------------Coding------------------------

$(document).ready(function () { //makes sure the html is fully loaded before executing the javascript

    $(searchBtn).on('click', function () {//when clicked on the button run this functions

        $$.ajax({ //calling data from the Lyric api
            url: queryLyricURL,
            method: "GET"
        }).then(function (response) {
            console.log(response); //testing the response

        });

        $.ajax({ //calling data from the album art api
            url: queryArtURL,
            method: "GET"
        }).then(function (response) {
            console.log(response); //testing the response

        });
    });

});