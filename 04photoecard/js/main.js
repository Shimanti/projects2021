// Celebration card of my son and my Dad
// Toggles between images

document.querySelector('#before').addEventListener('click', showAfter)

function showAfter() {
  document.querySelector('h1').innerText = "Alex and Grandad in 2021"
  document.querySelector('h2').innerText = "Pure love"
  document.querySelector('#before').style.display = "none"
  document.querySelector('#after').style.display = "inherit"
  document.querySelector('#after').addEventListener('click', showBefore)
  }

function showBefore() {
  document.querySelector('h1').innerText = "Alex and Grandad in 2004"
  document.querySelector('h2').innerText = "Click on Photo"
  document.querySelector('#before').style.display = "inherit"
  document.querySelector('#after').style.display = "none"
}
