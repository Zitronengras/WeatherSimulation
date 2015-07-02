/**
 * Created by Caro on 24.06.2015.
 */

function Spring() {

    var ground = new Ground();
    var springGround;
    var springGroundColor = "#91D94A";
    var springSkybox = new Skybox();
    var skyboxImagePrefix = "images/spring/skybox-";

    this.load = function(scene){
        console.log('spring');
        
        //skybox
        springSkybox.load(scene, skyboxImagePrefix);
        
        //springGround
        springGround = ground.doGround(ground.doGroundGeometry(), springGroundColor);
        scene.add(springGround);

    };

    this.remove = function(scene){
        scene.remove(ground);
        scene.remove(springGround);
        scene.remove(springGroundColor);
        scene.remove(springSkybox);
        console.log('removed spring');
    };
}