function dailyActivity(){
  console.log("Lets go outside")
}
function sunnyDay(){
    console.log("and Lets play ball!");
}
function rainyDay(){
    console.log("lets play even if it's raining")
}

function activity(){
    receivesAFunction(rainyDay);
    
}
function receivesAFunction(otherOption){
    dailyActivity();
    otherOption(); 
}
activity;
console.log(activity());


function returnsANamedFunction(){
  
receivesAFunction(rainyDay);

  return function before() {
    console.log(`Today, before we go and play ball`);
  }
}
returnsANamedFunction;
const fn = returnsANamedFunction(rainyDay);
fn;
fn();

function returnsAnAnonymousFunction() {
  return function (){
    console.log('Hello!');
  }
}
const bL= returnsAnAnonymousFunction();

bL();



