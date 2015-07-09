/**
 * Created by Caro on 30.06.2015.
 */

function Skybox(){

    var skyBox;
    var materialVar;

    this.load = function(scene, imagePrefix){
        var cubePages = ["right", "left", "top", "back", "front"];
        var imageSuffix = ".png";

        var materialArray = [];
        var cubePagesI = 0;
        for (var i = 0; i < 6; i++){
            if (i == 3) {
                materialArray.push(new THREE.MeshBasicMaterial({transparent: true, opacity: 0}));
            }
            else {
                materialArray.push(
                    materialVar = new THREE.MeshBasicMaterial({
                    map: THREE.ImageUtils.loadTexture(imagePrefix + cubePages[cubePagesI] + imageSuffix),
                    side: THREE.BackSide
                }));
                cubePagesI += 1;
            }
        }
        var skyGeometry = new THREE.BoxGeometry(500, 550, 2500);
        var skyMaterial = new THREE.MeshFaceMaterial( materialArray );
        skyBox = new THREE.Mesh(skyGeometry, skyMaterial);
        skyMaterial.needsUpdate = true;

        scene.add( skyBox );
    };
    this.remove = function(scene){
        scene.remove(skyBox);
    };
}