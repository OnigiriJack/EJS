// Jack Fowler 3/14/18
// EJS for CC prepy
// return true if even using recursion
// keeps cutting down til it  gets to the base case
// this program tests whether or not POSITIVE WHOLE numbers are
// even
// overall solved this quickly once I figured out how to get to base case.
function isEven(num){

  if (num === 0){
    return true;
  }
  //Catches negative numbers as well.
  else if (num === 1 || num < 0){
    return false;
  }
  else{
    return isEven(num - 2);
  }
}
