// loop
while(uimp !== 15) {
 var uimp = prompt('guess my age!')
 uimp = parseInt(uimp)
 if (uimp == 15) {
   alert('congrats, you guessed corectly!')
 } else if (uimp > 15) {
   alert('your guess is too high')
 } else {
   alert('your guess was too low')
 }
}
