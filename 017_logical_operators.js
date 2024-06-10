// AND = && both conditions should be true
// OR = || one or more conditions should be true
// NOT = ! none of the conditions need to be true

const temp = 30;

if (temp <= 0 || temp > 30){
    console.log("The weather is bad!")
}

else {
    console.log("The weather is good!")
}



const isSunny = true;

if(!isSunny) {
    console.log("It is cloudy!")
}

else {
    console.log("It is sunny!")
}