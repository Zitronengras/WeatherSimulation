/**
 * Created by Caro on 08.07.2015.
 */

function Daytime(scene){

    var direction;
    var sunHigh = 500; //ändern
    var sunGoesDown = -1;
    var goesDown = true;
    var intensityGoesDown = 1/375;
    var opacityGoesDown = 1/5000;
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
            if(nightOpacity >= 0 && nightOpacity <= 1){
                nightOpacity += opacityGoesDown;
                skybox.makeNight(scene, nightOpacity);
            }
        }
        if(goesDown == false && sunHigh <= 400){
            if(nightOpacity >= 0 && nightOpacity <= 1){
                nightOpacity -= opacityGoesDown;
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
