// normal functions 
function display(){
 console.log("i am normal function");
}; 
display();
// function expresion
const visible=function(){
    console.log("i am function expresion");
};
visible();
// arrow function
const shown=()=>{
    console.log("i am an arrow function");
};
shown();
function name( a,b){
    let c;
    c=a+b;
    
   return c;
};

let answer=name(2,4);
console.log(answer);





let displayFullName=(firstName, lastName)=>{ // recieving arguments
    let fullName = "Welcome " + firstName +" "+ lastName; //string concatination
      return fullName;
  };
  
  let result1=displayFullName("sathosh", "naik");//pass parametrs
  let result2=displayFullName("ganesh", "naik");//pass parametrs
  let result3=displayFullName("laxman", "naik");//pass parametrs
  console.log(result1, result2, result3);
  
