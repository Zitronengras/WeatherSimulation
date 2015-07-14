/**
 * Created by Caro on 24.06.2015.
Edit by Karo
 */

function Summer(yOffset) {

    var ground = new Ground(yOffset);
    var summerGround;
    var summerGroundColor= "#D2D92C";
    var summerSkybox = new Skybox();
    var skyboxImagePrefix = "images/summer/skybox-";
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
    var audioURL = 'music/summer-Waves.mp3';
    var grass = new Grass();

    this.load = function(scene){
        console.log('summer');

        //skybox
        summerSkybox.load(scene, skyboxImagePrefix);

        //winterLight
        summerSpotLight = new THREE.SpotLight(0xF5CB03);
        summerSpotLight.castShadow = true;
        summerSpotLight.position.x = 0; //red axis
        summerSpotLight.position.y = 900; //green axis
        summerSpotLight.position.z = -1400;
        summerSpotLight.intensity = 0.5; //1.2;
        summerSpotLight.lookAt(0, 0, 0);
        scene.add(summerSpotLight);

        //summerGround
        summerGround = ground.doGround(doGroundGeometry(), summerGroundColor);
        scene.add(summerGround);


        //grass
        grass.load(scene, 0xff0000, summerGround); //0x809B05


        //twisted tree loader
        twistedTreeLoader = new THREE.ColladaLoader();
        twistedTreeLoader.options.convertUpAxis = true;
        twistedTreeLoader.load('dae/new_trees/summer1.dae', function(collada){
            twistedTree = collada.scene;

            twistedTree.scale.x = twistedTree.scale.y = twistedTree.scale.z = 1;
            shadow.addShadow(twistedTree);
            setTreePosition(twistedTree, summerGround, getVerticesArray(), 100, 0);
            twistedTree.updateMatrix();
            scene.add(twistedTree);
            console.log('twistedTree loaded');
        });

        //second twisted tree loader
        twistedTree2Loader = new THREE.ColladaLoader();
        twistedTree2Loader.options.convertUpAxis = true;
        twistedTree2Loader.load('dae/new_trees/summer2.dae', function(collada){
            twistedTree2 = collada.scene;
            shadow.addShadow(twistedTree2);

            twistedTree2.scale.x = twistedTree2.scale.y = twistedTree2.scale.z = 1;
            setTreePosition(twistedTree2, summerGround, getVerticesArray(), 200, 0);
            //twistedTree2.position.set(20, 20 + yOffset, 120);
            twistedTree2.updateMatrix();
            scene.add(twistedTree2);
            console.log('twistedTree 2 loaded');
        });
        
       ///third twisted tree loader
        twistedTree3Loader = new THREE.ColladaLoader();
        twistedTree3Loader.options.convertUpAxis = true;
        twistedTree3Loader.load('dae/new_trees/summer1.dae', function(collada){
            twistedTree3 = collada.scene;
            shadow.addShadow(twistedTree3);

            twistedTree3.scale.x = twistedTree3.scale.y = twistedTree3.scale.z = 1;
            setTreePosition(twistedTree3, summerGround, getVerticesArray(), 150, 0);
            twistedTree3.updateMatrix();
            scene.add(twistedTree3);
            console.log('twistedTree 3 loaded');
        });
        
          ///fourth twisted tree loader
        twistedTree4Loader = new THREE.ColladaLoader();
        twistedTree4Loader.options.convertUpAxis = true;
        twistedTree4Loader.load('dae/new_trees/summer2.dae', function(collada){
            twistedTree4 = collada.scene;
            shadow.addShadow(twistedTree4);

            twistedTree4.scale.x = twistedTree4.scale.y = twistedTree4.scale.z = 1;
            setTreePosition(twistedTree4, summerGround, getVerticesArray(), 130, 0);
            twistedTree4.updateMatrix();
            scene.add(twistedTree4);
            console.log('twistedTree 4 loaded');
        });
        
        
         ///fifth twisted tree loader
        twistedTree5Loader = new THREE.ColladaLoader();
        twistedTree5Loader.options.convertUpAxis = true;
        twistedTree5Loader.load('dae/new_trees/summer1.dae', function(collada){
            twistedTree5 = collada.scene;
            shadow.addShadow(twistedTree5);
            twistedTree5.scale.x = twistedTree5.scale.y = twistedTree5.scale.z = 1;
            setTreePosition(twistedTree5, summerGround, getVerticesArray(), 180, -200);
            twistedTree5.updateMatrix();
            scene.add(twistedTree5);
            console.log('twistedTree 5 loaded');

        });

		/*
        //big/long tree loader
        longTreeLoader = new THREE.ColladaLoader();
        longTreeLoader.options.convertUpAxis = true;
        longTreeLoader.load('dae/long_tree.dae', function(collada){
            longTree = collada.scene;
            console.log('longtree loaded');
            shadow.addShadow(longTree);
            longTree.scale.x = longTree.scale.y = longTree.scale.z = 0.02;
            setPosition(longTree, summerGround, getVerticesArray(), 10, -100);
            longTree.updateMatrix();
            scene.add(longTree);
        });*/
        
        

        //audio
        audio.playTrack(audioURL, scene);
    };

    this.getSeasonSpotlight = function(){
        return summerSpotLight;
    };

    this.remove = function(scene){
        scene.remove(summerGround);
        scene.remove(summerSkybox);
        summerSkybox.remove(scene);
        scene.remove(twistedTree);
        scene.remove(twistedTreeLoader);
        scene.remove(twistedTree2);
        scene.remove(twistedTree2Loader);
        scene.remove(longTree);
        scene.remove(longTreeLoader);
        scene.remove(summerSpotLight);
        scene.remove(shadow);
        audio.stopTrack();
        grass.remove(scene);

        console.log('removed summer');
    };
}