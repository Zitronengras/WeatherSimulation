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
    var audioURL = 'music/wind-and-trees-and-snow.wav';

    this.load = function(scene){
        console.log('spring');
        
        //skybox
        springSkybox.load(scene, skyboxImagePrefix);
        
        //springGround
        springGround = ground.doGround(ground.doGroundGeometry(), springGroundColor);
        scene.add(springGround);


        //audio
        audio.playTrack(audioURL, scene);
    };

    this.remove = function(scene){
        scene.remove(ground);
        scene.remove(springGround);
        scene.remove(springGroundColor);
        scene.remove(springSkybox);
        scene.remove(shadow);
        audio.stopTrack();

        console.log('removed spring');
    };
}