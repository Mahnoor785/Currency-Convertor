// let my_name="Mahnoor";

// let std1="sarah"
// let std2="ali"
// let stdn3="mahnoor"
// let stdage=20
// let stdage=23
// let students = ["mahnoor","sarah", "ali"]


// let student_data:any={
//     name:"Mahnoor",
//     age:20,
//     rollno:"abc1234",
//     address:"karachi",

// }
// let property:any ="name"
// console.log(student_data[property])

import inquirer from 'inquirer'
const currency=
{
   USD:1,
   EUR:90.7,
   GBP:67.2,
   INR:78.3,
   PKR:200,

};
let user_answer= await inquirer.prompt(
    [
    {
    
    name:'form',
    message:'enter from currency',
    type:'list',
    choices:["USD","EUR","GBP","INR","PKR"]
    
    
},
{
    
    name:'form',
    message:'enter to currency',
    type:'list',
    choices:["USD","EUR","GBP","INR","PKR"]
    
    
},
{
    
    name:'amount',
    message:'enter your amount',
    type:'number',
   
    
    
}

    ]
);
// console.log(user_answer);
let fromAmount =currency