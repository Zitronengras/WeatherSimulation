function Water(yOffset) {
    var water;
    var waterGeometry = new THREE.PlaneGeometry(500, 500, 40, 80);
    this.doWaterGeometry = function() {
       
        for (var i = 0; i < waterGeometry.vertices.length; i++) {
            if(i > 13000 && i < 20900){
                waterGeometry.vertices[i].x += Math.random() * 3; //red axis
                waterGeometry.vertices[i].y += Math.random() * 2; //blue axis
                waterGeometry.vertices[i].z += Math.random() * 20; //green axis
            }
            else if(i > 20900){
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
        water.position.z = -850;
        water.position.y = -5+yOffset;
        
        water.receiveShadow = true;
        return water;
    };
    
    this.animateWater = function (sea){
        sea.geometry.vertices.forEach(function(vertex){
       vertex.setZ += Math.random() * 3;
            console.log(sea+'Water Animation');
    });
}
}