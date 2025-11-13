let firstCard = 10
let secondCard = 7
let cards = [firstCard,secondCard]
let sum = firstCard + secondCard
// js is a dunce so it doent remeber who has black jack na why we dey help am
let hasBlackJack = false
let youDeyGame = true
let messageEl = document.getElementById("message-el")
console.log(messageEl)
// you can also use or .then that let sumEl =document.querySelector("#sum-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")


function renderGame(){
    sumEl.textContent = "sum;" + sum
cardsEl.textContent = "cards; " +cards[0]+ " , "+cards[1]
    if (sum <= 20){
    message=" do you want a new card !"
    // three equal sign means strictly equal to in js
} else if (sum === 21){
    message = "you won lol!"
    hasBlackJack = true

}
// you can also just use if else without the last sum > 21 because that the only thing thqat ahsnt been satisfed
else if (sum > 21){
   message ="your money don go my bro!"
    youDeyGame = false
}
messageEl.textContent = message


}
function newCard(){
    
    let card = 5
    sum = sum + card
     startGame ()

    // messageEl.textContent = "Want to play a round ?"
    // sumEl.textContent = "sum;"
    // cardsEl.textContent = "cards;"
}

function startGame(){
    renderGame()
}