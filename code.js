   //Karo

function randomInt (min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function random (min, max) {
  return Math.random() * (max - min) + min;
}
//Karo eNDE
   
   
   
   // Karo
    
    var texture = THREE.ImageUtils.loadTexture(
    "snow.png", {},
    function () { requestAnimationFrame(render); }
  );

  var geometry = new THREE.Geometry();
  var materialSnow = new THREE.PointCloudMaterial({
    size: 1,
    map: texture,
    //vertexColors: true,
    transparent: true
  });
  for (var i = 0; i < 400; i++) {
    geometry.vertices.push(new THREE.Vector3(
      randomInt(-50, 50),
      randomInt(20, 50),
      randomInt(-100, 100)));
    geometry.colors.push(
      new THREE.Color(0xffffff)
    );
  }
    
// Partikelsystem
  
  var system = new THREE.PointCloud(geometry, materialSnow);
  scene.add(system);

  var sortParticles = function () {
    var m = new THREE.Matrix4();
    m.multiplyMatrices(
      camera.projectionMatrix,
      camera.matrixWorldInverse
    );
    var v = new THREE.Vector3(), s = [];
    for (i = 0; i < 100; i++) {
      var vertex = geometry.vertices[i];
      v.copy(vertex);
			v.applyProjection(m);
      s.push([v.z, vertex, geometry.colors[i]]);
    }
    s.sort(function (a, b) {
      if (a[0] < b[0])
        return 1;
      else if (a[0] > b[0])
        return -1;
      else
        return 0;
    });
    for (i = 0; i < 100; i++) {
      geometry.vertices[i] = s[i][1];
      geometry.colors[i] = s[i][2];
    }
  }

// Geschwindigkeit
  var vz = 0.5;

    // Karo Ende
    
     // Karo
    
     var redraw = function() {
    system.geometry.vertices.forEach(function (child) {
      child.y -= vz;
      if (child.z > 150)
        child.z = -500;
        
    });
    sortParticles();
    geometry.verticesNeedUpdate = true;
    geometry.colorsNeedUpdate = true;
    renderer.render(scene, camera);
  };
  setInterval(redraw, 50);


    // Karo Ende