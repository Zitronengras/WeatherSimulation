/**
 * Created by Caro on 24.06.2015.
 */

function Summer() {

    var ground = new Ground();

    this.load = function(scene){
        console.log('summer');

        //summerGround
        var summerGroundColor= "#91D94A";
        var summerGround = ground.doGround(ground.doGroundGeometry(), summerGroundColor);
        scene.add(summerGround);

        //cloud loader
        var cloud;
        var cloudLoader = new THREE.ColladaLoader();
        cloudLoader.options.convertUpAxis = true;
        cloudLoader.load('dae/Wolken.dae', function(collada){
            cloud = collada.scene;
            console.log('cloud loaded');
            cloud.castShadow = true;
            cloud.scale.x = cloud.scale.y = cloud.scale.z = 0.5;
            cloud.position.set(1, 150, 1);
            cloud.updateMatrix();
            scene.add(cloud);
        });

        //grass loader
        var grassStalk;
        var grassStalkLoader = new THREE.ColladaLoader();
        grassStalkLoader.options.convertUpAxis = true;
        grassStalkLoader.load('dae/Grashalm.dae', function(collada){
            grassStalk = collada.scene;
            console.log('grassStalk loaded');
            grassStalk.castShadow = true;
            //grassStalk.scale.x = cloud.scale.y = cloud.scale.z = 5;
            grassStalk.position.set(1, 1, 1);
            grassStalk.updateMatrix();
            scene.add(grassStalk);
        });

        /*//twisted tree loader
        var twistedTree;
        var twistedTreeLoader = new THREE.ColladaLoader();
        twistedTreeLoader.options.convertUpAxis = true;
        twistedTreeLoader.load('dae/twisted_tree.dae', function(collada){
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
            twistedTree.position.set(10, 20, 80);
            twistedTree.updateMatrix();
            scene.add(twistedTree);
        });*/

        //second twisted tree loader
        var twistedTree2;
        var twistedTree2Loader = new THREE.ColladaLoader();
        twistedTree2Loader.options.convertUpAxis = true;
        twistedTree2Loader.load('dae/twisted_tree.dae', function(collada){
            twistedTree2 = collada.scene;
            console.log('twistedTree 2 loaded');
            twistedTree2.castShadow = true;
            twistedTree2.scale.x = twistedTree2.scale.y = twistedTree2.scale.z = 0.05;
            twistedTree2.position.set(20, 20, 120);
            twistedTree2.updateMatrix();
            scene.add(twistedTree2);
        });

        //big/long tree loader
        var longTree;
        var longTreeLoader = new THREE.ColladaLoader();
        longTreeLoader.options.convertUpAxis = true;
        longTreeLoader.load('dae/long_tree.dae', function(collada){
            longTree = collada.scene;
            console.log('longtree loaded');
            longTree.castShadow = true;
            longTree.scale.x = longTree.scale.y = longTree.scale.z = 0.02;
            longTree.position.set(10, 20, -100);
            longTree.updateMatrix();
            scene.add(longTree);
        });
    };
}