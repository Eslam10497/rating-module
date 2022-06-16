///////////////Functions section//

function getRating(rate, confirm) {
  $(".sel").removeClass("highlight");
  $("#" + rate).addClass("highlight");
  switch (rate) {
    case "one":
      $("#text-rating").text("You selected 1 out of 5");
      break;
    case "two":
      $("#text-rating").text("You selected 2 out of 5");

      break;
    case "three":
      $("#text-rating").text("You selected 3 out of 5");

      break;
    case "four":
      $("#text-rating").text("You selected 4 out of 5");

      break;
    case "five":
      $("#text-rating").text("You selected 5 out of 5");

      break;

    default:
      break;
  }
}

////Main Section/////

$(".sel").click(function (e) {
  const rating = $(this).attr("id");
  getRating(rating);
  if (confirm) {
    $("#page-one").addClass(disappear);
    $("#page-two").removeClass(disappear);
  }
});

$("#submit-btn").click(function (e) {
  e.preventDefault();
  $("#page-one").addClass("disappear");
  $("#page-two").removeClass("disappear");
});

// hello Amrawaaaayyy 3aaaaaaaaaaaaaaaaaaaaaaaaaaaaa //////
