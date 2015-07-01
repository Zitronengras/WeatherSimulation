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
        
        
        //twisted tree loader
        twistedTreeLoader = new THREE.ColladaLoader();
        twistedTreeLoader.options.convertUpAxis = true;
        twistedTreeLoader.load('dae/autumn/trees/twisted_red.dae', function(collada){
            twistedTree = collada.scene;
            console.log('twistedTree loaded');
            twistedTree.castShadow = true;
            twistedTree.scale.x = twistedTree.scale.y = twistedTree.scale.z = 0.05;
            // SHADOW
            twistedTree.traverse(function (child){
                child.traverse(function(e){
                    e.castShadow = true;
                })
            });
            //
            twistedTree.position.set(10, 10, 80);
            twistedTree.updateMatrix();
            scene.add(twistedTree);
        });
    };

    this.remove = function(scene){
        scene.remove(autumnGround);

        console.log('removed autumn');
    };
}
