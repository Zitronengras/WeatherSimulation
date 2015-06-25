/**
 * Created by Caro on 24.06.2015.
 */

function Autumn() {
    var ground = new Ground();
    var autumnGroundColor = "#91D94A";

    this.load = function(scene){
        console.log('Autumn');
        //autumnGround
        var autumnGround = ground.doGround(ground.doGroundGeometry(), autumnGroundColor);
        scene.add(autumnGround);
    };
}
