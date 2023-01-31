// ESERCIZIO

//     Il programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero.
//     Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
//     il prezzo del biglietto è definito in base ai km(0.21 € al km)
//     va applicato uno sconto del 20 % per i minorenni
//     va applicato uno sconto del 40 % per gli over 65.
//     L’output del prezzo finale va messo fuori in forma umana(con massimo due decimali, per indicare centesimi sul prezzo).Questo richiederà un minimo di ricerca.

// 1 Ask the user the number of KM to travel
    // multiply the number of KM with 0.21 to obtain full ticket price
        
// 2 Ask the user his/her age

// 3 by the and the full price we obtain we can find the specific price
    // if x < 18 we get 20 % of discount
    // else if x > 65 we get 40 % of discount
    // else we get no discount

// 4 edit final price in max 2 decimals

const travelDistance = parseFloat (prompt('Add the number of KM that you want to travel'))
console.log('Traveling Distance' , travelDistance)

const userAge = parseInt (prompt('Add your age'))
console.log('User Age' , userAge)

const priceRate = parseFloat (0.21)
console.log('Price Rate' , priceRate)

const totalPrice = travelDistance * priceRate;
let Euro = new Intl.NumberFormat ('en-DE' , {
    style: 'currency' ,
    currency: 'EUR' ,
})

console.log('Total price of the Travel', Euro.format(totalPrice))

if (userAge < 18) {
    let youngPrice = totalPrice * 0.8
    console.log('Young Discounted Price', Euro.format(youngPrice))
}

else if (userAge > 65) {
    let seniorPrice = totalPrice * 0.6
    console.log('Senior Discounted Price', Euro.format(seniorPrice))
}

