//Jack Fowler 3/14/18
//EJS for CC prep EJS ch3 exercises

//Next, write a function called countChar that behaves like countBs,
//except it takes a second argument that indicates the character that
//is to be counted (rather than counting only uppercase “B” characters).
//Rewrite countBs to make use of this new function.
//This one I completed handidly

   //Count uppercase 'B' 's in a string
  
   function countChar(string, target){}
   let targetCount = 0;
   for(let i = 0; i < string.length; i++){
     if(string[i] === target) targetCount++;
   }
  return targetCount;
}
