let I = 0
for (let index = 0; index < 5; index++) {
    led.plot(I, 2)
    basic.pause(200)
    basic.clearScreen()
    I += 1
}
basic.forever(function () {
	
})
