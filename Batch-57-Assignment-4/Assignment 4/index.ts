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
let num1=
function Odd_evenNum(num1){
    if(num1==0){
        return`${num1}is even`;
    }
    else if (num1==1) {
        return`${num1}is odd`;
    }
                
    }


