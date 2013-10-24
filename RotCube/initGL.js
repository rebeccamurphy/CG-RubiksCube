/*
    initGL.js - Essential setup for our WebGL application
*/

var canvas; // global to hold reference to an HTML5 canvas
var gl; // global to hold reference to our WebGL context

// a few simple constants
const X_AXIS = 0;
const Y_AXIS = 1;
const Z_AXIS = 2;

var camera;

var angle;
var turnr = false;
var turnl = false;
var turn = false;
var drawables = [];
var toprow =[];
var topindexes = [0,3,6, 9,12,15,18,21,24];
var botindexes = [2,5,8,11,14,17,20,23,26];
var rightindexes = [3,4,5,12,13,14,21,22,23];
var leftindexes = [];

 // used to store any objects that need to be drawn
var animate=[];
/* Initialize global WebGL stuff - not object specific */
function initGL()
{
    // look up our canvas element
    canvas = document.getElementById( "gl-canvas" );

    // obtain a WebGL context bound to our canvas
    gl = WebGLUtils.setupWebGL( canvas );
    if ( !gl ) { alert( "WebGL isn't available" ); }

    gl.viewport( 0, 0, canvas.width, canvas.height ); // use the whole canvas
    gl.clearColor( 0.0, 0.0, 0.0, 1.0 ); // background color
    gl.enable(gl.DEPTH_TEST); // required for 3D hidden-surface elimination
	
	// set the projection matrix
	projection = perspective(30.0, 2.0, 1, 100);
	//projection = mult(projection, lookAt(vec3(5, 0, 10), vec3(0,0,0), vec3(0,1,0)));
	 camera = lookAt([7,10,10], [0,0,0], [0,1,0]);

	/*
		
		Notes on projection and camera, different things I tried, and just general messing around.
		
    // note: added rotation just to better see the shapes of our cubes
    //projection = ortho(-2, 2, -1.5, 1.5, -100, 100);
    The smaller the angle the bigger the cubes get
	//projection = lookAt([0,0,0],[0,0,0],[0,0,0])* projection;
	//projection = mult(projection, rotate(30, [0.5, 1, 0.12]));
	What do the numbers of eye signify? at is wear the camera will be pointing, so 0,0,0 would be the origin.  
	does eye and up correspond to near and far? 
	What causes it to shift sideways? 
	up = (x, y, z) x leans it left, y vertical, z right
	projection = mult(projection, lookAt( vec3([0,0,0]), vec3 ([0,0,0]), vec3([0,0,0])));
	*/
	
	
    // set up an event handler for this button
    var a = document.getElementById("Btn_TR");
    a.addEventListener("click",
        function(){
            /* This button starts 90deg
                rotation (to the right) of the top cube. */
				
				if (turn==false)
				{
				angle = 0.0;
				turn = true;
				turnr = true;
				}
				
        },
        false
    );

    // set up an event handler for this button
    var b = document.getElementById("Btn_TL");
    b.addEventListener("click",
        function(){
            /* This button starts a -90deg
                rotation (to the left) of the top cube. */
				//turn = true;
				if (turn == false)
				{
				angle = 0.0;
				turn = true;
				turnl = true;
				}
        },
        false
    );
	    var c = document.getElementById("Btn_PV");
    c.addEventListener("click",
        function(){
			//This button makes projection perspective 
			projection = perspective(30.0, 2.0, 1, 100);
			//projection = mult(projection, lookAt(vec3(5, 0, 10), vec3(0,0,0), vec3(0,1,0)));
			 camera = lookAt([6,2,7], [0,0,0], [0,1,0]);	
        },
        false
    );
	
	 var d = document.getElementById("Btn_OV");
    d.addEventListener("click",
        function(){
				//This button makes the projection ortho
				//projection = ortho(-2, 2, -1.5, 1, -1, 100);
				camera = lookAt([7,10,10], [0,0,0], [0,1,0]);
        },
        false
    );
}

/* Global render callback - would draw multiple objects if there were more than one */
var renderScene = function(){
    // start from a clean frame buffer for this frame
    gl.clear( gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

    // loop over all objects and draw each
    var i, frame;
    for (i in drawables) {

		if (turn == true&& angle !=90.0*9 && topindexes.indexOf(parseInt(i)) !=-1) 

		if (turn == true&& angle !=90.0*9) 

		{	// && topindexes.indexOf(parseInt(i)) !=-1
			//alert( i + " " +rightindexes.indexOf(parseInt(i)))
			//alert( i +" "+ i.valueOf());
			if (turnr==true)

			  drawables[i].orbit(1.0, Y_AXIS);
			
			else 
				drawables[i].orbit(-1.0, Y_AXIS);
			
			drawables[i].orbit(1.0, Z_AXIS);
			
			else 
				drawables[i].orbit(-1.0, Z_AXIS);

			drawables[i].draw();
			angle+=1.0;
			if (angle>=90.0*9)
			
					{
					turnr = false;
					turn = false;
					turnl= false;}
		}
		/*else if( turn == true&& angle !=90.0*9 && rightindexes.indexOf(parseInt(i)) !=-1)
		{
		if (turnl==true)
			  drawables[i].orbit(1.0, X_AXIS);
			
		//	else 
		//		drawables[i].orbit(-1.0, Z_AXIS);
			drawables[i].draw();
			angle+=1.0;
			if (angle>=90.0*9)
			
					{
					turnr = false;
					turn = false;
					turnl= false;}
		}
		*/
		else{ 
        drawables[i].draw();
		}
    }

    // queue up this same callback for the next frame
    requestAnimFrame(renderScene);
}
