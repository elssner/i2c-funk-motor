/**
 * Lade die Erweiterungen
 * 
 * radio
 * 
 * calliope-net/motor
 */
radio.onReceivedNumber(function (receivedNumber) {
    qwiicmotor.driveJoystick(qwiicmotor.qwiicmotor_eADDR(qwiicmotor.eADDR.Motor_x5D), receivedNumber)
})
input.onButtonEvent(Button.B, input.buttonEventClick(), function () {
    basic.showNumber(qwiicmotor.readRegister(qwiicmotor.qwiicmotor_eADDR(qwiicmotor.eADDR.Motor_x5D), qwiicmotor.qwiicmotor_eRegister(qwiicmotor.eRegister.DRIVER_ENABLE)))
})
radio.setGroup(10)
qwiicmotor.init(qwiicmotor.qwiicmotor_eADDR(qwiicmotor.eADDR.Motor_x5D))
if (qwiicmotor.getStatus(qwiicmotor.qwiicmotor_eADDR(qwiicmotor.eADDR.Motor_x5D), qwiicmotor.eStatus.ready)) {
    basic.showIcon(IconNames.Diamond)
} else {
    basic.showIcon(IconNames.No)
}
qwiicmotor.setSafeTime(qwiicmotor.qwiicmotor_eADDR(qwiicmotor.eADDR.Motor_x5D), qwiicmotor.qwiicmotor_eSafeTime(qwiicmotor.eSafeTime.ms150))
