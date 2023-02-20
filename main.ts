Mbit_IR.onPressEvent(RemoteButton.Power, function () {
    basic.clearScreen()
    mbit_Robot.RGB_Car_Big2(mbit_Robot.enColor.OFF)
    mbit_Robot.CarCtrl(mbit_Robot.CarState.Car_Stop)
})
Mbit_IR.onPressEvent(RemoteButton.TRight, function () {
    mbit_Robot.CarCtrlSpeed(mbit_Robot.CarState.Car_SpinRight, speed)
})
Mbit_IR.onPressEvent(RemoteButton.Right, function () {
    mbit_Robot.CarCtrlSpeed(mbit_Robot.CarState.Car_Right, speed)
})
Mbit_IR.onPressEvent(RemoteButton.NUM0, function () {
    basic.showNumber(0)
})
Mbit_IR.onPressEvent(RemoteButton.Up, function () {
    mbit_Robot.CarCtrlSpeed(mbit_Robot.CarState.Car_Run, speed)
})
Mbit_IR.onPressEvent(RemoteButton.Minus, function () {
    speed += -10
    if (speed < 0) {
        speed = 0
    }
    led.plotBarGraph(
    speed,
    250
    )
})
Mbit_IR.onPressEvent(RemoteButton.Light, function () {
    if (lights) {
        mbit_Robot.RGB_Car_Big2(mbit_Robot.enColor.OFF)
        lights = 0
    } else {
        mbit_Robot.RGB_Car_Big2(mbit_Robot.enColor.White)
        lights = 1
    }
})
Mbit_IR.onPressEvent(RemoteButton.Left, function () {
    mbit_Robot.CarCtrlSpeed(mbit_Robot.CarState.Car_Left, speed)
})
Mbit_IR.onPressEvent(RemoteButton.Down, function () {
    mbit_Robot.CarCtrlSpeed(mbit_Robot.CarState.Car_Back, speed)
})
Mbit_IR.onPressEvent(RemoteButton.TLeft, function () {
    mbit_Robot.CarCtrlSpeed(mbit_Robot.CarState.Car_SpinLeft, speed)
})
Mbit_IR.onPressEvent(RemoteButton.NUM3, function () {
    basic.showNumber(3)
})
Mbit_IR.onPressEvent(RemoteButton.NUM2, function () {
    basic.showNumber(2)
})
Mbit_IR.onPressEvent(RemoteButton.BEEP, function () {
    music.playTone(988, music.beat(BeatFraction.Quarter))
})
Mbit_IR.onPressEvent(RemoteButton.NUM1, function () {
    basic.showNumber(1)
})
Mbit_IR.onPressEvent(RemoteButton.Plus, function () {
    speed += 10
    if (speed > 250) {
        speed = 250
    }
    led.plotBarGraph(
    speed,
    250
    )
})
let lights = 0
let speed = 0
Mbit_IR.init(Pins.P8)
speed = 50
lights = 0
basic.showIcon(IconNames.Asleep)
basic.forever(function () {
	
})
