/**
 * Created by Caro on 24.06.2015.
 */

function Winter() {

    var ground =new Ground();

    this.load = function(scene){
        console.log('winter');

        //winterGround
        var winterGroundColor = "#F8FFFF";
        var winterGround = ground.doGround(ground.doGroundGeometry(), winterGroundColor);
        scene.add(winterGround);
    };
}