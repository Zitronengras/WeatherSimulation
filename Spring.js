/**
 * Created by Caro on 24.06.2015.
 */

function Spring() {

    var ground = new Ground();
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
        //console.log('spring');

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

        var flowerRangeXmin = 100;
        var flowerRangeXmax = -25;
        var flowerRangeZmin = -120;


        //first loaded flower
        bFlowerLoader = new THREE.ColladaLoader();
        bFlowerLoader.options.convertUpAxis = true;
        bFlowerLoader.load('dae/flowers/flowerRed.dae', function(collada) {
            var flowerMaterial = new THREE.MeshLambertMaterial({color: 0xA5021E}); //rose
            bFlower = collada.scene;
            bFlower.scale.x = bFlower.scale.y = bFlower.scale.z = 0.004;
            var x = getRandomArbitrary(flowerRangeXmin, flowerRangeXmax);
            var z = getRandomArbitrary(flowerRangeZmin, -200);
            bFlower.traverse( function ( child ) {
                if ( child instanceof THREE.Mesh ) {
                    child.material = flowerMaterial;
                }
            } );
            shadow.addShadow(bFlower);
            setFlowerPosition(bFlower, springGround, getVerticesArray(), x, z);
            bFlower.updateMatrix();
            scene.add(bFlower);
            console.log('flower added');
        });

        //second loaded flower
        secondbFlowerLoader = new THREE.ColladaLoader();
        secondbFlowerLoader.options.convertUpAxis = true;
        secondbFlowerLoader.load('dae/flowers/flowerRed.dae', function(collada) {
            var flowerMaterial = new THREE.MeshLambertMaterial({color: 0xA5021E}); //red
            secondbFlower = collada.scene;
            secondbFlower.scale.x = secondbFlower.scale.y = secondbFlower.scale.z = 0.004;
            var x = getRandomArbitrary(flowerRangeXmin, flowerRangeXmax);
            var z = getRandomArbitrary(flowerRangeZmin, -200);
            secondbFlower.traverse( function ( child ) {
                if ( child instanceof THREE.Mesh ) {
                    child.material = flowerMaterial;
                }
            } );
            shadow.addShadow(secondbFlower);
            setFlowerPosition(secondbFlower, springGround, getVerticesArray(), x, z);
            secondbFlower.updateMatrix();
            scene.add(secondbFlower);
            console.log('second added');
        });
        //third loaded flower
        thirdbFlowerLoader = new THREE.ColladaLoader();
        thirdbFlowerLoader.options.convertUpAxis = true;
        thirdbFlowerLoader.load('dae/flowers/flowerRed.dae', function(collada) {
            var flowerMaterial = new THREE.MeshLambertMaterial({color: 0xF54997}); //yellow
            thirdbFlower = collada.scene;
            thirdbFlower.scale.x = thirdbFlower.scale.y = thirdbFlower.scale.z = 0.004;
            var x = getRandomArbitrary(flowerRangeXmin, flowerRangeXmax);
            var z = getRandomArbitrary(flowerRangeZmin, -200);
            thirdbFlower.traverse( function ( child ) {
                if ( child instanceof THREE.Mesh ) {
                    child.material = flowerMaterial;
                }
            } );
            shadow.addShadow(thirdbFlower);
            setFlowerPosition(thirdbFlower, springGround, getVerticesArray(), x, z);
            thirdbFlower.updateMatrix();
            scene.add(thirdbFlower);
        });

        //fourth loaded flower
        fourthbFlowerLoader = new THREE.ColladaLoader();
        fourthbFlowerLoader.options.convertUpAxis = true;
        fourthbFlowerLoader.load('dae/flowers/flowerRed.dae', function(collada) {
            var flowerMaterial = new THREE.MeshLambertMaterial({color: 0xF54997}); //yellow
            fourthbFlower = collada.scene;
            fourthbFlower.scale.x = fourthbFlower.scale.y = fourthbFlower.scale.z = 0.004;
            var x = getRandomArbitrary(flowerRangeXmin, flowerRangeXmax);
            var z = getRandomArbitrary(flowerRangeZmin, -200);
            fourthbFlower.traverse( function ( child ) {
                if ( child instanceof THREE.Mesh ) {
                    child.material = flowerMaterial;
                }
            } );
            shadow.addShadow(fourthbFlower);
            setFlowerPosition(fourthbFlower, springGround, getVerticesArray(), x, z);
            fourthbFlower.updateMatrix();
            scene.add(fourthbFlower);
        });
        //fifth loaded flower
        fifthbFlowerLoader = new THREE.ColladaLoader();
        fifthbFlowerLoader.options.convertUpAxis = true;
        fifthbFlowerLoader.load('dae/flowers/flowerRed.dae', function(collada) {
            var flowerMaterial = new THREE.MeshLambertMaterial({color: 0xEBD609}); //yellow
            fifthbFlower = collada.scene;
            fifthbFlower.scale.x = fifthbFlower.scale.y = fifthbFlower.scale.z = 0.004;
            var x = getRandomArbitrary(flowerRangeXmin, flowerRangeXmax);
            var z = getRandomArbitrary(flowerRangeZmin, -200);
            fifthbFlower.traverse( function ( child ) {
                if ( child instanceof THREE.Mesh ) {
                    child.material = flowerMaterial;
                }
            } );
            shadow.addShadow(fifthbFlower);
            setFlowerPosition(fifthbFlower, springGround, getVerticesArray(), x, z);
            fifthbFlower.updateMatrix();
            scene.add(fifthbFlower);
        });

        //sixth loaded flower
        sixthbFlowerLoader = new THREE.ColladaLoader();
        sixthbFlowerLoader.options.convertUpAxis = true;
        sixthbFlowerLoader.load('dae/flowers/flowerRed.dae', function(collada) {
            var flowerMaterial = new THREE.MeshLambertMaterial({color: 0xEBD609}); //yellow
            sixthbFlower = collada.scene;
            sixthbFlower.scale.x = sixthbFlower.scale.y = sixthbFlower.scale.z = 0.004;
            var x = getRandomArbitrary(flowerRangeXmin, flowerRangeXmax);
            var z = getRandomArbitrary(flowerRangeZmin, -200);
            sixthbFlower.traverse( function ( child ) {
                if ( child instanceof THREE.Mesh ) {
                    child.material = flowerMaterial;
                }
            } );
            shadow.addShadow(sixthbFlower);
            setFlowerPosition(sixthbFlower, springGround, getVerticesArray(), x, z);
            sixthbFlower.updateMatrix();
            scene.add(sixthbFlower);
        });
        //seventh loaded flower
        seventhFlowerLoader = new THREE.ColladaLoader();
        seventhFlowerLoader.options.convertUpAxis = true;
        seventhFlowerLoader.load('dae/flowers/flowerRed.dae', function(collada) {
            var flowerMaterial = new THREE.MeshLambertMaterial({color: 0xF2630C}); //orange
            seventhbFlower = collada.scene;
            seventhbFlower.scale.x = seventhbFlower.scale.y = seventhbFlower.scale.z = 0.004;
            var x = getRandomArbitrary(flowerRangeXmin, flowerRangeXmax);
            var z = getRandomArbitrary(flowerRangeZmin, -200);
            seventhbFlower.traverse( function ( child ) {
                if ( child instanceof THREE.Mesh ) {
                    child.material = flowerMaterial;
                }
            } );
            shadow.addShadow(seventhbFlower);
            setFlowerPosition(seventhbFlower, springGround, getVerticesArray(), x, z);
            seventhbFlower.updateMatrix();
            scene.add(seventhbFlower);
        });

        //eigth loaded flower
        eigthFlowerLoader = new THREE.ColladaLoader();
        eigthFlowerLoader.options.convertUpAxis = true;
        eigthFlowerLoader.load('dae/flowers/flowerRed.dae', function(collada) {
            var flowerMaterial = new THREE.MeshLambertMaterial({color: 0xF2630C}); //orange
            eigthbFlower = collada.scene;
            eigthbFlower.scale.x = eigthbFlower.scale.y = eigthbFlower.scale.z = 0.004;
            var x = getRandomArbitrary(flowerRangeXmin, flowerRangeXmax);
            var z = getRandomArbitrary(flowerRangeZmin, -200);
            eigthbFlower.traverse( function ( child ) {
                if ( child instanceof THREE.Mesh ) {
                    child.material = flowerMaterial;
                }
            } );
            shadow.addShadow(eigthbFlower);
            setFlowerPosition(eigthbFlower, springGround, getVerticesArray(), x, z);
            eigthbFlower.updateMatrix();
            scene.add(eigthbFlower);
        });

        //ninth loaded flower
        ninthFlowerLoader = new THREE.ColladaLoader();
        ninthFlowerLoader.options.convertUpAxis = true;
        ninthFlowerLoader.load('dae/flowers/flowerRed.dae', function(collada) {
            var flowerMaterial = new THREE.MeshLambertMaterial({color: 0xA5021E}); //red
            ninthbFlower = collada.scene;
            ninthbFlower.scale.x = ninthbFlower.scale.y = ninthbFlower.scale.z = 0.004;
            var x = getRandomArbitrary(flowerRangeXmin, flowerRangeXmax);
            var z = getRandomArbitrary(flowerRangeZmin, -200);
            ninthbFlower.traverse( function ( child ) {
                if ( child instanceof THREE.Mesh ) {
                    child.material = flowerMaterial;
                }
            } );
            shadow.addShadow(ninthbFlower);
            setFlowerPosition(ninthbFlower, springGround, getVerticesArray(), x, z);
            ninthbFlower.updateMatrix();
            scene.add(ninthbFlower);
        });
        //tenth loaded flower
        tenthFlowerLoader = new THREE.ColladaLoader();
        tenthFlowerLoader.options.convertUpAxis = true;
        tenthFlowerLoader.load('dae/flowers/flowerRed.dae', function(collada) {
            var flowerMaterial = new THREE.MeshLambertMaterial({color: 0xA5021E}); //red
            tenthbFlower = collada.scene;
            tenthbFlower.scale.x = tenthbFlower.scale.y = tenthbFlower.scale.z = 0.004;
            var x = getRandomArbitrary(flowerRangeXmin, flowerRangeXmax);
            var z = getRandomArbitrary(flowerRangeZmin, -200);
            tenthbFlower.traverse( function ( child ) {
                if ( child instanceof THREE.Mesh ) {
                    child.material = flowerMaterial;
                }
            } );
            shadow.addShadow(tenthbFlower);
            setFlowerPosition(tenthbFlower, springGround, getVerticesArray(), x, z);
            tenthbFlower.updateMatrix();
            scene.add(tenthbFlower);
        });

        //eleventh loaded flower
        eleventhFlowerLoader = new THREE.ColladaLoader();
        eleventhFlowerLoader.options.convertUpAxis = true;
        eleventhFlowerLoader.load('dae/flowers/flowerRed.dae', function(collada) {
            var flowerMaterial = new THREE.MeshLambertMaterial({color: 0xA5021E}); //red
            eleventhbFlower = collada.scene;
            eleventhbFlower.scale.x = eleventhbFlower.scale.y = eleventhbFlower.scale.z = 0.004;
            var x = getRandomArbitrary(flowerRangeXmin, flowerRangeXmax);
            var z = getRandomArbitrary(flowerRangeZmin, -200);
            eleventhbFlower.traverse( function ( child ) {
                if ( child instanceof THREE.Mesh ) {
                    child.material = flowerMaterial;
                }
            } );
            shadow.addShadow(eleventhbFlower);
            setFlowerPosition(eleventhbFlower, springGround, getVerticesArray(), x, z);
            eleventhbFlower.updateMatrix();
            scene.add(eleventhbFlower);
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
            //console.log('twistedTree loaded');
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

           // console.log('twistedTree 2 loaded');

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

            //console.log('twistedTree 3 loaded');

        });
        
          ///fourth twisted tree loader
        twistedTree4Loader = new THREE.ColladaLoader();
        twistedTree4Loader.options.convertUpAxis = true;
        twistedTree4Loader.load('dae/new_trees/spring_fullblossom3.dae', function(collada){
            twistedTree4 = collada.scene;
            shadow.addShadow(twistedTree4);

            twistedTree4.scale.x = twistedTree4.scale.y = twistedTree4.scale.z = 1;
            setTreePosition(twistedTree4, springGround, getVerticesArray(), 130, -300);
            twistedTree4.updateMatrix();
            scene.add(twistedTree4);

            //console.log('twistedTree 4 loaded');

        });
        
        
        ///fifth twisted tree loader
        twistedTree5Loader = new THREE.ColladaLoader();
        twistedTree5Loader.options.convertUpAxis = true;
        twistedTree5Loader.load('dae/new_trees/spring_blossom2.dae', function(collada) {
            twistedTree5 = collada.scene;
            shadow.addShadow(twistedTree5);
            twistedTree5.scale.x = twistedTree5.scale.y = twistedTree5.scale.z = 1;
            setTreePosition(twistedTree5, springGround, getVerticesArray(), 180, -200);
            twistedTree5.updateMatrix();
            scene.add(twistedTree5);

            //console.log('twistedTree 5 loaded');

        });
        ///sixth twisted tree loader
        twistedTree6Loader = new THREE.ColladaLoader();
        twistedTree6Loader.options.convertUpAxis = true;
        twistedTree6Loader.load('dae/new_trees/spring_blossom2.dae', function(collada) {
            twistedTree6 = collada.scene;
            shadow.addShadow(twistedTree6);
            twistedTree6.scale.x = twistedTree6.scale.y = twistedTree6.scale.z = 1;
            setTreePosition(twistedTree6, springGround, getVerticesArray(), 80, -240);
            twistedTree6.updateMatrix();
            scene.add(twistedTree6);

            //console.log('twistedTree 6 loaded');

        });
        ///sixth twisted tree loader
        twistedTree7Loader = new THREE.ColladaLoader();
        twistedTree7Loader.options.convertUpAxis = true;
        twistedTree7Loader.load('dae/new_trees/spring_blossom2.dae', function(collada) {
            twistedTree7 = collada.scene;
            shadow.addShadow(twistedTree7);
            twistedTree7.scale.x = twistedTree7.scale.y = twistedTree7.scale.z = 1;
            setTreePosition(twistedTree7, springGround, getVerticesArray(), 50, -200);
            twistedTree7.updateMatrix();
            scene.add(twistedTree7);

            //console.log('twistedTree 7 loaded');

        });
        ///eigth twisted tree loader
        twistedTree8Loader = new THREE.ColladaLoader();
        twistedTree8Loader.options.convertUpAxis = true;
        twistedTree8Loader.load('dae/new_trees/spring_blossom2.dae', function(collada) {
            twistedTree8 = collada.scene;
            shadow.addShadow(twistedTree8);
            twistedTree8.scale.x = twistedTree8.scale.y = twistedTree8.scale.z = 1;
            setTreePosition(twistedTree8, springGround, getVerticesArray(), 20, -200);
            twistedTree8.updateMatrix();
            scene.add(twistedTree8);

            //console.log('twistedTree 8 loaded');

        });
        ///sixth twisted tree loader
        twistedTree9Loader = new THREE.ColladaLoader();
        twistedTree9Loader.options.convertUpAxis = true;
        twistedTree9Loader.load('dae/new_trees/spring_blossom2.dae', function(collada) {
            twistedTree9 = collada.scene;
            shadow.addShadow(twistedTree9);
            twistedTree9.scale.x = twistedTree9.scale.y = twistedTree9.scale.z = 1;
            setTreePosition(twistedTree9, springGround, getVerticesArray(), 80, -150);
            twistedTree9.updateMatrix();
            scene.add(twistedTree9);

            //console.log('twistedTree 7 loaded');

        });
        ///eigth twisted tree loader
        twistedTree10Loader = new THREE.ColladaLoader();
        twistedTree10Loader.options.convertUpAxis = true;
        twistedTree10Loader.load('dae/new_trees/spring_blossom2.dae', function(collada) {
            twistedTree10 = collada.scene;
            shadow.addShadow(twistedTree10);
            twistedTree10.scale.x = twistedTree10.scale.y = twistedTree10.scale.z = 1;
            setTreePosition(twistedTree10, springGround, getVerticesArray(), 120, -300);
            twistedTree10.updateMatrix();
            scene.add(twistedTree10);

            //console.log('twistedTree 8 loaded');

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
        scene.remove(twistedTree6);
        scene.remove(twistedTree7);
        scene.remove(twistedTree8);
        scene.remove(twistedTree9);
        scene.remove(twistedTree10);
        audio.stopTrack();

        //console.log('removed spring');
    };

    function getRandomArbitrary(min, max) {
        return Math.random() * (max - min) + min;
    }

}

