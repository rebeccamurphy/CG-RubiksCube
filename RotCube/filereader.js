var cubetext ="";
var solutiontext="";

function readCubeFile(evt) {
    //Retrieve the first (and only!) File from the FileList object
    var f = evt.target.files[0]; 

    if (f) {
      var r = new FileReader();
      r.onload = function(e) { 
        var contents = e.target.result;
        cubetext = contents;     
      }
      r.readAsText(f);
    } else { 
      alert("Failed to load file");
    }
  }

function readSolFile(evt) {
    //Retrieve the first (and only!) File from the FileList object
    var f = evt.target.files[0]; 

    if (f) {
      var r = new FileReader();
      r.onload = function(e) { 
        var contents = e.target.result;
        sol = contents;
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