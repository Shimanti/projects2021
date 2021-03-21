// Plays to data-key="72"

function playSound() {
  //select audio element that holds the data-key="72"
  const audio = document.querySelector('audio[data-key="72"]')
  //reset audio so that 2 keys can be played after each other
  audio.currentTime = 0
  //play audio
  audio.play()
  animateKey()
}

function animateKey() {
  //select class="key" element with the data-key="72"
  const key = document.querySelector('.key[data-key="72"]')
  //add the class="playing" to the key selected above
  //"playing" styles the key slightly bigger
  key.classList.add('playing')
}

function stopAnimation(e) {
  // remove animation when transition ends
  this.classList.remove('playing')
}

//select all the keys into an array
const keys = document.querySelectorAll('.key')
//loop through keys - when animation (transition) ends, stop the animation
keys.forEach(key => key.addEventListener('transitionend', stopAnimation))

// when a key is pressed, play the sound
window.addEventListener('keydown', playSound)
