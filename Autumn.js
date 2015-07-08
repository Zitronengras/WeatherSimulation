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
        
        
     	//Twisted Tree 1 (red/orange)
        twistedTreeLoader1 = new THREE.ColladaLoader();
        twistedTreeLoader1.options.convertUpAxis = true;
        twistedTreeLoader1.load('dae/autumn/trees/twisted-autumn1.dae', function(collada){
            twistedTree1 = collada.scene;
            console.log('twistedTree loaded');
            shadow.addShadow(twistedTree1);
            twistedTree1.scale.x = twistedTree1.scale.y = twistedTree1.scale.z = 1;
			
			twistedTree1.position.set(10, 100+yOffset, 80);
            twistedTree1.updateMatrix();
            scene.add(twistedTree1);
          	shadow.addShadow(twistedTree1);
        });

        //audio
        audio.playTrack(audioURL, scene);
    };

    this.getSeasonSpotlight = function(){
        return autumnSpotLight;
    };


    this.remove = function(scene){
        scene.remove(autumnGround);
        scene.remove(autumnSpotLight);
        scene.remove(twistedTree1);
        scene.remove(autumnSkybox);
        autumnSkybox.remove(scene);
        scene.remove(shadow);
        audio.stopTrack();

        console.log('removed autumn');
    };
}
