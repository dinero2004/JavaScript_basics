// function openFridge(...foods){
//     console.log(...foods);
// }

// function getFood(...foods){
//     return foods;
// }

// const food1 = "pizza";
// const food2 = "burger";
// const food3 = "hotdog";
// const food4 = "sushi";
// const food5 = "lasagna";

//  openFridge(
//  food1, food2, food3, food4, food5   
//  );


// function sum(...numbers){
    
//     let result = 0;
//     for(let number of numbers){
//         result += number;
//     }

//     return result;
// }

// const total = sum(1.99, 100);

// console.log(`Your total is $${total}`);

// function getAverage(...numbers){
    
//     let result = 0;
//     for(let number of numbers){
//         result += number;
//     }

//     return result / numbers.length;
// }

// const total = getAverage(75, 100, 85, 90, 50);

// console.log(total);

function combineStrings(...strings){
    return strings.join(" ")
}

const fullName = combineStrings("Mr.", "Lazar", "Minkov", "I");

console.log(fullName);