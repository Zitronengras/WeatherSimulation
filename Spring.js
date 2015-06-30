/**
 * Created by Caro on 24.06.2015.
 */

function Spring() {

    var ground = new Ground();
    var springGround;
    var springGroundColor = "#91D94A";

    this.load = function(scene){
        console.log('spring');
        //springGround
        springGround = ground.doGround(ground.doGroundGeometry(), springGroundColor);
        scene.add(springGround);

    };

    this.remove = function(scene){
        scene.remove(ground);
        scene.remove(springGround);
        scene.remove(springGroundColor);

        console.log('removed spring');
    };
}