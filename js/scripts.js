$(document).ready(function() {
  $("#game").submit(function(event) {
    $("ul").empty();
    var number = parseInt($("#mynum").val());

    for (x = 1; x <= number; x++)
      if (x % 3 === 0 && x % 5 === 0) {
        $("ul").append("<li>pingpong</li>");

      } else if (x % 3 === 0) {
      $("ul").append("<li>ping</li>");

    } else if (x % 5 === 0) {
      $("ul").append("<li>pong</li>");

    } else {
      $("ul").append("<li>" + x + "</li>");
    }
    event.preventDefault();
  });
});
