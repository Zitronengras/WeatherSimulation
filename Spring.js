/**
 * Created by Caro on 24.06.2015.
 */

function Spring(yOffset) {

    var ground = new Ground(yOffset);
    var springGround;
    var springGroundColor = "#91D94A";
    var springSkybox = new Skybox();
    var skyboxImagePrefix = "images/spring/skybox-";
    var shadow = new Shadow();
    var audio = new Audio();
    var audioURL = 'music/little-mp3-wind-and-trees-and-snow.mp3';

    this.load = function(scene){
        console.log('spring');
        
        //skybox
        springSkybox.load(scene, skyboxImagePrefix);
        
        //springLight
        springSpotLight = new THREE.SpotLight(0xbdd7cb);
        shadow.addShadow(springSpotLight);
        springSpotLight.position.x = 900; //red axis
        springSpotLight.position.y = 900; //green axis
        springSpotLight.position.z = -1500 + yOffset;
        springSpotLight.intensity = 0.6;
        springSpotLight.lookAt(0, 0, 0);
        scene.add(springSpotLight);
        
        //springGround
        springGround = ground.doGround(ground.doGroundGeometry(), springGroundColor);
        scene.add(springGround);


        //audio
        audio.playTrack(audioURL, scene);
    };

    this.remove = function(scene){
        scene.remove(ground);
        scene.remove(springSpotLight);
        scene.remove(springGround);
        scene.remove(springGroundColor);
        scene.remove(springSkybox);
        springSkybox.remove(scene);
        scene.remove(shadow);
        audio.stopTrack();

        console.log('removed spring');
    };
}