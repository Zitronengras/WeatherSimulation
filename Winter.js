/**
 * Created by Caro on 24.06.2015.
 Edit by Karo on 01.07.2015
 */

function Winter() {

    var ground = new Ground();
    var winterGround;
    var winterGroundColor = "#F8FFFF";
    var winterSkybox = new Skybox();
    var skyboxImagePrefix = "images/winter/skybox-";
    var winterSpotLight;

    this.load = function(scene){

        //skybox
        winterSkybox.load(scene, skyboxImagePrefix);

        //winterLight
        winterSpotLight = new THREE.SpotLight(0x0058CC);
        winterSpotLight.castShadow = true;
        winterSpotLight.position.x = 900; //red axis
        winterSpotLight.position.y = 900; //green axis
        winterSpotLight.position.z = -1500;
        winterSpotLight.intensity = 0.5; //1.2;
        winterSpotLight.lookAt(0, 0, 0);
        scene.add(winterSpotLight);

        //fog (just in winter)
        // scene.fog = new THREE.FogExp2( 0xffffff, 0.0020 );

        //winterGround
        winterGround = ground.doGround(ground.doGroundGeometry(), winterGroundColor);
        scene.add(winterGround);

        console.log('winter');
        
        //twisted snow tree 1
        twistedTreeLoader = new THREE.ColladaLoader();
        twistedTreeLoader.options.convertUpAxis = true;
        twistedTreeLoader.load('dae/winter/trees/twisted-snow1.dae', function(collada){
            twistedTree = collada.scene;
            console.log('twistedTree loaded');
            twistedTree.castShadow = true;
            twistedTree.scale.x = twistedTree.scale.y = twistedTree.scale.z = 0.05;

            // shadow
            twistedTree.traverse(function (child){
                child.traverse(function(e){
                    e.castShadow = true;
                })
            });
            twistedTree.position.set(10, 20, 80);
            twistedTree.updateMatrix();
            scene.add(twistedTree);
        });
        
    };

    this.remove = function(scene){
        scene.remove(ground);
        scene.remove(winterGround);
        scene.remove(winterSpotLight);
        scene.remove(winterSkybox);
        scene.remove(twistedTree);
        winterSkybox.remove(scene);
        scene.fog = null;
        
        console.log('removed winter');
    };
}