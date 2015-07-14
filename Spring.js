/**
 * Created by Caro on 24.06.2015.
 */

function Spring(yOffset) {

    var ground = new Ground(yOffset);
    var springGround;
    var springGroundColor = "#91D94A";
    var springSkybox = new Skybox();
    var skyboxImagePrefix = "images/spring/skybox-";
    var shadow = new Shadow();
    var audio = new Audio();
    var blossom = new Blossom();
    var audioURL = 'music/spring-birds.mp3';
    var cloud = new Cloud();
    var grass = new Grass();

    this.load = function(scene, pointCloudScene){
        console.log('spring');

        //skybox
        springSkybox.load(scene, skyboxImagePrefix);

        //springLight
        springSpotLight = new THREE.SpotLight(0xbdd7cb);
        shadow.addShadow(springSpotLight);
        springSpotLight.position.x = 0; //red axis
        springSpotLight.position.y = 900; //green axis
        springSpotLight.position.z = -1400; //-1500
        springSpotLight.intensity = 0.6;
        springSpotLight.lookAt(0, 0, 0);
        scene.add(springSpotLight);

        // flower load test
        BflowerLoader = new THREE.ColladaLoader();
        BflowerLoader.options.convertUpAxis = true;
        BflowerLoader.load('dae/flowers/flowerBlue.dae', function(collada){
            bFlower = collada.scene;

            bFlower.scale.x = bFlower.scale.y = bFlower.scale.z = 10;
            shadow.addShadow(bFlower);
            setTreePosition(bFlower, springGround, getVerticesArray(), 0, 0);
            bFlower.updateMatrix();
            scene.add(bFlower);
            console.log('bFlower loaded');
        });
        
        // first twisted tree loader
        twistedTreeLoader = new THREE.ColladaLoader();
        twistedTreeLoader.options.convertUpAxis = true;
        twistedTreeLoader.load('dae/new_trees/spring_fullblossom3.dae', function(collada){
            twistedTree = collada.scene;

            twistedTree.scale.x = twistedTree.scale.y = twistedTree.scale.z = 1;
            shadow.addShadow(twistedTree);
            setTreePosition(twistedTree, springGround, getVerticesArray(), 170, -240);
            twistedTree.updateMatrix();
            scene.add(twistedTree);
            console.log('twistedTree loaded');
        });

        //second twisted tree loader
        twistedTree2Loader = new THREE.ColladaLoader();
        twistedTree2Loader.options.convertUpAxis = true;
        twistedTree2Loader.load('dae/new_trees/spring_blossom1.dae', function(collada){
            twistedTree2 = collada.scene;
            shadow.addShadow(twistedTree2);

            twistedTree2.scale.x = twistedTree2.scale.y = twistedTree2.scale.z = 1;
            setTreePosition(twistedTree2, springGround, getVerticesArray(), 200, -200);
            //twistedTree2.position.set(20, 20 + yOffset, 120);
            twistedTree2.updateMatrix();
            scene.add(twistedTree2);
            console.log('twistedTree 2 loaded');
        });
        
       ///third twisted tree loader
        twistedTree3Loader = new THREE.ColladaLoader();
        twistedTree3Loader.options.convertUpAxis = true;
        twistedTree3Loader.load('dae/new_trees/spring_green4.dae', function(collada){
            twistedTree3 = collada.scene;
            shadow.addShadow(twistedTree3);

            twistedTree3.scale.x = twistedTree3.scale.y = twistedTree3.scale.z = 1;
            setTreePosition(twistedTree3, springGround, getVerticesArray(), 150, -200);
            twistedTree3.updateMatrix();
            scene.add(twistedTree3);
            console.log('twistedTree 3 loaded');
        });
        
          ///fourth twisted tree loader
        twistedTree4Loader = new THREE.ColladaLoader();
        twistedTree4Loader.options.convertUpAxis = true;
        twistedTree4Loader.load('dae/new_trees/spring_fullblossom3.dae', function(collada){
            twistedTree4 = collada.scene;
            shadow.addShadow(twistedTree4);

            twistedTree4.scale.x = twistedTree4.scale.y = twistedTree4.scale.z = 1;
            setTreePosition(twistedTree4, springGround, getVerticesArray(), 230, -300);
            twistedTree4.updateMatrix();
            scene.add(twistedTree4);
            console.log('twistedTree 4 loaded');
        });
        
        
         ///fifth twisted tree loader
        twistedTree5Loader = new THREE.ColladaLoader();
        twistedTree5Loader.options.convertUpAxis = true;
        twistedTree5Loader.load('dae/new_trees/spring_blossom2.dae', function(collada) {
            twistedTree5 = collada.scene;
            shadow.addShadow(twistedTree5);
            twistedTree5.scale.x = twistedTree5.scale.y = twistedTree5.scale.z = 1;
            setTreePosition(twistedTree5, springGround, getVerticesArray(), 180, -300);
            twistedTree5.updateMatrix();
            scene.add(twistedTree5);
            console.log('twistedTree 5 loaded');
        });

        //springGround
        springGround = ground.doGround(doGroundGeometry(), springGroundColor);
        scene.add(springGround);

        //blossom
        blossom.load(pointCloudScene);

        //grass
        grass.load(scene, 0x267302, springGround);

        //clouds
        cloud.load(scene, 5);

        //audio
        audio.playTrack(audioURL, scene);
    };

    this.getSeasonSpotlight = function(){
        return springSpotLight;
    };

    this.remove = function(scene, pointCloudScene){
        scene.remove(ground);
        scene.remove(springSpotLight);
        scene.remove(springGround);
        scene.remove(springGroundColor);
        scene.remove(springSkybox);
        springSkybox.remove(scene);
        blossom.remove(pointCloudScene);
        scene.remove(shadow);
        cloud.remove(scene);
        grass.remove(scene);
        scene.remove(twistedTree);
        scene.remove(twistedTree2);
        scene.remove(twistedTree3);
        scene.remove(twistedTree4);
        scene.remove(twistedTree5);

        audio.stopTrack();


        console.log('removed spring');
    };
}