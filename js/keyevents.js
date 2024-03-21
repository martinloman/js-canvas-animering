let canvas = document.querySelector("canvas")
canvas.width = window.innerWidth
canvas.height = window.innerHeight
canvas.style.width = "100%"
canvas.style.height = "100%"

let c = canvas.getContext("2d")

// Startläge kvadraterna
// Slumpas fram med lite marginal från kanterna
// (minst 200 px till vänstermarginal, max 20 % av bredd till högermarginal)
let xPosRed = Math.floor(Math.random() * (0.8 * canvas.width - 200) + 200)
let yPosRed = Math.floor(Math.random() * (0.8 * canvas.height - 200) + 200)

// Hastighet för respektive kvadrat
let speed = 5
let xSpeed = 0
let ySpeed = 0

// Sidlängd för respektive kvadrat
const sizeRed = 30

// Variabler som håller reda på respektive kvadrats mittkoordinat
let xCenterRed = (xPosRed + xPosRed + sizeRed) / 2
let yCenterRed = (yPosRed + yPosRed + sizeRed) / 2

// Reagerar på tangenttryckningar
// Varje tangent har sin keycode, se https://keycode.info
document.onkeydown = function (e) {
  const key = e.key
  switch (key) {
    case "w":
      console.log("Going up")
      ySpeed = -speed
      break
    case "a":
      console.log("Going left")
      xSpeed = -speed
      break
    case "s":
      console.log("Going down")
      ySpeed = speed
      break
    case "d":
      console.log("Going right")
      xSpeed = speed
      break
    case " ": // Mellanslag
      console.log(`Mellanslag`)
      break
    default:
      console.log("Tangenten används inte")
  }
}

document.onkeyup = function (e) {
  const key = e.key
  switch (key) {
    case "w":
      console.log("Stop up")
      ySpeed = 0
      break
    case "a":
      console.log("Stop left")
      xSpeed = 0
      break
    case "s":
      console.log("Stop down")
      ySpeed = 0
      break
    case "d":
      console.log("Stop right")
      xSpeed = 0
      break
  }
}

// Ritar upp kvadraterna
function drawRects() {
  // Rensar gammalt visuellt innehåll
  c.clearRect(0, 0, canvas.width, canvas.height)

  // Sätt nya läget.
  xPosRed += xSpeed
  yPosRed += ySpeed

  // Den röda kvadraten ritas i sitt nya läge
  c.fillStyle = "red"
  c.fillRect(xPosRed, yPosRed, sizeRed, sizeRed)

  window.requestAnimationFrame(drawRects)
}

window.requestAnimationFrame(drawRects)
