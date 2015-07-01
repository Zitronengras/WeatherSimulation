/**
 * Created by Caro on 24.06.2015.
Edit by Karo
 */

function Summer() {

    var ground = new Ground();
    var summerGround;
    var summerGroundColor= "#91D94A";
    var cloud;
    var cloudLoader;
    var grassStalk;
    var grassStalkLoader;
    var twistedTree;
    var twistedTreeLoader;
    var twistedTree2;
    var twistedTree2Loader;
    var longTree;
    var longTreeLoader;

    this.load = function(scene){
        console.log('summer');

        //summerGround
        summerGround = ground.doGround(ground.doGroundGeometry(), summerGroundColor);
        scene.add(summerGround);

        //cloud loader
        cloudLoader = new THREE.ColladaLoader();
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
        grassStalkLoader = new THREE.ColladaLoader();
        grassStalkLoader.options.convertUpAxis = true;
        grassStalkLoader.load('dae/Grashalm.dae', function(collada){
            grassStalk = collada.scene;

            //store mesh
            var piece = collada.scene.children[0];
            //for (var i = 0; i < 10; i++) {
                var newPiece = new THREE.Object3D();
                for (var j = 0; j < piece.children.length; j++) {
                    newPiece.add(new THREE.Mesh(piece.children[j].geometry, piece.children[j].material));
                }
            //newPiece.scale.x = newPiece.scale.y = newPiece.scale.z = 0.1;
            newPiece.rotation.z = -0.5*Math.PI;
            newPiece.rotation.x = -0.15*Math.PI;
            newPiece.position.set(0, 0, 0);
            //scene.add(newPiece);
            //}

            console.log('grassStalk loaded');
            grassStalk.castShadow = true;
            grassStalk.scale.x = grassStalk.scale.y = grassStalk.scale.z = 0.05;
            grassStalk.position.set(1, 1, 1);
            grassStalk.updateMatrix();
            scene.add(grassStalk);
        });

        //twisted tree loader
        twistedTreeLoader = new THREE.ColladaLoader();
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
        });

        //second twisted tree loader
        twistedTree2Loader = new THREE.ColladaLoader();
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
        longTreeLoader = new THREE.ColladaLoader();
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

    this.remove = function(scene){
        scene.remove(summerGround);
        scene.remove(cloudLoader);
        scene.remove(cloud);
        scene.remove(grassStalk);
        scene.remove(grassStalkLoader);
        scene.remove(twistedTree);
        scene.remove(twistedTreeLoader);
        scene.remove(twistedTree2);
        scene.remove(twistedTree2Loader);
        scene.remove(longTree);
        scene.remove(longTreeLoader);

        console.log('removed summer');
    };
}