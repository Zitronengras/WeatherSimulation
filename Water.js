function Water(yOffset) {

    this.doWaterGeometry = function() {
        var waterGeometry = new THREE.PlaneGeometry(500, 400, 120, 100);
        var heightI = 1;
        for (var i = 0; i < waterGeometry.vertices.length; i++) {
            if(i > 13000 && i < 20900){
                waterGeometry.vertices[i].x += Math.random() * 3; //red axis
                waterGeometry.vertices[i].y += Math.random() * 4; //blue axis
                waterGeometry.vertices[i].z += Math.random() * 3; //green axis: height 11
            }
            else if(i > 20900){
                waterGeometry.vertices[i].x += Math.random() * 3; //red axis
                waterGeometry.vertices[i].y += Math.random() * 8; //blue axis
                waterGeometry.vertices[i].z += Math.random() * 4; //green axis: height 9
            }
            else{
                waterGeometry.vertices[i].x += Math.random() * 3; //red axis
                waterGeometry.vertices[i].y += Math.random() * 2; //blue axis
                waterGeometry.vertices[i].z += Math.random() * 2.5; //green axis: height 8
            }
            //height
            if(i > 18000 && i <= 21000){
                waterGeometry.vertices[i].z += heightI; //green axis: height
                heightI += 0.0015;
            }
            else if(i > 21000 && i <= 25000){
                waterGeometry.vertices[i].z += heightI; //green axis: height
                heightI += 0.0036;
            }
            else if(i > 25000 && i <= 26000) {
                waterGeometry.vertices[i].z += heightI; //green axis: height
                heightI += 0.0045;
            }
            else if(i > 26000){
                waterGeometry.vertices[i].z += heightI; //green axis: height
                heightI += 0.0015;
            }

        }
        waterGeometry.dynamic = true;
        waterGeometry.computeFaceNormals();
        waterGeometry.computeVertexNormals();
        waterGeometry.normalsNeedUpdate = true;
        return waterGeometry;
    };
    this.doWater = function(waterGeometry) {
        var waterMaterial = new THREE.MeshLambertMaterial({color: 0x54BFC3, shading: THREE.FlatShading}); 
        var water = new THREE.Mesh(waterGeometry, waterMaterial);
        water.rotation.x = -0.5*Math.PI;
        water.position.z = -750;
        water.position.y = yOffset;
        
        water.receiveShadow = true;
        return water;
    };
}