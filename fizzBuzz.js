//Jack Fowler 3/13/18
//EJS for CC prepy
// I solved this one quickly, but I am sure there is a better way
//first output
let result = 1;

for (let count = 0; count < 100; count++){

  if (result % 3 === 0 && result % 5 === 0){
    console.log('FizzBuzz');
  }
  else if(result % 3 === 0) {
    console.log('Fizz');
  }
  else if(result % 5 === 0) {
    console.log('Buzz');
  }
  else {
    console.log(result);
  }
  result++;
}
