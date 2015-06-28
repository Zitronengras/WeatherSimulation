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
        
        
         //twisted tree 1
        var twistedTree1;
        var twistedTree1Loader = new THREE.ColladaLoader();
        twistedTree1Loader.options.convertUpAxis = true;
        twistedTree1Loader.load('dae/spring_twisted1.dae', function(collada){
            twistedTree1 = collada.scene;
            console.log('twistedTree1 loaded');
            twistedTree1.castShadow = true;
            twistedTree1.scale.x = twistedTree1.scale.y = twistedTree1.scale.z = 0.1;

            // SHADOW
            twistedTree1.traverse(function (child){
                child.traverse(function(e){
                    e.castShadow = true;
                })
            });
            //
            twistedTree1.position.set(10, 20, 80);
            twistedTree1.updateMatrix();
            scene.add(twistedTree1);
        });
        
           //twisted tree loader
        var twistedTree2;
        var twistedTree2Loader = new THREE.ColladaLoader();
        twistedTree2Loader.options.convertUpAxis = true;
        twistedTree2Loader.load('dae/spring_twisted2.dae', function(collada){
            twistedTree2 = collada.scene;
            console.log('twistedTree loaded');
            twistedTree2.castShadow = true;
            twistedTree2.scale.x = twistedTree2.scale.y = twistedTree2.scale.z = 0.1;

            // SHADOW
            twistedTree2.traverse(function (child){
                child.traverse(function(e){
                    e.castShadow = true;
                })
            });
            //
            twistedTree2.position.set(-10, 20, 80);
            twistedTree2.updateMatrix();
            scene.add(twistedTree2);
        });
        
           //twisted tree loader
        var twistedTree;
        var twistedTreeLoader = new THREE.ColladaLoader();
        twistedTreeLoader.options.convertUpAxis = true;
        twistedTreeLoader.load('dae/spring_twisted3.dae', function(collada){
            twistedTree = collada.scene;
            console.log('twistedTree loaded');
            twistedTree.castShadow = true;
            twistedTree.scale.x = twistedTree.scale.y = twistedTree.scale.z = 0.1;

            // SHADOW
            twistedTree.traverse(function (child){
                child.traverse(function(e){
                    e.castShadow = true;
                })
            });
            //
            twistedTree.position.set(30, 20, 80);
            twistedTree.updateMatrix();
            scene.add(twistedTree);
        });
    };
}