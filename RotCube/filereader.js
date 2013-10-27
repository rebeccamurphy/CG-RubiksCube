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
    // load and compile our shaders into a program object
    //drawables = makesolved(drawables, shaders);
    renderScene(); // begin render loop
}

String.prototype.killWhiteSpace = function() {
    return this.replace(/\s/g, '');
};

function definecubecolors(text)
{

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
  drawables = [];
  var shaders = initShaders( gl, "vertex-shader", "fragment-shader" )
  makecube(drawables,shaders , backside, leftside, topside, rightside,frontside,bottomside);

}



function readCubeFile(evt) {
    //Retrieve the first (and only!) File from the FileList object
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
{
  var slt=[]
  for(var i =0; i<sol.length; i+=2 )
  {
    slt.push(sol.substr(i, 2));
  }
  solution = slt;
}
function readSolFile(evt) {
    //Retrieve the first (and only!) File from the FileList object
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
  var doc = document.getElementById('cubeinput');
  doc.addEventListener('change', readCubeFile, false);

  var sol = document.getElementById('solinput');
  sol.addEventListener('change', readSolFile, false);
}

