/**
 * Created by Caro on 08.07.2015.
 */

function Daytime(scene){


    var direction = new THREE.Vector3(0,1,0);//ändern


    var sphereGeometry = new THREE.SphereGeometry(50);
    var sphereMaterial = new THREE.MeshLambertMaterial({color: 0x00ff00});
    var sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
    sphere.position.x = 0;
    sphere.position.y = 0;
    sphere.position.z = 0;
    scene.add(sphere);

    this.moveSun = function(mainSpotlight, optSpotlight){

        mainSpotlight.velocity = direction;
        optSpotlight.velocity = direction;

        mainSpotlight.position.add(mainSpotlight.velocity);
        optSpotlight.position.add(optSpotlight.velocity);


    }
}
