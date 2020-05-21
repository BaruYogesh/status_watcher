var Gpio = require('pigpio').Gpio //include pigpio to interact with the GPIO

class RBGController{

    constructor(){
        
        ledRed = new Gpio(4, {mode: Gpio.OUTPUT}), //use GPIO pin 4 as output for RED
        ledGreen = new Gpio(17, {mode: Gpio.OUTPUT}), //use GPIO pin 17 as output for GREEN
        ledBlue = new Gpio(27, {mode: Gpio.OUTPUT}) //use GPIO pin 27 as output for BLUE

        //RESET RGB LED
        ledRed.digitalWrite(0); // Turn RED LED off
        ledGreen.digitalWrite(0); // Turn GREEN LED off
        ledBlue.digitalWrite(0); // Turn BLUE LED off

        
    }

    setRed(){
        this.ledRed.digitalWrite(255);
        this.ledGreen.digitalWrite(0);
        this.ledBlue.digitalWrite(0);

    }

    setYellow(){
        this.ledRed.digitalWrite(255);
        this.ledGreen.digitalWrite(255);
        this.ledBlue.digitalWrite(0);

    }

    setGreen(){
        this.ledRed.digitalWrite(0);
        this.ledGreen.digitalWrite(255);
        this.ledBlue.digitalWrite(0);

    }

}

module.exports = {
    RBGController
}