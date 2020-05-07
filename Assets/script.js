//---------------------------Variables------------------------

var queryLyricURL = 'https://api.lyrics.ovh/v1/' + artist + '/' + title; //complete url for lyric API
var artist = $(#).value;
var title = $(#).value;


var artAPIKey = ''; //key for the album art API
var queryArtURL = '' + artAPIKey; //complete url for album art API

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

        $.ajax({
            url: 'http://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=05491a370a54ea7716568aaa45951396&artist=Prince&album=1999&format=json',
            method: 'GET'
        }).then(function (response) {
            console.log(response);

        });
    });

});