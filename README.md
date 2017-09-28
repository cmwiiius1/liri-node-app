# liri-node-app
// 

The app is not fully functional  

The movie-this, do-what-it-days, and logging functions work. 

my-tweets gets an authentication error: 
{ code: 32, message: 'Could not authenticate you.' }
In working with my tutor, Daniel, we were not able to solve this issue.  I asked TA's Adam and Arron to look at it, but they also were stumped and no resolution was found to correct the Code 32 error. 

Spotify does work to a degree.  The call got made the first time and returned data,  But it will not take a new song name and only lists first song entered, "Hello", every time the app runs.  And since it won't take any new data, the do-what-it-says function returns the same data all the time and will not execute the random.txt spotify call. 

LIRI Command Line APP
cmwii@DESKTOP-CVC7A82 MINGW64 /c/RUBootCamp/liri-node-app (master)
$ node liri.js movie-this Bambie
this is loaded
Movie Title: undefined
Release Year: undefined
IMDB Rating: undefined
Production Country: undefined
Language: undefined
Plot: undefined
Actors/Actresses: undefined
Rotten Tomatoes Rating: undefined
Rotten Tomatoes URL: undefined

cmwii@DESKTOP-CVC7A82 MINGW64 /c/RUBootCamp/liri-node-app (master)
$ node liri.js movie-this Jaws
this is loaded
Movie Title: Jaws
Release Year: 1975
IMDB Rating: 8.0
Production Country: USA
Language: English
Plot: A giant great white shark arrives on the shores of a New England beach resort and wreaks havoc with bloody attacks on swimmers, until a local sheriff teams up with a marine biologist and an old seafarer to hunt the monster down.
Actors/Actresses: Roy Scheider, Robert Shaw, Richard Dreyfuss, Lorraine Gary
Rotten Tomatoes Rating: N/A
Rotten Tomatoes URL: http://www.rottentomatoes.com/m/jaws/

cmwii@DESKTOP-CVC7A82 MINGW64 /c/RUBootCamp/liri-node-app (master)
$ node liri.js movie-this Beaches
this is loaded
Movie Title: Beaches
Release Year: 1988
IMDB Rating: 6.8
Production Country: USA
Language: English
Plot: A privileged rich debutante and a cynical struggling entertainer share a turbulent, but strong childhood friendship over the years.
Actors/Actresses: Bette Midler, Barbara Hershey, John Heard, Spalding Gray
Rotten Tomatoes Rating: N/A
Rotten Tomatoes URL: http://www.rottentomatoes.com/m/beaches/

cmwii@DESKTOP-CVC7A82 MINGW64 /c/RUBootCamp/liri-node-app (master)
$ node liri.js my-tweets
this is loaded
{ consumer_key: '9UVyMMnJMwleMbjhqjToSKDBh',
  consumer_secret: 'u2kx5oV1pyTFnsQEQUQyn5qKl0uG7TaYuJOYhTdZQsvlFXyPmh ',
    access_token_key: '911390818841321472-CuRAtU0dIySlUeK2udWSkBfCcw5l9nH',
      access_token_secret: 'bTefR7uEHUtC0rC4C2f87Q9kxQpDrqYKhD2bV4BOKvAzI' }
      [ { code: 32, message: 'Could not authenticate you.' } ]

      cmwii@DESKTOP-CVC7A82 MINGW64 /c/RUBootCamp/liri-node-app (master)
      $ node liri.js spotify-this-song Sailing
      this is loaded

      ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
      Artist: Starpoint

      Song Name: Object Of My Desire

      Preview URL: https://p.scdn.co/mp3-preview/e505c943fb122001fb537c21a4fa8b50bbbd1a8f?cid=e208b66f6d5349409410b02382c5129a

      Album Name: Restless
      ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


      cmwii@DESKTOP-CVC7A82 MINGW64 /c/RUBootCamp/liri-node-app (master)
      $ node liri.js spotify-this-song Hello
      this is loaded

      ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
      Artist: Starpoint

      Song Name: Object Of My Desire

      Preview URL: https://p.scdn.co/mp3-preview/e505c943fb122001fb537c21a4fa8b50bbbd1a8f?cid=e208b66f6d5349409410b02382c5129a

      Album Name: Restless
      ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


      cmwii@DESKTOP-CVC7A82 MINGW64 /c/RUBootCamp/liri-node-app (master)
      $ node liri.js do-what-it-says
      this is loaded

      ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
      Artist: Starpoint

      Song Name: Object Of My Desire

      Preview URL: https://p.scdn.co/mp3-preview/e505c943fb122001fb537c21a4fa8b50bbbd1a8f?cid=e208b66f6d5349409410b02382c5129a

      Album Name: Restless
      ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


      cmwii@DESKTOP-CVC7A82 MINGW64 /c/RUBootCamp/liri-node-app (master)
      $
