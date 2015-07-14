/**
 * Created by Karo
 */

function Leave1(){
    
        
       var particles2 = new THREE.Geometry;
        var particle2;
        var particleSystem2;
      
    
    this.load = function(scene){
  

    //Animation
        var redraw = function() {
         
        particles2.vertices.forEach(function (child) {
            child.z -= 3;
            
            if (child.z < -500)
                child.z = Math.random()* 800;
               

        
        });
        
        particleSystem2.rotation.set(0, particleSystem2.rotation.y + 0.01, 0);
      
        particles2.vertices[0].set(0, particles2.vertices[0].y + 0.1, 0);

         particleSystem2.geometry.verticesNeedUpdate = true;
        requestAnimationFrame(redraw);
      }
   
   
        // Startposition
      
        for (var p = 0; p < 200; p++) {
            particle2 = new THREE.Vector3(Math.random() * 400 - 250, Math.random() * 300 - 250, Math.random() * 2000 - 800);
            particles2.vertices.push(particle2);
        }
    
        // Material
         var texture2 = THREE.ImageUtils.loadTexture("images/particles/leave1.png", {},
            function () { requestAnimationFrame(redraw); }
        );
        var particleMaterial2 = new THREE.PointCloudMaterial({ color: 0xEEEEEE, size: 6 ,map: texture2,transparent: true});
   
        particleSystem2 = new THREE.PointCloud(particles2, particleMaterial2);
     
        scene.add(particleSystem2);
      console.log("Leaves loaded");
  };
    this.remove = function(scene){
        scene.remove(particleSystem2);
    };
   var render = this.render;
}