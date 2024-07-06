let cars=[{brand:"maruthisuziki",price:1000000},{brand:"tata",price:3000000},{brand:"honda",price:2000000}];
//using for of method
for(let x of cars){
    x.model=2023;
    console.log(x);
}
//using for in method
for(let y in cars){
   
    console.log(cars[y]);
    console.log(y);
}
//using for each method
 cars.forEach( z=>{
    z.fueltype="petrol";
    console.log(z);


});
//using map method
let a=cars.map((item,index,cars)=>{
    return item;
    
    

});
console.log("xyz-",a);
//using for method
for(let i=0;i<cars.length;i++){
    
    cars[i].enginetype="condition";
    console.log("abc-",cars[i]);
} 

    
