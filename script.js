// random number generator
let rval = Math.floor(Math.random() * 100)
rval = rval + 1
let uimp = 0
// loop
 while (uimp !== rval) {
  uimp = prompt('guess a number between 1 and 100')
  uimp = parseInt(uimp)
  if (uimp === rval) {
    alert('congrats, you guessed corectly!')
  } else if (uimp > rval) {
    alert('your guess is too high')
  } else {
    alert('your guess was too low')
 }
}
