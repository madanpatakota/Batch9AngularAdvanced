
//1.In javascript class already we learned this approach

/* function declaration */

/* ternary operator */

var number = 10;
var isTrue = number % 2 == 0 ;

let fname = "John";

// fname == "john" it will give the true

if(fname == "john"){

}

// 2) 10 (5
//    10
//    ==
//    0

// let number = 10 ;

// if(10 % 2 == 0){

// }




console.log(isTrue);


function getName(name){
   return name;
}

/* function calling */
getName("John");


var getName = (name) => {
  return name;
}



/* 2 Approcah
Functions declaration with variable */

var getName = (value) => {
  console.log("You have entered the " , value);
}

/* function is calling by variable */
getName(10);

// So where you can see this kind of syntaxes in earlier class 

var numbers = [1,2,3,4];
  
//numbers.filter()

function numberHandling(value){
     return number % 2 == 0;
}

numbers.filter(numberHandling(value))   // old version code handling.

numbers.filter(number=> number % 2 == 0) // latest handling.
















