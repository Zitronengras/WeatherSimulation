/**
 * Created by Caro on 30.06.2015.
 */
/**
 * Created by Caro on 24.06.2015.
 */

function Mountain(yOffset) {

    var shadow = new Shadow();

    this.load = function(scene) {
        //console.log('mountain');

        //mountain loader
        var mountain;
        var mountainLoader = new THREE.ColladaLoader();
        mountainLoader.options.convertUpAxis = true;
        mountainLoader.load('dae/mountain.dae', function(collada){
            mountain = collada.scene;
            //console.log('mountain loaded');
            mountain.position.set(-80, 15+yOffset, 470);
            mountain.updateMatrix();
            scene.add(mountain);
        });

        //seaCoast loader
        var seaCoast;
        var seaCoastLoader = new THREE.ColladaLoader();
        seaCoastLoader.options.convertUpAxis = true;
        seaCoastLoader.load('dae/SeaCoast_V3.dae', function(collada){
            seaCoast = collada.scene;
            //console.log('seaCoast loaded');
            seaCoast.position.set(50, 10+yOffset, -660);
            shadow.addShadow(seaCoast);
            seaCoast.updateMatrix();
            scene.add(seaCoast);
        });
    }
}