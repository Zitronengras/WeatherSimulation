/**
 * Created by Caro on 24.06.2015.
 */

function Winter() {

    var ground = new Ground();
    var winterGround;
    var winterGroundColor = "#F8FFFF";
    var winterSkybox = new Skybox();
    var skyboxImagePrefix = "images/winter/skybox-";

    this.load = function(scene){

        //skybox
        winterSkybox.load(scene, skyboxImagePrefix);

        //ambientLight
        /*var ambientLight = new THREE.AmbientLight(0x21454C);
        scene.add(ambientLight);*/

        //winterLight
        var winterSpotLight = new THREE.SpotLight(0x4C7DFF);//ffffff);
        winterSpotLight.castShadow = true;
        winterSpotLight.position.x = 900; //red axis
        winterSpotLight.position.y = 700; //green axis
        winterSpotLight.position.z = 1;
        winterSpotLight.intensity = 0.3; //1.2;
        winterSpotLight.lookAt(0, 0, 0);
        scene.add(winterSpotLight);


        //winterGround
        winterGround = ground.doGround(ground.doGroundGeometry(), winterGroundColor);
        scene.add(winterGround);

        console.log('winter');
    };

    this.remove = function(scene){
        scene.remove(ground);
        scene.remove(winterGround);
        scene.remove(winterSkybox);

        console.log('removed winter');
    };
}