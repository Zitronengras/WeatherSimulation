/**
 * Created by Caro on 08.07.2015.
 */

function Daytime(){

    var direction;
    var sunHigh = 600;
    var sunGoesDown = -1;
    var goesDown = true;
    var intensityMainGoesDown = 0.0251;
    //var intensityOptGoesDown = 0.001;
    //console.log('DAYTIME');

    this.moveSun = function(mainSpotlight, optSpotlight){

        //change move direction of sun
        if(sunHigh == -600){
            direction = new THREE.Vector3(0,3,0);
            sunGoesDown = 1;
            goesDown = false;
            //console.log('goeDown false');
        }
        //sun goes down: intensity light
        if(goesDown == true && sunHigh <= 400 && sunHigh >= 0){
            mainSpotlight.position.add(direction);
            optSpotlight.position.add(direction);
            if(sunHigh <= 50 && sunHigh >= 0){
                mainSpotlight.intensity = round3Dezimal(mainSpotlight.intensity - intensityMainGoesDown);
                //optSpotlight.intensity = round3Dezimal(optSpotlight.intensity - intensityOptGoesDown);
            }
            //console.log('lower');
        }
        //sun rising: intensity light
        if(goesDown == false && sunHigh <= 0 && sunHigh >= -400){
            mainSpotlight.position.add(direction);
            optSpotlight.position.add(direction);
            if(sunHigh <= 0 && sunHigh >= -50){
                mainSpotlight.intensity = round3Dezimal(mainSpotlight.intensity + intensityMainGoesDown);
                //optSpotlight.intensity = round3Dezimal(optSpotlight.intensity + intensityOptGoesDown);
            }
            //console.log('higher');
        }
        //change move direction of sun
        if(sunHigh == 600){
            direction = new THREE.Vector3(0,-3,0);
            sunGoesDown = -1;
            goesDown = true;
            //console.log('goeDown true');
        }

        sunHigh += sunGoesDown;
        //console.log('sunHigh' + sunHigh);
    }
}


function round3Dezimal(value) {
    result = Math.round(value * 1000) / 1000 ;
    return result;
}