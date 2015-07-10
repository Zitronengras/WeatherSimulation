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
    var audioURL = 'music/09 What You Wanted.mp3';
    var grass = new Grass();

    this.load = function(scene, pointCloudScene){
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
        summerGround = ground.doGround(ground.doGroundGeometry(), summerGroundColor);
        scene.add(summerGround);

        //grass
        grass.load(scene, 0x809B05);

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

    this.getSeasonSpotlight = function(){
        return summerSpotLight;
    };

    this.remove = function(scene, pointCloudScene){
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

    function getRandomArbitrary(min, max) {
        return Math.random() * (max - min) + min;
    }
}