function River () {

    //this.load = function(scene) {
    
            
/* // geometry
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
riverGeometry.vertices.push( new THREE.Vector3( 200, 0, 250 ) ); // close the loop 24/*

        /*    
        
        
riverGeometry.faces=faces;
riverGeometry.vertices=vertices;
        
riverGeometry.faces.push( new THREE.Face3( 0, 1, 2 ) );
        
 */  
        
        /*
        var riverMaterial = new THREE.MeshLambertMaterial({color: 0xFF0000, shading: THREE.FlatShading}); 
        var ground = new THREE.Mesh(groundGeometry, groundMaterial);

        */
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
	
    function River(yOffset) {
    var river;
    var riverGeometry = new THREE.PlaneGeometry(500, 80, 30, 40);
    this.doriverGeometry = function() {
       
        for (var i = 0; i < riverGeometry.vertices.length; i++) {
            if(i > 800 && i < 1000){
                riverGeometry.vertices[i].x += Math.random() * 3; //red axis
                riverGeometry.vertices[i].y += Math.random() * 2; //blue axis
                riverGeometry.vertices[i].z += Math.random() * 20; //green axis
            }
            else if(i > 1000){
                riverGeometry.vertices[i].x += Math.random() * 3; //red axis
                riverGeometry.vertices[i].y += Math.random() * 6; //blue axis
                riverGeometry.vertices[i].z += Math.random() * 28; //green axis
            }
            else{
                riverGeometry.vertices[i].x += Math.random() * 3; //red axis
                riverGeometry.vertices[i].y += Math.random() * 2; //blue axis
                riverGeometry.vertices[i].z += Math.random() * 15; //green axis
            }
        }
        riverGeometry.dynamic = true;
        riverGeometry.computeFaceNormals();
        riverGeometry.computeVertexNormals();
        riverGeometry.normalsNeedUpdate = true;
        return riverGeometry;
    };
   
    this.doRiver = function() {
        var riverMaterial = new THREE.MeshLambertMaterial(
            {color: 0x6EFAFF, shading: THREE.FlatShading, transparent: true, opacity: 0.9}); 
        river = new THREE.Mesh(riverGeometry, riverMaterial);
        river.rotation.x = -0.5*Math.PI;
        river.position.z = -200;
        river.position.y = -4+yOffset;
        
        river.receiveShadow = true;
        return river;
    };
    var max = 20;
    var min = 1;
    
    this.animateriver = function (sea){
      var before=1;
        sea.geometry.vertices.forEach(function(vertex){
          
            var diff = Math.random() * (1 -(- 1)) + (-1);
            while(Math.abs(diff-before)>0.2){
                diff = Math.random() * (1 -(- 1)) + (-1)}
            before =diff;
            if(vertex.z > max){
            vertex.add(new THREE.Vector3 (0,0, Math.abs(diff)*(-1)));
            } 
            else if(vertex.z < min){
            vertex.add(new THREE.Vector3 (0,0, Math.abs(diff)));
            }
            else{
            vertex.add(new THREE.Vector3 (0,0, diff));
            }
           sea.geometry.verticesNeedUpdate = true;
            
            //console.log(diff+'river Animation');
    	});	
	}
}
   

}