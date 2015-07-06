/**
 * Created by Caro on 06.07.2015.
 */

function Audio(camera){

    var audio;
    var listener;

    this.playTrack = function(audioURL, scene){
        listener = new THREE.AudioListener();
        camera.add(listener);

        audio = new THREE.Audio(listener);
        audio.load(audioURL);
        //audio.autoplay = true;
        //audio.setLoop(2);
        scene.add(audio);

        audio.play();
        console.log('add audio');
    };

    this.stopTrack = function(){
        //audio.autoplay = false;
        //scene.remove(audio);
        audio.stop();

        console.log('remove audio');

    };
}