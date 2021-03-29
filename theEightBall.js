// Magic Eight Ball Project
/* 
In this project I will build the Magic Eight Ball using control flow in JavaScript.

The user will be able to input a question, then our program will output a random fortune.
*/

let userName = '';

// create a ternary expression that decides what to do if the user enters a name or not.
userName ? console.log(`Hello, ${username}!`) : console.log('Hello!');

const userQuestion = 'What will tomorrow weather?';
console.log(`The user asked: ${userQuestion}`);

const randomNumber = Math.floor(Math.random() * 8);

let eightBall = '';

switch (randomNumber) {
  case 0:
  eightBall = 'It is probably sunny day, better to go outside';
  break;
  case 1:
  eightBall = 'Tomorrow is going to be a rainy day, don\'t forget to bring your own umbrella.'
  break;
  case 2:
  eightBall = 'IDK, please see another weather forecast. Come back later.'
  break;
  case 3:
  eightBall = 'Could be windy day, prepare your own jacket if you have a plan to go outside.'
  break;
  case 4:
  eightBall = 'Prepare to buy your own chocolate to make hot chocolate, because tomorrow will be a heavy rainy day. Don\'t forget to add marshmallow on it.'
  break;
  case 5:
  eightBall = 'Cloudy day, better go and have some picnic.'
  break;
  case 6:
  eightBall = 'Thunderstorm, please stay at home.'
  break;
  case 7:
  eightBall = 'In the morning will be sunny, but in the afternoon will have a light rain'
  break;
}

// Display the eightBall result
console.log(`The eight ball answered: ${eightBall}`);