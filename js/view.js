$(document).ready(function () {
  console.log("ready!");

  i = 4;
  $(".image-wrap").on("click", () => {
    if (i === 0) {
      i = 5;
      $(".image-wrap > div").addClass("layer");
    } else {
      $(`.layer:nth-child(${i})`).removeClass("layer");
    }
    i -= 1;
  });

  $("#contactbtn").on("click", () => {
    $(".contact").fadeIn();
  });

  $("#contactClose").on("click", () => {
    $(".contact").fadeOut();
  });

  $("#storybtn").on("click", () => {
    $(".story").fadeIn();
  });
  $("#storyClose").on("click", () => {
    $(".story").fadeOut();
  });

  $(".marquee").marquee({
    //duration in milliseconds of the marquee
    duration: 25000,
    //gap in pixels between the tickers
    gap: 20,
    //time in milliseconds before the marquee will start animating
    delayBeforeStart: 0,
    //'left' or 'right'
    direction: "left",
    //true or false - should the marquee be duplicated to show an effect of continues flow
    duplicated: true,

    startVisible: true,
  });
});
