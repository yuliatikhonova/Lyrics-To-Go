
$(document).ready(function () { //makes sure the html is fully loaded before executing the javascript
    var searchBtn = $('#MaterialButton-addon2'); //Link the id for the search button

    $(searchBtn).on('click', function () {//when clicked on the button run this functions

        $("#album-art").empty();
        $("#lyrics").empty();

        var contFluid = document.querySelector('.container-fluid')
        contFluid.setAttribute('class', 'container-fluid')

        var artist = $('#artist').val();
        //console.log(artist);
        var title = $('#title').val();
        //console.log(title);

        $('#artist').val("");
        $('#title').val("");

        var artAPIKey = '05491a370a54ea7716568aaa45951396'; //key for the album art API
        var queryArtURL = 'http://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=' + artAPIKey + '&artist=' + artist + '&album=' + title + '&format=json'; //complete url for album art API
        var queryLyricURL = 'https://api.lyrics.ovh/v1/' + artist + '/' + title; //complete url for lyric API

        $.ajax({
            url: queryArtURL,
            method: 'GET'
        }).then(function (response) {
            console.log(response);
            //if (response.message == 'Album not found' || response.album.image[4]['#text'] == '') {
               // $('#album-art').append('<p>' + 'Album art not found' + '</p>')
            //}
            var artWork = $('<img>');
            artWork.attr('src', response.album.image[4]['#text']);
            $('#album-art').append(artWork);
        }).catch(function () {
            // $('#album-art').append('<p>' + 'Album art not found' + '</p>');
            // $('<img class="error">');
            // $('.error').attr('src', './images/error.svg');
        });
        
        $.ajax({ //calling data from the Lyric api
            url: queryLyricURL,
            method: "GET"
        }).then(function (response) {
            console.log(response); //testing the response
            if (response === '') {
                $('#lyrics').append('<p>' + 'Song lyrics not found' + '</p>')
            }
            $('#lyrics').css('display', 'block');
            var lyrics = $('<p>').text(response.lyrics);
            $('#lyrics').append(lyrics);
        }).catch(function () {
            console.log('err')
            $('#lyrics').append('<p>' + 'Song lyrics not found' + '</p>');
            $('#lyrics').css('display', 'block');
        });
    });

});