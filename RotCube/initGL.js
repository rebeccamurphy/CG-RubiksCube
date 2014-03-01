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
var turncolor=""; //stores the turn color
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
    gl.enable(gl.DEPTH_TEST); // required for 3D hidden-surface elimination
	
	// set the projection matrix
	projection = perspective(30.0, 2.0, 1, 100);
	//projection = mult(projection, lookAt(vec3(5, 0, 10), vec3(0,0,0), vec3(0,1,0)));
	 camera = lookAt([7,10,13], [0,0,0], [0,1,0]); // sets the starting point to look at.
	
    // set up an event handler for this button
	var c = document.getElementById("Btn_PV");
    c.addEventListener("click",
        function(){
                //Looks at the bottom back of the cube.
			 camera = lookAt([-7,-10,-13], [0,0,0], [0,1,0]);	
        },
        false
    );

    var e = document.getElementById("Btn_OV");
    e.addEventListener("click",
        function(){
				//looks at the front top of the cube.
				camera = lookAt([7,10,13], [0,0,0], [0,1,0]);

        },
        false
    );

    var f = document.getElementById("Btn_DC");
    f.addEventListener("click",
        function(){
            //makes a default solved cube.
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
           		//animates the solution only if a cube is loaded and a solution text is uploaded. 
			     var warning ='';
           		if (animate==false && solutiontext!='' &&  drawables.length !=0)
           		{
           		
           		if ( cubenum >1||reani>0 )

           		{	
                    if (cubetext!='')
                    definecubecolors(cubetext);
                    else
                    {    drawables =[];
                        var shaders = initShaders( gl, "vertex-shader", "fragment-shader" );
                    drawables = makesolved(drawables, shaders);
                    }
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
step=0, turncount =0; //step keeps track of which part of the solution the program is animating, and turncount keeps track how many times that step has turned.
var renderScene = function(){
    // start from a clean frame buffer for this frame
    gl.clear( gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);    
    
    if (anistart==true )		 	
    { 	
    	if (reani !=1) // if the cube is being reanimated, it will reset the state of the cube, and then wait 350 milisecs, then start tha animation
        	{ 
        		for (i in drawables) //draws all the new cubes, then starts to animate them. 
    				drawables[i].draw();
    				
    				setTimeout(function() {
    					requestAnimFrame(renderScene);
    						animatecubes();
    										}, 350) ;
		
				anistart = false;
        	}
        else
    	   {   
    	    animatecubes();
            requestAnimFrame(renderScene);
            anistart =false;
 	       }
	}
	else
		{	
			animatecubes();
			requestAnimFrame(renderScene);
		}
	}
