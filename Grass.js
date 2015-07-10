/**
 * Created by Caro on 10.07.2015.
 */

function Grass (color){


    var grassStalk;
    var grassStalkLoader;
    var grassArray;
    var i;
    var shadow = new Shadow();


    this.load = function(scene, color){
        //grass loader
        grassStalkLoader = new THREE.ColladaLoader();
        grassStalkLoader.options.convertUpAxis = true;
        grassArray = [];
        grassStalkLoader.load('dae/Grashalm.dae', function(collada){

            var grassMaterial = new THREE.MeshLambertMaterial({color: color});
            grassStalk = collada.scene;

            var colladaObj = collada.scene.children[0];
            for (i = 0; i < 200; i++) {
                var newGrassStalk = new THREE.Object3D();

                for (var j = 0; j < colladaObj.children.length; j++) {
                    newGrassStalk.add(new THREE.Mesh(colladaObj.children[j].geometry, grassMaterial));
                }
                newGrassStalk.scale.x = newGrassStalk.scale.y = newGrassStalk.scale.z = 0.01;
                newGrassStalk.position.set(0,0,0);

                newGrassStalk.rotation.x = -90*Math.PI/180;
                newGrassStalk.rotation.y = 65*Math.PI/180;

                //rotate own axis to make every grassStalk individual
                newGrassStalk.rotation.z = ((getRandomArbitrary(0, 2)*30)*Math.PI/180);
                newGrassStalk.rotation.x = 240*Math.PI/180;

                newGrassStalk.position.x += getRandomArbitrary(0, -125);
                newGrassStalk.position.z += getRandomArbitrary(0, 300);

                shadow.addShadow(newGrassStalk);
                newGrassStalk.updateMatrix();
                grassArray.push(newGrassStalk);
                scene.add(newGrassStalk);
            }
            console.log('grassStalk loaded');
            grassStalk.position.set(-3,yOffset,-3);
            shadow.addShadow(grassStalk);
            grassStalk.updateMatrix();
            scene.add(grassStalk);
        });


    };

    this.remove = function(scene){
        scene.remove(grassStalk);
        scene.remove(grassStalkLoader);
        for(i = 0; i < grassArray.length; i++){
            scene.remove(grassArray[i]);
        }
    };

    function getRandomArbitrary(min, max) {
        return Math.random() * (max - min) + min;
    }
}