$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    const person1Input = $("input#user").val().toUpperCase();

    $(".user").text(person1Input);

    $("#machine-response").show();
  });
});
