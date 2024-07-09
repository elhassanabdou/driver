let strip = neopixel.create(DigitalPin.P15, 4, NeoPixelMode.RGB)
strip.setBrightness(255)
strip.showRainbow(1, 360)
loops.everyInterval(500, function on_every_interval() {
    strip.rotate(1)
    strip.show()
})
basic.forever(function on_forever() {
    let left_patrol = maqueen.readPatrol(maqueen.Patrol.PatrolLeft)
    let right_patrol = maqueen.readPatrol(maqueen.Patrol.PatrolRight)
    if (left_patrol == 0 && right_patrol == 0) {
        maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 50)
    } else if (left_patrol == 0 && right_patrol == 1) {
        maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 50)
        maqueen.motorStop(maqueen.Motors.M1)
    } else if (left_patrol == 1 && right_patrol == 0) {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 50)
        maqueen.motorStop(maqueen.Motors.M2)
    } else if (left_patrol == 1 && right_patrol == 1) {
        maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 50)
        maqueen.motorStop(maqueen.Motors.M2)
    } else {
        maqueen.motorStop(maqueen.Motors.All)
    }
    
})
