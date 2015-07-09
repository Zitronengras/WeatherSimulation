/**
 * Created by Caro on 24.06.2015.
 Edit by Karo on 01.07.2015
 */

function Winter(yOffset) {

    var ground = new Ground(yOffset);
    var snow = new LetItSnow();
    var winterGround;
    var winterGroundColor = "#F8FFFF";
    var winterSkybox = new Skybox();
    var skyboxImagePrefix = "images/winter/skybox-";
    var winterSpotLight;
    var shadow = new Shadow();
    var audio = new Audio();
    var audioURL = 'music/little-mp3-wind-and-trees-and-snow.mp3';

    this.load = function(scene){

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
        winterGround = ground.doGround(ground.doGroundGeometry(), winterGroundColor);
        scene.add(winterGround);

        console.log('winter');
        /*
        
        //twisted snow tree 1
        twistedTreeLoader = new THREE.ColladaLoader();
        twistedTreeLoader.options.convertUpAxis = true;
        twistedTreeLoader.load('dae/winter/trees/twisted-snow1.dae', function(collada){
            twistedTree = collada.scene;
            console.log('twistedTree loaded');
            shadow.addShadow(twistedTree);
            twistedTree.scale.x = twistedTree.scale.y = twistedTree.scale.z = 1;

            // shadow
            twistedTree.traverse(function (child){
                child.traverse(function(e){
                    e.castShadow = true;
                })
            });
            twistedTree.position.set(10, 100+yOffset, 80);
            twistedTree.updateMatrix();
            scene.add(twistedTree);
        });*/
        
        //Twisted Tree 1 with Snow 
        twistedTreeLoader1 = new THREE.ColladaLoader();
        twistedTreeLoader1.options.convertUpAxis = true;
        twistedTreeLoader1.load('dae/winter/trees/twisted-snow-small1.dae', function(collada){
            twistedTree1 = collada.scene;
            console.log('twistedTree loaded');
            shadow.addShadow(twistedTree1);
            twistedTree1.scale.x = twistedTree1.scale.y = twistedTree1.scale.z = 1;
			
			twistedTree1.position.set(10, 100+yOffset, 80);
            twistedTree1.updateMatrix();
            scene.add(twistedTree1);
          	shadow.addShadow(twistedTree1);
        });
        
         //Twisted Tree 2 with Snow 
        twistedTreeLoader2 = new THREE.ColladaLoader();
        twistedTreeLoader2.options.convertUpAxis = true;
        twistedTreeLoader2.load('dae/winter/trees/twisted-snow-small2.dae', function(collada){
            twistedTree2 = collada.scene;
            console.log('twistedTree loaded');
            shadow.addShadow(twistedTree2);
            twistedTree2.scale.x = twistedTree2.scale.y = twistedTree2.scale.z = 1;

			twistedTree2.position.set(20, 100+yOffset, 70);
            twistedTree2.updateMatrix();
            scene.add(twistedTree2);
          	shadow.addShadow(twistedTree2);
        });
        
        //Twisted Tree 3 without Snow 
        twistedTreeLoader3 = new THREE.ColladaLoader();
        twistedTreeLoader3.options.convertUpAxis = true;
        twistedTreeLoader3.load('dae/winter/trees/twisted-snow-small3.dae', function(collada){
            twistedTree3 = collada.scene;
            console.log('twistedTree loaded');
            shadow.addShadow(twistedTree3);
            twistedTree3.scale.x = twistedTree3.scale.y = twistedTree3.scale.z = 1;

			twistedTree3.position.set(30, 100+yOffset, 70);
            twistedTree3.updateMatrix();
            scene.add(twistedTree3);
          	shadow.addShadow(twistedTree3);
        });
        
        // snow
        
        snow.load(scene);

        //audio
        audio.playTrack(audioURL, scene);
    };

    this.getSeasonSpotlight = function(){
        return winterSpotLight;
    };

    this.remove = function(scene){
        scene.remove(ground);
        scene.remove(winterGround);
        scene.remove(winterSpotLight);
        scene.remove(winterSkybox);
        scene.remove(twistedTree1);
        scene.remove(twistedTree2);
        scene.remove(twistedTree3);
        winterSkybox.remove(scene);
        snow.remove(scene);
        scene.fog = null;
        scene.remove(shadow);
        audio.stopTrack();
        console.log('removed winter');
    };
}