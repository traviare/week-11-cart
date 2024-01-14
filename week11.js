const findPriceOne = document.querySelector('.card-1_price');
const findPriceTwo = document.querySelector('.card-2_price');
const findPriceThree = document.querySelector('.card-3_price');
const findPriceFour = document.querySelector('.card-4_price');
const findPriceFive = document.querySelector('.card-5_price');

const meanPriceOne = Number(findPriceOne.innerHTML);
const meanPriceTwo = Number(findPriceTwo.innerHTML);
const meanPriceThree = Number(findPriceThree.innerHTML);
const meanPriceFour = Number(findPriceFour.innerHTML);
const meanPriceFive = Number(findPriceFive.innerHTML);

const sumPrices = meanPriceOne + meanPriceTwo + meanPriceThree + meanPriceFour + meanPriceFive;

const findCost = document.querySelector('#cost');

findCost.append(sumPrices);

function sale() {
    findPriceOne.innerHTML = (meanPriceOne * 0.8).toFixed(0)
    findPriceTwo.innerHTML = (meanPriceTwo * 0.8).toFixed(0)
    findPriceThree.innerHTML = (meanPriceThree * 0.8).toFixed(0)
    findPriceFour.innerHTML = (meanPriceFour * 0.8).toFixed(0)
    findPriceFive.innerHTML = (meanPriceFive * 0.8).toFixed(0)
    findCost.innerHTML = (sumPrices * 0.8).toFixed(0)
}

const findButton = document.querySelector('button');

findButton.addEventListener('click', sale);