/**
 * Created by Caro on 10.06.2015.
 */

function init() {

    var renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(new THREE.Color(0xffffff));
    renderer.shadowMapEnabled = true;

    var scene = new THREE.Scene();

    var camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 1, 1500);
    camera.position.x = 300;
    camera.position.y = 300;
    camera.position.z = 300;
    //camera.lookAt(scene.position);

    //light
    var spotLight = new THREE.SpotLight(0xffffff);
    spotLight.castShadow = true;
    spotLight.position.x = 900; //red axis
    spotLight.position.y = 700; //green axis
    spotLight.position.z = 1;
    spotLight.intensity = 1.4;
    spotLight.lookAt(0, 0, 0);
    scene.add(spotLight);


    //skybox
    var imagePrefix = "images/skybox-";
    var cubePages = ["right", "left", "top", "back", "front"];
    var imageSuffix = ".png";

    var materialArray = [];
    var cubePagesI = 0;
    for (var i = 0; i < 6; i++){
        if (i == 3) {
            materialArray.push(new THREE.MeshBasicMaterial({transparent: true, opacity: 0}));
        }
        else {
            materialArray.push(new THREE.MeshBasicMaterial({
                map: THREE.ImageUtils.loadTexture(imagePrefix + cubePages[cubePagesI] + imageSuffix),
                side: THREE.BackSide
            }));
            cubePagesI += 1;
        }
    }
    var skyGeometry = new THREE.BoxGeometry( 500, 500, 1500);
    var skyMaterial = new THREE.MeshFaceMaterial( materialArray );
    var skyBox = new THREE.Mesh(skyGeometry, skyMaterial );
    //skyBox.rotation.x += Math.PI / 2;
    scene.add( skyBox );


    /*var ambientLight = new THREE.AmbientLight(0x222222);
     scene.add(ambientLight);*/

    //shows vertexNormals
    //var edges = new THREE.VertexNormalsHelper( defaultGround, 20, 0x00ff00, 1 );
    //scene.add(edges);

    //AxesHelper
    var axes = new THREE.AxisHelper(500);
    scene.add(axes);

    //defaultSeason = Spring
    var seasonObject;
    seasonObject = new Spring();
    seasonObject.load(scene);

    //GUI
    var seasons = function() {

        var mountain = new Mountain();
        mountain.load(scene);

        this.spring = function() {
            seasonObject.remove(scene);
            seasonObject = new Spring();
            seasonObject.load(scene);
        };
        this.summer = function() {
            seasonObject.remove(scene);
            seasonObject = new Summer();
            seasonObject.load(scene);
        };
        this.autumn = function() {
            seasonObject.remove(scene);
            seasonObject = new Autumn();
            seasonObject.load(scene);
        };
        this.winter = function() {
            seasonObject.remove(scene);
            seasonObject = new Winter();
            seasonObject.load(scene);
        };
    };

    var seasonsGUI = new seasons();
    var gui = new dat.GUI();
    gui.add(seasonsGUI, 'spring');
    gui.add(seasonsGUI, 'summer');
    gui.add(seasonsGUI, 'autumn');
    gui.add(seasonsGUI, 'winter');

    //manager
    var manager = new THREE.LoadingManager();
    manager.onProgress = function ( item, loaded, total ) {
        console.log( item, loaded, total );
    };

    var elem = document.getElementById("output");
        elem.appendChild(renderer.domElement);

    //mouse Control
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
}

function render () {
    callback();
    requestAnimationFrame(render);
}

window.onload = init;