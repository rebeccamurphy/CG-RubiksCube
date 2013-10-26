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

var angle=0;
var turnr = false;
var turnl = false;
var turncolor="";
var turn = false;
var drawables = [];


 // used to store any objects that need to be drawn
var animate= false;
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
    var y = document.getElementById("Btn_Y");
    y.addEventListener("click",
        function(){
            /* This button starts 90deg
                rotation (to the right) of the top cube. */
				
				if (turn==false)
				{
				angle = 0;
				turn = true;
				turncolor ='Y';
				}
				
        },
        false
    );

    // set up an event handler for this button
    var w = document.getElementById("Btn_W");
    w.addEventListener("click",
        function(){
            /* This button starts a -90deg
                rotation (to the left) of the top cube. */
				//turn = true;
				if (turn == false)
				{
				angle = 0.0;
				turn = true;
				turncolor = 'W';
				}
        },
        false
    );

    var r = document.getElementById("Btn_R");
    r.addEventListener("click",
        function(){
            /* This button starts a -90deg
                rotation (to the left) of the top cube. */
				//turn = true;
				if (turn == false)
				{
				angle = 0.0;
				turn = true;
				turncolor = 'R';
				}
        },
        false
    );
    var o = document.getElementById("Btn_O");
    o.addEventListener("click",
        function(){
            /* This button starts a -90deg
                rotation (to the left) of the top cube. */
				//turn = true;
				if (turn == false)
				{
				angle = 0.0;
				turn = true;
				turncolor = 'O';
				}
        },
        false
    );
    var b = document.getElementById("Btn_B");
    b.addEventListener("click",
        function(){
            /* This button starts a -90deg
                rotation (to the left) of the top cube. */
				//turn = true;
				if (turn == false)
				{
				angle = 0.0;
				turn = true;
				turncolor = 'B';
				}
        },
        false
    );

    var g = document.getElementById("Btn_G");
    g.addEventListener("click",
        function(){
            /* This button starts a -90deg
                rotation (to the left) of the top cube. */
				//turn = true;
				if (turn == false)
				{
				angle = 0.0;
				turn = true;
				turncolor = 'G';
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
			 camera = lookAt([-6,-3,-10], [-1,0,0], [0,1,0]);	
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


	var ani = document.getElementById("Btn_Ani");
    ani.addEventListener("click",
        function(){
           
				
				animate =true;
        },
        false
    );
}
/* Global render callback - would draw multiple objects if there were more than one */
step=0, turncount =0;
var renderScene = function(){
    // start from a clean frame buffer for this frame
    gl.clear( gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

    // loop over all objects and draw each
    //HEY change numcubes
    var i;
	var numcubes =27;
    for (i in drawables) {

		//if (turn == true&& angle !=90.0*numcubes  ) 
		if (animate == true&& angle !=90.0*numcubes  ) 


		{	
			animation(solution[step].charAt(0), i);

			drawables[i].draw();
			angle+=2.0;
			if (angle>=90 * numcubes)
					
					{
					for (i in drawables)
					 {
					 	changepos(drawables[i], turncolor);
					 	
					 }
					//HEY add something for animate here.
					angle =0;
					turn = false;
					turncolor ='';
					turncount+=1;
					if (turncount == parseInt(solution[step].charAt(1)))
					{	console.log('gothere');
						step+=1;
						turncount=0;
						if (step== solution.length)
							animate = false;
					}

				}
		}
		else{ 
        drawables[i].draw();
		}
    }

    // queue up this same callback for the next frame
    requestAnimFrame(renderScene);
}
