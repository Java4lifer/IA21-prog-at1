import { Bar } from "./Bar.ts"

const canvas = document.createElement("canvas")
const context = canvas.getContext("2d")

const bar = new Bar(canvas, 10, 50, 10, "red", 10)
const bar2 = new Bar(canvas, 10, 50, 10, "blue", 30)
canvas.width = 400
canvas.height = 350


document.addEventListener("keydown", ev => {
    if(!ev.repeat && ev.code == "KeyD") {
        bar2.moveRight()
    }
    if(!ev.repeat && ev.code == "KeyA") {
        bar2.moveLeft()
    }
    if(!ev.repeat && ev.code == "ArrowLeft") {
        bar2.moveRight()
    }
    if(!ev.repeat && ev.code == "ArrowRight") {
        bar2.moveLeft()
    }
})
document.addEventListener("keyup", ev => {
    if(ev.code == "KeyD" || ev.code == "KeyA") {
        return bar.stopMoving()
    }
})
function mainLoop() {
    context.clearRect(0, 0, canvas.width, canvas.height)
    bar.render()
    bar2.render()
    requestAnimationFrame(mainLoop)
}
requestAnimationFrame(mainLoop)
document.body.append(canvas)
// let x = 325
// let directionX = 0
// let barwidth = 100
// let barheight = 20
// let speed = 10

// document.addEventListener("keydown", ev => {
//     if(!ev.repeat && ev.code == "KeyD") {
//         return directionX = speed
//     }
// })

// document.addEventListener("keydown", ev => {
//     if(!ev.repeat && ev.code == "KeyA") {
//         return directionX = -speed
//     }
// })

// document.addEventListener("keyup", ev => {
//     if(ev.code == "KeyD" || ev.code == "KeyA") {
//         directionX = 0
//     }
// })

// function mainLoop() {
//     context.clearRect(0, 0, canvas.width, canvas.height)
//     context.fillRect(x, canvas.height-50, barwidth, barheight)
//     x += directionX

//     if (x <= 0 || x >= canvas.width - barwidth) directionX = 0
//     requestAnimationFrame(mainLoop)
//     //process.nextTick(mainLoop)
// }

// requestAnimationFrame(mainLoop)
// //setInterval(mainLoop, 60 / 1000)

// document.body.append(canvas)

//fazer outra barra do outro lado
