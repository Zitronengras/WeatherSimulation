/**
 * Created by Caro on 25.06.2015.
 */


function Ground(yOffset) {
    /*var summerGroundColor= "#ff0000";
    //summerGround
    var summerGround = doGround(doGroundGeometry(500, 500), summerGroundColor);
    scene.add(summerGround);*/

    this.doGroundGeometry = function(widthSegments, heightSegments) {
        var groundGeometry = new THREE.PlaneGeometry(500, 800, 60, 80);
        var heightI = 1;
        for (var i = 0; i < groundGeometry.vertices.length; i++) {
            if(i > 3500){
                groundGeometry.vertices[i].x += Math.random() * 3; //red axis
                groundGeometry.vertices[i].y += Math.random() * 2; //blue axis
                groundGeometry.vertices[i].z += Math.random() * 11; //green axis: height
            }
            else if(i > 2000){
                groundGeometry.vertices[i].x += Math.random() * 3; //red axis
                groundGeometry.vertices[i].y += Math.random() * 6; //blue axis
                groundGeometry.vertices[i].z += Math.random() * 9; //green axis: height
            }
            else{
                groundGeometry.vertices[i].x += Math.random() * 3; //red axis
                groundGeometry.vertices[i].y += Math.random() * 2; //blue axis
                groundGeometry.vertices[i].z += Math.random() * 8; //green axis: height
            }
            //height
            if(i > 2500 && i <= 3500){
                groundGeometry.vertices[i].z += heightI; //green axis: height
                heightI += 0.01;
            }
            else if(i > 3500 && i <= 4000){
                groundGeometry.vertices[i].z += heightI; //green axis: height
                heightI += 0.035;
            }
            else if(i > 4000 && i <= 5500){
                groundGeometry.vertices[i].z += heightI; //green axis: height
                heightI += 0.02;
            }
            else if(i > 5500){
                groundGeometry.vertices[i].z += heightI; //green axis: height
                heightI += 0.01;
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