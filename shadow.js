/**
 * Created by Caro on 04.07.2015.
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