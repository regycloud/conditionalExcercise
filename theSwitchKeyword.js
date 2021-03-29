// Excercise using switch keyword
let athleteFinalPosition = 'first place';

// For the first place will get gold, the second place will get silver, the third place will get bronze medal, and the default will not get medal.
switch (athleteFinalPosition) {
  case 'first place':
  console.log('You get the gold medal!');
  break;
  case 'second place':
  console.log('You get the silver medal!');
  break;
  case 'third place':
  console.log('You get the bronze medal!');
  break;
  default:
  console.log('No medal awarded.');
  break;  
}