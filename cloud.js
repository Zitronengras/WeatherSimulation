/**
 * Created by Caro on 10.07.2015.
 */

function Cloud(){

    var shadow = new Shadow();
    var cloudArray;
    var cloud;
    var cloudLoader;
    var i;


    this.load = function(scene, amount) {

        cloudLoader = new THREE.ColladaLoader();
        cloudLoader.options.convertUpAxis = true;
        cloudArray = [];
        cloudLoader.load('dae/Wolken.dae', function (collada) {
            cloud = collada.scene;

            var colladaObj = collada.scene.children[0];
            for (i = 0; i < amount; i++) {
                var newCloud = new THREE.Object3D();

                for (var j = 0; j < colladaObj.children.length; j++) {
                    newCloud.add(new THREE.Mesh(colladaObj.children[j].geometry, colladaObj.children[j].material));
                }
                newCloud.scale.x = newCloud.scale.y = newCloud.scale.z = 0.6;
                newCloud.position.set(0, 100, 0);

                newCloud.rotation.z = -110 * Math.PI / 180;

                newCloud.position.y += getRandomArbitrary(0, 70);
                newCloud.position.x += getRandomArbitrary(-120, 120);
                newCloud.position.z += getRandomArbitrary(250, 350);


                shadow.addShadow(newCloud);
                newCloud.updateMatrix();
                cloudArray.push(newCloud);
                scene.add(newCloud);
            }
            console.log('cloud loaded');
        });
    };

    this.remove = function(scene){
        scene.remove(cloudLoader);
        for(i = 0; i < cloudArray.length; i++){
            scene.remove(cloudArray[i]);
        }
    };

    function getRandomArbitrary(min, max) {
        return Math.random() * (max - min) + min;
    }
}
