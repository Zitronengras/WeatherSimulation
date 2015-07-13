function River () {

    this.load = function(scene) {
    
            
// geometry
var riverShapes = new THREE.Shape();
riverGeometry.vertices.push( new THREE.Vector3(-250, 0, -150 ) );
riverGeometry.vertices.push( new THREE.Vector3(-250, 0, -100 ) );
riverGeometry.vertices.push( new THREE.Vector3(-200, 0, -100 ) );
riverGeometry.vertices.push( new THREE.Vector3(-250, 0, -150 ) ); // close the loop 1
        
riverGeometry.vertices.push( new THREE.Vector3(-250, 0, -100 ) );
riverGeometry.vertices.push( new THREE.Vector3(-200, 0, -100) );
riverGeometry.vertices.push( new THREE.Vector3(-200, 0, -50 ) );
riverGeometry.vertices.push( new THREE.Vector3(-250, 0, -100 ) ); // close the loop 2
        
riverGeometry.vertices.push( new THREE.Vector3(-200, 0, -50 ) );
riverGeometry.vertices.push( new THREE.Vector3(-150, 0, -100 ) );
riverGeometry.vertices.push( new THREE.Vector3(-200, 0, -100 ) );
riverGeometry.vertices.push( new THREE.Vector3(-200, 0, -50 ) ); // close the loop 3

riverGeometry.vertices.push( new THREE.Vector3(-200, 0, -50 ) );
riverGeometry.vertices.push( new THREE.Vector3(-150, 0, -100 ) );
riverGeometry.vertices.push( new THREE.Vector3(-150, 0, -50 ) );
riverGeometry.vertices.push( new THREE.Vector3(-200, 0, -50 ) ); // close the loop 4

riverGeometry.vertices.push( new THREE.Vector3(-150, 0, -50 ) );
riverGeometry.vertices.push( new THREE.Vector3(-100, 0, -50 ) );
riverGeometry.vertices.push( new THREE.Vector3(-150, 0, -100 ) );
riverGeometry.vertices.push( new THREE.Vector3(-150, 0, -50 ) ); // close the loop 5
        
riverGeometry.vertices.push( new THREE.Vector3(-100, 0, -50) );
riverGeometry.vertices.push( new THREE.Vector3(-150, 0, -50 ) );
riverGeometry.vertices.push( new THREE.Vector3(-100, 0, 0 ) );
riverGeometry.vertices.push( new THREE.Vector3(-100, 0, -50 ) ); // close the loop 6
        
riverGeometry.vertices.push( new THREE.Vector3(-100, 0, 0 ) );
riverGeometry.vertices.push( new THREE.Vector3(-100, 0, -50) );
riverGeometry.vertices.push( new THREE.Vector3( -50, 0, 0 ) );
riverGeometry.vertices.push( new THREE.Vector3(-100, 0, 0  ) ); // close the loop 7
        
riverGeometry.vertices.push( new THREE.Vector3( -100, 0, 50) );
riverGeometry.vertices.push( new THREE.Vector3( -100, 0, 0 ) );
riverGeometry.vertices.push( new THREE.Vector3( -50, 0, 0 ) );
riverGeometry.vertices.push( new THREE.Vector3( -100, 0, 50 ) ); // close the loop 8

riverGeometry.vertices.push( new THREE.Vector3( -50, 0, 0 ) );
riverGeometry.vertices.push( new THREE.Vector3( -100, 0, 50 ) );
riverGeometry.vertices.push( new THREE.Vector3( -50, 0, 50 ) );
riverGeometry.vertices.push( new THREE.Vector3( -50, 0, 0 ) ); // close the loop 9

riverGeometry.vertices.push( new THREE.Vector3( -100, 0, 50 ) );
riverGeometry.vertices.push( new THREE.Vector3( -50, 0, 100 ) );
riverGeometry.vertices.push( new THREE.Vector3( -50, 0, 50 ) );
riverGeometry.vertices.push( new THREE.Vector3( -100, 0, 50 ) ); // close the loop 10
        
riverGeometry.vertices.push( new THREE.Vector3( -50, 0, 50 ) );
riverGeometry.vertices.push( new THREE.Vector3(-50, 0, 100 ) );
riverGeometry.vertices.push( new THREE.Vector3( 0, 0, 100 ) );
riverGeometry.vertices.push( new THREE.Vector3( -50, 0, 50 ) ); // close the loop 11
        
riverGeometry.vertices.push( new THREE.Vector3( 0, 0, 100 ) );
riverGeometry.vertices.push( new THREE.Vector3(-50, 0, 100) );
riverGeometry.vertices.push( new THREE.Vector3(-50, 0, 150 ) );
riverGeometry.vertices.push( new THREE.Vector3( 0, 0, 100 ) ); // close the loop 12
        
riverGeometry.vertices.push( new THREE.Vector3( 0, 0, 150 ) );
riverGeometry.vertices.push( new THREE.Vector3( 0, 0, 100 ) );
riverGeometry.vertices.push( new THREE.Vector3( -50, 0, 150 ) );
riverGeometry.vertices.push( new THREE.Vector3( 0, 0, 150 ) ); // close the loop 13

riverGeometry.vertices.push( new THREE.Vector3( 0, 0, 200 ) );
riverGeometry.vertices.push( new THREE.Vector3(0, 0, 150 ) );
riverGeometry.vertices.push( new THREE.Vector3( -50, 0, 150 ) );
riverGeometry.vertices.push( new THREE.Vector3( 0, 0, 200 ) ); // close the loop 14

riverGeometry.vertices.push( new THREE.Vector3( 0, 0, 200 ) );
riverGeometry.vertices.push( new THREE.Vector3( 50, 0, 200 ) );
riverGeometry.vertices.push( new THREE.Vector3( 0, 0, 150 ) );
riverGeometry.vertices.push( new THREE.Vector3(  0, 0, 200  ) ); // close the loop 15
        
riverGeometry.vertices.push( new THREE.Vector3( 50, 0, 250 ) );
riverGeometry.vertices.push( new THREE.Vector3( 0, 0, 200 ) );
riverGeometry.vertices.push( new THREE.Vector3( 50, 0, 200 ) );
riverGeometry.vertices.push( new THREE.Vector3( 50, 0, 250 ) ); // close the loop 16
        
riverGeometry.vertices.push( new THREE.Vector3( 50, 0, 250 ) );
riverGeometry.vertices.push( new THREE.Vector3( 0, 0, 200 ) );
riverGeometry.vertices.push( new THREE.Vector3( 100, 0, 200 ) );
riverGeometry.vertices.push( new THREE.Vector3( 50, 0, 250 ) ); // close the loop 17
        
riverGeometry.vertices.push( new THREE.Vector3( 100, 0, 250 ) );
riverGeometry.vertices.push( new THREE.Vector3( 50, 0, 250 ) );
riverGeometry.vertices.push( new THREE.Vector3( 100, 0, 200 ) );
riverGeometry.vertices.push( new THREE.Vector3( 100, 0, 250 ) ); // close the loop 18

riverGeometry.vertices.push( new THREE.Vector3( 100, 0, 250 ) );
riverGeometry.vertices.push( new THREE.Vector3( 150, 0, 250 ) );
riverGeometry.vertices.push( new THREE.Vector3( 100, 0, 200 ) );
riverGeometry.vertices.push( new THREE.Vector3(100, 0, 250 ) ); // close the loop 19

riverGeometry.vertices.push( new THREE.Vector3( 100, 0, 200 ) );
riverGeometry.vertices.push( new THREE.Vector3( 150, 0, 200 ) );
riverGeometry.vertices.push( new THREE.Vector3( 150, 0, 250 ) );
riverGeometry.vertices.push( new THREE.Vector3( 100, 0, 200 ) ); // close the loop 20
       
riverGeometry.vertices.push( new THREE.Vector3( 150, 0, 200 ) );
riverGeometry.vertices.push( new THREE.Vector3( 200, 0, 250 ) );
riverGeometry.vertices.push( new THREE.Vector3( 150, 0, 250 ) );
riverGeometry.vertices.push( new THREE.Vector3( 150, 0, 200 ) ); // close the loop 21
        
riverGeometry.vertices.push( new THREE.Vector3(150, 0, 250 ) );
riverGeometry.vertices.push( new THREE.Vector3( 150, 0, 250 ) );
riverGeometry.vertices.push( new THREE.Vector3( 200, 0, 300 ) );
riverGeometry.vertices.push( new THREE.Vector3( 150, 0, 250 ) ); // close the loop 22
        
riverGeometry.vertices.push( new THREE.Vector3( 200, 0, 300 ) );
riverGeometry.vertices.push( new THREE.Vector3( 250, 0, 300 ) );
riverGeometry.vertices.push( new THREE.Vector3( 200, 0, 250 ) );
riverGeometry.vertices.push( new THREE.Vector3( 200, 0, 300 ) ); // close the loop 23

riverGeometry.vertices.push( new THREE.Vector3( 200, 0, 250 ) );
riverGeometry.vertices.push( new THREE.Vector3( 250, 0, 250 ) );
riverGeometry.vertices.push( new THREE.Vector3( 250, 0, 300 ) );
riverGeometry.vertices.push( new THREE.Vector3( 200, 0, 250 ) ); // close the loop 24

        /*    
        
        
riverGeometry.faces=faces;
riverGeometry.vertices=vertices;
        
riverGeometry.faces.push( new THREE.Face3( 0, 1, 2 ) );
        
 */  
        
        
        var riverMaterial = new THREE.MeshLambertMaterial({color: 0xFF0000, shading: THREE.FlatShading}); 
        var ground = new THREE.Mesh(groundGeometry, groundMaterial);

        
    /*    // material
var material = new THREE.MeshPhongMaterial( { color: 0xff0000, linewidth:2 } );

// line
var line = new THREE.Line( riverGeometry, material );
scene.add( line ); 
        
  console.log('river loaded');
        
        var geometry = new THREE.ExtrudeGeometry( shape, extrudeSettings );

					var mesh = new THREE.Mesh( geometry, new THREE.MeshPhongMaterial( { color: color } ) );
					mesh.position.set( x, y, z - 75 );
					mesh.rotation.set( rx, ry, rz );
					mesh.scale.set( s, s, s );
					group.add( mesh );
        */
        
        
    }
}