/**
 * Created by Caro on 25.06.2015.
 */


function Ground(yOffset) {

    this.doGroundGeometry = function() {
        var groundGeometry = new THREE.PlaneGeometry(500, 800, 160, 200);
        var heightI = 1;
        for (var i = 0; i < groundGeometry.vertices.length; i++) {
            if(i > 13000 && i < 20900){
                groundGeometry.vertices[i].x += Math.random() * 3; //red axis
                groundGeometry.vertices[i].y += Math.random() * 2; //blue axis
                groundGeometry.vertices[i].z += Math.random() * 3; //green axis: height 11
            }
            else if(i > 20900){
                groundGeometry.vertices[i].x += Math.random() * 3; //red axis
                groundGeometry.vertices[i].y += Math.random() * 6; //blue axis
                groundGeometry.vertices[i].z += Math.random() * 4; //green axis: height 9
            }
            else{
                groundGeometry.vertices[i].x += Math.random() * 3; //red axis
                groundGeometry.vertices[i].y += Math.random() * 2; //blue axis
                groundGeometry.vertices[i].z += Math.random() * 2.5; //green axis: height 8
            }
            //height
            if(i > 18000 && i <= 21000){
                groundGeometry.vertices[i].z += heightI; //green axis: height
                heightI += 0.0015;
            }
            else if(i > 21000 && i <= 25000){
                groundGeometry.vertices[i].z += heightI; //green axis: height
                heightI += 0.0036;
            }
            else if(i > 25000 && i <= 26000) {
                groundGeometry.vertices[i].z += heightI; //green axis: height
                heightI += 0.0045;
            }
            else if(i > 26000){
                groundGeometry.vertices[i].z += heightI; //green axis: height
                heightI += 0.0015;
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