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
    camera.position.set(-150, 60, 15);
    //camera.lookAt(scene.position);

    //light
    var spotLight = new THREE.SpotLight(0xffffff, 3);
    spotLight.castShadow = true;
    spotLight.position.set(-20, 35, 300);
    scene.add(spotLight);

    //plane
    var plane = doGround(doGroundGeometry(150, 150, 60, 60));
    scene.add(plane);

    //manager
    var manager = new THREE.LoadingManager();
    manager.onProgress = function ( item, loaded, total ) {
        console.log( item, loaded, total );
    };
    //objLoader
    var texture = new THREE.Texture();
    var onProgress = function ( xhr ) {
        if ( xhr.lengthComputable ) {
            var percentComplete = xhr.loaded / xhr.total * 100;
            console.log( Math.round(percentComplete, 2) + '% downloaded' );
        }
    };
    var onError = function ( xhr ) {
    };
    var loader = new THREE.OBJLoader( manager );
    //load tree
    loader.load( 'first_tree_obj.obj', function ( object ) {
        object.traverse( function ( child ) {
            if ( child instanceof THREE.Mesh ) {
                child.material.map = texture;
                console.log('obj loaded!');
            }
        } );
        object.position.set = (0, 0, 0);
        scene.add( object );

    }, onProgress, onError );



    var elem = document.getElementById("output");
        elem.appendChild(renderer.domElement);

    var controls = new THREE.OrbitControls( camera );
    controls.damping = 0.2;
    controls.addEventListener( 'change', render );

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
    controls.update();

};

var doGroundGeometry = function(width, height, widthSegments, heightSegments) {
    var groundGeometry = new THREE.PlaneGeometry(width, height, 20, 40);

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