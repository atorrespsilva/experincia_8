let item = 0
basic.forever(function () {
    item = input.compassHeading()
    if (item > 10 && item < 180) {
        pins.digitalWritePin(DigitalPin.P0, 0)
        pins.digitalWritePin(DigitalPin.P16, 1)
    } else if (item < 350 && item > 180) {
        pins.digitalWritePin(DigitalPin.P0, 1)
        pins.digitalWritePin(DigitalPin.P16, 0)
    } else {
        pins.digitalWritePin(DigitalPin.P0, 1)
        pins.digitalWritePin(DigitalPin.P16, 1)
    }
})
