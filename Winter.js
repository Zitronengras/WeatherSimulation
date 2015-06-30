/**
 * Created by Caro on 24.06.2015.
 */

function Winter() {

    var ground = new Ground();
    var winterGround;
    var winterGroundColor = "#F8FFFF";
    var skybox = new Skybox();
    var skyboxImagePrefix = "images/winter/skybox-";

    this.load = function(scene){

        //skybox
        skybox.load(scene, skyboxImagePrefix);

        //winterGround
        winterGround = ground.doGround(ground.doGroundGeometry(), winterGroundColor);
        scene.add(winterGround);

        console.log('winter');
    };

    this.remove = function(scene){
        scene.remove(ground);
        scene.remove(winterGround);
        scene.remove(skybox);

        console.log('removed winter');
    };
}