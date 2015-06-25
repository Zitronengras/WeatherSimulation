/**
 * Created by Caro on 24.06.2015.
 */

function Winter() {

    var ground = new Ground();
    var winterGround;
    var winterGroundColor = "#F8FFFF";

    this.load = function(scene){
        console.log('winter');

        //winterGround
        winterGround = ground.doGround(ground.doGroundGeometry(), winterGroundColor);
        scene.add(winterGround);
    };

    this.remove = function(scene){
        scene.remove(winterGround);

        console.log('removed winter');
    };
}