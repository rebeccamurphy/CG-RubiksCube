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
var anistart = false;
var reani = 0;

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
     gl.clearColor( 0.0, 0.0, 0.0, 1.0 ); // background color black
    //gl.clearColor( 0.0, 5.0, 0.0, 1.0 ); // background color
    gl.enable(gl.DEPTH_TEST); // required for 3D hidden-surface elimination
	
	// set the projection matrix
	projection = perspective(30.0, 2.0, 1, 100);
	//projection = mult(projection, lookAt(vec3(5, 0, 10), vec3(0,0,0), vec3(0,1,0)));
	 camera = lookAt([7,10,13], [0,0,0], [0,1,0]);

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
	var c = document.getElementById("Btn_PV");
    c.addEventListener("click",
        function(){
			//This button makes projection perspective 
			//projection = perspective(30.0, 2.0, 1, 100);
			//projection = mult(projection, lookAt(vec3(5, 0, 10), vec3(0,0,0), vec3(0,1,0)));
			 camera = lookAt([-7,-10,-13], [0,0,0], [0,1,0]);	
        },
        false
    );

    var e = document.getElementById("Btn_OV");
    e.addEventListener("click",
        function(){
				//This button makes the projection ortho
				//projection = ortho(-2, 2, -1.5, 1, -1, 100);
				camera = lookAt([7,10,13], [0,0,0], [0,1,0]);

        },
        false
    );

    var f = document.getElementById("Btn_DC");
    f.addEventListener("click",
        function(){
               var shaders = initShaders( gl, "vertex-shader", "fragment-shader" );
                drawables=[];
            // load and compile our shaders into a program object
                drawables = makesolved(drawables, shaders);
        },
        false
    );

	var ani = document.getElementById("Btn_Ani");
    ani.addEventListener("click",
        function(){
           		
			     var warning ='';
           		if (animate==false && solutiontext!='' &&  drawables.length !=0)
           		{
           		
           		if ( cubenum >1||reani>0 )
           		{	
                    definecubecolors(cubetext);
				}
				animate =true;
				anistart =true;
				reani+=1;
				step=0;
				turncount=0;
				}
                if (solutiontext=='')
                    warning +='Make you sure upload a solution file. ';
                if (drawables.length ==0)
                    warning += 'Upload a cube or press default cube to create a solved cube.'
                if (warning !='')
                    alert(warning);

				
        },
        false
    );
    
}
/* Global render callback - would draw multiple objects if there were more than one */
step=0, turncount =0, rando =0;
var renderScene = function(){
    // start from a clean frame buffer for this frame
    gl.clear( gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

    
    
     if (anistart==true )
    		 	
    { 	if (reani !=1)
        { 
        for (i in drawables)
    	drawables[i].draw();
    	setTimeout(function() {

    		requestAnimFrame(renderScene);
    		animatecubes();
    					}, 350) ;
		
		anistart = false;
        }
        else
        {   animatecubes();
            requestAnimFrame(renderScene);
            anistart =false;
        }
	}
	else
		{	animatecubes();
			requestAnimFrame(renderScene);

		}
	}
