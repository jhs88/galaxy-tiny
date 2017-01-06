/* Setting things up. */
var path = require('path'),p
    
    //Twit set up
    Twit = require('twit'),
    config = {
      twitter: {
        consumer_key: process.env.CONSUMER_KEY,
        consumer_secret: process.env.CONSUMER_SECRET,
        access_token: process.env.ACCESS_TOKEN,
        access_token_secret: process.env.ACCESS_TOKEN_SECRET
      }
    },
    T = new Twit(config.twitter),
    stream = T.stream('statuses/sample'),
    
    //tracery set up
    tracery = require('tracery-grammar');
    rawGrammar = {
      "origin": ["#st##st##st##st##st##st##st##st##st##st##st#\n#st##st##st##st##st##st##st##st##st##st##st#\n#st##st##st##st##st##st##st##st##st##st##st#\n#st##st##st##st##st##st##st##st##st##st##st#\n"],
      
      "st": [".",".",".",".",".","*","*","⊹","⊹","+","⋆","⋆","⋆","✹","˚","˚","˚","✺","✦","✦","·","✫","✵","✵","✵","..","✧","✧"," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," "," ", " "," "," "," "," "," "," ", " "," "," "," "," "," "]
    }
    
processedGrammar = tracery.createGrammar(rawGrammar);
  processedGrammar.addModifiers(tracery.baseEngModifiers); 
tweet = processedGrammar.flatten("#origin#");
console.log(tweet);

// T.post('statuses/update', { status: tweet }, function(err, data, response) {
//   if (err){
//     console.log('Error!');
//     console.log(err);
//   }
// });



/**********************************************************************************************/
/* The code below takes care of serving the index.html file, no need to change anything here. */

var express = require('express');
var app = express();
app.use(express.static('public'));
listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
