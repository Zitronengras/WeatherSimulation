/**
 * Created by Caro on 10.06.2015.
 */


var orbitControls;
var orbitControlsActive = false;
var cubemapControl;
var yOffset = -100;

function init() {

    var renderer = new THREE.WebGLRenderer();
    renderer.setClearColor(new THREE.Color(0xffffff));
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.shadowMapEnabled = true;

    var scene = new THREE.Scene();
    scene.position.set(0,0,0);

    var camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 1500);
    //camera.position.set(0,100,0);
    camera.lookAt(new THREE.Vector3(0,0,-1));
    //camera.position.set(0,50,0);
    //camera.up = new THREE.Vector3(0,1,0);
    //scene.add(camera);
    //var cameraPerspectiveHelper = new THREE.CameraHelper( camera );
    //scene.add( cameraPerspectiveHelper );

    /*camera.position.x = 300;
    camera.position.y = 100;
    camera.position.z = 300;*/

    //light
    var spotLight = new THREE.SpotLight(0xffffff);
    spotLight.castShadow = true;
    spotLight.position.x = 900; //red axis
    spotLight.position.y = 900; //green axis
    spotLight.position.z = -1500;
    spotLight.intensity = 1.3;
    spotLight.lookAt(0, 0, 0);
    scene.add(spotLight);

    //shows vertexNormals
    //var edges = new THREE.VertexNormalsHelper( defaultGround, 20, 0x00ff00, 1 );
    //scene.add(edges);

    //AxesHelper
    var axes = new THREE.AxisHelper(500);
    scene.add(axes);

    //defaultSeason = Spring
    var seasonObject;
    seasonObject = new Summer(yOffset);
    seasonObject.load(scene);

    //GUI
    var seasons = function() {

        var mountain = new Mountain(yOffset);
        mountain.load(scene);
        
// SCHNEE TEST
       /* var snow = new Snow();
       snow.load(scene);*/

        this.spring = function() {
            seasonObject.remove(scene);
            seasonObject = new Spring(yOffset);
            seasonObject.load(scene);
        };
        this.summer = function() {
            seasonObject.remove(scene);
            seasonObject = new Summer(yOffset);
            seasonObject.load(scene);
        };
        this.autumn = function() {
            seasonObject.remove(scene);
            seasonObject = new Autumn(yOffset);
            seasonObject.load(scene);
        };
        this.winter = function() {
            seasonObject.remove(scene);
            seasonObject = new Winter(yOffset);
            seasonObject.load(scene);
        };
        this.orbitControlGUI = function(){
         //mouse Control
         orbitControlsActive = true;
         camera.position.x = 300;
         camera.position.y = 500;
         camera.position.z = 300;
         orbitControls = new THREE.OrbitControls(camera);
         orbitControls.damping = 0.2;
         //orbitControls.addEventListener('change', render);
         console.log('orbitControls');
         };
         //cubemapControl
         this.cubemapControlGUI = function(){
         //remove orbitControls
         if(orbitControlsActive){
             orbitControls.removeEventListener('change', render);
             orbitControlsActive = false;
             console.log('remove orbitControl');
         }
         camera.lookAt(new THREE.Vector3(0,0,-1)); //ändern!!!
         //camera.position.y = 50;
         cubemapControl = new CubemapControl(camera, render);
         console.log('cubemapControl');
         };
    };

    var seasonsGUI = new seasons();
    var gui = new dat.GUI();
    gui.add(seasonsGUI, 'spring');
    gui.add(seasonsGUI, 'summer');
    gui.add(seasonsGUI, 'autumn');
    gui.add(seasonsGUI, 'winter');
    gui.add(seasonsGUI, 'orbitControlGUI');
    gui.add(seasonsGUI, 'cubemapControlGUI');

    //manager
    var manager = new THREE.LoadingManager();
    manager.onProgress = function (item, loaded, total) {
        console.log(item, loaded, total);
    };

    function onWindowResize() {
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
        renderer.setSize( window.innerWidth, window.innerHeight );
    }
    window.addEventListener('resize', onWindowResize, false);


    var elem = document.getElementById("output");
    elem.appendChild(renderer.domElement);

    render = function(){
        requestAnimationFrame(function(){
        renderer.render(scene, camera);
        });
    };
    setInterval(render, 20);

};


window.onload = init;