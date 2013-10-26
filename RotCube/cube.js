/*
    cube.js - Drawable WebGL cube object definition

    IMPORTANT NOTE:
    This scripts assumes that the initGL.js script has already been loaded,
    and that consequently a variety of global variables are already defined,
    such as: gl, drawables, X_AXIS, Y_AXIS, Z_AXIS
*/

/*
    Constructor for ColorCube objects
   
 */
/*
Notes on functions taken in class. 

// ortho (l,r,b,t,n,f)
//var cam = lookAt(eye,at,up);
//var modelview = mult(cam, mod);
//var proj = perspective (fovy, aspect, n f)
//var mod = translate (...); 
//attibute vec4 vposition;
// uniform mat4 proj; uniform is the type of variable so it can be passed down the pipeline
//uniform mat4 modelview mat4 modelview;
// gl_Position = projection * modelview *vposition; 
 
 */

var Cube = function (program, facecolors, pos) { this.init(program, facecolors, pos); }

/* Initialize properties of this color cube object. */
Cube.prototype.init = function(program, facecolors, pos)
{
    this.points = []; // this array will hold raw vertex positions
    this.colors = []; // this array will hold per-vertex color data
    this.transform = mat4(); // initialize object transform as identity matrix
	this.facecolors = facecolors;
	this.pos = pos;
    // TODO make sure we pass the face colors into this call
    this.mkcube(); // delegate to auxiliary function
	
    this.program = program; // Load shaders and initialize attribute buffers

    this.cBufferId = gl.createBuffer(); // reserve a buffer object
    gl.bindBuffer( gl.ARRAY_BUFFER, this.cBufferId ); // set active array buffer
    /* send vert colors to the buffer, must repeat this
       wherever we change the vert colors for this cube */
    gl.bufferData( gl.ARRAY_BUFFER, flatten(this.colors), gl.STATIC_DRAW );

    this.vBufferId = gl.createBuffer(); // reserve a buffer object
    gl.bindBuffer( gl.ARRAY_BUFFER, this.vBufferId ); // set active array buffer
    /* send vert positions to the buffer, must repeat this
       wherever we change the vert positions for this cube */
    gl.bufferData( gl.ARRAY_BUFFER, flatten(this.points), gl.STATIC_DRAW );
}

Cube.prototype.draw = function(){

    gl.useProgram( this.program ); // set the current shader programs

    var projId = gl.getUniformLocation(this.program, "projection"); 
    gl.uniformMatrix4fv(projId, false, flatten(projection));

	var camId = gl.getUniformLocation(this.program, "camera");
    gl.uniformMatrix4fv(camId, false, flatten(camera));
	
    var xformId = gl.getUniformLocation(this.program, "modeltransform");
    gl.uniformMatrix4fv(xformId, false, flatten(this.transform));

    gl.bindBuffer( gl.ARRAY_BUFFER, this.cBufferId ); // set active array buffer
    // map buffer data to the vertex shader attribute
    var vColorId = gl.getAttribLocation( this.program, "vColor" );
    gl.vertexAttribPointer( vColorId, 4, gl.FLOAT, false, 0, 0 );
    gl.enableVertexAttribArray( vColorId );

    gl.bindBuffer( gl.ARRAY_BUFFER, this.vBufferId ); // set active array buffer
    // map buffer data to the vertex shader attribute
    var vPosId = gl.getAttribLocation( this.program, "vPosition" );
    gl.vertexAttribPointer( vPosId, 4, gl.FLOAT, false, 0, 0 );
    gl.enableVertexAttribArray( vPosId );

    // now push buffer data through the pipeline to render this object
    gl.drawArrays( gl.TRIANGLES, 0, this.numverts() );
	
}

/* Returns the total count of vertices to be sent into the pipeline. */
Cube.prototype.numverts = function() {return this.points.length;};

/* Default vertex positions for unit cube centered at the origin. */
Cube.prototype.vertices = [
    [ -0.5, -0.5,  0.5, 1.0 ],
    [ -0.5,  0.5,  0.5, 1.0 ],
    [  0.5,  0.5,  0.5, 1.0 ],
    [  0.5, -0.5,  0.5, 1.0 ],
    [ -0.5, -0.5, -0.5, 1.0 ],
    [ -0.5,  0.5, -0.5, 1.0 ],
    [  0.5,  0.5, -0.5, 1.0 ],
    [  0.5, -0.5, -0.5, 1.0 ]
];

/* Default vertex colors for the color cube. */
Cube.prototype.vcolors = [
    [ 0.0, 0.0, 0.0, 1.0 ], // black
    [ 1.0, 0.0, 0.0, 1.0 ], // red
    [ 1.0, 1.0, 0.0, 1.0 ], // yellow
    [ 0.0, 1.0, 0.0, 1.0 ], // green
    [ 0.0, 0.0, 1.0, 1.0 ], // blue
    [ 1.0, 0.0, 1.0, 1.0 ], // magenta
    [ 1.0, 1.0, 1.0, 1.0 ], // white
    [ 0.0, 1.0, 1.0, 1.0 ]  // cyan
];

/*
    Build one of the faces for this cube object.

    TODO change this so that we specify a single color (via a
        parameter) for the quad face instead of using vcolors
*/
Cube.prototype.mkquad = function(a, b, c, d, e)
{
    this.points.push( vec4(this.vertices[a]) );
    this.colors.push( vec4(e) );

    this.points.push( vec4(this.vertices[b]) );
    this.colors.push( vec4(e) );

    this.points.push( vec4(this.vertices[c]) );
    this.colors.push( vec4(e) );

    this.points.push( vec4(this.vertices[a]) );
    this.colors.push( vec4(e) );

    this.points.push( vec4(this.vertices[c]) );
    this.colors.push( vec4(e) );

    this.points.push( vec4(this.vertices[d]) );
    this.colors.push( vec4(e) );
}

/*
    Build all faces of this cube object.
    TODO change this so that we specify the colors (via parameter)
        for the different faces and pass them into mkquad 
*/
Cube.prototype.mkcube = function()
{
	//each of these is one face
	//last param is color. 
    this.mkquad( 1, 0, 3, 2, this.facecolors[0] );
    this.mkquad( 2, 3, 7, 6, this.facecolors[1] );
    this.mkquad( 3, 0, 4, 7, this.facecolors[2] );
    this.mkquad( 6, 5, 1, 2, this.facecolors[3] );
    this.mkquad( 4, 5, 6, 7, this.facecolors[4] );
    this.mkquad( 5, 4, 0, 1, this.facecolors[5] );
}

/* Translate this cube along the specified canonical axis. */
Cube.prototype.move = function(dist, axis){
    var delta = [0, 0, 0];

    if (axis === undefined) axis = Y_AXIS;
    delta[axis] = dist;

    this.transform = mult(translate(delta), this.transform);
}

/* Rotate this cube around the specified canonical axis. */
Cube.prototype.turn = function(angle, axis){
    var avec = [0, 0, 0];

    if (axis === undefined) axis = Y_AXIS;
    avec[axis] = 1;

    this.transform = mult(this.transform, rotate(angle, avec));
}
Cube.prototype.orbit = function(angle, axis){
    var avec = [0, 0, 0];

    if (axis === undefined) axis = Y_AXIS;
    avec[axis] = 1;

    this.transform = mult(rotate(angle, avec), this.transform);
}


/* Set up event callback to start the application */
window.onload = function() {
    initGL(); // basic WebGL setup for the scene 
    addfile();
    // load and compile our shaders into a program object
    var shaders = initShaders( gl, "vertex-shader", "fragment-shader" );
    //drawables = makesolved(drawables, shaders);
    renderScene(); // begin render loop
}
