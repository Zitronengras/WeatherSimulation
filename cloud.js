/**
 * Created by Caro on 10.07.2015.
 */

function Cloud (){

    //cloud loader
    var cloudLoader = new THREE.ColladaLoader();
    cloudLoader.options.convertUpAxis = true;
    cloudLoader.load('dae/Wolken.dae', function(collada){
        cloud = collada.scene;
        console.log('cloud loaded');
        cloud.scale.x = cloud.scale.y = cloud.scale.z = 0.5;
        cloud.position.set(1, 100, 1);
        shadow.addShadow(cloud);
        cloud.updateMatrix();
        scene.add(cloud);
    });

    this.load = function(scene){

    }

}
