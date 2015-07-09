function Leave2(){
    
        var particles = new THREE.Geometry;
        var particle;
        var particleSystem;
    
    this.load = function(scene){
  

    //Animation
        var redraw = function() {
         
        particles.vertices.forEach(function (child) {
        child.z -= 3;
    
            
            if (child.z < -400)
                child.z = Math.random()* 800;
             
        
        });
          
        particleSystem.geometry.verticesNeedUpdate = true;
        requestAnimationFrame(redraw);
      }
   
   
        // Startposition
        for (var p = 0; p < 300; p++) {
            particle = new THREE.Vector3(Math.random() * 750 - 250, Math.random() * 400 - 250, Math.random() * 2000 - 800);
            particles.vertices.push(particle);
        }
    
        // Material
        var texture = THREE.ImageUtils.loadTexture("images/particles/leave2.png", {},
            function () { requestAnimationFrame(redraw); }
        );
       var particleMaterial = new THREE.PointCloudMaterial({ color: 0xEEEEEE, size: 6 ,map: texture,transparent: true});
   
        particleSystem = new THREE.PointCloud(particles, particleMaterial);
        scene.add(particleSystem); 
      console.log("Particle System (leave2) loaded ");
  };
    this.remove = function(scene){
        scene.remove(particleSystem);
    };
   var render = this.render;
}