/**
 * Created by Caro on 08.07.2015.
 */

function Daytime(scene){

    var direction;
    var sunHigh = 900;
    var sunGoesDown = -1;
    console.log('DAYTIME');

    this.moveSun = function(mainSpotlight, optSpotlight){

        if(sunHigh == 0){
            direction = new THREE.Vector3(0,1,0);//ändern
            sunGoesDown = +1;
        }
        if(sunHigh == 900){
            direction = new THREE.Vector3(0,-1,0);//ändern
            sunGoesDown = -1;
        }
        mainSpotlight.position.add(direction);
        optSpotlight.position.add(direction);
        sunHigh += sunGoesDown;
        console.log('move' + sunHigh);
    }
}
