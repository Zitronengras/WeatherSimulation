/**
 * Created by Caro on 08.07.2015.
 */

function Daytime(scene){

    var direction;
    var sunHigh = 900;
    var sunGoesDown = -1;
    var sphereGeometry = new THREE.SphereGeometry(20);
    var sphereMaterial = new THREE.MeshLambertMaterial({color: 0x00ff00});
    var sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
    sphere.position.x = 0;
    sphere.position.y = 0;
    sphere.position.z = 0;
    scene.add(sphere);
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
        //console.log('move' + sunHigh);
    }
}
