/**
 * Created by Caro on 25.06.2015.
 */


function Ground() {

    this.doGround = function(groundGeometry, color) {
        var groundMaterial = new THREE.MeshLambertMaterial({color: color, shading: THREE.FlatShading}); //color: 0x91D94A
        var ground = new THREE.Mesh(groundGeometry, groundMaterial);
        ground.rotation.x = -0.5*Math.PI;
        ground.position.y = -30;
        ground.receiveShadow = true;
        return ground;
    };

}

var verticesArray = [];

function doGroundGeometry(){
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
        verticesArray.push(groundGeometry.vertices[i]);
    }
    groundGeometry.dynamic = true;
    groundGeometry.computeFaceNormals();
    groundGeometry.computeVertexNormals();
    groundGeometry.normalsNeedUpdate = true;
    return groundGeometry;
};

function setPosition(object, ground, array, xPos, zPos){

    if(xPos != null){
        object.position.x = xPos;
    }
    if(zPos != null){
        object.position.z = zPos;
    }

    var range = 4;
    var minX = xPos - range;
    var maxX = xPos + range;
    var minZ = zPos - range;
    var maxZ = zPos + range;

    var xCo;
    var yCo;
    var zCo;

    for(var i=0; i < array.length; i++) {
        if(Math.round(array[i].x) > minX && Math.round(array[i].x) < maxX
            && Math.round(array[i].y) > minZ && Math.round(array[i].y) < maxZ){
            yCo = Math.round(array[i].y);
            xCo = Math.round(array[i].x);
            zCo = Math.round(array[i].z);
        }
    }

    ground.updateMatrixWorld();
    yCo = yCo/2;
    var p = new THREE.Vector3(xCo, yCo, zCo);
    ground.localToWorld(p);
    //console.log(p);

    //move height/2 on y axis
    var box = new THREE.Box3().setFromObject(object); //creates boundingbox
    var boxMin = box.min.y;
    var boxMax = box.max.y;
    /*
     console.log(box.min, box.max, box.size() );
     console.log('box.min' + box.min.y);
     console.log('box.max' + box.max.y);
     console.log(' min ' + boxMin + ' max ' + boxMax);*/

    //calculate height/2
    var offset = boxMax - boxMin;
    //console.log('max - min' + offset);
    if(offset < 0){
        offset = offset * (-1);
        //console.log('mal - 1' + offset);
    }
    offset = offset/2;
    p.setY((p.y + offset));
    //console.log(p);

    return object.position.copy(p);
}

function getVerticesArray(){
    return verticesArray;
}