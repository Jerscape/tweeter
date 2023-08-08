$(document).ready(function() {
  // --- our code goes here ---
  // let count = 0
  // //const tweetForm = document.querySelector('tweet-text')
  // const tweetForm2 = document.getElementById('tweet-text')
  // tweetForm2.addEventListener('input', (event) => {

  //   count = count + 1
  //   const start = 140
  //   const remaining = start - count
  //   //console.log(event.target.value)
  //   console.log(remaining)
  //   //update inner text of output 

  //   if(remaining >= 0){
  //     document.getElementById("output").innerText = remaining

  //   } else {
  //     document.getElementById("output").style.color="red"
  //     document.getElementById("output").innerText = remaining
      
  //   }
    
   
  //   //consider accounting for backspace/delete
  //   //consider making it red if it is below 0
     
  // })

  
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