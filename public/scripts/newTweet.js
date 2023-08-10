
$(function() {
  const $form = $('#tweetForm')
  $form.on('submit', function(event) {
    console.log("Button clicked")
    event.preventDefault()


    // to get the data from the form....is it the name.text? or do I use ID
    //the jquery documentation suggested I serialized the whole form???
    let userInput = $(this).serialize()
    console.log(userInput)

    // //const newTweet = $("textarea").val()
    // const serializedNewTweet = 
    $.post('/tweets', userInput)
    .then(()=>{
      console.log("tweet submitted")
    })
    // //docs -> https://api.jquery.com/jquery.post/
    // //first parameter the index.html page?
    // //data? (is this the stuff from text area?)
    // $.ajax('?', { method: 'POST' })
    // //other expressions to execute?
    
  })
})