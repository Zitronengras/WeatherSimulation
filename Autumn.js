/**
 * Created by Caro on 24.06.2015.
 */

function Autumn(yOffset) {
    var ground = new Ground(yOffset);
    var autumnGround;
    //var autumnGroundColor = "#6C6632";
    var autumnGroundColor = "#FDD25C";
    var twistedTrees = new TwistedTrees();
    var shadow = new Shadow();
    var leave1 = new Leave1();
    var leave2 = new Leave2();
    var autumnSkybox = new Skybox();
    var skyboxImagePrefix = "images/autumn/skybox-";
    var shadow = new Shadow();
    var audio = new Audio();
    var audioURL = 'music/little-mp3-wind-and-trees-and-snow.mp3';
    var cloud = new Cloud();

    this.load = function(scene){
        console.log('Autumn');
        
        //skybox
        autumnSkybox.load(scene, skyboxImagePrefix);
        
         //autumnLight
        autumnSpotLight = new THREE.SpotLight(0xe3c8aa);
        shadow.addShadow(autumnSpotLight);
        autumnSpotLight.position.x = 0; //red axis
        autumnSpotLight.position.y = 900; //green axis
        autumnSpotLight.position.z = -1400; //-1500
        autumnSpotLight.intensity = 0.7;
        autumnSpotLight.lookAt(0, 0, 0);
        scene.add(autumnSpotLight);
        
        //autumnGround
        autumnGround = ground.doGround(ground.doGroundGeometry(), autumnGroundColor);
        scene.add(autumnGround);

        //clouds
        cloud.load(scene, 5);

        //scene.add(autumnGround);
        
          //Twisted r-o clones
        /*  
       twistedTreeLoader = new THREE.ColladaLoader();
        twistedTreeLoader.options.convertUpAxis = true;
        
        twistedTreeArray = [];
         twistedTreeLoader.load('dae/autumn/trees/twisted_autumn1.dae', function(collada){
            twistedTree = collada.scene;
            //store mesh
            var colladaObj = collada.scene.children[0];
            for (i = 0; i < 50; i++) {
                newTwistedTree = new THREE.Object3D();
                for (var j = 0; j < colladaObj.children.length; j++) {
                    newTwistedTree.add(new THREE.Mesh(colladaObj.children[j].geometry, colladaObj.children[j].material));
                    
                }
                console.log('twistedTree Clones loaded');
                newTwistedTree.scale.x = newTwistedTree.scale.y = newTwistedTree.scale.z = 100;
                newTwistedTree.position.set(50, -50, 50);

               //newTwistedTree.rotation.z = -110 * Math.PI / 180;

                //newTwistedTree.position.y += getRandomArbitrary(0, 70);
                //newTwistedTree.position.x += getRandomArbitrary(-120, 120);
                //newTwistedTree.position.z += getRandomArbitrary(250, 350);
                
                
                shadow.addShadow(newTwistedTree);
                newTwistedTree.updateMatrix();
                twistedTreeArray.push(newTwistedTree);
                scene.add(newTwistedTree);
            }
           
            
        });*/
        
        twistedTrees.load(scene);
                


        //Twisted red-orange
        /*
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

        });*/
        
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
        
        // load leaves particle systems
        
           leave1.load(scene);
			leave2.load(scene);
			
        //audio
        audio.playTrack(audioURL, scene);
    };

    this.getSeasonSpotlight = function(){
        return autumnSpotLight;
    };


    this.remove = function(scene){
        scene.remove(autumnGround);
        scene.remove(autumnSpotLight);
        

       leave1.remove(scene);
       leave2.remove(scene);
       twistedTrees.remove(scene);


        //scene.remove(twistedTree);

        scene.remove(twistedTree2);
        scene.remove(twistedTree3);
        scene.remove(twistedTree4);

        scene.remove(autumnSkybox);
        autumnSkybox.remove(scene);
        scene.remove(shadow);
        cloud.remove(scene);
        audio.stopTrack();

        console.log('removed autumn');
    };
    
    function getRandomArbitrary(min, max) {
        return Math.random() * (max - min) + min;
    }
}
