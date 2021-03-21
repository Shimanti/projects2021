// Provides  HOROSCOPE reading from HOROSCOPE sign selection
// Couldn't figure out how to get the clicked image to appear again easily

// get the parent element of the astrology signs
const signs = document.querySelector('#signs')

// create possible responses to sign selected
function textHoroscope(sign) {
  if (sign === "capricorn") {
    return "This day is loaded with intensity for you. Every time you make eye contact with someone, you'll feel a strong, meaningful subtext at work. Are they trying to tell you something? It's important not to let your imagination run away with you, because you're likely to see clues where none exist. And if you go looking for the hidden meaning behind every one of them, you'll end up getting very confused. Enjoy the depth of your connections today, but try to take them at face value."
  } else if (sign === "aquarius") {
    return "There is no denying that having fun is fun! So try to put some silliness at the top of your to-do list today. You can kiss goodbye the deep issues of life for at least the next 24 hours and focus on just skimming the surface of things. Keeping life light and breezy will be pretty easy today, especially if you're surrounded by friends who understand how to have a good time. Keep it simple, keep it low maintenance, and you'll keep smiling!"
  } else if (sign === "pisces") {
    return "You're way overdue for a heart-to-heart talk with one of your closest friends. Make a serious effort today to talk with them or schedule a time for the near future. The two of you have some catching up to do, and there are a few things that only they can help you with. You might not have noticed, but there has been a great deal of stress building in you. You are preoccupied with something that this person can help you sort out."
  } else if (sign === "aries") {
    return "Just like peanut butter and jelly or Ginger Rogers and Fred Astaire, you and your best friend make an excellent combination right now. The two of you generate wonderful energy when you get together, and people enjoy watching you in action more than you might realize. Acknowledge this attention and go ahead and play up to it. Charm everyone and work that dynamic duo magic. It makes everyday activities so much more fun."
  } else if (sign === "taurus") {
    return "Good news early in the day could send you off on a nice wave of joy all day long, so ride it and spread the word. People love a happy e-mail, so shoot a bunch out today and give the people who love you yet another reason to smile. As the day continues, good news will keep on coming, and this time you'll be the one applauding loudly. See how that works? Your people are a community of cheerleaders, therapists, and treasured advisers."
  } else if (sign === "gemini") {
    return  "Complicated plans can be simplified under your intellectual gaze today. You have an uncanny ability to cut right through all the noise and get to the real heart of any matter. All the recent drama in your social circle is coming from the same root cause, and you should dig down to get to the bottom of it. Keeping the peace is not your job, per se, but a little bit of effort on your part can make everyone happier and make your life much easier."
  } else if (sign === "cancer") {
    return  "You've been feeling calm and contented with the way things are going, but today you might see some problems pop up. Watch out for others who aren't doing what they should be doing. You might have to play referee today, but if you treat everyone with respect, they will obey you without giving you any grief. The issues are not going to go away until you address them. Only you can decide what the agenda should be, so don't be afraid to tell people what to do."
  } else if (sign === "leo") {
    return "Someone's brilliant one-liner could do more than tickle your funny bone. It could ignite a tiny spark in your heart. Few people realize how having fun can lead to romance, although you have always understood the connection, haven't you? Your ideal mate is more likely to be someone who makes you smile than someone who makes you swoon. Remember this when you're considering which crushes to pursue. Hold off on accepting an invitation from anyone who comes on too strong."
  } else if (sign === "virgo") {
    return "Of course you deserve a splurge now and then, but right now you should limit your shopping to only the essentials. Groceries, gas, and rent deserve your hard-earned cash, but fancy food, designer duds, and the latest electronics might not, at least for now. Your bank account isn't as flush as you may think, and a quick review of your accounts could go a long way toward keeping you in a more economical state of mind."
  } else if (sign === "libra") {
    return "If you spend too much time thinking about how to make everything equal and fair between you and your friends, you'll end up wasting a lot of time and creating way too much work for yourself. Life is simply not fair, as difficult as that is for you to knowledge. It's a messy affair full of selfishness and selflessness. Look at things with a farsighted view. As long as you think things are generally equitable, that should be good enough. Don't get lost in the nickels and the dimes."
  } else if (sign === "scorpio") {
    return "Someone as charming and fun to be around as you can't let one little no get you down! Rejections happen. The only way you can avoid them is to never take any risks. And how boring would life be if you never stuck your neck out even the littlest bit? Take this as an excuse to lavish some well-deserved attention on yourself. Splurge on something you've had your eye on and transform your newly available social time into precious solo time. You're guaranteed to enjoy yourself."
  } else if (sign === "sagittarius") {
    return "Let your curiosity drive all your decisions today, and you could end up in some very interesting places. There's no certain path or direction to follow, so toss out your usual routine and go adventuring as much as you can. Even if you only have an hour to spare today, do something different. It's time you checked out what's going on with the rest of the world. You'll get some bright ideas for new projects or travel."
  }
}
// listen for action on selected sign
signs.addEventListener("click", showHorosope)

// Create HTML response for Hororscope sign selected
function showHorosope() {
  let sign = event.target.id
  let result = textHoroscope(sign)
  document.querySelector('h2').innerHTML = sign.toUpperCase()
  document.querySelector('h3').innerHTML = result
  signs.style.display="none"
}
