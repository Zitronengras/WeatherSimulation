/**
 * Created by Caro on 10.06.2015.
 */


var orbitControls;
var orbitControlsActive = false;
var cubemapControl;
var yOffset = -30;
var sea;
var waterAnimation = true;

function init() {

    var renderer = new THREE.WebGLRenderer();
    renderer.setClearColor(new THREE.Color(0xffffff));
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.shadowMapEnabled = true;

    var scene = new THREE.Scene();
    scene.position.set(0,0,0);

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

    var daytime = new Daytime();


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
    var optSpotlight = seasonObject.getSeasonSpotlight();

	//water
	var water = new Water(yOffset);
	sea = water.doWater(water.doWaterGeometry());
	  scene.add(sea);

	//river
	var river = new River(yOffset);
	riv = river.doRiver(river.doRiverGeometry());
	scene.add(riv);

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
			waterAnimation = true;
            optSpotlight = seasonObject.getSeasonSpotlight();
        };
        this.summer = function() {
            seasonObject.remove(scene);
            seasonObject = new Summer(yOffset);
            seasonObject.load(scene);
			waterAnimation = true;
            optSpotlight = seasonObject.getSeasonSpotlight();
        };
        this.autumn = function() {
            seasonObject.remove(scene);
            seasonObject = new Autumn(yOffset);
            seasonObject.load(scene);
			waterAnimation = true;
            optSpotlight = seasonObject.getSeasonSpotlight();
        };
        this.winter = function() {
            seasonObject.remove(scene);
            seasonObject = new Winter(yOffset);
            seasonObject.load(scene);
			waterAnimation = false;
			
            optSpotlight = seasonObject.getSeasonSpotlight();
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
        daytime.moveSun(spotLight, optSpotlight);
        if (waterAnimation == true){
			water.animateWater(sea);
        }
		//console.log(sea + 'sea init');
		river.animateRiver(riv);
        requestAnimationFrame(function(){
            renderer.render(scene, camera);
			
        });
    };
    setInterval(render, 20);

};


window.onload = init;