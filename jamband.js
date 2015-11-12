var GPIO = require('onoff').Gpio;
	led_01 = new GPIO(17,'out');
	led_02 = new GPIO(18,'out');
	led_03 = new GPIO(21,'out');

	button_01 = new GPIO(10, 'in', 'both');
	button_02 = new GPIO(09, 'in', 'both');
	button_03 = new GPIO(11, 'in', 'both');

var Sound = require('node-aplay');	
	var snare = new Sound('snare.wav');
	var sax = new Sound('sax.wav');
	var trump = new Sound('trump.wav');


function buttonRead_snare(err, state){
	//check state
	if(state == 1){
		console.log("Button 1 is pressed");
		led_01.writeSync(1);
		snare.play();
		if(snare.pause == True){
			snare.resume();
		}
	}
	else{
		led_01.writeSync(0)
		snare.pause();
	}
}

function buttonRead_sax(err, state){
	//check state
	if(state == 1){
		console.log("Button 2 is pressed");
		led_02.writeSync(1);
		sax.play();
		if(sax.pause == True){
			sax.resume();
		}
	}
	else{
		led_02.writeSync(0)
		sax.pause();
	}
}

function buttonRead_trumpet(err, state){
	//check state
	if(state == 1){
		console.log("Button 3 is pressed");
		led_03.writeSync(1);
		trump.play();
		if(trump.pause == True){
			trump.resume();
		}
	}
	else{
		led_03.writeSync(0)
		trump.pause();
	}
}


button_01.watch(buttonRead_snare);
button_02.watch(buttonRead_sax);
button_03.watch(buttonRead_trumpet);

/*---------------------------------------------------------------------------------------------------------------------------------/*

/*Music Credit
	 snare - https://freesound.org/people/Veiler/sounds/261488/	©Veiler
	 sax -  https://freesound.org/people/clruwe/sounds/121430/ ©clruwe
	 trumpet - https://freesound.org/people/sorohanro/sounds/77714/ ©sorohanro*/

/*NPM Credit
	node-aplay - https://www.npmjs.com/package/node-aplay
	onoff - https://www.npmjs.com/package/onoff*/
