/**
 * Created by Caro on 06.07.2015.
 */

function Audio(camera, scene){

    var listener = new THREE.AudioListener();
    camera.add( listener );

    var audio = new THREE.Audio( listener );
    audio.load('music/wind-artic-cold.wav');

    this.play = function(){
        audio.setRefDistance(20);
        audio.autoplay = true;
        scene.add(audio);
    };
}