/**
 * Created by Caro on 24.06.2015.
 */

function Autumn() {
    var ground = new Ground();
    var autumnGroundColor = "#6C6632";

    this.load = function(scene){
        console.log('Autumn');
        //autumnGround
        var autumnGround = ground.doGround(ground.doGroundGeometry(), autumnGroundColor);
        scene.add(autumnGround);
    };
}
