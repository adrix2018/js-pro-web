$(function() {
  $.fx.interval = 0;
  (function cycleBgImage(elem, bgimg) {
    // `elem`:`#slideshow`
    // set, reset, delay to `1000` after background image reset
    elem.css("backgroundImage", bgimg)
      // fade in background image
      .fadeTo(3000, 1, "linear", function() {
        // fade in background image
        $(this).delay(11000, "fx").fadeTo(1000, 0, "linear", function() {
          // split background image string at comma , creating array
          var img = $(this).css("backgroundImage").split(","),
            // concat first background image to `img` array,
            // remove first background image from `img` array
            bgimg = img.concat(img[0]).splice(1).join(",");
          // recursively call `cycleBgImage`
          cycleBgImage(elem, bgimg);
        });
      });
  }($("#slideshow")));
});
