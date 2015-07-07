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
        
        //autumnGround
        autumnGround = ground.doGround(ground.doGroundGeometry(), autumnGroundColor);
        scene.add(autumnGround);
        
        
        //twisted tree loader
        twistedTreeLoader = new THREE.ColladaLoader();
        twistedTreeLoader.options.convertUpAxis = true;
        twistedTreeLoader.load('dae/autumn/trees/twisted_red.dae', function(collada){
            twistedTree = collada.scene;
            console.log('twistedTree loaded');
            twistedTree.castShadow = true;
            twistedTree.scale.x = twistedTree.scale.y = twistedTree.scale.z = 0.05;
            shadow.addShadow(twistedTree);
            twistedTree.position.set(10, 10+yOffset, 80);
            twistedTree.updateMatrix();
            scene.add(twistedTree);
        });

        //audio
        audio.playTrack(audioURL, scene);
    };

    this.remove = function(scene){
        scene.remove(autumnGround);
        scene.remove(twistedTree);
        scene.remove(autumnSkybox);
        autumnSkybox.remove(scene);
        scene.remove(shadow);
        audio.stopTrack();

        console.log('removed autumn');
    };
}
