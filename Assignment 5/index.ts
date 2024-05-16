//Easy
//Question-1 Write a script to log "Hello, World!" to the console.
console.log("Hello World!");
//Question-2 Create a variable temperature and assign it a value. Then log "It's cold!" if the temperature is below 20 degrees Celsius.
let temperature=20
if (temperature<=20) console.log("It is cold!");
else console.log("It is not cold!")
//Question-3 Use arithmetic operators to solve the problem: If you have 10 apples and you give away 3, how many do you have left? Log the result.
let Apples=10
console.log(Apples-3);
//Question-4 Declare two variables, firstName and lastName, then create a third variable fullName that combines them. Log the result.
let Firstname="Irfan";
let lastname="Abid"
let fullname= Firstname+" "+lastname
console.log(fullname);

//Question-5 Write a TypeScript code that uses a comparison operator to check if the number 5 is greater than 3. Log "Yes" if true, otherwise log "No"
let a=5
if (a>=3){ console.log("Yes")
}
else{
    console.log("No"); 
}
//Medium
//Question-6 Create a function calculateArea that takes the radius of a circle as an input and returns the area of the circle.
function calculateArea(input:number){
    console.log(input*2*3.14159);  
}
calculateArea(10)

//Qustion-7 Write a loop that logs numbers from 1 to 50. For multiples of 3, log "Fizz" instead of the number, and for multiples of 5, log "Buzz".

for(let n=0;n<=50; n++){
if (n%3==0) console.log("Fizz");
    else if (n%5==0) (console.log("Buzz"));
    else console.log(n);
    
}

//Question-8 Define an array temperatures with at least five different temperatures (numbers). Write a script to find and log the highest temperature.
const temperature1=[15,20,45,25,30,35];
let temp=0
for(let i=0; i<temperature1.length;i++){
    if (temperature1[i]>temp)
        temp=temperature1[i]
}
console.log("HigestTemp:",temp);


//Question-9 Create a script that prompts the user to enter their age and then logs whether they are a minor (under 18) or an adult.

 function userage(input:number){
 if (input<=18) console.log("Minor");
     else console.log("Adult");
 }
 userage(19)

//Question-10 Write a function that takes an array of numbers and returns the count of positive numbers in the array.

 const numberz = [20,25,-30,-251,60];

 const checkpositivenumber = (inputnum:number [] )=> {
 let count=0;
 for (let i=0;i<inputnum.length;i++){
     if (inputnum[i]>0){
         count=count+1;
     }
 }
 return count;
 };
 console.log(checkpositivenumber(numberz));
 //console.log(inputnum);
 //2
 const A4=[12,24,36,28,57,79]
 // const b=[53,-24,36,78,77]
 // const C=[53,-24,36,78,77,88,99,103]
  let A1=(inputnum:number[])=>{
      let count=0
 //     let countsum=0
 //     let countsum1=0
 //     let countodd=0
 //     let countodd1=0
 //     let total=0
      for (let i=0;i<=inputnum.length;i++){
 //         if(inputnum[i]%2==0){
 //             //if(inputnum[i]%3==0)
             count=count+1;
 //             countsum=inputnum[i];
 //             countsum1=countsum+countsum1
 //             //countodd=inputnum[i];
 //             //countodd1=countodd+countodd1
 //             //total=countsum1-countodd1
 //            // console.log(inputnum);
       }
 //     }
       return count;
 //      return countsum1;
  };
 
  console.log("Count",A1(A4));
 // console.log("Count",A1(b));
 // console.log("Count",A1(C));
 // //console.log(A);


//Question-11 Write a function that takes an array of words and returns a new array containing only the words that start with the letter 'a'.
const fruitnames=["apple","bannana","Appricote","PineApple", "Avocado"]
function StartwithA(words: string[]) {
    return words.filter(words => words.toLowerCase().startsWith('a'));
   // word.
}
console.log(StartwithA(fruitnames));


//
//let A1=(N1:string[])=>{
 
const A3=["ALI", "IRFAN","ADNAN","akmal"];
function names(input:string[]){
    let c=[];
    //let D:String;
    for (let i=0;i<input.length;i++){
     if(input[i].toLowerCase().startsWith('a')){
        c.push(input[i])
        
        //let D:String
        //D=input[i]
        //console.log(c); 
}
 
}
console.log(c);
} 
names(A3)
//
 const A=["ALI", "IRFAN","ADNAN"];
 let C=[];
 for (let i=0;i<A.length;i++){
        if(A[i].toLowerCase().startsWith('a'))
            C.push(A[i])
    };

console.log(C);

//Question-12 Create a script that logs the second to last element of an array named fruits.
const Fruits=["Apple","Orange","Grapes","PineApple", "Bannana"];
//let f:String
    console.log(Fruits[Fruits.length-2]);
    
//Question-13   Develop a function that takes an array of numbers and returns a new array with each number squared.
const numtobeconverted=[2,4,8,12,44];
const zyx=[];
//function notsquared(input:number []){
    for(let i=0;i<numtobeconverted.length;i++){
    //(numtobeconverted[i]**2);
    zyx.push(numtobeconverted[i]**2)
    
}
console.log(zyx);
//with Function

function numbertobesquared(input:number[]){
const numbz=[];
    for (let i=0;i<input.length;i++){
    numbz.push(input[i]**2);
//return (input[i]**2);
}return numbz;
//return input
}
//console.log();
const numbertobesquared1=[3,6,8,32];
console.log(numbertobesquared(numbertobesquared1))

//Question-14 Write a JavaScript function that accepts an array and reverses its elements without using the .reverse() method. Log the result.
function ele(input:Number[]){
const BCZ=[];
for (let i=input.length-1;i>=0;i--){
  
BCZ.push(input[i])
}
return BCZ
}
const bcr=[3,6,8,32];
console.log(ele(bcr))

// with reverse function
let  bvc=[10,12,24,38]

console.log(bvc.reverse());

//Question-15 Given an array scores [10, 5, 20, 20, 4, 5, 2, 25, 1], write a function that logs the number of times the score exceeded the maximum score and the number of times it fell below the minimum score
function  max_min_score(score:number[]) {

    let max_score = score[0];

    let min_score  = score[0];

    let max_count = 0;

    let min_count = 0;

for(let i:number= 1; i<score.length;i++) {

    if (score[i]> max_score ){

        max_count++;

        max_score = score[i] ;                                    
    }
    if (score[i]< min_score ){
     min_count = min_count + 1;
     min_score = score[i] ;                                    
 }
}
 console.log("maximum count is: ",  max_count);
 console.log("minimum count is: ",  min_count);   
}
const score_array = [10, 5, 20, 20, 4, 5, 2, 25, 1];
max_min_score(score_array);

//Question-16 Create a function that removes all falsey values from an array. Falsey values include false, null, 0, "", undefined, and NaN.

function false_value_filter(input:any) {
    return input.filter(Boolean);
}
const array_before_false_value= [null,0," ",5,undefined,false,28,"Irfan"];
const array_after_filter_value=false_value_filter(array_before_false_value);
console.log(array_after_filter_value);
//Question-17 Write a script that concatenates two arrays [1, 2, 3] and [4, 5, 6] into a single array.
const arry1 = [1,2,3];
const arry2 = [4,5,6];
const arry3=arry1.concat(arry2)
console.log(arry3);

//Question-18 Develop a function called sumOfElements that calculates the sum of all elements in an array that are either even or odd, based on a parameter.
function element1 (input:number [],isopt:boolean){
    let count=0;
    for (let i=0;i<=input.length;i++){
     if (isopt && input[i]%2==0){
        count=input[1]+count; 
     }
     else if (isopt && input[i]%2!==0){
        count=input[i]+count;
    }
    }
return count;

}
const even_odd_arry=[4,5,6,7,8,9,10];

console.log(element1(even_odd_arry,true));

//Question-19 Create a function that checks whether an element exists in an array. If it exists, return the index, otherwise return -1.

function check_element(input:number[] ,ele_num:number){

    let  numbz:number;

 numbz = input.indexOf  (ele_num)

   if (numbz>=0){

        numbz=numbz;

   } 

   else {numbz = -1

    }

    return numbz
}
const chk_ele_ind_array=[4,5,6,8,9,10,12,13];
console.log(check_element(chk_ele_ind_array,6));  
console.log(check_element(chk_ele_ind_array,15));  

//Question-20 Write a function to find and return the smallest number in an array of integers.

function smallest_number_1(input:number[]){

    let v1=0;

    let v2=input[0];

    for(let i = 1; i<input.length;i++
){

            v1=input[i];

         if(v1 < v2){

            v2 = v1

         }
    }

    return v2;

 }

 const small_numbers_arry=[15,52,1.5,46,2,1.49,89];

console.log(smallest_number_1(small_numbers_arry));

// Question 21 Write a function calculate product that takes an array of numbers and returns the product of all elements. */

function calculateProduct (input:number[]){

    let i_num=0;

    let p_num= input[0];

    for(let i =1; i< input.length;i++){

       i_num = input[i];

       p_num = p_num * i_num;

    } return p_num;

}

const arry_of_numbers1=[4,5,2,8,9,13];

console.log(calculateProduct(arry_of_numbers1));

//Question 22 Develop a function filterByLength that takes an array of strings and a number n. The function should return an array containing only the strings that are longer than n characters.

function filterByLength(input:string[],str_len:number){

    let  output_array=[];

    let tmp_str;

    for(let i = 0; i< input.length;i++){


         tmp_str= input.filter(str => str.length> str_len)[i]

        output_array.push(tmp_str)

      }

      return output_array;

     }

     const lenghts_fruit = ["orange","banana","Apple","Cherry","Grapes"];

     console.log(filterByLength(lenghts_fruit,5));

     //Question 23 Create a function findDuplicates that finds and logs all duplicates in an array.

    function findDuplicates(input:number[]){

        let output_array=[];

        let tmp_str=input[0];

        let tmp_str2=0;

        for (let i = 0 ; i < input.length ; i++){

            tmp_str= input[i]

            for (let j=1 ; j < input.length ; j++){

             if(tmp_str == input[j]){

                tmp_str2 = tmp_str2 + 1

             }

           }

           if (tmp_str2 < 2){

            output_array.push(tmp_str)

           } tmp_str2=0
           
        }
        return output_array;
    }


    const chk_dup_ele_array=[4,5,2,2,9,13];

    console.log(findDuplicates(chk_dup_ele_array));
       
  //Question 24 Write a function incrementAll that takes an array of integers and increments each element by one.  
  
  function incrementAll(input:number[]){

    let incremented_array=[];

     for (let i = 0 ; i < input.length ; i++){

          incremented_array.push((input[i])+1)

    }

    return incremented_array;
}
const arry_to_be_incremented=[4,5,7,9,11,13];

console.log(incrementAll(arry_to_be_incremented));

//Question-25 Develop a function countOccurrences that counts how many times a specific element appears in an array.

function countOccurances(input:number[],ele_num:number){

    let output_array=[];

    let tmp_str=ele_num;

    let tmp_str2=0;

    for (let i = 0 ; i < input.length ; i++){

        if (ele_num==input[i]){

             tmp_str2 = tmp_str2 + 1

         }

       }

         return tmp_str2

       }

const count_ele_array=[4,4,4,5,5,2,9,5,13];
console.log(countOccurances(count_ele_array,4));

//Question-26Create a function isSorted that checks if an array is sorted in ascending order.
function isSorted(input:number[]){

    for(let i = 0 ; i < input.length ; i++){

        if(input[i]> input[i+1]){

             return false;
        }

    } return true;    
 }
 const check_sort_array=[4,5,2,9,5,13];

 console.log(isSorted(check_sort_array)); 

 const check_sort_array2=[4,5,6,9,10,13];

 console.log(isSorted(check_sort_array2));

 //Question-27 Write a function that receives an array of names and formats them into a string separated by commas, except for the last two names, which should be separated by "and".
 function formatintostring(input:string[]){

    let    format_string="";

    let    tmp_str=", ";

    let    tmp_str2=" and ";

 for(let i = 0 ; i < input.length-2 ; i++){

     format_string = format_string+input[i]+tmp_str
     }
  for(let i = input.length-2 ; i < input.length-1 ; i++){
         format_string = format_string+input[i]+tmp_str2;
   }   
    format_string = format_string+  input[input.length - 1];
    return format_string;
}     
const format_string_array=["apple","banana","oragne","stobery","Tomatto","pottato"];

console.log(formatintostring(format_string_array));   


//Question-28 Develop a function that converts an array of Fahrenheit temperatures to Celsius and logs the new temperatures.
function FtoCelsius(input: number[]){

    let N_FtoCelsius=[];

    let temp_var:string;

   // let tempvar2:string;

    for(let i =0; i<input.length;i++){

        temp_var = ((input[i]- 32) * 5/9).toFixed(2)

        N_FtoCelsius.push(temp_var)
      
    }

    return N_FtoCelsius;

    }

    const FtoceLius_array=[180,190,160,185];

    console.log(FtoCelsius(FtoceLius_array));

    //Question-29 Write a function minMaxAverage that takes an array of numbers and returns an object with properties for the minimum, maximum, and average of those numbers.
    function minMaxAverage(input: number[]): { min: number, max: number, avg: number } {

        let min = input[0];

        let max =input[0];

        let sum = input[0];

        let num = 0;

        for (let i = 1; i < input.length; i++) {

            num = input[i];

            sum = sum + num ;

            if (num < min) {min = num;}

            if (num > max) {max = num;}

        }    

        const avg = sum / input.length;

        return { min, max, avg };

    }
    const min_max_sum_array = [2, 4, 2, 6];

    const result = minMaxAverage(min_max_sum_array);

    console.log(result);

    //Question-30 Create a function swapElements that swaps two specified indices in an array.
    function swapElements(input:number[],First_index:number,second_index:number){

        const tmp_swape= input[First_index];

        input[First_index]=input[second_index];

        input[second_index] = tmp_swape;
  }      
  const swap_array = [1,2,3,4,5,6];

  swapElements(swap_array,2,4);

  console.log(swap_array);

  //Question-31 Develop a function that takes two inputs, a string and a character, and returns the number of times the character appears in the string.
  function find_char(input:string,fnd_char:string): number{

    let cnt = 0;

    for (let i = 0; i < input.length; i++) {

        if (input.charAt(i) == fnd_char) {

            cnt++;

        }

    }

    return cnt;
}
    const tofindchar:string = ("shaheen");

    console.log(find_char(tofindchar,"h"));
    console.log(find_char(tofindchar,"e"));
    console.log(find_char(tofindchar,"s"));

    //Question-32 Create a 'to-do list' array of objects where each object has properties task and completed (a boolean). Write a function to log only the tasks that are not yet completed.
    interface ToDolist_obj {

        task: string;
    
        completed: boolean;
    
    }
    
    const toDoList: ToDolist_obj[] = [
    
        { task: "Activity1", completed: false },
    
        { task: "Activity2", completed: true },
    
        { task: "Activity3", completed: false },
    
        { task: "Activity4", completed: true }
    
    ];
    
    function todolisttask(tasks: ToDolist_obj[]): void {
    
        tasks.forEach((item,index) => {
    
            if(!item.completed ){
    
                console.log(`${index + 1}. ${item.task}, ${"Not Compledted Yet"}`);
    
            }
    
        });
    
         }
    
    console.log("Tasks:");
    
    todolisttask(toDoList);
       
//Question-33 Write a function that takes an array of integers and sorts them from smallest to largest.
function sortsmalltolarg(input:number[]):number[]{

    return input.sort((a, b) => a - b);

     }

  const tobesort_array = [2,1,5,3,6,4];

  sortsmalltolarg(tobesort_array);

  console.log(tobesort_array);
  //Question-34 Develop a TypeScript program that logs every element of an array in reverse order without using the .reverse() method.
  function reverse_array1(input:number[]){
let BNZ=[]
    for(let i = input.length-1; i >=0 ; i--){
   console.log(input[i]);

}
  }
   const curr_array:number[] = [1,2,3,4,5,6];

  reverse_array1(curr_array);  

//Question-35 Write a script that simulates a basic calculator. It should take two operands and an operator ('+', '-', '*', '/') from the user, perform the operation, and log the result.

//import {sum,subtract,multilpy,division} from "./function.js;
// import inquirer from "inquirer"
// const questions = await inquirer.prompt([
// {
//     type:"number",
//     name: "num1",
// message:"Enter your first number.",
// },
// {
//     type:"number",
// name: "num2",
// message:"Enter your second number."
// },
// {
//     type:"list",
//     name: "operator",
//     message:"select your operator.",
//     choices:["+","-","*","/"],
//     }
// ]);

// function sum(num1:number, num2:number){
//     const result=num1+num2; 
//     console.log(`sum of ${num1} and ${num2}=${result}`);
// }
// function subtract(num1:number,num2:number){
//     const result=num1-num2;
//     console.log(`subtraction of ${num1} and ${num2}=${result}`);
// }
// function multilpy(num1:number, num2:number){
//     const result=num1*num2;
//     console.log(`Multiplication ${num1} and ${num2}=${result}`);
// }
// function division(num1:number, num2:number){
//     const result=num1/num2;
//     console.log(`Division of ${num1} and ${num2}=${result}`);
// }
// console.log("questions",questions);
// if (questions.operator==="+"){
//     console.log("This is sum");
// sum (questions.num1,questions.num2)}

//  else if (questions.operator==="-"){

// console.log ("This is subtract");
//  subtract(questions.num1,questions.num2)}
 
//  else if (questions.operator==="*"){
//  console.log ("This is multiplication");
//  multilpy(questions.num1,questions.num2)}
 
//  else if (questions.operator==="/") {
//  console.log ("This is division");
//  division(questions.num1,questions.num2)
// }  

//  else {
//      console.log("invalid operator. Please select valid operator from LOV.");
//      }
