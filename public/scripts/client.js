/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(() => {


const data = [
  {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png"
      ,
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": "https://i.imgur.com/nlhLi3I.png",
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  }
]

//render tweet
const renderTweet = function (arrayOfTweets) {

  for(let tweet of arrayOfTweets){

    let $tweet = createTweetElement(tweet)
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
      <div>${tweetObject.created_at}</div>
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

renderTweet(data)


})//end document ready



