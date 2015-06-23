/**
 * Created by Caro on 10.06.2015.
 */


function init(){

    var renderer = new THREE.WebGLRenderer();
    renderer.setClearColor(new THREE.Color(0x8DC0F4));
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.shadowMapEnabled = true;

    var scene = new THREE.Scene();

    var camera = new THREE.PerspectiveCamera(60, window.innerWidth/window.innerHeight, 1, 1000);
    camera.position.x = 300;
    camera.position.y = 300;
    camera.position.z = 300;
    //camera.lookAt(scene.position);

    //AxesHelper
    var axes = new THREE.AxisHelper(500);
    scene.add(axes);

    //light
    var spotLight = new THREE.SpotLight(0xffffff);
    spotLight.castShadow = true;
    spotLight.position.x = 900; //red axis
    spotLight.position.y = 700; //green axis
    spotLight.position.z = 1;
    spotLight.intensity = 1.2;
    scene.add(spotLight);

    /*var ambientLight = new THREE.AmbientLight(0x222222);
    scene.add(ambientLight);*/


    //defaultGround
    var defaultGround = doGround(doGroundGeometry(500, 500));
    scene.add(defaultGround);

    //shows vertexNormals
    //var edges = new THREE.VertexNormalsHelper( defaultGround, 20, 0x00ff00, 1 );
    //scene.add(edges);

    //manager
    var manager = new THREE.LoadingManager();
    manager.onProgress = function ( item, loaded, total ) {
        console.log( item, loaded, total );
    };
    //cloud loader
    var cloud;
    var cloudLoader = new THREE.ColladaLoader();
    cloudLoader.options.convertUpAxis = true;
    cloudLoader.load('dae/Wolken.dae', function(collada){
        cloud = collada.scene;
        console.log('cloud loaded');
        cloud.castShadow = true;
        cloud.scale.x = cloud.scale.y = cloud.scale.z = 1;
        cloud.position.set(1, 150, 1);
        cloud.updateMatrix();
        scene.add(cloud);
    });
    //grass loader
    var grassStalk;
    var grassStalkLoader = new THREE.ColladaLoader();
    grassStalkLoader.options.convertUpAxis = true;
    grassStalkLoader.load('dae/Grashalm.dae', function(collada){
        grassStalk = collada.scene;
        console.log('grassStalk loaded');
        grassStalk.castShadow = true;
        //grassStalk.scale.x = cloud.scale.y = cloud.scale.z = 5;
        grassStalk.position.set(1, 1, 1);
        grassStalk.updateMatrix();
        scene.add(grassStalk);
    });
    
        //twisted tree loader
    var twistedTree;
    var twistedTreeLoader = new THREE.ColladaLoader();
    twistedTreeLoader.options.convertUpAxis = true;
   twistedTreeLoader.load('dae/twisted_tree.dae', function(collada){
        twistedTree = collada.scene;
        console.log('twistedTree loaded');
        twistedTree.castShadow = true;
        twistedTree.scale.x = twistedTree.scale.y = twistedTree.scale.z = 0.2;
        twistedTree.position.set(10, 50, 80);
       twistedTree.updateMatrix();
        scene.add(twistedTree);
    });
    
        //second twisted tree loader
    var twistedTree2;
    var twistedTree2Loader = new THREE.ColladaLoader();
    twistedTree2Loader.options.convertUpAxis = true;
   twistedTree2Loader.load('dae/twisted_tree.dae', function(collada){
        twistedTree2 = collada.scene;
        console.log('twistedTree 2 loaded');
        twistedTree2.castShadow = true;
        twistedTree2.scale.x = twistedTree2.scale.y = twistedTree2.scale.z = 0.2;
        twistedTree2.position.set(20, 50, 120);
       twistedTree2.updateMatrix();
        scene.add(twistedTree2);
    });

     //big/long tree loader
    var longTree;
    var longTreeLoader = new THREE.ColladaLoader();
    longTreeLoader.options.convertUpAxis = true;
  longTreeLoader.load('dae/long_tree.dae', function(collada){
        longTree = collada.scene;
        console.log('longtree loaded');
        longTree.castShadow = true;
        longTree.scale.x = longTree.scale.y = longTree.scale.z = 0.1;
       longTree.position.set(10, 5, -100);
       longTree.updateMatrix();
        scene.add(longTree);
    });
    var elem = document.getElementById("output");
        elem.appendChild(renderer.domElement);

    var orbitControls = new THREE.OrbitControls(camera);
    orbitControls.damping = 0.2;
    orbitControls.addEventListener('change', render );

    function onWindowResize() {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize( window.innerWidth, window.innerHeight );
    }
    window.addEventListener( 'resize', onWindowResize, false );

    callback = function(){
        renderer.render(scene, camera);
    };
    requestAnimationFrame(render);

    orbitControls.update();
};

var doGroundGeometry = function(width, height, widthSegments, heightSegments) {
    var groundGeometry = new THREE.PlaneGeometry(width, height, 60, 50);
    for (var i = 0; i < groundGeometry.vertices.length; i++) {
        groundGeometry.vertices[i].x += Math.random() * 3; //red axis
        groundGeometry.vertices[i].y += Math.random() * 2; //blue axis
        groundGeometry.vertices[i].z += Math.random() * 8; //green axis: height
    }
    groundGeometry.dynamic = true;
    groundGeometry.computeFaceNormals();
    groundGeometry.computeVertexNormals();
    groundGeometry.normalsNeedUpdate = true;
    return groundGeometry;
};

var doGround = function(groundGeometry) {
    var groundMaterial = new THREE.MeshLambertMaterial({color: 0x91D94A, shading: THREE.FlatShading});
    var ground = new THREE.Mesh(groundGeometry, groundMaterial);
    ground.rotation.x = -0.5*Math.PI;
    ground.receiveShadow = true;
    return ground;
};

function render(){
    callback();
    requestAnimationFrame(render);
}

window.onload = init;