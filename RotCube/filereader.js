var cubetext ="";
var cubenum = 0;
var solutiontext="";
var solution =[];
var rubix =[];
/* Set up event callback to start the application */
window.onload = function() {
    initGL(); // basic WebGL setup for the scene 
    var shaders = initShaders( gl, "vertex-shader", "fragment-shader" );
    addfile();
    //initializes all the necessary buttons and functions for the program.
    renderScene(); // begin render loop
}

//this function was created to strip the whitespace ofthe text read in, just in case
String.prototype.killWhiteSpace = function() {
    return this.replace(/\s/g, '');
};

function definecubecolors(text) 
{
  //takes the text from the file and translate the patten into the colors of the cube. 
  text =text.killWhiteSpace();
  var backside = text.substr(0,9); //only affects backside color of -1 cubes starting with [-1,6]
  var leftside = "";
  var topside ="";
  var rightside="";
  for (var i =0; i< 19; i+=9)
  {
    leftside+=text.substr(9+i,3);
    topside+=text.substr(12+i,3);
    rightside+=text.substr(15+i,3);

  }
  var frontside= text.substr(36,9);
  var bottomside = text.substr(45, 9);
  //to create  a new cube, drawables is emptied, and a new cube is made with the right colors from the text file. 
  drawables = [];
  var shaders = initShaders( gl, "vertex-shader", "fragment-shader" )
  makecube(drawables,shaders , backside, leftside, topside, rightside,frontside,bottomside);

}



function readCubeFile(evt) {
    //Retrieve the first (and only!) File from the FileList object
    //correspons to the choose file for Cube. 
    var f = evt.target.files[0]; 

    if (f) {
      var r = new FileReader();
      r.onload = function(e) { 
        var contents = e.target.result;
        cubetext = contents;
        
        definecubecolors(cubetext);
        rubix.push(cubetext.killWhiteSpace());
        cubenum+=1;

      }
      r.readAsText(f);
    } else { 
      alert("Failed to load file");
    }
  }

function definesolution(sol)
{//translates the solution text to an array of turns for the cube.
  var slt=[]
  for(var i =0; i<sol.length; i+=2 )
  {
    slt.push(sol.substr(i, 2));
  }
  solution = slt;
}

function readSolFile(evt) {
    //Retrieve the first (and only!) File from the FileList object
    //corresponds to the choose file for solution
    var f = evt.target.files[0]; 

    if (f) {
      var r = new FileReader();
      r.onload = function(e) { 
        var contents = e.target.result;
        solutiontext = contents;
        definesolution(solutiontext);
      }
      r.readAsText(f);
    } else { 
      alert("Failed to load file");
    }
  }

function addfile(){
  //attaches the functions defined in initGL to the buttons. 
  var doc = document.getElementById('cubeinput');
  doc.addEventListener('change', readCubeFile, false);

  var sol = document.getElementById('solinput');
  sol.addEventListener('change', readSolFile, false);
}

