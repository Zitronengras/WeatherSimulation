
function Water(yOffset) {

   /*function randomInt (min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

    function random (min, max) {
    return Math.random() * (max - min) + min;
}*/
 
    var ground = new Ground(yOffset);
    var autumnGround;
    //var autumnGroundColor = "#6C6632";
    var autumnGroundColor = "#FDD25C";
    
    
  for (var x = -250; x < 250; x += 4) {
    for (var z = -900; z < -700; z += 3) {
      var size = random(.5, 1.5);
      var cubeGeometry = new THREE.BoxGeometry(size, size, size);
      var cubeMaterial = new THREE.MeshLambertMaterial({color: randomInt(0,1+0xffffff)});
      var cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
      cube.color = (new THREE.Color()).copy(cubeMaterial.color);
      cube.position.x = x + randomInt(-1, 2);
      cube.position.z = z + randomInt(-1, 2);
      cube.position.y = y + randomInt(-1, 2));
      cube.rotation.x = random(0, 2*Math.PI);
      cube.rotation.y = random(0, 2*Math.PI);
      cube.rotation.z = random(0, 2*Math.PI);
      cube.castShadow = true;
      scene.add(cube);
        
        //autumnGround
        autumnGround = ground.doGround(ground.doGroundGeometry(), autumnGroundColor);
        scene.add(autumnGround);
    }
  }
  
 /* document.getElementById("output").appendChild(renderer.domElement);


    var direction = (new THREE.Vector3()).copy(mouse).unproject(camera).sub(camera.position).normalize();
    raycaster.set(camera.position, direction);
    scene.children.forEach(function (child) {
      if (child instanceof THREE.Mesh && child != plane)
        child.material.color.copy(child.color);
    });
    var intersects = raycaster.intersectObjects(scene.children);
    intersects.forEach(function (element) {
      var object = element.object;
      if (object instanceof THREE.Mesh && object != plane)
        object.material.color.set(0xffffff);
    });
    
    requestAnimationFrame(function () {
      renderer.render(scene, camera);
    });
    

}
