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
    var audioURL = 'music/spring-birds.mp3';
    var cloud = new Cloud();
    var grass = new Grass();

    this.load = function(scene){
        console.log('spring');
        
        //skybox
        springSkybox.load(scene, skyboxImagePrefix);
        
        //springLight
        springSpotLight = new THREE.SpotLight(0xbdd7cb);
        shadow.addShadow(springSpotLight);
        springSpotLight.position.x = 0; //red axis
        springSpotLight.position.y = 900; //green axis
        springSpotLight.position.z = -1400; //-1500
        springSpotLight.intensity = 0.6;
        springSpotLight.lookAt(0, 0, 0);
        scene.add(springSpotLight);
        
        //springGround
        springGround = ground.doGround(doGroundGeometry(), springGroundColor);
        scene.add(springGround);

        //grass
        grass.load(scene, 0x267302);

        //clouds
        cloud.load(scene, 5);

        //audio
        audio.playTrack(audioURL, scene);
    };

    this.getSeasonSpotlight = function(){
        return springSpotLight;
    };

    this.remove = function(scene){
        scene.remove(ground);
        scene.remove(springSpotLight);
        scene.remove(springGround);
        scene.remove(springGroundColor);
        scene.remove(springSkybox);
        springSkybox.remove(scene);
        scene.remove(shadow);
        cloud.remove(scene);
        grass.remove(scene);
        audio.stopTrack();


        console.log('removed spring');
    };
}