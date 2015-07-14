/**
 * Created by Caro on 10.07.2015.
 */

var grassArray = [];

function Grass(){

    var grassStalk;
    var grassStalkLoader;
    var i;
    var shadow = new Shadow();

    var x;
    var z;

    this.load = function(scene, color, ground){
        //grass loader
        grassStalkLoader = new THREE.ColladaLoader();
        grassStalkLoader.options.convertUpAxis = true;
        grassArray = [];
        grassStalkLoader.load('dae/grass.dae', function(collada){


            var grassMaterial = new THREE.MeshLambertMaterial({color: color});
            grassStalk = collada.scene;

            var colladaObj = collada.scene.children[0];
            for (i = 0; i < 250; i++) {
                var newGrassStalk = new THREE.Object3D();

                for (var j = 0; j < colladaObj.children.length; j++) {
                    newGrassStalk.add(new THREE.Mesh(colladaObj.children[j].geometry, grassMaterial));
                }

                newGrassStalk.scale.x = newGrassStalk.scale.y = newGrassStalk.scale.z = 0.09;
                //newGrassStalk.position.set(0,0,0);

                newGrassStalk.rotation.x = -90*Math.PI/180;
                newGrassStalk.rotation.y = 65*Math.PI/180;

                //rotate own axis to make every grassStalk individual
                newGrassStalk.rotation.z = ((getRandomArbitrary(0, 2)*30)*Math.PI/180);
                newGrassStalk.rotation.x = 240*Math.PI/180;

                //x = newGrassStalk.x;
                //z = newGrassStalk.z;

                //x += getRandomArbitrary(0, -125);
                //z += getRandomArbitrary(0, -500);

                newGrassStalk.position.x += getRandomArbitrary(0, -125);
                newGrassStalk.position.z += getRandomArbitrary(10, 300);
                //setPosition(newGrassStalk, ground, getVerticesArray(), x, z);


                /*newGrassStalk.position.x += getRandomArbitrary(0, -125);
                newGrassStalk.position.z += getRandomArbitrary(10, 300);
                setPosition(newGrassStalk, ground, getVerticesArray(), null, null);*/

                shadow.addShadow(newGrassStalk);
                newGrassStalk.updateMatrix();
                grassArray.push(newGrassStalk);
                //scene.add(newGrassStalk);
            }

            //console.log('grassStalk loaded');
            grassStalk.scale.x = grassStalk.scale.y = grassStalk.scale.z = 0.09;
            /*console.log('grass position');
            console.log('grass X' + grassStalk.position.x);
            console.log('grass X' + grassStalk.position.y);
            console.log('grass X' + grassStalk.position.z);*/

            shadow.addShadow(grassStalk);
            setGrassPosition(grassStalk, ground, getVerticesArray(), 0, -100);
            grassStalk.updateMatrix();
            //console.log('grassStalk loaded');
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


function setGrassPosition(object, ground, array, xPos, zPos){
    //console.log('vor zurodung position');
    //console.log(object.position);

    if(xPos != null){
        object.position.x = xPos;
        //console.log('zuordnung position x');
        //console.log(object.x);
    }
    if(zPos != null){
        object.position.z = zPos;

        //console.log('zuordnung position z');
        //console.log(object.z);
    }
    //console.log('nach zurodung position');
    //console.log(object.position);

    var range = 4;
    var minX = xPos - range;
    var maxX = xPos + range;
    var minZ = zPos - range;
    var maxZ = zPos + range;

    var xCo;
    var yCo;
    var zCo;

    for(var i=0; i < array.length; i++) {
        if(Math.round(array[i].x) > minX && Math.round(array[i].x) < maxX
            && Math.round(array[i].y) > minZ && Math.round(array[i].y) < maxZ){
            yGround = Math.round(array[i].y);
            xGround = Math.round(array[i].x);
            zGround = Math.round(array[i].z);
        }
    }

    ground.updateMatrixWorld();
    var worldCo = new THREE.Vector3(xGround, yGround, zGround);
    ground.localToWorld(worldCo);
    //console.log('worldCo');
    //console.log(worldCo);

    //move height/2 on y axis
    var box = new THREE.Box3().setFromObject(object); //creates boundingbox
    var boxMin = box.min.y;
    var boxMax = box.max.y;

    //console.log(box.min, box.max, box.size() );
    /*console.log('box size');
    console.log(box.size());
    console.log('box.min' + box.min.y);
    console.log('box.min');
    console.log(box.min.y);
    console.log('box.max' + box.max.y);
    console.log('worldCo.y');
    console.log(worldCo.y);*/


    //console.log(' min ' + boxMin + ' max ' + boxMax);*/

    //calculate height/2
    var offset = boxMax - boxMin;
    //console.log('max - min' + offset);
    if(offset < 0){
        offset = offset * (-1);
        //console.log('mal - 1' + offset);
    }
    offset = offset/2;
    //console.log('offset / 2', offset);

    offset = worldCo.y + offset;
    //console.log('wolrd.y + offset');
    //console.log(offset);

    offset -= 10;


    worldCo.setY(offset);

    //console.log('worldCo.SetY');
    //console.log(worldCo.y);
    /*
     console.log('worldCo.y');
     console.log(worldCo.y);
     worldCo.setY((worldCo.y + offset));
     console.log('worldCo');
     console.log(worldCo);

     object.updateMatrix();

     object.position.copy(worldCo);
     console.log('object position');
     console.log(object.position);*/

    //worldCo.setY();
    object.updateMatrix();


    object.position.copy(worldCo);

    //console.log('object position');
    //console.log(object.position);
}

function getGrassArray(){
    return grassArray
}

function getGrassX(array){
    for(var i = 0; i < array.length; i++){
        x = array[i].x;
    }
    return x;
}

function getGrassY(array){
    for(var i = 0; i < array.length; i++){
        y = array[i].y;
    }
    return y;
}
