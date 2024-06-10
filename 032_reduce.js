const prices = [2, 5, 6, 7, 8, 15, 20, 30]; 

const total = prices.reduce(sum);

console.log(`$${total.toFixed(2)}`)

function sum(accumulator, element){
    return accumulator + element;
}