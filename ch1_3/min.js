//returns min of two arguments
//Jack Fowler 3/13/2018


function min(a, b){
  if(a===b)return a;
  if(a<b){
    return a;
  }
  else{
    return b;
  }
}

min(12,150);
min(50,-30);
min(10,10);
min(-30, -50);
