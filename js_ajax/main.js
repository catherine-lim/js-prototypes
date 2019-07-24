//Create GLOBAL variable below here on line 2
var global_result;


$(document).ready(initializeApp);

function initializeApp(){
    $('button').click(getData);
}

function getData(){
    console.log('1) getData called from button click');
    var ajaxConfig = {
        dataType: 'json',
        url: 'http://ax.itunes.apple.com/WebObjects/MZStoreServices.woa/ws/RSS/topMovies/json',
        success: function(result) {
            
            console.log('2) AJAX Success function called, with the following result:', result);
            global_result = result;
            var firstMovieThirdImage = result.feed.entry[0]['im:image'][2].label;
            
            for(var movie = 0; movie < result.feed.entry.length; movie++) {
                    var thirdImage = result.feed.entry[movie]['im:image'][2].label;
                    var movieImage = $('<img>' , {
                        src: thirdImage
                    });
                    var eachMovieContainer = $('<div>').addClass('eachmovie')
                    eachMovieContainer.append(movieImage);


                    var movieTitle = result.feed.entry[movie].title.label;
                    var movieTitleDiv = $('<div>' , {
                        src: movieTitle
                    });
                    movieTitleDiv.append(movieTitle);


                        var movieContainer = $('<div>' ,{
                            class : 'movieContainer',
                            css :{
                                display: 'inline-block',
                                width: '33%'
                            }
                        });


                        movieContainer.append(eachMovieContainer);
                        movieContainer.append(movieTitleDiv);

                $('#main').append(movieContainer);
                
            }
            

        }
       
    }


    console.log('3) Making AJAX request');
    $.ajax(ajaxConfig);

    console.log('4) End of getData');

}
