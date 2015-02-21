function backgroundImage(){
     var img1 = document.getElementById('img1');
     var x = Math.floor(Math.random());

    if (x > 0 && x < 3)
         img1.src = 'https://41.media.tumblr.com/f786fcd592b9f2d69f036aef7f873f99/tumblr_nk3vkmwGsM1rcmrtjo3_1280.jpg';
    else if (x > 6 && x <10)
         img1.src = 'https://40.media.tumblr.com/e9ca8b06526d2b02057f93e7b2a936af/tumblr_nk3vkmwGsM1rcmrtjo2_1280.jpg';
    else
         img1.src = 'https://36.media.tumblr.com/09b14dc71ea3597182f6531aa56ee731/tumblr_nk3vkmwGsM1rcmrtjo1_1280.jpg';


function getImage() {
  var images = ['https://41.media.tumblr.com/f786fcd592b9f2d69f036aef7f873f99/tumblr_nk3vkmwGsM1rcmrtjo3_1280.jpg', 'https://40.media.tumblr.com/e9ca8b06526d2b02057f93e7b2a936af/tumblr_nk3vkmwGsM1rcmrtjo2_1280.jpg', 'https://36.media.tumblr.com/09b14dc71ea3597182f6531aa56ee731/tumblr_nk3vkmwGsM1rcmrtjo1_1280.jpg'],
    rand = Math.floor(Math.random() * images.length);

  return images[rand];
}

document.onPageLoad('body') function() {
  console.log(getImage());
});
