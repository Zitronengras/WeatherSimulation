/**
 * Created by Caro on 06.07.2015.
 */

function Audio(){

    var audio;
    var listener;

    this.playTrack = function(audioURL, scene){
        listener = new THREE.AudioListener();
        scene.add(listener);

        audio = new THREE.Audio(listener);
        audio.load(audioURL);
        audio.setLoop(3); //?
        scene.add(audio);
        audio.play();

        console.log('add audio');
    };

    this.stopTrack = function(){
        audio.stop();
        console.log('stop audio');
    };
}