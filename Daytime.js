/**
 * Created by Caro on 08.07.2015.
 */

function Daytime(){

    var direction;
    var sunHigh = 500; //ändern
    var sunGoesDown = -1;
    var goesDown = true;
    var intensityGoesDown = 1/375;
    console.log('DAYTIME');

    this.moveSun = function(mainSpotlight, optSpotlight){

        //change move direction of sun
        if(sunHigh == -300){
            direction = new THREE.Vector3(0,0.5,0);
            sunGoesDown = 1;
            goesDown = false;
        }
        //sun goes down: intensity light
        if(goesDown == true && sunHigh <= 0){
            mainSpotlight.intensity -= intensityGoesDown;
            optSpotlight.intensity -= intensityGoesDown;
            //console.log('intensity low');
        }
        //sun rising: intensity light
        if(goesDown == false && sunHigh <= 0){
            mainSpotlight.intensity += intensityGoesDown;
            optSpotlight.intensity += intensityGoesDown;
            //console.log('intensity high');
        }
        //change move direction of sun
        if(sunHigh == 500){
            direction = new THREE.Vector3(0,-0.5,0);
            sunGoesDown = -1;
            goesDown = true;
        }
        mainSpotlight.position.add(direction);
        optSpotlight.position.add(direction);
        sunHigh += sunGoesDown;
        //console.log('sunHigh' + sunHigh);
    }
}



////

/*if(goesDown == true && sunHigh == 400){
 skybox.makeNight(scene, 1);
 console.log('add nightskybox');

 }

 if(goesDown == true && sunHigh == 350){
 skybox.removeNight(scene);
 console.log('remove nightskybox');

 }*/

//opacity nightSkybox
/*if(goesDown == true && sunHigh == 450){//} 400 && sunHigh >200){

 skybox.makeNight(scene, 1);


 /*if(round2Dezimal(nightOpacity) == 0.03){
 nightOpacity = 1;
 skybox.makeNight(scene, nightOpacity);
 //console.log('nightOpacity = 1');
 }
 if(firstRound == true){
 skybox.makeNight(scene, nightOpacity);
 nightOpacity += opacityGoesDown;
 firstRound = false;
 }
 if(firstRound == false && nightOpacity >= 0 && nightOpacity <= 0.07){
 skybox.removeNight(scene);
 // skybox.removeNight(scene);
 nightOpacity += opacityGoesDown;
 //console.log('nightOpacity' + nightOpacity);
 skybox.makeNight(scene, nightOpacity);
 }*/

/*if(nightOpacity > 1){
 console.log('stop makenight');
 }*
 }
 if(goesDown == true && sunHigh == 430){
 skybox.removeNight(scene);

 console.log('mae night');
 }*/

/*if(goesDown == false && sunHigh <= 400){
 /* if(round2Dezimal(nightOpacity) == 0.79){
 nightOpacity = 0;
 skybox.makeNight(scene, nightOpacity);
 console.log('nightOpacity = 0');
 }*
 if(nightOpacity >= 0 && nightOpacity <= 1){
 nightOpacity = 0; //-= opacityGoesDown;
 console.log('nightOpacity' + nightOpacity);
 skybox.makeNight(scene, nightOpacity);
 }
 }*/