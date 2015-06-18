/**
 * Created by Caro on 10.06.2015.
 */


function init(){

    var renderer = new THREE.WebGLRenderer();
    renderer.setClearColor(new THREE.Color(0xffffff));
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.shadowMapEnabled = true;

    var scene = new THREE.Scene();

    var camera = new THREE.PerspectiveCamera(60, window.innerWidth/window.innerHeight, 1, 1000);
    camera.position.x = 200;
    camera.position.y = 200;
    camera.position.z = 200;
    //camera.lookAt(scene.position);

    //AxesHelper
    /*var axes = new THREE.AxisHelper(2);
    scene.add(axes);*/

    //light
    var spotLight = new THREE.SpotLight(0xffffff, 3);
    spotLight.castShadow = true;
    spotLight.position.set(-20, 100, 600);
    scene.add(spotLight);

    //defaultGround
    var defaultGround = doGround(doGroundGeometry(500, 500, 300, 300));
    scene.add(defaultGround);

    //manager
    var manager = new THREE.LoadingManager();
    manager.onProgress = function ( item, loaded, total ) {
        console.log( item, loaded, total );
    };
    //loader
    var onProgress = function ( xhr ) {
        if ( xhr.lengthComputable ) {
            var percentComplete = xhr.loaded / xhr.total * 100;
            console.log( Math.round(percentComplete, 2) + '% downloaded' );
        }
    };
    var onError = function ( xhr ) {
    };
    THREE.Loader.Handlers.add( /\.dds$/i, new THREE.DDSLoader() );
    var loader = new THREE.OBJMTLLoader();
    loader.load( 'obj/male02.obj', 'obj/male02.mtl', function ( object ) {
        console.log('obj loaded!');
        object.position.y = 0;
        scene.add( object );
    }, onProgress, onError );

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