/**
 * Created by Caro on 24.06.2015.
 Edit by Karo on 01.07.2015
 */

function Winter() {

    var ground = new Ground();
    var snow = new LetItSnow();
    var winterGround;
    var winterGroundColor = "#F8FFFF";
    var winterSkybox = new Skybox();
    var skyboxImagePrefix = "images/winter/skybox-";
    var winterSpotLight;
    var shadow = new Shadow();
    var audio = new Audio();
    var audioURL = 'music/little-mp3-wind-and-trees-and-snow.mp3';

    this.load = function(scene, pointCloudScene){

        //skybox
        winterSkybox.load(scene, skyboxImagePrefix);

        //winterLight
        winterSpotLight = new THREE.SpotLight(0x0058CC);
        shadow.addShadow(winterSpotLight);
        winterSpotLight.position.x =  0; //red axis
        winterSpotLight.position.y = 900; //green axis
        winterSpotLight.position.z = -1400; //-1500
        winterSpotLight.intensity = 0.5; //1.2;
        winterSpotLight.lookAt(0, 0, 0);
        scene.add(winterSpotLight);

        //fog (just in winter)
        scene.fog = new THREE.FogExp2( 0xffffff, 0.0029 );

        //winterGround
        winterGround = ground.doGround(doGroundGeometry(), winterGroundColor);
        scene.add(winterGround);

        //console.log('winter');
        

        
        //twisted tree loader
        twistedTreeLoader = new THREE.ColladaLoader();
        twistedTreeLoader.options.convertUpAxis = true;
        twistedTreeLoader.load('dae/new_trees/winter_snow1.dae', function(collada){
            twistedTree = collada.scene;

            twistedTree.scale.x = twistedTree.scale.y = twistedTree.scale.z = 1;
            shadow.addShadow(twistedTree);
            setTreePosition(twistedTree, winterGround, getVerticesArray(), 170, -240);
            twistedTree.updateMatrix();
            scene.add(twistedTree);
            //console.log('twistedTree loaded');
        });

        //second twisted tree loader
        twistedTree2Loader = new THREE.ColladaLoader();
        twistedTree2Loader.options.convertUpAxis = true;
        twistedTree2Loader.load('dae/new_trees/winter3.dae', function(collada){
            twistedTree2 = collada.scene;
            shadow.addShadow(twistedTree2);

            twistedTree2.scale.x = twistedTree2.scale.y = twistedTree2.scale.z = 1;
            setTreePosition(twistedTree2, winterGround, getVerticesArray(), 200, -200);
            //twistedTree2.position.set(20, 20 + yOffset, 120);
            twistedTree2.updateMatrix();
            scene.add(twistedTree2);
            //console.log('twistedTree 2 loaded');
        });
        
       ///third twisted tree loader
        twistedTree3Loader = new THREE.ColladaLoader();
        twistedTree3Loader.options.convertUpAxis = true;
        twistedTree3Loader.load('dae/new_trees/winter_snow1.dae', function(collada){
            twistedTree3 = collada.scene;
            shadow.addShadow(twistedTree3);

            twistedTree3.scale.x = twistedTree3.scale.y = twistedTree3.scale.z = 1;
            setTreePosition(twistedTree3, winterGround, getVerticesArray(), 150, -200);
            twistedTree3.updateMatrix();
            scene.add(twistedTree3);
            //console.log('twistedTree 3 loaded');
        });
        
          ///fourth twisted tree loader
        twistedTree4Loader = new THREE.ColladaLoader();
        twistedTree4Loader.options.convertUpAxis = true;
        twistedTree4Loader.load('dae/new_trees/winter_snow2.dae', function(collada){
            twistedTree4 = collada.scene;
            shadow.addShadow(twistedTree4);

            twistedTree4.scale.x = twistedTree4.scale.y = twistedTree4.scale.z = 1;
            setTreePosition(twistedTree4, winterGround, getVerticesArray(), 130, -300);
            twistedTree4.updateMatrix();
            scene.add(twistedTree4);
            //console.log('twistedTree 4 loaded');
        });
        
        
         ///fifth twisted tree loader
        twistedTree5Loader = new THREE.ColladaLoader();
        twistedTree5Loader.options.convertUpAxis = true;
        twistedTree5Loader.load('dae/new_trees/winter_snow1.dae', function(collada){
            twistedTree5 = collada.scene;
            shadow.addShadow(twistedTree5);
            twistedTree5.scale.x = twistedTree5.scale.y = twistedTree5.scale.z = 1;
            setTreePosition(twistedTree5, winterGround, getVerticesArray(), 180, -200);
            twistedTree5.updateMatrix();
            scene.add(twistedTree5);
            //console.log('twistedTree 5 loaded');

        });
        
                    //sixth twisted tree loader
        twistedTree6Loader = new THREE.ColladaLoader();
        twistedTree6Loader.options.convertUpAxis = true;
        twistedTree6Loader.load('dae/new_trees/winter_snow1.dae', function(collada){
            twistedTree6 = collada.scene;

            twistedTree6.scale.x = twistedTree6.scale.y = twistedTree6.scale.z = 1;
            shadow.addShadow(twistedTree6);
            setTreePosition(twistedTree6, winterGround, getVerticesArray(), 80, -240);
            twistedTree6.updateMatrix();
            scene.add(twistedTree6);
            //console.log('twistedTree 6 loaded');
        });

        //seventh twisted tree loader
        twistedTree7Loader = new THREE.ColladaLoader();
        twistedTree7Loader.options.convertUpAxis = true;
        twistedTree7Loader.load('dae/new_trees/winter3.dae', function(collada){
            twistedTree7 = collada.scene;
            shadow.addShadow(twistedTree7);

            twistedTree7.scale.x = twistedTree7.scale.y = twistedTree7.scale.z = 1;
            setTreePosition(twistedTree7, winterGround, getVerticesArray(), 50, -200);
            //twistedTree2.position.set(20, 20 + yOffset, 120);
            twistedTree7.updateMatrix();
            scene.add(twistedTree7);
            //console.log('twistedTree 7 loaded');
        });
        
       ///eigth twisted tree loader
        twistedTree8Loader = new THREE.ColladaLoader();
        twistedTree8Loader.options.convertUpAxis = true;
        twistedTree8Loader.load('dae/new_trees/winter3.dae', function(collada){
            twistedTree8 = collada.scene;
            shadow.addShadow(twistedTree8);

            twistedTree8.scale.x = twistedTree8.scale.y = twistedTree8.scale.z = 1;
            setTreePosition(twistedTree8, winterGround, getVerticesArray(), 20, -200);
            twistedTree8.updateMatrix();
            scene.add(twistedTree8);
            //console.log('twistedTree 8 loaded');
        });
        
          ///nineth twisted tree loader
        twistedTree9Loader = new THREE.ColladaLoader();
        twistedTree9Loader.options.convertUpAxis = true;
        twistedTree9Loader.load('dae/new_trees/winter_snow2.dae', function(collada){
            twistedTree9 = collada.scene;
            shadow.addShadow(twistedTree9);

            twistedTree9.scale.x = twistedTree9.scale.y = twistedTree9.scale.z = 1;
            setTreePosition(twistedTree9, winterGround, getVerticesArray(), 80, -150);
            twistedTree9.updateMatrix();
            scene.add(twistedTree9);
            //console.log('twistedTree 9 loaded');
        });
        
        
         ///tenth twisted tree loader
        twistedTree10Loader = new THREE.ColladaLoader();
        twistedTree10Loader.options.convertUpAxis = true;
        twistedTree10Loader.load('dae/new_trees/winter_snow1.dae', function(collada){
            twistedTree10 = collada.scene;
            shadow.addShadow(twistedTree10);
            twistedTree10.scale.x = twistedTree10.scale.y = twistedTree10.scale.z = 1;
            setTreePosition(twistedTree10, winterGround, getVerticesArray(), 120, -300);
            twistedTree10.updateMatrix();
            scene.add(twistedTree10);
            //console.log('twistedTree 10 loaded');

        });
        // snow
        snow.load(pointCloudScene);

        //audio
        audio.playTrack(audioURL, scene);
    };

    this.getSeasonSpotlight = function(){
        return winterSpotLight;
    };

    this.remove = function(scene, pointCloudScene){
        scene.remove(ground);
        scene.remove(winterGround);
        scene.remove(winterSpotLight);
        scene.remove(winterSkybox);
        scene.remove(twistedTree);
        scene.remove(twistedTree2);
        scene.remove(twistedTree3);
        scene.remove(twistedTree4);
        scene.remove(twistedTree5);
        scene.remove(twistedTree6);
        scene.remove(twistedTree7);
        scene.remove(twistedTree8);
        scene.remove(twistedTree9);
        scene.remove(twistedTree10);
        
        winterSkybox.remove(scene);
        snow.remove(pointCloudScene);
        scene.fog = null;
        scene.remove(shadow);
        audio.stopTrack();
        //console.log('removed winter');
    };
}