function Water(yOffset) {

    this.doWaterGeometry = function() {
        var waterGeometry = new THREE.PlaneGeometry(500, 500, 40, 80);
        var heightI = 1;
        for (var i = 0; i < waterGeometry.vertices.length; i++) {
            if(i > 13000 && i < 20900){
                waterGeometry.vertices[i].x += Math.random() * 3; //red axis
                waterGeometry.vertices[i].y += Math.random() * 2; //blue axis
                waterGeometry.vertices[i].z += Math.random() * 26; //green axis: height 11
            }
            else if(i > 20900){
                waterGeometry.vertices[i].x += Math.random() * 3; //red axis
                waterGeometry.vertices[i].y += Math.random() * 6; //blue axis
                waterGeometry.vertices[i].z += Math.random() * 28; //green axis: height 9
            }
            else{
                waterGeometry.vertices[i].x += Math.random() * 3; //red axis
                waterGeometry.vertices[i].y += Math.random() * 2; //blue axis
                waterGeometry.vertices[i].z += Math.random() * 25; //green axis: height 8
            }
        
        }
        waterGeometry.dynamic = true;
        waterGeometry.computeFaceNormals();
        waterGeometry.computeVertexNormals();
        waterGeometry.normalsNeedUpdate = true;
        return waterGeometry;
    };
    this.doWater = function(waterGeometry) {
        var waterMaterial = new THREE.MeshLambertMaterial(
            {color: 0x6EFAFF, shading: THREE.FlatShading, transparent: true, opacity: 0.9}); 
        var water = new THREE.Mesh(waterGeometry, waterMaterial);
        water.rotation.x = -0.5*Math.PI;
        water.position.z = -850;
        water.position.y = -5+yOffset;
        
        water.receiveShadow = true;
        return water;
    };
}