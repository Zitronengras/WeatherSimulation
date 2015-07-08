/**
 * Created by Caro on 30.06.2015.
 */
/**
 * Created by Caro on 24.06.2015.
 */

function Mountain(yOffset) {

    this.load = function(scene) {
        console.log('mountain');

        //mountain loader
        var mountain;
        var mountainLoader = new THREE.ColladaLoader();
        mountainLoader.options.convertUpAxis = true;
        mountainLoader.load('dae/mountain.dae', function(collada){
            mountain = collada.scene;
            console.log('mountain loaded');
            mountain.castShadow = true;
            mountain.position.set(-80, 24+yOffset, 470);
            mountain.updateMatrix();
            scene.add(mountain);
        });

        //seaCoast loader
        var seaCoast;
        var seaCoastLoader = new THREE.ColladaLoader();
        seaCoastLoader.options.convertUpAxis = true;
        seaCoastLoader.load('dae/SeaCoast.dae', function(collada){
            seaCoast = collada.scene;
            console.log('seaCoast loaded');
            seaCoast.castShadow = true;
            seaCoast.position.set(50, 10+yOffset, -650);
            seaCoast.updateMatrix();
            scene.add(seaCoast);
        });
    }
}