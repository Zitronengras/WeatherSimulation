/**
 * Created by Caro on 24.06.2015.
Edit by Karo
 */

function Summer(yOffset) {

    var ground = new Ground(yOffset);
    var summerGround;
    var summerGroundColor= "#D2D92C";
    var springSkybox = new Skybox();
    var skyboxImagePrefix = "images/summer/skybox-";
    var cloud;
    var cloudLoader;
    var grassStalk;
    var grassStalkLoader;
    var grassArray;
    var twistedTree;
    var twistedTreeLoader;
    var twistedTree2;
    var twistedTree2Loader;
    var longTree;
    var longTreeLoader;
    var i;
    var summerSpotLight;
    var shadow = new Shadow();
    var audio = new Audio();
    var audioURL = 'music/09 What You Wanted.mp3';

    this.load = function(scene){
        console.log('summer');

        //skybox
        //springSkybox.load(scene, skyboxImagePrefix);

        //winterLight
        summerSpotLight = new THREE.SpotLight(0xF5CB03);
        summerSpotLight.castShadow = true;
        summerSpotLight.position.x = 900; //red axis
        summerSpotLight.position.y = 900; //green axis
        summerSpotLight.position.z = -1500 + yOffset;
        summerSpotLight.intensity = 0.5; //1.2;
        summerSpotLight.lookAt(0, 0, 0);
        scene.add(summerSpotLight);

        //summerGround
        summerGround = ground.doGround(ground.doGroundGeometry(), summerGroundColor);
        scene.add(summerGround);

        //cloud loader
        cloudLoader = new THREE.ColladaLoader();
        cloudLoader.options.convertUpAxis = true;
        cloudLoader.load('dae/Wolken.dae', function(collada){
            cloud = collada.scene;
            console.log('cloud loaded');
            cloud.scale.x = cloud.scale.y = cloud.scale.z = 0.5;
            cloud.position.set(1, 100, 1);
            shadow.addShadow(cloud);
            cloud.updateMatrix();
            scene.add(cloud);
        });

        //grass loader
        grassStalkLoader = new THREE.ColladaLoader();
        grassStalkLoader.options.convertUpAxis = true;
        grassArray = [];
        grassStalkLoader.load('dae/Grashalm.dae', function(collada){
            grassStalk = collada.scene;
            //store mesh
            var colladaObj = collada.scene.children[0];
            for (i = 0; i < 20; i++) {
                newGrassStalk = new THREE.Object3D();
                for (var j = 0; j < colladaObj.children.length; j++) {
                    newGrassStalk.add(new THREE.Mesh(colladaObj.children[j].geometry, colladaObj.children[j].material));
                }
                newGrassStalk.scale.x = newGrassStalk.scale.y = newGrassStalk.scale.z = 0.01;
                newGrassStalk.position.set(0,yOffset,0);

                newGrassStalk.rotation.x = -90*Math.PI/180;
                newGrassStalk.rotation.y = 65*Math.PI/180;

                //rotate own axis to make every grassStalk individual
                newGrassStalk.rotation.z = ((getRandomArbitrary(0, 2)*30)*Math.PI/180);
                newGrassStalk.rotation.x = 240*Math.PI/180;

                newGrassStalk.position.set((i*3), 5, (i*3));
                shadow.addShadow(newGrassStalk);
                newGrassStalk.updateMatrix();
                grassArray.push(newGrassStalk);
                scene.add(newGrassStalk);
            }
            console.log('grassStalk loaded');
            grassStalk.position.set(-3,yOffset,-3);
            shadow.addShadow(grassStalk);
            grassStalk.updateMatrix();
            scene.add(grassStalk);
        });

        //twisted tree loader
        twistedTreeLoader = new THREE.ColladaLoader();
        twistedTreeLoader.options.convertUpAxis = true;
        twistedTreeLoader.load('dae/twisted_tree.dae', function(collada){
            twistedTree = collada.scene;
            console.log('twistedTree loaded');
            twistedTree.scale.x = twistedTree.scale.y = twistedTree.scale.z = 0.05;
            shadow.addShadow(twistedTree);
            twistedTree.position.set(10, 20 + yOffset, 80);
            twistedTree.updateMatrix();
            scene.add(twistedTree);
        });

        //second twisted tree loader
        twistedTree2Loader = new THREE.ColladaLoader();
        twistedTree2Loader.options.convertUpAxis = true;
        twistedTree2Loader.load('dae/twisted_tree.dae', function(collada){
            twistedTree2 = collada.scene;
            console.log('twistedTree 2 loaded');
            shadow.addShadow(twistedTree2);
            twistedTree2.scale.x = twistedTree2.scale.y = twistedTree2.scale.z = 0.05;
            twistedTree2.position.set(20, 20 + yOffset, 120);
            twistedTree2.updateMatrix();
            scene.add(twistedTree2);
        });

        //big/long tree loader
        longTreeLoader = new THREE.ColladaLoader();
        longTreeLoader.options.convertUpAxis = true;
        longTreeLoader.load('dae/long_tree.dae', function(collada){
            longTree = collada.scene;
            console.log('longtree loaded');
            shadow.addShadow(longTree);
            longTree.scale.x = longTree.scale.y = longTree.scale.z = 0.02;
            longTree.position.set(10, 20+yOffset, -100);
            longTree.updateMatrix();
            scene.add(longTree);
        });

        //audio
        audio.playTrack(audioURL, scene);
    };

    this.remove = function(scene){
        scene.remove(summerGround);
        scene.remove(springSkybox);
        springSkybox.remove(scene);
        scene.remove(cloudLoader);
        scene.remove(cloud);
        scene.remove(grassStalk);
        scene.remove(grassStalkLoader);
        for(i = 0; i < grassArray.length; i++){
            scene.remove(grassArray[i]);
        }
        scene.remove(twistedTree);
        scene.remove(twistedTreeLoader);
        scene.remove(twistedTree2);
        scene.remove(twistedTree2Loader);
        scene.remove(longTree);
        scene.remove(longTreeLoader);
        scene.remove(summerSpotLight);
        scene.remove(shadow);
        audio.stopTrack();

        console.log('removed summer');
    };

    function getRandomArbitrary(min, max) {
        return Math.random() * (max - min) + min;
    }
}