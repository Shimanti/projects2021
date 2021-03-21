// want to isolate the image links (horoscope signs)
// from the Washington Post horoscope section

let wpImages = document.querySelectorAll(".sign-image")
// for (image of wpImages) {
//  console.log(image)
// }
wpImages.forEach(image=>console.log(image.src))
