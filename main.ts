radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 66) {
        basic.showLeds(`
            # . . . #
            . # . # .
            . . # . .
            . # . # .
            # . . . #
            `)
    }
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    radio.sendNumber(3)
})
input.onButtonPressed(Button.A, function () {
    radio.sendNumber(1)
})
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(2)
})
radio.setGroup(999)
basic.showString("Hola")
music.playMelody("C D E F G A B C5 ", 120)
music.playMelody("C5 B A G F E D C ", 120)
