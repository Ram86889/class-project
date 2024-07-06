let person={
     name:"ram",
     age:23,
    location:"guntur" }
 for(let x in person){
     console.log(x);
 }
 let numbers=[1,2,3,1,2];
 numbers.reverse(
    

 );
console.log(numbers);
 let number=[1,2,3,1,2];
 let array=[];
 number.forEach((element) => {
     if(!array.includes(element)){ 
         array.push(element);
     }
 });
 console.log("array-",array)
 let chars = ['A', 'B', 'A', 'C', 'B'];

 let uniqueChars = [];
 chars.forEach((c) => {
     if (!uniqueChars.includes(c)) {
         uniqueChars.push(c);
     }

 });
 console.log(uniqueChars );
  
const fetchData = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    const data = await response.json();
    return data;
};

const execute = async () => {
    console.log("statement start");
    const data = await fetchData();
    console.log(data);
    console.log("statement end");
};

execute();








