

const ages = [16, 17, 18, 19, 20, 16, 20, 30, 60,];
const adults = ages.filter(isAdult);
const children = ages.filter(isChild);

console.log(adults);

function isAdult(element){
    return element >= 18;
}


function isChild(element){
    return element < 18;
}