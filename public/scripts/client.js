

$(document).ready(() => {



//RENDER TWEET FUNCTION
const escape = function (str) {
  let div = document.createElement("div");
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
};

const renderTweet = function (arrayOfTweets) {

  for(let tweet of arrayOfTweets){

    let $tweet = createTweetElement(tweet)
    
    $('.error-container').hide(); //this line
    $("#tweetList").append($tweet);
    $("#output").text('140');
    
  }

} 


//CREATE TWEET ELEMENT FUNCTION
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


//LOAD TWEETS FUNCTION
const loadTweets = function() {

  $.ajax({
    url: '/tweets',
    success: (tweets) => {
      renderTweet(tweets)
      
    },
    error: (err) =>  { console.log(err)}
  })

}


//NEW TWEET FUNCTION
$(function() {
  const $form = $('#tweetForm')
  

  $form.on('submit', function(event) {
    console.log("Button clicked")
    event.preventDefault()

    let userInput = $('#tweet-text').val().trim()

    if(userInput !== "" && userInput !== null){
      
      if(userInput.length <= 140){
       
        userInput = $(this).serialize()
        console.log(userInput)

        $.post('/tweets', userInput)
        .then(()=>{
          console.log("tweet submitted")
          
          //clear form
          $('#tweet-text').val("")
          $("#tweetList").empty(); //does this solve it?
          loadTweets()//is this line causing the problem?

        })

      } else {
  
        $('.error-container').slideDown()
        $(".error-container").html('<i class="fa-solid fa-circle-exclamation"></i>That tweet is too long')
    
        
       }
    } else {
      $('.error-container').slideDown()
      $(".error-container").html('<i class="fa-solid fa-circle-exclamation"></i>Please enter some text')

    }
    
  })
})

//CALL LOAD TWEETS
loadTweets()

})



