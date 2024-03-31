//Declare a variable for storing your favorite movie name with a string type annotation.
let moviename:string ="Dune 2021";
console.log(moviename);

//Create a template string to introduce youself, including your name and age.
let yourname:string= "Irfan Abid";
let age:number= 38;
let introduction=`${"My name is"} ${yourname} ${"and my age is"}  ${age} ${("Years.")}`;
console.log(introduction);

//Initialize a constant with a type annotation for your current mood as a boolean.
const mood: boolean=true;
console.log(mood);

//Combine a user's first and last name using template liternals and log the full name.
let firstname :string = "Saif";
let lastname:string = "Ullah";
let fullname:string=`${firstname} ${lastname}`;
console.log(fullname);

//Create a variable for a user's age with a type annotation and assign a number to it.
let user_age:number =41
console.log(user_age)+"Years";

//Use a template string to display a product name and its price.
let productname:string ="HP Laptop";
let productprice:number =325000.50;
console.log(`${productname} ${"and price is"} ${productprice}`);

//Declare variable to store the number of pets you have with a number type annotation.
let pets:number = 2;
console.log(pets);

//Declare a variable with a boolean type annotation indication if it is your birthday today.

function stringToBoolean(str: string): boolean {
    return str
        .toLowerCase() as unknown as boolean;
}
 
const b_day: boolean = stringToBoolean('It is your birthday today.');
console.log(b_day);

//Create a template string that includes a user's first name, last name, and age with proper lables.
let ufm:string =("IRFAN");
let ulm:string =("ABID");
let uage:number =(38);
let alldetails=`${"First Name:"}${ufm} ${"Last Name:"}${ulm} ${"Age:"}${uage}`;
console.log(alldetails);

//Initializea constant to hold your birth year with a number type annotation.
const birthyear:number= 1985;
console.log(("Birth Year is")+(" ")+(birthyear));

//Wite a line of code that user a template string to combine a city and country into a full address.
let city:string="Lahore";
let country:string="Pakistan";
let full_address=`${city}${","} ${country}`;
console.log(full_address);

//Declare a variable for today's temperature with a number type annotation and assign a value to it.
let today_temperature:number= 41;
console.log((today_temperature)+("*C"));
