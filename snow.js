function randomInt (min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

function random (min, max) {
  return Math.random() * (max - min) + min;
}

function Snow() {
  var renderer = new THREE.WebGLRenderer();
  renderer.setClearColor(new THREE.Color(0));
  renderer.setSize(window.innerWidth, window.innerHeight);
  
  
  var camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.position.set(0, 300, 50);
  camera.lookAt(scene.position);

  var texture = THREE.ImageUtils.loadTexture(
    "images/particles/snow.png", {},
    function () { requestAnimationFrame(redraw); }
  );

  var geometry = new THREE.Geometry();
  var material = new THREE.PointCloudMaterial({
    size: 3,
    map: texture,
    //vertexColors: true,
    transparent: true
  });
  for (var i = 0; i < 2000; i++) {
    geometry.vertices.push(new THREE.Vector3(
      randomInt(-200, 200),
      randomInt(-200, 200),
      randomInt(-500, 100)));
    geometry.colors.push(
      new THREE.Color(randomInt(0xff, 1 + 0xff))
    );
  }
    
// Partikelsystem
  
  var system = new THREE.PointCloud(geometry, material);
  scene.add(system);

  var sortParticles = function () {
    var m = new THREE.Matrix4();
    m.multiplyMatrices(
      camera.projectionMatrix,
      camera.matrixWorldInverse
    );
    var v = new THREE.Vector3(), s = [];
    for (i = 0; i < 500; i++) {
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
    for (i = 0; i < 500; i++) {
      geometry.vertices[i] = s[i][1];
      geometry.colors[i] = s[i][2];
    }
  }

// Geschwindigkeit
  var vz = 3;

  document.getElementById("output").appendChild(renderer.domElement);
  var redraw = function() {
    system.geometry.vertices.forEach(function (child) {
      child.z += vz;
      if (child.z > 150)
        child.z = -500;
        
    });
    sortParticles();
    geometry.verticesNeedUpdate = true;
    geometry.colorsNeedUpdate = true;
    renderer.render(scene, camera);
  };
  setInterval(redraw, 50);
}

//window.onload = init;
