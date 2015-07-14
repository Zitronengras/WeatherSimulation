/**
 * Created by Caro on 06.07.2015.
 */

function Audio(){

    var track;
    var listener;

    this.playTrack = function(audioURL, scene){
        listener = new THREE.AudioListener();
        scene.add(listener);

        track = new THREE.Audio(listener);
        //audio.context
        track.load(audioURL);
        track.setLoop(3); //?

        //scene.add(audio);
        track.play();

        //console.log('add audio');
    };

    this.stopTrack = function(){
        track.stop();
        //console.log('stop audio');
    };
}