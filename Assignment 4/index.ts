import inquirer from "inquirer";

//1. Hello World
let greeting:string="Hello World!";
console.log (greeting);

//2. Basic Math

let a:number = 20
let b:number = 40
console.log(a+b);
console.log(a*b);
console.log(a-b);
console.log(b/a);

//3. Swapping Values
let a1=15;
let b1=45;
a1=b1;
console.log(a1);

//4. Types Annotatation
//let abc:="15";


//5. Modulus Operator
let x1=15
let y1=20
console.log(y1%x1);

//6. Increment Challenge

let s1=20
let d2=40
//s1=s1+1
s1++
console.log(s1);

//7. Logical Gates
let q1="IRFAN";
let w1="SAIF";
let e1="JAWAD";

if ((q1==="IRFAN") || (w1==="SAIF1"))

console.log("true");

else 

console.log("false");

if ((q1==="IRFAN") && (w1==="JAWAD"))

console.log("true");

else 

console.log("false");

if ((q1!="IRFAN") || (w1="SAIF"))

console.log("true");

else 

console.log("false");

if ((q1!="SAIF") || (w1="SAIF"))

console.log("true");

else 

console.log("false");

//8- Compound Assignment
let g=20;
g+=2
g-=5
g*=3
g/=2

console.log(g);

//9- Even or Odd
let n1=7;
if (n1%2==0){
    console.log("even")
}
    else {
        console.log("odd")
    }

//10- Voting Eligibility
let S1 = 20;
let S2= 17;

if (s1>=18){
    console.log("user is eligible to vote")
}
else{
    console.log("user is not eligible to vote")
}

if (S2>=18){
    console.log("user is eligible to vote")
}
else{
    console.log("user is not eligible to vote")
}

//11-Grading System

let marks=70;

if((marks>=90) && (marks<90)) {
    console.log("Exceptional")
}
else if((marks>=80) && (marks<90))  {
console.log("Excellent")
}
    else if((marks>=70) && (marks<80))  {
        console.log("Very Good")
}

else if((marks>=60) && (marks<70))  {
    console.log("Good")

}

else if((marks>=50) && (marks<60))  {
    console.log("Average")
}  
    else if((marks>=40) && (marks<50))  {
        console.log("Fail")   
}

//12- Max of Three

//const numbers = [69, 420, 108, 47]
console.log(Math.max (69, 420, 108, 47,500));
//console.log(numbers);

//13- Leap Year Checker
//let =2024
//function checkLeapYear(year1){}

//14- Fahrenheit to Celsius Converter
//let number1= 40
function fahrenheitToCelsius(fahrenheit: number): number { return (fahrenheit - 32) * 5/9; } 
console.log(fahrenheitToCelsius)

//15-Positive, Negative, or Zerok
let k1=15;
let k2=-20;

//16- Multiplication Table
let b2=15;
let a2
for(a2=1; a2<=10;a2++){
    {
        console.log(`${b2}x${a2}=${a2*b2}`);
    }
}

