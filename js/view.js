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
});
