
$(document).ready(function () {
    //Id for the search button
    var searchBtn = $('#MaterialButton-addon2'); 

    //Search functionality to pull from both APIs
    $(searchBtn).on('click', function () {
        //Clearing the inputs for the new search
        $("#album-art").empty();
        $("#lyrics").empty();

        var contFluid = document.querySelector('.container-fluid');
        contFluid.setAttribute('class', 'container-fluid');

        var artist = $('#artist').val();
        var title = $('#title').val();

        //Clears the previous search parameters
        $('#artist').val("");
        $('#title').val("");

        //Key for the album art API
        var artAPIKey = '05491a370a54ea7716568aaa45951396';
        //Complete url for album art API
        var queryArtURL = 'https://ws.audioscrobbler.com/2.0/?method=album.getinfo&api_key=' + artAPIKey + '&artist=' + artist + '&album=' + title + '&format=json'; 
        //Complete url for lyric API
        var queryLyricURL = 'https://api.lyrics.ovh/v1/' + artist + '/' + title; 

        //API call for the album art work
        $.ajax({
            url: queryArtURL,
            method: 'GET'
        }).then(function (response) {
            //When there is no album art an error will show
            if (response.message === 'Album not found' || response.album.image[4]['#text'] === '') {
                $('#album-art').append('<p>' + 'Album art not found' + '</p>');
                var errorImage = $('<img class="error img-fluid">');
                errorImage.attr('src', './images/error.png');
                $('#album-art').append(errorImage);
            }
            //If there is art work, it will get appended
            var artWork = $('<img>');
            artWork.attr('src', response.album.image[4]['#text']);
            $('#album-art').append(artWork);

            //If the response errors out this error will show
        }).catch(function () {

            $('<img class="error">');
            $('.error').attr('src', './images/error.png');
        });

        //API call for the lyrics
        $.ajax({
            url: queryLyricURL,
            method: "GET"
        }).then(function (response) {
            //When there is no lyrics an error will show
            if (response === '') {
                $('#lyrics').append('<p>' + 'Song lyrics not found' + '</p>');
            }
            $('#lyrics').css('display', 'block');
            //Formatting text for lyrics display
            var lyricsResponse = response.lyrics.replace(/\r?\n/g, '<br/>');
            //If there is art work, it will get appended
            var lyrics = $('<p>').html(lyricsResponse);
            $('#lyrics').append(lyrics);
            
            //If the response errors out this error will show
        }).catch(function () {
            $('#lyrics').append('<p>' + 'Song lyrics not found' + '</p>');
            $('#lyrics').css('display', 'block');
        });
    });

});