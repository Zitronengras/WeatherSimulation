function init(){
    var renderer = new THREE.WebGLRenderer();
    renderer.setClearColor(new THREE.Color(0x000000));
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.shadowMapEnabled = true;

    var scene = new THREE.Scene();

    var camera = new THREE.PerspectiveCamera(60, window.innerWidth/window.innerHeight, 0.1, 100);
    camera.position.set(-60, 30, 15);
    camera.lookAt(scene.position);

    var spotLight = new THREE.SpotLight(0xffffff);
    spotLight.castShadow = true;
    spotLight.position.set(-20, 35, 40);
    scene.add(spotLight);

    var plane = doGround(doGroundGeometry(50, 50, 20, 20));
    scene.add(plane);



    document.getElementById("output").appendChild(renderer.domElement);
    callback = function(){
        renderer.render(scene, camera);
    };
    requestAnimationFrame(render);
};

var doGroundGeometry = function(width, height, widthSegments, heightSegments) {
    var groundGeometry = new THREE.PlaneGeometry(width, height, 10, 20);

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