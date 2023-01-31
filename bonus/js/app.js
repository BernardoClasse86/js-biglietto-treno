// BONUS:
// dopo il calcolo invece di stampare solo il prezzo finale stampate proprio un simil biglietto del treno, dove inserite le seguenti informazioni:
// numero kilometri del viaggio
// nome e cognome del passeggero
// prezzo base del biglietto
// valore dello sconto
// prezzo finale del biglietto

const userName = prompt ('Add your Name')
console.log ('User Name is:', userName)

const yourName = document.getElementById('your-name')
yourName.innerHTML = userName;


const userLastName = prompt('Add your Last Name')
console.log('User Last Name is:', userLastName)

const yourLastName = document.getElementById('your-last-name')
yourLastName.innerHTML = userLastName;


const travelDistance = parseFloat(prompt('Add the number of KM that you want to travel'))
console.log('Traveling Distance', travelDistance)

const yourTravel = document.getElementById('your-travel')
yourTravel.innerHTML = travelDistance;


const userAge = parseInt(prompt('Add your age'))
console.log('User Age', userAge)

const yourAge = document.getElementById('your-age')
yourAge.innerHTML = userAge;


const priceRate = parseFloat(0.21)
console.log('Price Rate', priceRate)

const totalPrice = travelDistance * priceRate;

let Euro = new Intl.NumberFormat('en-DE', {
    style: 'currency',
    currency: 'EUR',
})

const yourPrice = document.getElementById('your-total-price')
yourPrice.innerHTML = Euro.format(totalPrice)

console.log('Total price of the Travel', Euro.format(totalPrice))

if (userAge < 18) {
    const youngPrice = totalPrice * 0.2
    console.log('Young Discounted Price', Euro.format(youngPrice))

    const yourDiscount = document.getElementById('your-discount')
    yourDiscount.innerHTML = Euro.format(youngPrice)

    const yourTotPrice = document.getElementById ('your-price')
    yourTotPrice.innerHTML = Euro.format(totalPrice - youngPrice)
    
    console.log('Price total', Euro.format(totalPrice - youngPrice))
}

else if (userAge > 65) {
    const seniorPrice = totalPrice * 0.4
    console.log('Senior Discounted Price', Euro.format(seniorPrice))

    const yourDiscount = document.getElementById('your-discount')
    yourDiscount.innerHTML = Euro.format(seniorPrice)

    const yourTotPrice = document.getElementById('your-price')
    yourTotPrice.innerHTML = Euro.format(totalPrice - seniorPrice)

    console.log('Price total', Euro.format(totalPrice - seniorPrice))

}

else {
    const yourTotPrice = document.getElementById('your-price')
    yourTotPrice.innerHTML = Euro.format(totalPrice)
}






