
class RGBController{

    constructor(){
	var Gpio = require('pigpio').Gpio //include pigpio to interact with the GPIO
        this.ledRed = new Gpio(4, {mode: Gpio.OUTPUT}) //use GPIO pin 4 as output for RED
        this.ledGreen = new Gpio(17, {mode: Gpio.OUTPUT}) //use GPIO pin 17 as output for GREEN
        this.ledBlue = new Gpio(27, {mode: Gpio.OUTPUT}) //use GPIO pin 27 as output for BLUE

        //RESET RGB LED
        this.ledRed.pwmWrite(0); // Turn RED LED off
        this.ledGreen.pwmWrite(0); // Turn GREEN LED off
        this.ledBlue.pwmWrite(0); // Turn BLUE LED off

        
    }

    setRed(){
        this.writeToLED(255, 0, 0);

    }

    setYellow(){
        this.writeToLED(255, 255, 0);
    }

    setGreen(){
        this.writeToLED(0, 255, 0);

    }

    setNone(){
        this.writeToLED(0, 0, 0);
    }

    writeToLED(r, g, b){
        this.ledRed.pwmWrite(r);
        this.ledGreen.pwmWrite(g);
        this.ledBlue.pwmWrite(b);
    }

}

module.exports = {
    RGBController
}
