/**
 * Created by Caro on 24.06.2015.
 */

function Spring() {

    var ground = new Ground();
    var springGroundColor = "#91D94A";

    this.load = function(scene){
        console.log('spring');
        //springGround
        var springGround = ground.doGround(ground.doGroundGeometry(), springGroundColor);
        scene.add(springGround);
    };
}