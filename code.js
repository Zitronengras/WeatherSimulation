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
    camera.position.set(-150, 60, 15);
    //camera.lookAt(scene.position);

    var spotLight = new THREE.SpotLight(0xffffff);
    spotLight.castShadow = true;
    spotLight.position.set(-20, 35, 200);
    scene.add(spotLight);

    var plane = doGround(doGroundGeometry(150, 150, 60, 60));
    scene.add(plane);

    //objLoader
    /*var loader = new THREE.OBJLoader( manager );
    loader.load( 'obj/male02/male02.obj', function ( object ) {
        console.log('obj loaded!');
        object.traverse( function ( child ) {
            if ( child instanceof THREE.Mesh ) {
                child.material.map = texture;
            }
        } );

        object.position.y = - 80;
        scene.add( object );

    }, onProgress, onError );*/

    var elem = document.getElementById("output");
        elem.appendChild(renderer.domElement);

    var controls = new THREE.OrbitControls( camera );
    controls.damping = 0.2;
    controls.addEventListener( 'change', render );
        //controls.target.set(0, 0, 0);
    //new THREE.MouseControls(camera);

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