let Angle = 0
basic.forever(function () {
    servos.P0.setRange(10, 170)
    for (let index = 0; index <= 16; index++) {
        Angle = index * 10 + 10
        servos.P0.setAngle(Angle)
        basic.pause(100)
    }
    for (let index = 0; index <= 32; index++) {
        Angle = index * -5 + 170
        servos.P0.setAngle(Angle)
        basic.pause(100)
    }
})
