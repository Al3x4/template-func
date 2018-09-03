## Create your own `template` function
Exercise part of the Udacity Front-end nanodegree program

### Description
- the `template` function accepts
  1. a string of the template to parse
  2. an `options` object for custom delimiters
      - an `open` property for the open delimiter
      - a `close` property for the close delimiter
      
- the default delimiters the `template` function uses are:
  1. `*(` for the opening delimiter
  2. `)*` for the closing delimiter
  
- the `template` function returns a function
- the returned function accepts:
  1. one argument for each placeholder in the original string
  2. a number - this is how many times the string is to be logged to the console
  
### EXAMPLE:
in the example below `*(` is my default opening delimiter and `)*` is the default closing delimiter
```
var string = "Hi, my name is Richard. And I *( emotion )* this *( thing )*!";
var logResult = template( string );
logResult( 'love', 'ice cream', 2 );  //logs the message "Hi, my name is Richard. And I love this ice cream!", twice

var string = "Is <<! thing !>> healthy to <<! action !>>?";
var logResult = template( string, {open: '<<!', close: '!>>'} );
logResult( 'ice cream', 'consume', 7 );  logs the message "Is ice cream healthy to consume?", seven times
```
 
