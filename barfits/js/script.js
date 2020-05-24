var shots = document.querySelectorAll('.menu li');
var resolutionPairs = [
  [1399, "75px"],
  [1260, "65px"],
  [790, "55px"],
  ["45px"]
]

function fontSizegenerator(arr) {
  for (var i = 0; i < arr.length; i++) {
    if (i == 0) {
      if ($(document).width() > arr[i][0]) {
        screenSizeAndFs(arr[i][1]);
      }
    }
    if (i != 0 && i != arr.length - 1) {
      if ($(document).width() > arr[i][0] && $(document).width() < arr[i - 1][0]) {
        screenSizeAndFs(arr[i][1]);
      }
    }
    if (i == arr.length - 1) {
      if ($(document).width() < arr[i - 1][0]) {
        screenSizeAndFs(arr[i][0]);
      }
    }
  }
}

function screenSizeAndFs(fs) {
  let a = 200;
  b = 600;
  for (let i = 0; i < shots.length; i++) {
    console.log(b);
    setTimeout(function() {
      $(shots[i]).animate({
        fontSize: fs
      }, a, "linear");
      console.log(a);
      a += 200;
    }, b)
    b += 100;
  }
}

$('.wrapper').scroll(function() {
  var edge = $('.wrapper').height() - $('img').height() + $('.wrapper').offset().top;
  if ($('img').offset().top == edge) {

    $('img').animate({
      width: '10000px'
    }, 75, "linear");;
    $('.question').addClass('goUp');
    $('.menu').addClass('goUp2');
    $('.wrapper').addClass('noScroll');

    $('.question').animate({
      opacity: 0.8
    }, 200, "linear");

    fontSizegenerator(resolutionPairs);
    
    setTimeout(function() {
      $('.smoothly').addClass('lines smoothlyOn');
    }, 1600)
  }
});
