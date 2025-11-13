let firstCard = getrandomcard()
let secondCard = getrandomcard()
let cards = [firstCard,secondCard]//array ordered list of item
let sum = firstCard + secondCard
// js is a dunce so it doent remeber who has black jack na why we dey help am
let hasBlackJack = false
let youDeyGame = true
let messageEl = document.getElementById("message-el")
console.log(messageEl)
// you can also use or .then that let sumEl =document.querySelector("#sum-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")

 function getrandomcard(){
    let randomcard = Math.floor(Math.random()*13 + 1)
    
  if (randomcard > 10){
    return 10
  } else if (randomcard === 1){
    return 11 } else {
        return randomcard
    }
}
function renderGame(){
    sumEl.textContent = "sum; " + sum
cardsEl.textContent = "cards; " 
for (let i= 0 ; i<cards.length ; i++){
    cardsEl.textContent += cards[i] + " , "
}
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
    
    let card = getrandomcard()
     cards.push(card)// card push is used to add the i tem specifeid to the created array and card.pop does the opposite
    sum = sum + card
     startGame ()

    // messageEl.textContent = "Want to play a round ?"
    // sumEl.textContent = "sum;"
    // cardsEl.textContent = "cards;"
}

function startGame(){
    renderGame()
}