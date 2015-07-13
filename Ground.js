/**
 * Created by Caro on 25.06.2015.
 */


function Ground(yOffset) {

    this.doGroundGeometry = function() {
        var groundGeometry = new THREE.PlaneGeometry(500, 800, 80, 105);
        var heightI = 1;
        for (var i = 0; i < groundGeometry.vertices.length; i++) {
            if(i > 3500){
                groundGeometry.vertices[i].x += Math.random() * 3; //red axis
                groundGeometry.vertices[i].y += Math.random() * 2; //blue axis
                groundGeometry.vertices[i].z += Math.random() * 8; //green axis: height
            }
            else if(i > 2000){
                groundGeometry.vertices[i].x += Math.random() * 3; //red axis
                groundGeometry.vertices[i].y += Math.random() * 6; //blue axis
                groundGeometry.vertices[i].z += Math.random() * 7; //green axis: height
            }
            else{
                groundGeometry.vertices[i].x += Math.random() * 3; //red axis
                groundGeometry.vertices[i].y += Math.random() * 2; //blue axis
                groundGeometry.vertices[i].z += Math.random() * 6; //green axis: height
            }
            //height
            if(i > 5500 && i <= 6500){
                groundGeometry.vertices[i].z += heightI; //green axis: height
                heightI += 0.01;
            }
            else if(i > 6500 && i <= 7000){
                groundGeometry.vertices[i].z += heightI; //green axis: height
                heightI += 0.019;
            }
            else if(i > 7000 && i <= 8500){
                groundGeometry.vertices[i].z += heightI; //green axis: height
                heightI += 0.02;
            }
            else if(i > 8500){
                groundGeometry.vertices[i].z += heightI; //green axis: height
                heightI += 0.03;
            }
        }
        groundGeometry.dynamic = true;
        groundGeometry.computeFaceNormals();
        groundGeometry.computeVertexNormals();
        groundGeometry.normalsNeedUpdate = true;
        return groundGeometry;
    };
    this.doGround = function(groundGeometry, color) {
        var groundMaterial = new THREE.MeshLambertMaterial({color: color, shading: THREE.FlatShading}); //color: 0x91D94A
        var ground = new THREE.Mesh(groundGeometry, groundMaterial);
        ground.rotation.x = -0.5*Math.PI;
        ground.position.y = yOffset;
        ground.receiveShadow = true;
        return ground;
    };
}