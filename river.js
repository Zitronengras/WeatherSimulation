function addPlane (max_raw, max_col, segment_row, segment_col, texture){
    this.load = function(scene) {
        console.log('river');
        
    var xm = new THREE.MeshPhongMaterial({color: 0xffffff});
    var geometry = new THREE.PlaneGeometry(max_raw, max_col, segment_row, segment_col);
    var mesh = new THREE.Mesh(geometry, xm);
    mesh.doubleSided = true;
    mesh.rotation.x=-1.570796;
    scene.add(mesh);
    }
}