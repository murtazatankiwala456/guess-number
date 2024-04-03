$("button").click(function () {
  var inputValue = parseInt($("input").val());

  // Convert input value to integer
  if ($("input").val() === "") {
    $("#result").html("Enter a number!");
  } else if (inputValue === 7) {
    // Use strict equality check (===) for integer comparison
    $("#result").html("Your guess is correct!");
  } else if (inputValue <= 5) {
    $("#result").html(`Too low!<br/>${inputValue}`);
  } else if (inputValue > 7) {
    $("#result").html(`Too high!<br/>${inputValue}`);
  }
});
