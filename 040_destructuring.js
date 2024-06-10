// Example 1 swap the value of two variables

// let a = 1;
// let b = 2;

// [a, b] = [b, a];

// console.log(a);
// console.log(b);

// Example 2 swap two elements in an array

//  const colors = ['red', 'green', 'white', 'orange', 'black'];

//  [colors[0], colors[4]] = [colors[4], colors[0]];

//  console.log(colors);

//  Example 3 assign elements to a variables

// const colors = ['red', 'green', 'white', 'orange', 'black'];

// const [firstColor, secondColor, thirdColor, ...extraColors] = colors;

// console.log(firstColor);
// console.log(secondColor);
// console.log(thirdColor);
// console.log(extraColors);

// Example 4 extract values from objects 

// const person = {
//     firstName: "Spongebob",
//     lastName: "Squarepants",
//     age: 30,
//     job: "fry cook",

// }

// const person2 = {
//     firstName: "Patrick",
//     lastName: "Star",
//     age: 33,
//     job: "none",

// }

// const {firstName, lastName, age, job} = person2;

// console.log(firstName);
// console.log(lastName);
// console.log(age);
// console.log(job);

// Example 5 destructure in function paramaters

function displayPerson({firstName, lastName, age, job}){

    console.log(`name: ${firstName} ${lastName}`);
    console.log(`age: ${age}`);
    console.log(`job: ${job}`);

}

const person = {
    firstName: "Spongebob",
    lastName: "Squarepants",
    age: 30,
    job: "fry cook",

}

const person2 = {
    firstName: "Patrick",
    lastName: "Star",
    age: 33,
    job: "none",

}

displayPerson(person2)
