// trying to impliment asyn in javascript
var c = 90; //global scope

var fun = () => {
    // let c = 67;
    a = 900;
    console.log("value of function scope:-", c, a);
    function display() {
        // let  c = 88;
        console.log("f inside function:-", c)
    };
    display();
};
fun();
if(a == 90){
    var b = 89;
    console.log("value of block scope:-", b)
};
console.log("value of Global scope:-", b)
// console.log("start");
// setTimeout(()=>{
//     fun();
// }, 0);
// fetch();
// console.log("end");
// console.log("value of a1:-", a);
// scopes
