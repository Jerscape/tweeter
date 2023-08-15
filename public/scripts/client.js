/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */




$(document).ready(() => {

//TWEET CHARACTER COUNTER
$('#tweet-text').on('input', function(event) {
  console.log(this)//for testing purposes
  console.log(event.target.value);
  //const count = event.target.value.trim().length;
  let tweetCharCount = $(this).val().length;
  const remaining = 140-tweetCharCount 
  $("#output").text(remaining)

  if(remaining >= 0){
    $("#output").css("color", "black")
  } else {
    $("#output").css("color", "red")
  }

  $(".classname")

});


//RENDER TWEET FUNCTION
const escape = function (str) {
  let div = document.createElement("div");
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
};

const renderTweet = function (arrayOfTweets) {

  for(let tweet of arrayOfTweets){

    let $tweet = createTweetElement(tweet)
    //change to go into tweet list section
    $('.error-container').hide()
    $(".mainContainer").append($tweet)
    $("#output").text('140')
    
  }

} //end render tweet



//createTweetElement
const createTweetElement = function(tweetObject){

  const $aTweet = $(` 

  <article class="tweetArticleContainer">
  <header>
    <div id="userInfo">
      <img src="${tweetObject.user.avatars}"/>
      <h2>${tweetObject.user.name}</h2>
    </div>
    <div>
      <h3>${tweetObject.user.handle}</h3>
    <div>
  </header>

  <div class="tweetContent">
    <p id="tweet">${escape(tweetObject.content.text)}</p>
  </div>

  <footer>
    <div>${timeago.format(tweetObject.created_at)}</div>
    <div>
    <i class="fa-solid fa-flag"></i>
    <i class="fa-solid fa-retweet"></i>
    <i class="fa-solid fa-heart"></i>
  </div>
  </footer><!--article footer-->
</article>
  `)
  return $aTweet
}


//call render

//renderTweet(data)

//load tweets

const loadTweets = function() {

  $.ajax({
    url: '/tweets',
    success: (tweets) => {
      renderTweet(tweets)
      //console.log(tweets)
    },
    error: (err) =>  { console.log(err)}
  })

}


$(function() {
  const $form = $('#tweetForm')
  


  $form.on('submit', function(event) {
    console.log("Button clicked")
    event.preventDefault()

    // to get the data from the form....is it the name.text? or do I use ID
    //the jquery documentation suggested I serialized the whole form???


    let userInput = $('#tweet-text').val().trim()

    if(userInput !== "" && userInput !== null){
      
      //wrap the below in the agove?
      if(userInput.length <= 140){
        //place post request here
        userInput = $(this).serialize()
        console.log(userInput)

        $.post('/tweets', userInput)
        .then(()=>{
          console.log("tweet submitted")
          //clear form
          $('#tweet-text').val("")
          loadTweets()

          //
          // $("mainContainer").load('index.html')
          // $("index.html").load(".mainContainer")

        })

      } else {
  
        $('.error-container').slideDown()
        $(".error-container").html('<i class="fa-solid fa-circle-exclamation"></i>That tweet is too long')
        // setTimeout(()=>{
        //   $('.error-container').hide()
        // },15000)
        
       }
    } else {
      $('.error-container').slideDown()
      $(".error-container").html('<i class="fa-solid fa-circle-exclamation"></i>Please enter some text')
      // setTimeout(()=>{
      //   $('.error-container').hide()
      // },3000)
      //alert("please enter some text")
    }
    
  })
})

loadTweets()

})//end document ready



