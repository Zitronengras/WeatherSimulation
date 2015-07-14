/**
 * Created by Caro on 08.07.2015.
 */

function Daytime(scene){

    var direction;
    var sunHigh = 500; //�ndern
    var sunGoesDown = -1;
    var goesDown = true;
    var intensityGoesDown = 1/375;
    var opacityGoesDown = 1/900;
    var nightOpacity = 0;
    console.log('DAYTIME');

    var skybox = new Skybox();
    this.moveSun = function(mainSpotlight, optSpotlight){

        if(sunHigh == -300){
            direction = new THREE.Vector3(0,0.5,0);
            sunGoesDown = 1;
            goesDown = false;
        }
        //intensity light
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
        //opacity nightSkybox
        if(goesDown == true && sunHigh <= 400){
            /*if(round2Dezimal(nightOpacity) == 0.03){
                nightOpacity = 1;
                skybox.makeNight(scene, nightOpacity);
                //console.log('nightOpacity = 1');
            }*/
            if(nightOpacity >= 0 && nightOpacity <= 0.07){
                nightOpacity += opacityGoesDown;
                console.log('nightOpacity' + nightOpacity);
                skybox.makeNight(scene, nightOpacity, getMaterialArray());
            }
            /*if(nightOpacity > 1){
                console.log('stop makenight');
            }*/
        }
        if(goesDown == false && sunHigh <= 400){
           /* if(round2Dezimal(nightOpacity) == 0.79){
                nightOpacity = 0;
                skybox.makeNight(scene, nightOpacity);
                console.log('nightOpacity = 0');
            }*/
            if(nightOpacity >= 0 && nightOpacity <= 1){
                nightOpacity = 0; //-= opacityGoesDown;
                console.log('nightOpacity' + nightOpacity);
                skybox.makeNight(scene, nightOpacity);
            }
        }
        if(sunHigh == 500){
            direction = new THREE.Vector3(0,-0.5,0);
            sunGoesDown = -1;
            goesDown = true;
        }
        mainSpotlight.position.add(direction);
        optSpotlight.position.add(direction);
        sunHigh += sunGoesDown;
        console.log('move' + sunHigh);
    }
}


function round2Dezimal(x) {
    result = Math.round(x * 100) / 100 ;
    return result;
}