
class RBGController{

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
        this.ledRed.pwmWrite(255);
        this.ledGreen.pwmWrite(0);
        this.ledBlue.pwmWrite(0);

    }

    setYellow(){
	//console.log(this)
        this.ledRed.pwmWrite(255);
        this.ledGreen.pwmWrite(255);
        this.ledBlue.pwmWrite(0);

    }

    setGreen(){
        this.ledRed.pwmWrite(0);
        this.ledGreen.pwmWrite(255);
        this.ledBlue.pwmWrite(0);

    }

}

module.exports = {
    RBGController
}
