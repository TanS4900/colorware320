var r = 0

var g = 50

var b = 255

function setup () {
createCanvas(1200,400)

}

function draw () {
r = map(mouseX,0,1200,0,49)
g = map(mouseX,0,1200,50,200)
b = map(mouseX,0,1200,201,255)

background(r,g,b)
fill("gray")
ellipse(mouseX,200,20,20)

}
