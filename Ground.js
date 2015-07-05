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
        for (var i = 0; i < groundGeometry.vertices.length; i++) {
            groundGeometry.vertices[i].x += Math.random() * 3; //red axis
            groundGeometry.vertices[i].y += Math.random() * 2; //blue axis
            groundGeometry.vertices[i].z += Math.random() * 8; //green axis: height
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