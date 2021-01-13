function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)
  if(!audio) return // skip not audio

  audio.currentTime = 0 //resets audio time
  audio.play() //plays the key sound
  key.classList.add('playing') // adds animation
}

function removeTransition(e) {
  if (e.propertyName !== 'transform') return //skip not selected
  this.classList.remove('playing') // removes animation
}

const keys = document.querySelectorAll('.key')
keys.forEach(key => key.addEventListener('transitionend', removeTransition))
window.addEventListener('keydown', playSound)
