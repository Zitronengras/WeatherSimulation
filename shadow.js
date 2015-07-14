/**
 * Created by Karo
 */

function Shadow(){

    this.addShadow = function(object){
        object.traverse(function (child) {
            child.traverse(function (e) {
                e.castShadow = true;
            })
        });
    }
}








