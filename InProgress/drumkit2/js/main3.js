// Plays all data-keys but NOT onclick - WHY?

// e.target.dataset.key

window.addEventListener('click', playAllSound)
function playAllSound(e) {
  document.querySelectorAll("audio").forEach(audio => {
  	audio.currentTime = 0
    audio.play()
  })
}

function playSound(e) {
  //select audio element that holds the data-key
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
  //reset audio so that 2 keys can be played after each other
  audio.currentTime = 0
  //play audio
  audio.play()
  animateKey(e)
}

function animateKey(e) {
  //select class="key" element with the data-key
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)
  //add the class="playing" to the key selected above
  //"playing" styles the key slightly bigger
  key.classList.add('playing')
}

function stopAnimation(e) {
  // remove animation when transition ends
  // if (e.propertyName!=="transform") return
  this.classList.remove('playing')
}

//select all the keys into an array
const keys = document.querySelectorAll('.key')
//loop through keys - when animation (transition) ends, stop the animation
keys.forEach(key => key.addEventListener('transitionend', stopAnimation))

// when a key is pressed, play the sound
window.addEventListener('keydown', playSound)

// tried onclick event, but this won't work
// ['click', 'keydown'].forEach(evt => window.addEventListener(evt,playSound))
// window.addEventListener('click', playSound)
// document.querySelector(".key").addEventListener('click', e => playSound);
