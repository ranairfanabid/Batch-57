//import {a} from "./index.js";
//console.log(a);

import inquirer from "inquirer"
const questions = await inquirer.prompt([
{
    type:"number",
    name: "num1",
message:"Enter your first number.",
},
{
    type:"number",
name: "num2",
message:"Enter your second number."
},
{
    type:"list",
    name: "operator",
    message:"select your operator.",
    choices:["+","-","*","/"],
    }
]);

function sum(num1:number, num2:number){
    const result=num1+num2; 
    console.log(`sum of ${num1} and ${num2}=${result}`);
}
function subtract(num1:number,num2:number){
    const result=num1-num2;
    console.log(`subtraction of ${num1} and ${num2}=${result}`);
}
function multilpy(num1:number, num2:number){
    const result=num1*num2;
    console.log(`Multiplication ${num1} and ${num2}=${result}`);
}
function division(num1:number, num2:number){
    const result=num1/num2;
    console.log(`Division of ${num1} and ${num2}=${result}`);
}
console.log("questions",questions);
if (questions.operator==="+"){
    console.log("This is sum");
sum (questions.num1,questions.num2)}

 else if (questions.operator==="-"){

console.log ("This is subtract");
 subtract(questions.num1,questions.num2)}
 
 else if (questions.operator==="*"){
 console.log ("This is multiplication");
 multilpy(questions.num1,questions.num2)}
 
 else if (questions.operator==="/") {
 console.log ("This is division");
 division(questions.num1,questions.num2)
}  

 else {
     console.log("invalid operator. Please select valid operator from LOV.");
     }



/*     Easy     */

/*Question No 1 

Write a script to log "Hello, World!" to the console */

console.log('Hwllow World');



/* Question No. 2 

Create a variable temperature and assign it a value. Then log "It's cold!" 

if the temperature is below 20 degrees Celsius.*/

let temprature = 19;

if (temprature < 20) 

    console.log('ITS COLD');



/* Question No. 3 

Use arithmetic operators to solve the problem: 

If you have 10 apples and you give away 3, how many do you have left? Log the result.*/    

let apple = 10;

console.log(apple - 3);



/* Question No. 4 

Declare two variables, firstName and lastName, 

then create a third variable fullName that combines them. Log the result.*/

let firstname = 'Rafaqat';

let lastname  = 'Ali'

let fullname = firstname + ' ' +lastname;

console.log(fullname);



/* Question 5 

Write a TypeScript code that uses a comparison operator to check 

if the number 5 is greater than 3. Log "Yes" if true, otherwise log "No".*/

let comp_number = 5;

if (comp_number>= 3){console.log("Yes")}

    else {console.log("No")};

/* Medium  */   

/* Question 6 

Create a function calculateArea that takes the radius of a circle 

as an input and returns the area of the circle.*/

 function calculatearea(input : number){

    console.log(input*2*3.14);        

 }

     calculatearea(3);



  /*  Question 7 

  Write a loop that logs numbers from 1 to 50. For multiples of 3, 

  log "Fizz" instead of the number, and for multiples of 5, log "Buzz".*/

  for(let x= 1; x<=50; x++){

    if(x%3==0)

        {console.log("fizz")}

  else if (x%5==0) {console.log("buzz")}

  else {console.log(x)};  

  } ;

  /*  Question 8

  Define an array temperatures with at least five different temperatures (numbers). 

  Write a script to find and log the highest temperature.*/

   const num_array:number[]= [20,25,35,29]

   let pr_num_value = num_array[0];

    for (let i=1;i<=num_array.length;i++){

        const next_num_value = num_array[i];

        if(next_num_value > pr_num_value ){

            pr_num_value = next_num_value;

        }

    }

    console.log(pr_num_value);

    

   /*  Question 9

   Create a script that prompts the 

   user to enter their age and then logs whether they are a minor (under 18) or an adult */

    

   function adult_check(input_age:number){

    if (input_age<18)

        {console.log("Minor")}

    else {console.log("Adult");

    }

   }

   console.log(adult_check(12));

   /*  Question 10

   Write a function that takes an array of numbers and 

   returns the count of positive numbers in the array */



const p_num_array:number[]= [20,-25,35,-29,33]

        let c_cnt = 0;

    for (let i=0;i<=num_array.length;i++){

       

        if(p_num_array[i] >0){c_cnt = c_cnt +1}

        }

       console.log(c_cnt);

/* Medium */

    /*  Question 11

    Write a function that takes an array of words and returns a new array containing 

    only the words that start with the letter 'a'   */

 /*   function tostartwith1(input_array:string[]){

           let c=[];

           let d:string;

           

        for(let i=0; i<=input_array.length;i++){

            d= input_array[i]

            if (d.toLowerCase().startsWith("a")){

            c.push(d);

            }

          }

           return c;           

    }

    const word_array=["alpha","Beta","akram","Naveed"];

    const newword_array=tostartwith1(word_array);

   */

                   

    /* Question 12 

    Create a script that logs the second to last element of an array named fruits */      

    const fruits = ["apple","banana","oragne","stobery"];

             for(let i:number = 1; i<=fruits.length;i++){

                console.log(fruits[i])

             };

    /* Question 13

    Develop a function that takes an array of numbers and 

    returns a new array with each number squared. */

    function square_Numbers(numbers: number[]){

        let nsquarearr1=[];

        for(let i =0; i<=numbers.length;i++){

            nsquarearr1.push(numbers[i]**2);

        }

        return nsquarearr1;

      //  return numbers.map(num => num ** 2)};

    }

        const evennum_array=[2,4,6,8];

        const newsquarearry=square_Numbers(evennum_array);

        console.log(newsquarearry);

     /* Question 14

         Write a JavaScript function that accepts an array and reverses its elements 

         without using the .reverse() method. Log the result.  */

          function reverse_array(array_type:any){

                   let after_reverse=[];

                   for(let i:number = array_type.length -1;i>=0;i--){

                    after_reverse.push(array_type[i])

                   }

                   return after_reverse;

          }

          

      const before_reverse_array=[2,4,5,6,7,8]   ;     

      const after_reverse_array=reverse_array(before_reverse_array) ;    

      console.log(after_reverse_array);

      /* Question 15

        Given an array scores [10, 5, 20, 20, 4, 5, 2, 25, 1], write a function 

        that logs the number of times the score exceeded the maximum score and 

        the number of times it fell below the minimum score. */

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



    /* Question 16   

          Create a function that removes all falsey values from an array. 

          Falsey values include false, null, 0, "", undefined, and NaN */

       function filter_false_value(ffv:any) {

              return ffv.filter(Boolean);

       }

       const arraybefore_falsevalue= [null,0," ",3,undefined,false,33,"Rafaqat"];

       const arrayafter_filtervalue=filter_false_value(arraybefore_falsevalue);

       console.log(arrayafter_filtervalue);

      /* Question 17

      Write a script that concatenates two arrays [1, 2, 3] and [4, 5, 6] into a single array*/

     const first_array=[1,2,3,4] ;

      const second_array=[5,6,7,8];

      const two_array_concatenate = first_array.concat(second_array);

      console.log(two_array_concatenate);

       /* Question 18

       Develop a function called sumOfElements that calculates the sum of all elements in an array 

       that are either even or odd, based on a parameter in a typescript*/

       function sumevenodd(inputarr:number[],isEven:boolean){

                let  ele_sum = 0;

            for(let i = 0; i<inputarr.length; i++){

               if(isEven && inputarr[i] % 2 === 0){

                ele_sum = inputarr[i] + ele_sum;

               }

               else if (!isEven && inputarr[i] % 2 !== 0){

                ele_sum = inputarr[i] + ele_sum;

               }  

            }

            return ele_sum;

          }

       const evenoddmix_num_array=[4,5,6,8,9,10,12,13];

      console.log(sumevenodd(evenoddmix_num_array,true));



       /* Question 19

       Create a function that checks whether an element exists in an array. 

       If it exists, return the index, otherwise return -1.*/

       function check_ele(inputarr:number[] ,ele_num:number          ){

        let  ind_num:number;

          ind_num = inputarr.indexOf  (ele_num)

            if (ind_num>=0){

                 ind_num=ind_num;

            } 

            else {ind_num = -1

             }

             return ind_num

  }

const chk_ele_ind_array=[4,5,6,8,9,10,12,13];

console.log(check_ele(chk_ele_ind_array,6));    

/* Question 20

Write a function to find and return the smallest number in an array of integers */

 function smallestnuminarray(inputarr:number[]){

    let tmp_num=0;

    let sml_num=inputarr[0];

    for(let i = 1; i<inputarr.length;i++ ){

            tmp_num=inputarr[i];

         if(tmp_num < sml_num){

            sml_num = tmp_num

         }

    }

    return sml_num;

 }

 const sml_num_nd_array=[4,5,2,8,9,13];

console.log(smallestnuminarray(sml_num_nd_array));

/* Question 21

Write a function calculateProduct that takes an array of 

numbers and returns the product of all elements. */

function calculateproduct(input_array:number[]){

     let tmp_num=0;

     let p_num= input_array[0];

     for(let i =1; i< input_array.length;i++){

        tmp_num = input_array[i];

        p_num = p_num * tmp_num;

     } return p_num;

}

const cal_prd_array=[4,5,2,8,9,13];

console.log(calculateproduct(cal_prd_array));

/* Qestion 22

Develop a function filterByLength that takes an array of strings and a number n. 

The function should return an array containing only the strings that are 

longer than n characters. */

function filterByLength(input_array:string[],str_len:number){

       let  output_array=[];

       let tmp_str;



       for(let i = 0; i< input_array.length;i++){

           // return input_array.filter(str => str.length > str_len);

            tmp_str= input_array.filter(str => str.length > str_len)[i]

            output_array.push(tmp_str)

         }

         return output_array;

        }

        const fruits_len = ["apple","banana","oragne","stobery"];

        console.log(filterByLength(fruits_len,5));

        

    /* Qestion 23

    Create a function findDuplicates that finds and logs all duplicates in an array.*/



    function findDuplicates(input_array:number[]){

        let output_array=[];

        let tmp_str=input_array[0];

        let tmp_str2=0;

        for (let i = 0 ; i < input_array.length ; i++){

            tmp_str= input_array[i]

            for (let j=1 ; j < input_array.length ; j++){

             if(tmp_str == input_array[j]){

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



/* Qestion 24

Write a function incrementAll that takes an array of integers 

and increments each element by one*/

function incrementAll(input_array:number[]){

    let output_array=[];

     for (let i = 0 ; i < input_array.length ; i++){

          output_array.push((input_array[i])+1)

    }

    return output_array;

}

const incr_ele_array=[4,5,2,2,9,13];

console.log(incrementAll(incr_ele_array));

/* Qestion 25

Develop a function countOccurrences that counts how many times 

a specific element appears in an array */

function countOccurances(input_array:number[],ele_num:number){

    let output_array=[];

    let tmp_str=ele_num;

    let tmp_str2=0;

    for (let i = 0 ; i < input_array.length ; i++){

        if (ele_num==input_array[i]){

             tmp_str2 = tmp_str2 + 1

         }

       }

         return tmp_str2

       }

const count_ele_array=[4,5,5,2,9,5,13];

console.log(countOccurances(count_ele_array,5));

/* Qestion 26

Create a function isSorted that checks if an array is sorted in ascending order*/

function isSorted(input_array:number[]){

            for(let i = 0 ; i < input_array.length ; i++){

                if(input_array[i]> input_array[i+1]){

                     return false;

                }

            }  return true;    

         }

         const check_sort_array=[4,5,2,9,5,13];

         console.log(isSorted(check_sort_array)); 

         const check_sort_array2=[4,5,6,9,10,13];

         console.log(isSorted(check_sort_array2));    

   /* Qestion 27

      Write a function that receives an array of names and formats them 

      into a string separated by commas, except for the last two names, 

      which should be separated by "and". */   

      function formatintostring(input_array:string[]){

           let    format_string="";

           let    tmp_str=", ";

           let    tmp_str2=" and ";

        for(let i = 0 ; i < input_array.length-2 ; i++){

            format_string = format_string+input_array[i]+tmp_str

            }

         for(let i = input_array.length-2 ; i < input_array.length-1 ; i++){

                format_string = format_string+input_array[i]+tmp_str2;

          }   

           format_string = format_string+  input_array[input_array.length - 1];

           return format_string;

    }     

      const format_string_array=["apple","banana","oragne","stobery","Tomatto","pottato"];



     console.log(formatintostring(format_string_array));   

     /* Qestion 28

     Develop a function that converts an array of Fahrenheit temperatures 

     to Celsius and logs the new temperatures. */

     function FtoCelsius(input_array: number[]){

        let N_FtoCelsius=[];

        let tempvar:string;

       // let tempvar2:string;

        for(let i =0; i<input_array.length;i++){

            tempvar = ((input_array[i]- 32) * 5/9).toFixed(2)

         //   tempvar2 = tempvar.toFixed(2)

            N_FtoCelsius.push(tempvar)

          //  N_FtoCelsius.push((input_array[i]- 32) * 5/9).toFixed(2);

            

        }

        return N_FtoCelsius;

        }

        const FtoceLius_array=[180,190,160,185];

        console.log(FtoCelsius(FtoceLius_array));

        /* Qestion 29

        Write a function minMaxAverage that takes an array of numbers 

        and returns an object with properties for the minimum, maximum, 

        and average of those numbers.*/

       function minMaxAverage(input_array: number[]): { min: number, max: number, avg: number } {

        let min = input_array[0];

        let max =input_array[0];

        let sum = input_array[0];

        let num = 0;

        for (let i = 1; i < input_array.length; i++) {

            num = input_array[i];

            sum = sum + num ;

            if (num < min) {min = num;}

            if (num > max) {max = num;}

        }    

        const avg = sum / input_array.length;

        return { min, max, avg };

    }

    

    // Example usage:

    const minmaxsum_array = [2, 4, 2, 6];

    const result = minMaxAverage(minmaxsum_array);

    console.log(result); // Display= { min: 1, max: 5, average: 3 }

/* Question 30

  Create a function swapElements that swaps two specified indices in an array.*/

  function swapElements(input_array:number[],First_index:number,second_index:number){

                const tmp_swape= input_array[First_index];

                input_array[First_index]=input_array[second_index];

                input_array[second_index] = tmp_swape;

          }      

          const swap_array = [1,2,3,4,5,6];

          swapElements(swap_array,2,4);

          console.log(swap_array);

          

 /* Question 31

 Develop a function that takes two inputs, a string and a character, and returns 

 the number of times the character appears in the string.*/

 function findcharnotime(input_char:string,fnd_char:string): number{

    let cnt = 0;

    for (let i = 0; i < input_char.length; i++) {

        if (input_char.charAt(i) == fnd_char) {

            cnt++;

        }

    }

    return cnt;

}

    const tofindchar_string = "Rafaqat Ali";

    console.log(findcharnotime(tofindchar_string,"a"));

   /* Question 32

    Create a 'to-do list' array of objects where each object has properties 

    task and completed (a boolean).Write a function to log only the 

    tasks that are not yet completed.*/

    