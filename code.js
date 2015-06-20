/**
 * Created by Caro on 10.06.2015.
 */


function init(){

    var renderer = new THREE.WebGLRenderer();
    renderer.setClearColor(new THREE.Color(0x000000));
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.shadowMapEnabled = true;

    var scene = new THREE.Scene();

    var camera = new THREE.PerspectiveCamera(60, window.innerWidth/window.innerHeight, 1, 1000);
    camera.position.x = 200;
    camera.position.y = 200;
    camera.position.z = 200;
    //camera.lookAt(scene.position);

    //AxesHelper
    var axes = new THREE.AxisHelper(500);
    scene.add(axes);

    //light
    var spotLight = new THREE.SpotLight(0xffffff);
    spotLight.castShadow = true;
    spotLight.position.set(-20, 100, 600);
    spotLight.intensity = 3;
    scene.add(spotLight);

    /*var ambientLight = new THREE.AmbientLight(0x222222);
    scene.add(ambientLight);*/


    //defaultGround
    var defaultGround = doGround(doGroundGeometry(500, 500, 300, 300));
    scene.add(defaultGround);

    //manager
    var manager = new THREE.LoadingManager();
    manager.onProgress = function ( item, loaded, total ) {
        console.log( item, loaded, total );
    };
    //loader


    var dae;
    var loader = new THREE.ColladaLoader();
    loader.options.convertUpAxis = true;
    loader.load('dae/wolken.dae', function(collada){
        dae = collada.scene;
        console.log('obj loaded');
        dae.scale.x = dae.scale.y = dae.scale.z = 5;
        dae.updateMatrix();
        scene.add(dae);
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
    var groundGeometry = new THREE.PlaneGeometry(width, height, 100, 60);

    for (var i = 0; i < groundGeometry.vertices.length; i++) {
        groundGeometry.vertices[i].x += Math.random() * 5;
        groundGeometry.vertices[i].y += Math.random() * 2;
        groundGeometry.vertices[i].z += Math.random() * 2;
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
    //ground.receiveShadow = true;
    return ground;
};

function render(){
    callback();
    requestAnimationFrame(render);
}

window.onload = init;