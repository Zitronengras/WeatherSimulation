/**
 * Created by Caro on 04.07.2015.
 *
 * Code from Edmund Weitz
 */

function CubemapControl(camera, render){

    var mouseIsDown = false;
    var lastMouseX, lastMouseY;
    var lookAt = new THREE.Vector3();
    // angle determining the direction the camera is looking at in the
    // XZ-plane; 0 is towards the positive Z axis
    var angle1 = Math.PI;
    // angle determining the height (in Y direction) of the camera's
    // direction; Math.PI/2 is up, -Math.PI/2 is down
    var angle2 = 0;



    /*var mouse;
    function storeMouse(e){
        if(!e) e = window.event;
        mouse = {clientX: e.clientX, clientY: e.clientY};
    }
    storeMouse();
    /*function test(e){
        alert(mouse.clientX);
    }*/

    /*document.onmousemove=function(e) {
        var e=e||window.event,
            coordX=null,
            coordY=null;
        if(typeof(e.pageX)!=undefined) {
            coordX=e.pageX;
            coordY=e.pageY;
        } else if(typeof(e.clientX)!=undefined) {
            coordX=e.clientX+document.body.scrollLeft;
            coordY=e.clientY+document.body.scrollTop;
        }
    };*/


    /*document.onmousemove=function(e) {
        var e = e ||window.event,
        coordX = e.pageX||e.clientX+document.body.scrollLeft,
        coordY = e.pageY||e.clientY+document.body.scrollTop;


        //alert(coordX+" "+coordY);
    };*/

    /*var posx;
    var posy;
    function getMouse(e){
        posx=0;
        posy=0;
        var ev=(!e)?window.event:e;//IE:Moz
        if (ev.pageX){//Moz
            posx=ev.pageX+window.pageXOffset;
            posy=ev.pageY+window.pageYOffset;
        }
        else if(ev.clientX){//IE

            if(document.documentElement){//IE 6+ strict mode
                posx = ev.clientX + document.documentElement.scrollLeft;
                posy = ev.clientY + document.documentElement.scrollTop;
            }
            else if(document.body){//Other IE
                posx = ev.clientX + document.body.scrollLeft;
                posy = ev.clientY + document.body.scrollTop;
            }
        }
        else{return false}//old browsers
        console.log('X='+posx+' Y='+posy);
        alert('X='+posx+' Y='+posy) ;
    }*/

    //for Firefox
    posX = null;
    posY = null;

    whereAmI = function() {
        alert(posX + '\n' + poxY);
    };

    document.onmousemove = function(evt) {
        if (typeof evt == 'undefined') {
            myEvent = window.event;
        } else {
            myEvent = evt;
        }
        posX = myEvent.clientX;
        posY = myEvent.clientY;
    };

    window.onbeforeunload = function() {
        whereAmI();
    };

    // get X position of mouse and return it as a value between -1 and 1
    function mouseX () {
            return (myEvent.clientX / window.innerWidth) * 2 - 1;
    }

    // get Y position of mouse and return it as a value between -1 and 1
    function mouseY () {
            return - (myEvent.clientY / window.innerHeight) * 2 + 1;
    }

    function mouseMove () {
        if (mouseIsDown) {
            var angle1Inc = lastMouseX - mouseX();
            var angle2Inc = lastMouseY - mouseY();
            var newAngle1 = angle1 + angle1Inc;
            var newAngle2 = angle2 + angle2Inc;
            // see https://en.wikipedia.org/wiki/Polar_coordinate_system
            lookAt.x = - Math.cos(newAngle2) * Math.sin(newAngle1);
            lookAt.y = Math.sin(newAngle2);
            lookAt.z = Math.cos(newAngle2) * Math.cos(newAngle1);
            camera.lookAt(lookAt);
            render();
            return [newAngle1, newAngle2];
        }
    }

    function mouseUp () {
        if (mouseIsDown) {
            var newAngles = mouseMove();
            angle1 = newAngles[0];
            angle2 = newAngles[1];
            mouseIsDown = false;
        }
    }

    function mouseDown () {
        lastMouseX = mouseX();
        lastMouseY = mouseY();
        mouseIsDown = true;
    }

    document.addEventListener('mousedown', mouseDown);
    document.addEventListener('mouseup', mouseUp);
    document.addEventListener('mousemove', mouseMove);

}
