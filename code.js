function init(){
    var renderer = new THREE.WebGLRenderer();
    renderer.setClearColor(new THREE.Color(0x5B92D8));
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.shadowMapEnabled = true;

    var scene = new THREE.Scene();

    var camera = new THREE.PerspectiveCamera(60, window.innerWidth/window.innerHeight, 0.1, 100);
    camera.position.set(-40, 15, 15);
    camera.lookAt(scene.position);

    var spotLight = new THREE.SpotLight(0xffffff);
    spotLight.castShadow = true;
    spotLight.position.set(-20, 35, 40);
    scene.add(spotLight);

    var axes = new THREE.AxisHelper(30);
    scene.add(axes);

    var cubeGeometry = new THREE.BoxGeometry(4, 4, 4);
    var cubeMaterial = new THREE.MeshLambertMaterial({
        color: 0xff000
    });
    var cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
    cube.position.x = 2;//eig mit Vektoren!! ändern!
    cube.position.y = 2;
    cube.position.z = 0;
    cube.castShadow = true;
    scene.add(cube);

    var planeGeometry = new THREE.PlaneGeometry(30, 30);
    var planeMaterial = new THREE.MeshLambertMaterial({
        color: 0xffffff
    });
    var plane = new THREE.Mesh(planeGeometry, planeMaterial);
    plane.rotation.x = -0.5*Math.PI;
    plane.receiveShadow = true;
    scene.add(plane);

    document.getElementById("output").appendChild(renderer.domElement);
    callback = function(){
        renderer.render(scene, camera);
    };
    requestAnimationFrame(render);
};

function render(){
    callback();
    requestAnimationFrame(render);
}

window.onload = init;