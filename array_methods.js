// element, index
// array methods
// console.log(array.length);
// loop on array
//console.log(array[1]); //accesing array elemts using index
let array = [2,4, 1, 3, 3  4, 56];
for(let i = 0; i<array.length; i++){
    // console.log(array[i]+10);
};
// modern way - es6
// for-each => it never returns any array
let ans = [];
 array.forEach(element => {
     ans.push(element*3);
});
// console.log( array);

function multiply(el) {
    return el*el;
};

const b = [12,22,32].map(x=>x*x);
console.log(ans, b);

const display = (x) => {
    return `welcome ${x}`
};
const mynAME = display("santhosh");
console.log(mynAME);

// filetr
const filteredArray = array.filter(x=> x>20);
const foundArray = array.find(x=> x>20);
console.log({filteredArray: filteredArray, foundArray:foundArray})


let array1 = [12,22,4, 1, 3];
console.log(array1.join('+'))
console.log(array1.indexOf(22));
 console.log(array1.sort((a, b)=>a-b));
