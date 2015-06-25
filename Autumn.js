/**
 * Created by Caro on 24.06.2015.
 */

function Autumn() {
    var ground = new Ground();
    var autumnGround;
    var autumnGroundColor = "#6C6632";

    this.load = function(scene){
        console.log('Autumn');
        //autumnGround
        autumnGround = ground.doGround(ground.doGroundGeometry(), autumnGroundColor);
        scene.add(autumnGround);
    };

    this.remove = function(scene){
        scene.remove(autumnGround);

        console.log('removed autumn');
    };
}
