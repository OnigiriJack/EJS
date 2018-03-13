//Jack Fowler 3/13/18
//EJS chap 2 exercises for CC prep
// Had some difficulty tracking my bindings
// but once I figured out placement I got it
// I made one version with "\n" escape character that uses one console.log()
// statementand one that
// prints every lines

// version 1
let size = prompt("Please enter an integer: ");
for (let i = 0; i< size; i++){
  //reset string every new line
  let lineString = '';
  for(let j = 0; j< size; j ++){
    //even lines start with a space
    if (i % 2 == 0) {
     lineString += ' #';
    }
    else {
      lineString += '# ';
    }
}
    console.log(lineString);
}

//version 2
// Your code here.
let size = prompt("Please enter an integer: ");
let grid = '';
for (let i = 0; i< size; i++){
  for(let j = 0; j< size; j ++){
    if (i % 2 == 0) {
     grid += ' #';
    }
    else {
      grid += '# ';
  }

}
    grid += '\n';
}
console.log(grid);
