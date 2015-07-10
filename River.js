function River () {

    this.load = function(scene) {
    
  /*  var sphereGeometry = new THREE.SphereGeometry(50);
    
    var sphereMaterial = new THREE.MeshBasicMaterial({color: 0xFF0000});
        var sphere = new THREE.Mesh(sphereGeometry, sphereMaterial);
    sphere.position.set(0,0,0);    
scene.add(sphere);
       
        
 var A = new THREE.Vector3(60, 0, 0);
 var B = new THREE.Vector3(0,  0, 60);
 var C = new THREE.Vector3(0,  0,  0);    
  
  var D = new THREE.Vector3( 60,  80, 60);
  var E = new THREE.Vector3(60,   80, 0);
  var F = new THREE.Vector3(120,   80,  60);
  var G = new THREE.Vector3( 180,   80,  60);
  var H = new THREE.Vector3( 120,  80, 120);
 
  var ABC = new THREE.Face3(0, 1, 2);
  
/*var ACD = new THREE.Face3(0, 2, 3);
  var ADE = new THREE.Face3(0,5, 4);
  var DFE = new THREE.Face3(4, 5, 6);
  var FGE = new THREE.Face3(6, 7, 4);
  var FHG = new THREE.Face3(6, 7, 4);
        
  var geo = new THREE.Geometry();
  geo.vertices = [A, B, C];
  geo.faces = [ABC];
  geo.computeFaceNormals();
  var mat = new THREE.MeshLambertMaterial({
    color: 0x00FF00
  });
  var mesh = new THREE.
  
  Mesh(geo, mat);
  scene.add(mesh);
    */
            
    // geometry
var geometry = new THREE.Geometry();
geometry.vertices.push( new THREE.Vector3(-250, 0, -150 ) );
geometry.vertices.push( new THREE.Vector3(-250, 0, -100 ) );
geometry.vertices.push( new THREE.Vector3(-200, 0, -100 ) );
geometry.vertices.push( new THREE.Vector3(-250, 0, -150 ) ); // close the loop 1
        
geometry.vertices.push( new THREE.Vector3(-250, 0, -100 ) );
geometry.vertices.push( new THREE.Vector3(-200, 0, -100) );
geometry.vertices.push( new THREE.Vector3(-200, 0, -50 ) );
geometry.vertices.push( new THREE.Vector3(-250, 0, -100 ) ); // close the loop 2
        
geometry.vertices.push( new THREE.Vector3(-200, 0, -50 ) );
geometry.vertices.push( new THREE.Vector3(-150, 0, -100 ) );
geometry.vertices.push( new THREE.Vector3(-200, 0, -100 ) );
geometry.vertices.push( new THREE.Vector3(-200, 0, -50 ) ); // close the loop 3

geometry.vertices.push( new THREE.Vector3(-200, 0, -50 ) );
geometry.vertices.push( new THREE.Vector3(-150, 0, -100 ) );
geometry.vertices.push( new THREE.Vector3(-150, 0, -50 ) );
geometry.vertices.push( new THREE.Vector3(-200, 0, -50 ) ); // close the loop 4

geometry.vertices.push( new THREE.Vector3(-150, 0, -50 ) );
geometry.vertices.push( new THREE.Vector3(-100, 0, -50 ) );
geometry.vertices.push( new THREE.Vector3(-150, 0, -100 ) );
geometry.vertices.push( new THREE.Vector3(-150, 0, -50 ) ); // close the loop 5
        
geometry.vertices.push( new THREE.Vector3(-100, 0, -50) );
geometry.vertices.push( new THREE.Vector3(-150, 0, -50 ) );
geometry.vertices.push( new THREE.Vector3(-100, 0, 0 ) );
geometry.vertices.push( new THREE.Vector3(-100, 0, -50 ) ); // close the loop 6
        
geometry.vertices.push( new THREE.Vector3(-100, 0, 0 ) );
geometry.vertices.push( new THREE.Vector3(-100, 0, -50) );
geometry.vertices.push( new THREE.Vector3( -50, 0, 0 ) );
geometry.vertices.push( new THREE.Vector3(-100, 0, 0  ) ); // close the loop 7
        
geometry.vertices.push( new THREE.Vector3( -100, 0, 50) );
geometry.vertices.push( new THREE.Vector3( -100, 0, 0 ) );
geometry.vertices.push( new THREE.Vector3( -50, 0, 0 ) );
geometry.vertices.push( new THREE.Vector3( -100, 0, 50 ) ); // close the loop 8

geometry.vertices.push( new THREE.Vector3( -50, 0, 0 ) );
geometry.vertices.push( new THREE.Vector3( -100, 0, 50 ) );
geometry.vertices.push( new THREE.Vector3( -50, 0, 50 ) );
geometry.vertices.push( new THREE.Vector3( -50, 0, 0 ) ); // close the loop 9

geometry.vertices.push( new THREE.Vector3( -100, 0, 50 ) );
geometry.vertices.push( new THREE.Vector3( -50, 0, 100 ) );
geometry.vertices.push( new THREE.Vector3( -50, 0, 50 ) );
geometry.vertices.push( new THREE.Vector3( -100, 0, 50 ) ); // close the loop 10
        
geometry.vertices.push( new THREE.Vector3( -50, 0, 50 ) );
geometry.vertices.push( new THREE.Vector3(-50, 0, 100 ) );
geometry.vertices.push( new THREE.Vector3( 0, 0, 100 ) );
geometry.vertices.push( new THREE.Vector3( -50, 0, 50 ) ); // close the loop 11
        
geometry.vertices.push( new THREE.Vector3( 0, 0, 100 ) );
geometry.vertices.push( new THREE.Vector3(-50, 0, 100) );
geometry.vertices.push( new THREE.Vector3(-50, 0, 150 ) );
geometry.vertices.push( new THREE.Vector3( 0, 0, 100 ) ); // close the loop 12
        
geometry.vertices.push( new THREE.Vector3( 0, 0, 150 ) );
geometry.vertices.push( new THREE.Vector3( 0, 0, 100 ) );
geometry.vertices.push( new THREE.Vector3( -50, 0, 150 ) );
geometry.vertices.push( new THREE.Vector3( 0, 0, 150 ) ); // close the loop 13

geometry.vertices.push( new THREE.Vector3( 0, 0, 200 ) );
geometry.vertices.push( new THREE.Vector3(0, 0, 150 ) );
geometry.vertices.push( new THREE.Vector3( -50, 0, 150 ) );
geometry.vertices.push( new THREE.Vector3( 0, 0, 200 ) ); // close the loop 14

geometry.vertices.push( new THREE.Vector3( 0, 0, 200 ) );
geometry.vertices.push( new THREE.Vector3( 50, 0, 200 ) );
geometry.vertices.push( new THREE.Vector3( 0, 0, 150 ) );
geometry.vertices.push( new THREE.Vector3(  0, 0, 200  ) ); // close the loop 15
        
geometry.vertices.push( new THREE.Vector3( 50, 0, 250 ) );
geometry.vertices.push( new THREE.Vector3( 0, 0, 200 ) );
geometry.vertices.push( new THREE.Vector3( 50, 0, 200 ) );
geometry.vertices.push( new THREE.Vector3( 50, 0, 250 ) ); // close the loop 16
        
geometry.vertices.push( new THREE.Vector3( 50, 0, 250 ) );
geometry.vertices.push( new THREE.Vector3( 0, 0, 200 ) );
geometry.vertices.push( new THREE.Vector3( 100, 0, 200 ) );
geometry.vertices.push( new THREE.Vector3( 50, 0, 250 ) ); // close the loop 17
        
geometry.vertices.push( new THREE.Vector3( 100, 0, 250 ) );
geometry.vertices.push( new THREE.Vector3( 50, 0, 250 ) );
geometry.vertices.push( new THREE.Vector3( 100, 0, 200 ) );
geometry.vertices.push( new THREE.Vector3( 100, 0, 250 ) ); // close the loop 18

geometry.vertices.push( new THREE.Vector3( 100, 0, 250 ) );
geometry.vertices.push( new THREE.Vector3( 150, 0, 250 ) );
geometry.vertices.push( new THREE.Vector3( 100, 0, 200 ) );
geometry.vertices.push( new THREE.Vector3(100, 0, 250 ) ); // close the loop 19

geometry.vertices.push( new THREE.Vector3( 100, 0, 200 ) );
geometry.vertices.push( new THREE.Vector3( 150, 0, 200 ) );
geometry.vertices.push( new THREE.Vector3( 150, 0, 250 ) );
geometry.vertices.push( new THREE.Vector3( 100, 0, 200 ) ); // close the loop 20
       
geometry.vertices.push( new THREE.Vector3( 150, 0, 200 ) );
geometry.vertices.push( new THREE.Vector3( 200, 0, 250 ) );
geometry.vertices.push( new THREE.Vector3( 150, 0, 250 ) );
geometry.vertices.push( new THREE.Vector3( 150, 0, 200 ) ); // close the loop 21
        
geometry.vertices.push( new THREE.Vector3(150, 0, 250 ) );
geometry.vertices.push( new THREE.Vector3( 150, 0, 250 ) );
geometry.vertices.push( new THREE.Vector3( 200, 0, 300 ) );
geometry.vertices.push( new THREE.Vector3( 150, 0, 250 ) ); // close the loop 22
        
geometry.vertices.push( new THREE.Vector3( 200, 0, 300 ) );
geometry.vertices.push( new THREE.Vector3( 250, 0, 300 ) );
geometry.vertices.push( new THREE.Vector3( 200, 0, 250 ) );
geometry.vertices.push( new THREE.Vector3( 200, 0, 300 ) ); // close the loop 23

geometry.vertices.push( new THREE.Vector3( 200, 0, 250 ) );
geometry.vertices.push( new THREE.Vector3( 250, 0, 250 ) );
geometry.vertices.push( new THREE.Vector3( 250, 0, 300 ) );
geometry.vertices.push( new THREE.Vector3( 200, 0, 250 ) ); // close the loop 24
     
       
// material
var material = new THREE.LineBasicMaterial( { color: 0xffffff, linewidth: 1 } );

// line
var line = new THREE.Line( geometry, material );
scene.add( line ); 
        
  console.log('river loaded');
    }
}