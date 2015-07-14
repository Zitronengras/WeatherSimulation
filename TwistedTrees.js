/**
 * Created by Karo on 10.07.2015.
 */
/**
 * Created by Karo
 */
 
 // THIS CODE IS NOT USED, SINCE THERE ARE PROBLEMS WITH TEXTURES.
 
function TwistedTrees(){

    var shadow = new Shadow();
    var twistedTreeArray;
    var twistedTree;
    var twistedTreeLoader;
    var i;


    this.load = function(scene, amount) {

    twistedTreeLoader = new THREE.ColladaLoader();
    twistedTreeLoader.options.convertUpAxis = true;
    twistedTreeArray = [];
    twistedTreeLoader.load('dae/new_trees/testbaum.dae', function (collada) {
        twistedTree = collada.scene;

        var colladaObj = collada.scene.children[0];
        for (i = 0; i < amount; i++) {
            var newTwistedTree = new THREE.Object3D();

            for (var j = 0; j < colladaObj.children.length; j++) {
                newTwistedTree.add(new THREE.Mesh(colladaObj.children[j].geometry, colladaObj.children[j].material));
            }
            newTwistedTree.scale.x = newTwistedTree.scale.y = newTwistedTree.scale.z = 1;
            newTwistedTree.position.set(0, 10, 0);

            //newTwistedTree.rotation.z = -110 * Math.PI / 180;

            /*newTwistedTree.position.y += getRandomArbitrary(0, 70);
            newTwistedTree.position.x += getRandomArbitrary(-120, 120);
            newTwistedTree.position.z += getRandomArbitrary(300, 400);
*/

            shadow.addShadow(newTwistedTree);
            newTwistedTree.updateMatrix();
            twistedTreeArray.push(newTwistedTree);
            scene.add(newTwistedTree);
            }
            //console.log('twisted tree loaded (clones)');
        });
    };

    this.remove = function(scene){
        scene.remove(twistedTreeLoader);
        for(i = 0; i < twistedTreeArray.length; i++){
            scene.remove(twistedTreeArray[i]);
        }
    };
}
