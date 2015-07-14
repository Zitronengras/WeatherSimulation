/**
 * Created by Caro on 10.07.2015.
 */

function Grass(){

    var grassStalk;
    var grassStalkLoader;
    var grassArray;
    var i;
    var shadow = new Shadow();

    var x = 0;
    var z = 0;

    this.load = function(scene, color, ground){
        //grass loader
        grassStalkLoader = new THREE.ColladaLoader();
        grassStalkLoader.options.convertUpAxis = true;
        grassArray = [];
        grassStalkLoader.load('dae/Grashalm.dae', function(collada){

            var grassMaterial = new THREE.MeshLambertMaterial({color: color});
            grassStalk = collada.scene;

            var colladaObj = collada.scene.children[0];
            for (i = 0; i < 250; i++) {
                var newGrassStalk = new THREE.Object3D();

                for (var j = 0; j < colladaObj.children.length; j++) {
                    newGrassStalk.add(new THREE.Mesh(colladaObj.children[j].geometry, grassMaterial));
                }
                newGrassStalk.scale.x = newGrassStalk.scale.y = newGrassStalk.scale.z = 0.09;
                newGrassStalk.position.set(0,0,0);

                newGrassStalk.rotation.x = -90*Math.PI/180;
                newGrassStalk.rotation.y = 65*Math.PI/180;

                //rotate own axis to make every grassStalk individual
                newGrassStalk.rotation.z = ((getRandomArbitrary(0, 2)*30)*Math.PI/180);
                newGrassStalk.rotation.x = 240*Math.PI/180;

                /*x += getRandomArbitrary(0, -125);
                z += getRandomArbitrary(0, 500);
                setPosition(newGrassStalk, ground, getVerticesArray(), x, z);*/

                newGrassStalk.position.x += getRandomArbitrary(0, -125);
                newGrassStalk.position.z += getRandomArbitrary(10, 300);
                //setPosition(newGrassStalk, ground, getVerticesArray(), null, null);


                /*newGrassStalk.position.x += getRandomArbitrary(0, -125);
                newGrassStalk.position.z += getRandomArbitrary(10, 300);
                setPosition(newGrassStalk, ground, getVerticesArray(), null, null);*/

                shadow.addShadow(newGrassStalk);
                newGrassStalk.updateMatrix();
                grassArray.push(newGrassStalk);
                //scene.add(newGrassStalk);
            }
            grassStalk.scale.x = grassStalk.scale.y = grassStalk.scale.z = 0.05;
            //grassStalk.position.set(-3,yOffset,-3);
            shadow.addShadow(grassStalk);
            setPosition(grassStalk, ground, getVerticesArray(), 0, 0);
            grassStalk.updateMatrix();
            console.log('grassStalk loaded');


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