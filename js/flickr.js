$(document).ready(function(){
    //add click event handler
    //run each time when the button is clicked
  $("button").click(function() {
      $("button").removeClass("selected");
      $(this).addClass("selected");
      var flickrAPI = "http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?";    
      var animal = $(this).text();
      var flickrOptions = {
          tags: animal,
          format:"json"
    }; 
      function displayPhotos(data) {
      var photoHTML ='<ul>';
      //loop for the array
      $.each(data.items,function(i,photo){
        photoHTML += '<li class="grid-25 tablet-grid-50">';
        photoHTML +='<a href="'+photo.link+'" class="image">';
        photoHTML +='<img src="' + photo.media.m+'"></a></li>';
      });

      photoHTML += '</ul>';
      //add string to html add to the page
      $('#photos').html(photoHTML);

    }
      $.getJSON(flickrAPI,flickrOptions,displayPhotos);
    });

});//end ready

// Plan
// 1. The user clicks a button
// 2. The JavaScript program will get the word on that button
// 3. Make a GET request to Flickr, sending the word along
// 4. Receive the JSON response
// 5. Add a link and an <img> tag to the page
