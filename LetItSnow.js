function LetItSnow(){
    
        var particles = new THREE.Geometry;
        var particle;
        var particleSystem;
    
    this.load = function(scene){
  

    //Animation
        var redraw = function() {
         
        particles.vertices.forEach(function (child) {
            child.y -= 3;
            
            if (child.y < -100)
                child.y = Math.random()* 500;
             
        
        });
          
        particleSystem.geometry.verticesNeedUpdate = true;
        requestAnimationFrame(redraw);
      }
   
   
        // Startposition
        for (var p = 0; p < 2000; p++) {
            particle = new THREE.Vector3(Math.random() * 750 - 250, Math.random() * 750 - 250, Math.random() * 2000 - 800);
            particles.vertices.push(particle);
        }
    
        // Material
        var texture = THREE.ImageUtils.loadTexture("images/particles/snow.png", {},
            function () { requestAnimationFrame(redraw); }
        );
       var particleMaterial = new THREE.PointCloudMaterial({ color: 0xEEEEEE, size: 6 ,map: texture,transparent: true});
   
        particleSystem = new THREE.PointCloud(particles, particleMaterial);
        scene.add(particleSystem); 
      console.log("Snow loaded and se mauntin");
  };
    this.remove = function(scene){
        scene.remove(particleSystem);
    };
   var render = this.render;
}