/**
 * Created by Caro on 10.07.2015.
 */

function Grass (){


    var grassStalk;
    var grassStalkLoader;
    var grassArray;
    var i;

    this.load = function(scene){
        //grass loader
        grassStalkLoader = new THREE.ColladaLoader();
        grassStalkLoader.options.convertUpAxis = true;
        grassArray = [];
        grassStalkLoader.load('dae/Grashalm.dae', function(collada){
            grassStalk = collada.scene;
            //store mesh
            var colladaObj = collada.scene.children[0];
            for (i = 0; i < 20; i++) {
                newGrassStalk = new THREE.Object3D();
                for (var j = 0; j < colladaObj.children.length; j++) {
                    newGrassStalk.add(new THREE.Mesh(colladaObj.children[j].geometry, colladaObj.children[j].material));
                }
                newGrassStalk.scale.x = newGrassStalk.scale.y = newGrassStalk.scale.z = 0.01;
                newGrassStalk.position.set(0,yOffset,0);

                newGrassStalk.rotation.x = -90*Math.PI/180;
                newGrassStalk.rotation.y = 65*Math.PI/180;

                //rotate own axis to make every grassStalk individual
                newGrassStalk.rotation.z = ((getRandomArbitrary(0, 2)*30)*Math.PI/180);
                newGrassStalk.rotation.x = 240*Math.PI/180;

                newGrassStalk.position.set((i*3), 5, (i*3));
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