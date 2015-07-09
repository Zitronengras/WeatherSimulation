/**
 * Created by Caro on 08.07.2015.
 */

function Daytime(){

    var direction;
    var sunHigh = 1800; //ändern
    var sunGoesDown = -1;
    var goesDown = true;
    var intensityGoesDown = 1/375;
    console.log('DAYTIME');

    this.moveSun = function(mainSpotlight, optSpotlight){

        if(sunHigh == -300){
            direction = new THREE.Vector3(0,0.5,0);
            sunGoesDown = 1;
            goesDown = false;
        }
        if(goesDown == true && sunHigh <= 0){
            mainSpotlight.intensity -= intensityGoesDown;
            optSpotlight.intensity -= intensityGoesDown;
            console.log('intensity low');
        }
        if(goesDown == false && sunHigh <= 0){
            mainSpotlight.intensity += intensityGoesDown;
            optSpotlight.intensity += intensityGoesDown;
            console.log('intensity high');
        }
        if(sunHigh == 1800){
            direction = new THREE.Vector3(0,-0.5,0);
            sunGoesDown = -1;
            goesDown = true;
        }
        mainSpotlight.position.add(direction);
        optSpotlight.position.add(direction);
        sunHigh += sunGoesDown;
        //console.log('move' + sunHigh);
    }
}
