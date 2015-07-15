/**
 * Created by Caro on 10.06.2015.
 */


var orbitControls;
var orbitControlsActive = false;
var cubemapControl;
var sea;
var waterAnimation = true;

function init() {

    var renderer = new THREE.WebGLRenderer();
    renderer.setClearColor(new THREE.Color(0xffffff));
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.shadowMapEnabled = true;
    renderer.autoClear = false;

    var scene = new THREE.Scene();
    scene.position.set(0,0,0);

    var pointCloudScene = new THREE.Scene();
    pointCloudScene.position.set(0,0,0);
    //console.log('pointcloud scene');

    var camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 1500);
    camera.lookAt(new THREE.Vector3(0,0,-1));

    //light
    var spotLight = new THREE.SpotLight(0xffffff);
    spotLight.castShadow = true;
    spotLight.position.x = 0; //red axis
    spotLight.position.y = 900; //green axis
    spotLight.position.z = -1400; //-1500
    spotLight.intensity = 1.3;
    spotLight.lookAt(0, 0, 0);
    scene.add(spotLight);

    //shows vertexNormals
    //var edges = new THREE.VertexNormalsHelper( defaultGround, 20, 0x00ff00, 1 );
    //scene.add(edges);

    //AxesHelper
    //var axes = new THREE.AxisHelper(500);
    //scene.add(axes);

    //defaultSeason = Spring
    var seasonObject;
    seasonObject = new Spring();
    seasonObject.load(scene, pointCloudScene);
    var optSpotlight = seasonObject.getSeasonSpotlight();

    //water
	var water = new Water();
	sea = water.doWater(water.doWaterGeometry());
	scene.add(sea);

    //for moving the sun
    var daytime = new Daytime(scene);

    //for nightSky
    var nightsky = new Skybox();
    var isNight = false;

	//river
	//var river = new River();
	//riv = river.doRiver(river.doRiverGeometry());
	//scene.add(riv);

	//GUI
    var seasons = function() {

        var mountain = new Mountain();
        mountain.load(scene);

        this.spring = function() {
            seasonObject.remove(scene, pointCloudScene);
            seasonObject = new Spring();
            seasonObject.load(scene, pointCloudScene);
            waterAnimation = true;
            optSpotlight = seasonObject.getSeasonSpotlight();
        };
        this.summer = function() {
            seasonObject.remove(scene, pointCloudScene);
            seasonObject = new Summer();
            seasonObject.load(scene, pointCloudScene);
			waterAnimation = true;
            optSpotlight = seasonObject.getSeasonSpotlight();
        };
        this.autumn = function() {
            seasonObject.remove(scene, pointCloudScene);
            seasonObject = new Autumn();
            seasonObject.load(scene, pointCloudScene);
            waterAnimation = true;
            optSpotlight = seasonObject.getSeasonSpotlight();
        };
        this.winter = function() {
            seasonObject.remove(scene, pointCloudScene);
            seasonObject = new Winter();
            seasonObject.load(scene, pointCloudScene);
            waterAnimation = false;
            optSpotlight = seasonObject.getSeasonSpotlight();
        };
        this.daySky = function() {
            if(isNight == true){
                nightsky.removeNight(scene);
                isNight = false;
            }
        };
        this.nightSky = function() {
            if(isNight == false){
                nightsky.makeNight(scene);
                isNight = true;
            }
        };
        this.orbitControlGUI = function(){
            //mouse Control
            orbitControlsActive = true;
            camera.position.x = 300;
            camera.position.y = 500;
            camera.position.z = 300;
            orbitControls = new THREE.OrbitControls(camera);
            orbitControls.damping = 0.2;
        };
    };

    var seasonsGUI = new seasons();
    var gui = new dat.GUI();
    gui.add(seasonsGUI, 'spring');
    gui.add(seasonsGUI, 'summer');
    gui.add(seasonsGUI, 'autumn');
    gui.add(seasonsGUI, 'winter');
    gui.add(seasonsGUI, 'daySky');
    gui.add(seasonsGUI, 'nightSky');
    gui.add(seasonsGUI, 'orbitControlGUI');

    //manager
    var manager = new THREE.LoadingManager();
    manager.onProgress = function (item, loaded, total) {
        //console.log(item, loaded, total);
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
        daytime.moveSun(spotLight, optSpotlight);
        if (waterAnimation == true){
			water.animateWater(sea);
        }
		//river.animateRiver(riv);
        requestAnimationFrame(function(){
            renderer.clear();
            renderer.render(scene, camera);
            renderer.clearDepth();
            renderer.render(pointCloudScene, camera);
        });
    };
    setInterval(render, 20);

    //default control
    cubemapControl = new CubemapControl(camera, render);

};


window.onload = init;