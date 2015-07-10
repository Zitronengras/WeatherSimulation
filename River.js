function River () {

    this.load = function(scene) {
   
        
       
    var sphereGeometry = new THREE.SphereGeometry(50);
    
    var sphereMaterial = new THREE.MeshBasicMaterial({color: 0xFF0000});
        var sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
    sphere.position.set(0,0,0);    
scene.add(sphere);
        
        
 /* var A = new THREE.Vector3(60, 80, 0);
  var B = new THREE.Vector3(0,  80,  60);
  var C = new THREE.Vector3( 0,  80,  0);
  var D = new THREE.Vector3( 60,  80, 60);
  var E = new THREE.Vector3(60,   80, 0);
  var F = new THREE.Vector3(120,   80,  60);
  var G = new THREE.Vector3( 180,   80,  60);
  var H = new THREE.Vector3( 120,  80, 120);

  var ABC = new THREE.Face3(0, 1, 2);
  var ACD = new THREE.Face3(0, 2, 3);
  var ADE = new THREE.Face3(0,5, 4);
  var DFE = new THREE.Face3(4, 5, 6);
  var FGE = new THREE.Face3(6, 7, 4);
  var FHG = new THREE.Face3(6, 7, 4);
 
    var geo = new THREE.Geometry();
  geo.vertices = [A, B, C, D, E, F, G, H];
  geo.faces = [ABC, ACD, ADE, DFE, FGE, FHG];
  geo.computeFaceNormals();
  var mat = new THREE.MeshLambertMaterial({
    color: 0x00FF00
  });
  var mesh = new THREE.Mesh(geo, mat);
  scene.add(mesh);*/
        
             console.log('river');
    }
}