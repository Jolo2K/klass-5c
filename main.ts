input.onButtonPressed(Button.A, function () {
    antal_elever += 1
})
input.onGesture(Gesture.Shake, function () {
    basic.showLeds(`
        # # # . .
        # . . # .
        # . . # .
        # # # . .
        # . . # .
        `)
    basic.pause(500)
    basic.showLeds(`
        . # # # #
        . # . . #
        . # # # #
        . # . . #
        . # . . #
        `)
    basic.pause(500)
    basic.showLeds(`
        . # # # .
        # . . . .
        . # # . .
        . . . # .
        # # # . .
        `)
    basic.pause(500)
    basic.showLeds(`
        # # # # #
        . . # . .
        . . # . .
        . . # . .
        . . # . .
        `)
    basic.pause(500)
    basic.showLeds(`
        . . # . .
        . . # . .
        . . # . .
        . . . . .
        . . # . .
        `)
    basic.pause(500)
    basic.clearScreen()
})
input.onButtonPressed(Button.AB, function () {
    basic.showString("" + (antal_elever))
    basic.clearScreen()
    basic.pause(1000)
})
input.onButtonPressed(Button.B, function () {
    if (antal_elever > 0) {
        antal_elever += -1
    }
})
let antal_elever = 0
antal_elever = 0
basic.showString("Tja 5C")
basic.pause(500)
basic.showIcon(IconNames.Heart)
basic.clearScreen()
basic.pause(500)
basic.showIcon(IconNames.Heart)
basic.clearScreen()
basic.pause(1000)
basic.forever(function () {
    basic.showString("5 C")
    basic.pause(5000)
})
