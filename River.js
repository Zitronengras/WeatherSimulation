function River() {
    var river;
    var riverGeometry = new THREE.PlaneGeometry(500, 50, 30, 10);
    this.doRiverGeometry = function() {
       
      for (var i = 0; i < riverGeometry.vertices.length; i++) {
            if(i > 500 && i < 1000){
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
            {color: 0x6EFAFF, shading: THREE.FlatShading}); 
        river = new THREE.Mesh(riverGeometry, riverMaterial);
        river.rotation.x = -0.5*Math.PI;
        river.position.z = 100;
        river.position.y = -30;
		//river.rotation.z = 0.3;
        river.receiveShadow = true;
        return river;
		
		
    };
    var max = 20;
    var min = 1;
    
    this.animateRiver = function (sea){
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
            
    	});	
	}
}
