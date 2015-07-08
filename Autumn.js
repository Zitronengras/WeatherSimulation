/**
 * Created by Caro on 24.06.2015.
 */

function Autumn(yOffset) {
    var ground = new Ground(yOffset);
    var autumnGround;
    //var autumnGroundColor = "#6C6632";
    var autumnGroundColor = "#FDD25C";
    var autumnSkybox = new Skybox();
    var skyboxImagePrefix = "images/autumn/skybox-";
    var shadow = new Shadow();
    var audio = new Audio();
    var audioURL = 'music/little-mp3-wind-and-trees-and-snow.mp3';

    this.load = function(scene){
        console.log('Autumn');
        
        //skybox
        autumnSkybox.load(scene, skyboxImagePrefix);
        
         //autumnLight
        autumnSpotLight = new THREE.SpotLight(0xe3c8aa);
        shadow.addShadow(autumnSpotLight);
        autumnSpotLight.position.x = 900; //red axis
        autumnSpotLight.position.y = 900; //green axis
        autumnSpotLight.position.z = -1500 + yOffset;
        autumnSpotLight.intensity = 0.7;
        autumnSpotLight.lookAt(0, 0, 0);
        scene.add(autumnSpotLight);
        
        //autumnGround
        autumnGround = ground.doGround(ground.doGroundGeometry(), autumnGroundColor);
        scene.add(autumnGround);
        
        
        //Twisted red-orange
        twistedTreeLoader = new THREE.ColladaLoader();
        twistedTreeLoader.options.convertUpAxis = true;
        twistedTreeLoader.load('dae/autumn/trees/twisted_autumn1.dae', function(collada){
            twistedTree = collada.scene;
            console.log('twistedTree loaded');
            twistedTree.castShadow = true;
            twistedTree.scale.x = twistedTree.scale.y = twistedTree.scale.z = 1;
            shadow.addShadow(twistedTree);
            twistedTree.position.set(10, 100+yOffset, 80);
            twistedTree.updateMatrix();
            scene.add(twistedTree);
        });
        
         //Twisted orange-red
        twistedTreeLoader2 = new THREE.ColladaLoader();
        twistedTreeLoader2.options.convertUpAxis = true;
        twistedTreeLoader2.load('dae/autumn/trees/twisted_autumn2.dae', function(collada){
            twistedTree2 = collada.scene;
            console.log('twistedTree loaded');
            twistedTree2.castShadow = true;
            twistedTree2.scale.x = twistedTree2.scale.y = twistedTree2.scale.z = 1;
            shadow.addShadow(twistedTree2);
            twistedTree2.position.set(30, 100+yOffset, 80);
            twistedTree2.updateMatrix();
            scene.add(twistedTree2);
        });

 	//Twisted Orange
        twistedTreeLoader3 = new THREE.ColladaLoader();
        twistedTreeLoader3.options.convertUpAxis = true;
        twistedTreeLoader3.load('dae/autumn/trees/twisted_autumn3.dae', function(collada){
            twistedTree3 = collada.scene;
            console.log('twistedTree loaded');
            shadow.addShadow(twistedTree3);
            twistedTree3.scale.x = twistedTree3.scale.y = twistedTree3.scale.z = 1;

			twistedTree3.position.set(40, 100+yOffset, 70);
            twistedTree3.updateMatrix();
            scene.add(twistedTree3);
          	shadow.addShadow(twistedTree3);
        });
        
         //Twisted Red 
        twistedTreeLoader4 = new THREE.ColladaLoader();
        twistedTreeLoader4.options.convertUpAxis = true;
        twistedTreeLoader4.load('dae/autumn/trees/twisted_autumn4.dae', function(collada){
            twistedTree4 = collada.scene;
            console.log('twistedTree loaded');
            shadow.addShadow(twistedTree4);
            twistedTree4.scale.x = twistedTree4.scale.y = twistedTree4.scale.z = 1;

			twistedTree4.position.set(50, 100+yOffset, 70);
            twistedTree4.updateMatrix();
            scene.add(twistedTree4);
          	shadow.addShadow(twistedTree4);
        });

        //audio
        audio.playTrack(audioURL, scene);
    };

    this.remove = function(scene){
        scene.remove(autumnGround);
        scene.remove(autumnSpotLight);
        scene.remove(twistedTree);
        scene.remove(twistedTree2);
         scene.remove(twistedTree3);
          scene.remove(twistedTree4);
        scene.remove(autumnSkybox);
        autumnSkybox.remove(scene);
        scene.remove(shadow);
        audio.stopTrack();

        console.log('removed autumn');
    };
}
