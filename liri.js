// require the keys.js file that holds the twitter keys
var twitterKeysObject = require('./keys.js');

// require twitter, spotify, and request NPM libraries
// install libraries before running this app with the following commands:
// npm install twitter, npm install spotify, npm install request
var Twitter = require('twitter');
var Spotify = require('node-spotify-api');
var Request = require('request');

// require Node built in fs library package for filesystem access
var fs = require('fs');

var command = process.argv[2];
var commandArgument = process.argv[3];

// switch based on the command received
switch (command) {

  // handle the movie-this command
  case 'movie-this':
    movieThis(commandArgument);
    break;

  // handle the twitter command
  case 'my-tweets':
    myTweets();
    break;

  // handle the spotify-this-song command
  case 'spotify-this-song':
    mySpotify(commandArgument);
    break;  
    
  // handle the do-what-it-says command
  case 'do-what-it-says':
    doWhatItSays();
    break;

  // default response when command is not valid
  default:
    console.log("Command not Valid. Please try again!");

// end the switch statement
}

// if the movie-this command is received
function movieThis(receivedMovie) {

  // first save the name of the movie if provided from command line
  // otherwise default to "Mr. Nobody"
  // use ternary function for ease of use
  var myMovie = receivedMovie ? receivedMovie : 'Mr. Nobody';

  // Then run a request to the OMDB API with the movie specified
  Request("http://www.omdbapi.com/?t=" + myMovie + "&y=&plot=short&r=json&tomatoes=true&apikey=40e9cece", function (error, response, body) {

    // If the request is successful (i.e. if the response status code is 200)
    if (!error && response.statusCode === 200) {
      // console.log(JSON.parse(body));
      // log the command issued to the log.txt file
      logCommand();

        // Parse the returned data (body) and display movie info
        logThis('Movie Title: ' + JSON.parse(body).Title);
        logThis('Release Year: ' + JSON.parse(body).Year);
        logThis('IMDB Rating: ' + JSON.parse(body).imdbRating);
        logThis('Production Country: ' + JSON.parse(body).Country);
        logThis('Language: ' + JSON.parse(body).Language);
        logThis('Plot: ' + JSON.parse(body).Plot);
        logThis('Actors/Actresses: ' + JSON.parse(body).Actors);
        logThis('Rotten Tomatoes Rating: ' + JSON.parse(body).tomatoRating);
        logThis('Rotten Tomatoes URL: ' + JSON.parse(body).tomatoURL);
      }

    // end the request function
  });

// end the movieThis function
}

// if the my-tweets command is received

function myTweets() {

  var client = new Twitter(twitterKeysObject);
 console.log(twitterKeysObject);
var params = {screen_name: 'cw_mbnj'};
client.get('statuses/user_timeline', params, function(error, tweets, response) {
  if (!error) {
    console.log(tweets);
  }
  else {
    console.log(error);
  }
});
}
// end the myTweets function

// if the spotify-this-song command is received

function mySpotify() {

var spotify = new Spotify({
  id: 'e208b66f6d5349409410b02382c5129a',
  secret: '82ecaafba23040d2a009d087e879ab7b'
});
 
spotify.search({ type: 'track', query: spotify }, function(err, data) {
  if (err) {
    return console.log('Error occurred: ' + err);
  }

      else {

                console.log('')

                console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~')

                console.log('Artist: ' + data.tracks.items[0].album.artists[0].name);

                console.log('')

                console.log('Song Name: ' + data.tracks.items[0].name);

                console.log('')

                console.log('Preview URL: ' + data.tracks.items[0].preview_url);

                console.log('')

                console.log('Album Name: ' + data.tracks.items[0].album.name);

                console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~')

                console.log('')

        }
  
// console.log(data.tracks.items[0].album.artists); 
// finde console.log for data 

});
}
// if the do-what-it-says command is received
function doWhatItSays() {

  // read in the random.txt file
  fs.readFile('random.txt', 'utf8', function(error, data) {

  // if an error is caught in the read, display that and exit the function
  if (error) return console.log('Filesystem Read Error: ' + error);

  // split data into an array of function name and argument
  var dataObject = data.split(',');

  // define the function name and argument name
  var myFunction = dataObject[0];
  var myArgument = dataObject[1];

  // modify the myFunction received into the function names used in this app
  switch (myFunction) {
    case 'my-tweets':
      myFunction = 'myTweets';
      break;
    case 'spotify-this-song':
      myFunction = 'mySpotify';
      break;
    case 'movie-this':
      myFunction = 'movieThis';
      break;
    default:
      console.log('Unexpected error in doWhatItSays function');
  }

  // now that we have myFunction correctly formatted, use eval to evaluate it
  // and send it the argument too
  eval(myFunction)(myArgument);

  // end the readFile function
  });

// end the doWhatItSays function
}

// logging function
function logThis(dataToLog) {

  // log the data to console
  console.log(dataToLog);

  // also append it to log.txt followed by new line escape
  fs.appendFile('log.txt', dataToLog + '\n', function(err) {
    
    // if there is an error log that then end function
    if (err) return console.log('Error logging data to file: ' + err);
  
  // end the appendFile function
  });

// end the logThis function
}

// logging command to log.txt file function
function logCommand() {

  // structure the string that equates to the command that was issued
  if (commandArgument) {
    var tempString = "COMMAND: node liri.js " + command + " '" + commandArgument + "'";
  } else {
    var tempString = "COMMAND: node liri.js " + command;
  }

  // append the command to log.txt followed by new line escape
  fs.appendFile('log.txt', tempString + '\n', function(err) {
    
    // if there is an error log that then end function
    if (err) return console.log('Error logging command to file: ' + err);
  
  // end the appendFile function
  });

// end the logCommand function
}