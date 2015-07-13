function Water(yOffset) {
    var water;
    var waterGeometry = new THREE.PlaneGeometry(500, 180, 40, 50);
    this.doWaterGeometry = function() {
       
        for (var i = 0; i < waterGeometry.vertices.length; i++) {
            if(i > 1000 && i < 100){
                waterGeometry.vertices[i].x += Math.random() * 3; //red axis
                waterGeometry.vertices[i].y += Math.random() * 2; //blue axis
                waterGeometry.vertices[i].z += Math.random() * 20; //green axis
            }
            else if(i > 2000){
                waterGeometry.vertices[i].x += Math.random() * 3; //red axis
                waterGeometry.vertices[i].y += Math.random() * 6; //blue axis
                waterGeometry.vertices[i].z += Math.random() * 28; //green axis
            }
            else{
                waterGeometry.vertices[i].x += Math.random() * 3; //red axis
                waterGeometry.vertices[i].y += Math.random() * 2; //blue axis
                waterGeometry.vertices[i].z += Math.random() * 15; //green axis
            }
        }
        waterGeometry.dynamic = true;
        waterGeometry.computeFaceNormals();
        waterGeometry.computeVertexNormals();
        waterGeometry.normalsNeedUpdate = true;
        return waterGeometry;
    };
   
    this.doWater = function() {
        var waterMaterial = new THREE.MeshLambertMaterial(
            {color: 0x6EFAFF, shading: THREE.FlatShading, transparent: true, opacity: 0.9}); 
        water = new THREE.Mesh(waterGeometry, waterMaterial);
        water.rotation.x = -0.5*Math.PI;
        water.position.z = -630;
        water.position.y = -5+yOffset;
        
        water.receiveShadow = true;
        return water;
    };
    var max = 20;
    var min = 1;
    
    this.animateWater = function (sea){
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
            
<<<<<<< HEAD
            
            
            //console.log(diff+'Water Animation');
    });
}
=======
          //  console.log(diff+'Water Animation');
    	});
	}
>>>>>>> feature/seaAnimation
}