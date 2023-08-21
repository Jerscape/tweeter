//TWEET CHARACTER COUNTER

$(document).ready(function() {


  $('#tweet-text').on('input', function(event) {
    console.log(this)//for testing purposes
    console.log(event.target.value);
    //const count = event.target.value.trim().length;
    const count = $(this).val().length;
    const remaining = 140-count
    $("#output").text(remaining)

    if(remaining >= 0){
      $("#output").css("color", "black")
    } else {
      $("#output").css("color", "red")
    }

    $(".classname")

  });

});

