/**
 * Created by Caro on 08.07.2015.
 */

function Daytime(){

    var direction;
    var sunHigh = 250;
    var sunGoesDown = -1;
    var goesDown = true;
    var intensityGoesDown = 0.02;//1/400; //375
    //console.log('DAYTIME');

    this.moveSun = function(mainSpotlight, optSpotlight){

        //change move direction of sun
        if(sunHigh == -250){
            direction = new THREE.Vector3(0,9,0);
            sunGoesDown = 1;
            goesDown = false;
            console.log('goeDown false');
        }
        //sun goes down: intensity light
        if(goesDown == true && sunHigh <= 102 && sunHigh >= 0){
            mainSpotlight.position.add(direction);
            optSpotlight.position.add(direction);
            if(sunHigh <= 40 && sunHigh >= 0){
                mainSpotlight.intensity -= intensityGoesDown;
                optSpotlight.intensity -= intensityGoesDown;
            }
            console.log('lower');
        }
        //sun rising: intensity light
        if(goesDown == false && sunHigh <= 0 && sunHigh >= -102){
            mainSpotlight.position.add(direction);
            optSpotlight.position.add(direction);
            if(sunHigh <= 0 && sunHigh >= -30){
                mainSpotlight.intensity += intensityGoesDown;
                optSpotlight.intensity += intensityGoesDown;
            }
            console.log('higher');
        }
        //change move direction of sun
        if(sunHigh == 250){
            direction = new THREE.Vector3(0,-9,0);
            sunGoesDown = -1;
            goesDown = true;
            console.log('goeDown true');
        }

        sunHigh += sunGoesDown;
        console.log('sunHigh' + sunHigh);
    }
}