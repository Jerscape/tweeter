/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(() => {


// const data = [
//   {
//     "user": {
//       "name": "Newton",
//       "avatars": "https://i.imgur.com/73hZDYK.png"
//       ,
//       "handle": "@SirIsaac"
//     },
//     "content": {
//       "text": "If I have seen further it is by standing on the shoulders of giants"
//     },
//     "created_at": 1461116232227
//   },
//   {
//     "user": {
//       "name": "Descartes",
//       "avatars": "https://i.imgur.com/nlhLi3I.png",
//       "handle": "@rd" },
//     "content": {
//       "text": "Je pense , donc je suis"
//     },
//     "created_at": 1461113959088
//   }
// ]

//render tweet
const renderTweet = function (arrayOfTweets) {

  for(let tweet of arrayOfTweets){

    let $tweet = createTweetElement(tweet)
    //change to go into tweet list section
    $(".mainContainer").append($tweet)
    
  }

} //end render tweet

//createTweetElement
const createTweetElement = function(tweetObject){

  const aTweet = `
  
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
      <p id="tweet">${tweetObject.content.text}</p>
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
  
  `
  return aTweet
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
        alert("your input is too long")
      }
    } else {
      alert("please enter some text")
    }
    
  })
})

loadTweets()

})//end document ready



