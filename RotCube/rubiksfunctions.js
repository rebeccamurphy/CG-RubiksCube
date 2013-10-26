

function position(coord, turns)
{
	this.coord = coord;
	this.turns = turns;
}
function makeposindex()
{
	var posindex =[];
	for (var ls =-1; ls<2; ls++)
	{	
	pos=0;
		
	switch(ls)
	{
	case -1:
	
	posindex.push(new position([ls, pos], ['Y', 'G','R']));
	posindex.push(new position([ls,pos+1],[ 'Y', 'R'])); 
	posindex.push(new position([ls,pos+2],['Y', 'R','B' ]));
	
	
	posindex.push(new position([ls, pos+3],['G', 'R']));
	posindex.push(new position([ls, pos+4],['R']));
	posindex.push(new position([ls, pos+5],['R', 'B']));
	
	
	posindex.push(new position([ls, pos+6],['W', 'G', 'R']));
	posindex.push(new position([ls, pos+7],['W', 'R']));
	posindex.push(new position([ls, pos+8],['W', 'R', 'B']));
	
	break;
	
	case 0:
	
	posindex.push(new position([ls, pos],['Y', 'G']));
	posindex.push(new position([ls,pos+1],['Y'] ));
	posindex.push(new position([ls,pos+2],['Y','B']));
	
	posindex.push(new position([ls, pos+3],['G']));
	posindex.push(new position([ls, pos+4],[]));	
	posindex.push(new position([ls, pos+5],['B']));
	
	posindex.push(new position([ls, pos+6],['W', 'G']));
	posindex.push(new position([ls, pos+7],['W']));
	posindex.push(new position([ls, pos+8],['W', 'B'] ));
	
	break;
	
	case 1:
	posindex.push(new position([ls, pos],['O','Y', 'G']));
	posindex.push(new position([ls,pos+1],[ 'O','Y'] ));
	posindex.push(new position([ls,pos+2],['O','Y', 'B'] ));
	
	posindex.push(new position([ls, pos+3],['O', 'G'] ));
	posindex.push(new position([ls, pos+4],['O'] ));
	posindex.push(new position([ls, pos+5],['O', 'B']));
	
	posindex.push(new position([ls, pos+6],['O','W', 'G'] ));
	posindex.push(new position([ls, pos+7],['O','W']));
	posindex.push(new position([ls, pos+8],['O','W', 'B']) );
	
	break;
	}
	}
	return posindex;
}


var posindex = makeposindex();


function getposition(posit, posindex){
	
	for (var i =0; i< posindex.length; i++)
	{
		if (posindex[i].coord.toString() == posit.toString() )
			
			return posindex[i];
	}

}

function makesolved(drawables, shaders){
	var black =[ 0.0, 0.0, 0.0, 1.0 ]; // black
    var red =[ 1.0, 0.0, 0.0, 1.0 ]; // red
    var orange =[ 1.0, .5, 0.0, 1.0 ]; // orange
    var yellow =[ 1.0, 1.0, 0.0, 1.0 ]; // yellow
    var green =[ 0.0, 1.0, 0.0, 1.0 ]; // green
    var blue =[ 0.0, 0.0, 1.0, 1.0 ]; // blue
    var magenta=[ 1.0, 0.0, 1.0, 1.0 ]; // magenta
    var white =[ 1.0, 1.0, 1.0, 1.0 ]; // white
    var cyan = [ 0.0, 1.0, 1.0, 1.0 ]; // cyan
	
	//mid
	var space = .1;
	var pos =-9;
	
	//var ls = 1;
	for (var ls =-1; ls <2; ls++)
	{
	pos+=9
	{
	switch(ls)
	{
	case -1:
	
	var clsidetop = new Cube(shaders, [black, black, black, yellow, red,green] , posindex [pos] );
	var ctop = new Cube(shaders, [black, black, black, yellow, red,black] , posindex [pos+1] );
	var crsidetop = new Cube(shaders, [black, blue, black, yellow, red,black] , posindex [pos+2]);
	
	
	var clsidemid = new Cube(shaders, [black, black, black, black, red,green] ,posindex [pos+3]);
	var cmid = new Cube(shaders, [black, black, , black, red, black]  , posindex [pos+4]);
	var crsidemid = new Cube(shaders, [black, blue, black, black, red,black], posindex[pos+5] );
	
	
	var clsidebot = new Cube(shaders,  [black, black, white, black, red,green], posindex[ pos+6]);
	var cbot = new Cube(shaders, [black, black, white, black, red,black] , posindex [pos+7]);
	var crsidebot = new Cube(shaders, [black, blue, white, black, red,black] , posindex [pos+8]);
	
	break;
	
	case 0:
	
	var clsidetop = new Cube(shaders, [black, black, black, yellow, black,green], posindex [pos] );
	var ctop = new Cube(shaders, [black, black, black, yellow, black,black], posindex[ pos+1] );
	var crsidetop = new Cube(shaders, [black, blue, black, yellow, black,black], posindex[pos+2]);
	
	var clsidemid = new Cube(shaders, [black, black, black, black, black,green], posindex[pos+3] );
	var cmid = new Cube(shaders, [black, black, , black, black, black],posindex [pos+4] );	
	var crsidemid = new Cube(shaders, [black, blue, black, black, black,black], posindex[ pos+5] );
	
	var clsidebot = new Cube(shaders,  [black, black, white, black, black,green], posindex[pos+6]);
	var cbot = new Cube(shaders, [black, black, white, black, black,black], posindex[pos+7]  );
	var crsidebot = new Cube(shaders, [black, blue, white, black, black,black], posindex [ pos+8] );
	
	break;
	
	case 1:
	var clsidetop = new Cube(shaders, [orange, black, black, yellow, black,green] , posindex[ pos]);
	var ctop = new Cube(shaders, [orange, black, black, yellow, black,black], posindex[pos+1]);
	var crsidetop = new Cube(shaders, [orange, blue, black, yellow, black,black],posindex[pos+2]);
	
	var clsidemid = new Cube(shaders, [orange, black, black, black, black,green] ,posindex[pos+3]);
	var cmid = new Cube(shaders, [orange, black, black, black, black, black] , posindex[pos+4] );
	var crsidemid = new Cube(shaders, [orange, blue, black, black, black,black] ,posindex[pos+5]);
	
	var clsidebot = new Cube(shaders,  [orange, black, white, black, black,green], posindex[pos+6]);
	var cbot = new Cube(shaders, [orange, black, white, black, black,black] ,posindex[pos+7] );
	var crsidebot = new Cube(shaders, [orange, blue, white, black, black,black] , posindex[pos+8]);
	
	break;
	}
	
    ctop.move(1.0, Y_AXIS);
	ctop.move(ls, Z_AXIS);
	ctop.move(space, Y_AXIS);
	ctop.move(space*ls, Z_AXIS);
	
	
	cmid.move(ls, Z_AXIS);
	cmid.move(space*ls, Z_AXIS);
	
	
	//center bottom
	cbot.move(-1.0,Y_AXIS);
	cbot.move(ls, Z_AXIS);
	cbot.move(-space, Y_AXIS);
	cbot.move(space*ls, Z_AXIS);
	
	}
	
	crsidetop.move(1.0, X_AXIS);
  	crsidetop.move(1.0,Y_AXIS);
	crsidetop.move(ls, Z_AXIS);
	crsidetop.move(space, Y_AXIS);
	crsidetop.move(space, X_AXIS);
	crsidetop.move(space*ls, Z_AXIS);
	
	crsidemid.move(1.0, X_AXIS);
	crsidemid.move(ls, Z_AXIS);
	crsidemid.move(space, X_AXIS);
	crsidemid.move(space*ls, Z_AXIS);
	
	
	
	crsidebot.move(1.0, X_AXIS);
  	crsidebot.move(-1.0,Y_AXIS);
	crsidebot.move(ls, Z_AXIS);
	crsidebot.move(-space, Y_AXIS);
	crsidebot.move(space, X_AXIS);
	crsidebot.move(space*ls, Z_AXIS);
	
	
	//left
	
	clsidetop.move(-1.0, X_AXIS);
  	clsidetop.move(1.0,Y_AXIS);
	clsidetop.move(ls,Z_AXIS);
	clsidetop.move(space, Y_AXIS);
	clsidetop.move(-space, X_AXIS);
	clsidetop.move(space*ls, Z_AXIS);
	

	clsidemid.move(-1.0, X_AXIS);
	clsidemid.move(ls, Z_AXIS);
	clsidemid.move(-space, X_AXIS);
	clsidemid.move(space*ls, Z_AXIS);
	
	
	clsidebot.move(-1.0, X_AXIS);
  	clsidebot.move(-1.0,Y_AXIS);
	clsidebot.move(ls, Z_AXIS);
	clsidebot.move(-space, Y_AXIS);
	clsidebot.move(-space, X_AXIS);
	clsidebot.move(space*ls, Z_AXIS);
	
	drawables.push( clsidetop);  
	drawables.push( ctop);
	drawables.push( crsidetop );
	
	drawables.push( clsidemid);
	drawables.push( cmid  );
	drawables.push( crsidemid );
	
	drawables.push( clsidebot );
	drawables.push( cbot  );
	drawables.push( crsidebot);
	
	}
	return drawables;
}



function innerchangeposY(cube)
{

	switch(cube.pos.coord[0]) // how far away
	{
		case -1:
			switch(cube.pos.coord[1]) // what cube
			{
			case 0:
				cube.pos = getposition([-1,2], posindex);
			break;

			case 1:
				cube.pos = getposition([0,2], posindex);
			break;

			case 2:
				cube.pos = getposition([1,2], posindex);
			break;
			}
		break;
		
		console.log (cube.pos);
		case 0:
			switch(cube.pos.coord[1]) // what cube
			{
			case 0:
				cube.pos = getposition([-1,1], posindex);
			break;

			case 2:
				cube.pos = getposition([1,1], posindex);
			break;
			}
		break;
		

		case 1:
			switch(cube.pos.coord[1]) // what cube
			{
			case 0:
				cube.pos = getposition([-1,0], posindex);
			break;

			case 1:
				cube.pos = getposition([0,0], posindex);
			break;

			case 2:
				cube.pos = getposition([1,0], posindex);
			break;
			}
		break;	
}
}

function innerchangeposW(cube)

{

switch(cube.pos.coord[0]) // how far away
		{
			
		case -1:
			switch(cube.pos.coord[1]) // what cube
			{

			case 6:
				cube.pos = getposition([1,6], posindex);
			break;

			case 7:
				
				cube.pos = getposition([0,6], posindex);
				
			break;

			case 8:
				cube.pos = getposition([-1,6], posindex);
			break;
			}
		break;
		case 0:
			switch(cube.pos.coord[1]) // what cube
			{

			case 6:
				cube.pos = getposition([1,7], posindex);
			break;

			case 8:
				cube.pos = getposition([-1,7], posindex);
			break;
			}
		break;
		case 1:
			switch(cube.pos.coord[1]) // what cube
			{

			case 6:
				
				cube.pos = getposition([1,8], posindex);

			break;

			case 7:
				cube.pos = getposition([0,8], posindex);
			break;

			case 8:
				cube.pos = getposition([-1,8], posindex);
			break;
			}
		break;
}
}


function innerchangeposB(cube)

{

switch(cube.pos.coord[0]) // how far away
		{
			
		case -1:
			switch(cube.pos.coord[1]) // what cube
			{

			case 2:
				cube.pos = getposition([-1,8], posindex);
			break;

			case 5:
				
				cube.pos = getposition([0,8], posindex);
				
			break;

			case 8:
				cube.pos = getposition([1,8], posindex);
			break;
			}
		break;
		case 0:
			switch(cube.pos.coord[1]) // what cube
			{

			case 2:
				//console.log(cube.pos);
				cube.pos = getposition([-1,5], posindex);
				//console.log(cube.pos);
				//console.log(cube.pos.turns.indexOf('Y') !=-1);
			break;

			case 8:
				cube.pos = getposition([1,5], posindex);
			break;
			}
		break;
		case 1:
			switch(cube.pos.coord[1]) // what cube
			{

			case 2:
				
				cube.pos = getposition([-1,2], posindex);

			break;

			case 5:
				cube.pos = getposition([0,2], posindex);
			break;

			case 8:
				cube.pos = getposition([1,2], posindex);
			break;
			}
		break;
}
}

function innerchangeposG(cube)

{

switch(cube.pos.coord[0]) // how far away
		{
		
		case -1:
			switch(cube.pos.coord[1]) // what cube
			{

			case 0:
				cube.pos = getposition([1,0], posindex);
			break;

			case 3:
				
				cube.pos = getposition([0,0], posindex);
				
			break;

			case 6:
				cube.pos = getposition([-1,0], posindex);
			break;
			}
		break;
		case 0:
			switch(cube.pos.coord[1]) // what cube
			{

			case 0:
				cube.pos = getposition([1,3], posindex);
				
			break;

			case 6:
				cube.pos = getposition([-1,3], posindex);
			break;
			}
		break;
		case 1:
			switch(cube.pos.coord[1]) // what cube
			{

			case 0:
				
				cube.pos = getposition([1,6], posindex);

			break;

			case 3:
				cube.pos = getposition([0,6], posindex);
			break;

			case 6:
				cube.pos = getposition([-1,6], posindex);
			break;
			}
		break;
}
}

function innerchangeposR(cube)

{

switch(cube.pos.coord[0]) // how far away
		{
			
		case -1:
			switch(cube.pos.coord[1]) // what cube
			{

			case 0:
				cube.pos = getposition([-1,6], posindex);
			break;

			case 1:
				cube.pos = getposition([-1,3], posindex);
			break;

			case 2:
				cube.pos = getposition([-1,0], posindex);
			break;

			case 3:
				cube.pos = getposition([-1,7], posindex);
			break;

			case 5:
				cube.pos = getposition([-1,1], posindex);
			break;

			case 6:
				cube.pos = getposition([-1,8], posindex);
			break;

			case 7:
				cube.pos = getposition([-1,5], posindex);
			break;
			
			case 8:
				cube.pos = getposition([-1,2], posindex);
			break;
			}
		break;
		
}
}

function innerchangeposO(cube)

{

switch(cube.pos.coord[0]) // how far away
		{
			
		case 1:
			switch(cube.pos.coord[1]) // what cube
			{

			case 0:
				cube.pos = getposition([1,2], posindex);
			break;

			case 1:
				cube.pos = getposition([1,5], posindex);
			break;

			case 2:
				cube.pos = getposition([1,8], posindex);
			break;

			case 3:
				cube.pos = getposition([1,1], posindex);
			break;

			case 5:
				cube.pos = getposition([1,7], posindex);
			break;

			case 6:
				cube.pos = getposition([1,0], posindex);
			break;

			case 7:
				cube.pos = getposition([1,3], posindex);
			break;
			
			case 8:
				cube.pos = getposition([1,6], posindex);
			break;
			}
		break;
		
}
}

function changepos(cube, turn) {
switch(turn)
{ 
case 'Y':
	innerchangeposY(cube);
break;
case 'W':
	innerchangeposW(cube);
break;

case 'B':
	innerchangeposB(cube);
break;
	
case 'G':
	innerchangeposG(cube);
break;

case 'R':
	innerchangeposR(cube);
break;

case 'O':
	innerchangeposO(cube)
break;
}
}

function chartocolor(C){
	var colorsvalues =[];
	var colors = [];
	var red =[ 1.0, 0.0, 0.0, 1.0 ]; // red
    var orange =[ 1.0, .5, 0.0, 1.0 ]; // orange
    var yellow =[ 1.0, 1.0, 0.0, 1.0 ]; // yellow
    var green =[ 0.0, 1.0, 0.0, 1.0 ]; // green
    var blue =[ 0.0, 0.0, 1.0, 1.0 ]; // blue
    var white =[ 1.0, 1.0, 1.0, 1.0 ]; // white

    colorsvalues.push(red, orange,yellow,green,blue,white);
   	colors.push("R", "O", "Y", "G","B","W");

   	return colorsvalues[colors.indexOf(C)];
}

function makecube(drawable, shaders,backside, leftside, topside, rightside,frontside,bottomside){
	
	
	var black =[ 0.0, 0.0, 0.0, 1.0 ]; // black
	var red =[ 1.0, 0.0, 0.0, 1.0 ]; // red
    var orange =[ 1.0, .5, 0.0, 1.0 ]; // orange
    var yellow =[ 1.0, 1.0, 0.0, 1.0 ]; // yellow
    var green =[ 0.0, 1.0, 0.0, 1.0 ]; // green
    var blue =[ 0.0, 0.0, 1.0, 1.0 ]; // blue
    var white =[ 1.0, 1.0, 1.0, 1.0 ]; // white
	//mid
	var space = .1;
	var pos =-9;
	
	//var ls = 1;
	for (var ls =-1; ls <2; ls++)
	{
	pos+=9
	{
	switch(ls)
	{
	case -1:
	//[forward side, right side, bottom side, top side, back side, left side]  

	var clsidetop = new Cube(shaders, [black, black, black, chartocolor(topside.charAt(0)), chartocolor(backside.charAt(6)), chartocolor(leftside.charAt(2))] , posindex [pos] );
	var ctop = new Cube(shaders, [black, black, black, chartocolor(topside.charAt(1)), chartocolor(backside.charAt(7)),black] , posindex [pos+1] );
	var crsidetop = new Cube(shaders, [black, chartocolor(rightside.charAt(0)), black, chartocolor(topside.charAt(2)), chartocolor(backside.charAt(8)),black] , posindex [pos+2]);
	
	
	var clsidemid = new Cube(shaders, [black, black, black, black,chartocolor(backside.charAt(3)),chartocolor(leftside.charAt(1))] ,posindex [pos+3]);
	var cmid = new Cube(shaders, [black, black, , black, chartocolor(backside.charAt(4)), black]  , posindex [pos+4]);
	var crsidemid = new Cube(shaders, [black, chartocolor(rightside.charAt(1)), black, black, chartocolor(backside.charAt(5)),black], posindex[pos+5] );
	
	
	var clsidebot = new Cube(shaders,  [black, black,chartocolor(bottomside.charAt(6)), black, chartocolor(backside.charAt(0)),chartocolor(leftside.charAt(0))], posindex[ pos+6]);
	var cbot = new Cube(shaders, [black, black, chartocolor(bottomside.charAt(7)), black, chartocolor(backside.charAt(1)),black] , posindex [pos+7]);
	var crsidebot = new Cube(shaders, [black, chartocolor(rightside.charAt(2)), chartocolor(bottomside.charAt(8)), black, chartocolor(backside.charAt(2)),black] , posindex [pos+8]);
	
	break;
	
	case 0:
	
	var clsidetop = new Cube(shaders, [black, black, black, chartocolor(topside.charAt(3)), black,chartocolor(leftside.charAt(5))], posindex [pos] );
	var ctop = new Cube(shaders, [black, black, black,chartocolor(topside.charAt(4)), black,black], posindex[ pos+1] );
	var crsidetop = new Cube(shaders, [black, chartocolor(rightside.charAt(3)), black, chartocolor(topside.charAt(5)), black,black], posindex[pos+2]);
	
	var clsidemid = new Cube(shaders, [black, black, black, black, black,chartocolor(leftside.charAt(4))], posindex[pos+3] );
	var cmid = new Cube(shaders, [black, black, , black, black, black],posindex [pos+4] );	
	var crsidemid = new Cube(shaders, [black, chartocolor(rightside.charAt(4)), black, black, black,black], posindex[ pos+5] );
	
	var clsidebot = new Cube(shaders,  [black, black, chartocolor(bottomside.charAt(3)), black, black,chartocolor(leftside.charAt(3))], posindex[pos+6]);
	var cbot = new Cube(shaders, [black, black, chartocolor(bottomside.charAt(4)), black, black,black], posindex[pos+7]  );
	var crsidebot = new Cube(shaders, [black, chartocolor(rightside.charAt(5)), chartocolor(bottomside.charAt(5)), black, black,black], posindex [ pos+8] );
	
	break;
	
	case 1:
	var clsidetop = new Cube(shaders, [chartocolor(frontside.charAt(0)), black, black, chartocolor(topside.charAt(6)), black,chartocolor(leftside.charAt(8))] , posindex[ pos]);
	var ctop = new Cube(shaders, [chartocolor(frontside.charAt(1)), black, black, chartocolor(topside.charAt(7)), black,black], posindex[pos+1]);
	var crsidetop = new Cube(shaders, [chartocolor(frontside.charAt(2)), chartocolor(rightside.charAt(6)), black, chartocolor(topside.charAt(8)), black,black],posindex[pos+2]);
	
	var clsidemid = new Cube(shaders, [chartocolor(frontside.charAt(3)), black, black, black, black,chartocolor(leftside.charAt(7))] ,posindex[pos+3]);
	var cmid = new Cube(shaders, [chartocolor(frontside.charAt(4)), black, black, black, black, black] , posindex[pos+4] );
	var crsidemid = new Cube(shaders, [chartocolor(frontside.charAt(5)), chartocolor(rightside.charAt(7)), black, black, black,black] ,posindex[pos+5]);
	
	var clsidebot = new Cube(shaders,  [chartocolor(frontside.charAt(6)), black, chartocolor(bottomside.charAt(0)), black, black,chartocolor(leftside.charAt(6))], posindex[pos+6]);
	var cbot = new Cube(shaders, [chartocolor(frontside.charAt(7)), black, chartocolor(bottomside.charAt(1)), black, black,black] ,posindex[pos+7] );
	var crsidebot = new Cube(shaders, [chartocolor(frontside.charAt(8)), chartocolor(rightside.charAt(8)), chartocolor(bottomside.charAt(6)), black, black,black] , posindex[pos+8]);
	
	break;
	}
	
    ctop.move(1.0, Y_AXIS);
	ctop.move(ls, Z_AXIS);
	ctop.move(space, Y_AXIS);
	ctop.move(space*ls, Z_AXIS);
	
	
	cmid.move(ls, Z_AXIS);
	cmid.move(space*ls, Z_AXIS);
	
	
	//center bottom
	cbot.move(-1.0,Y_AXIS);
	cbot.move(ls, Z_AXIS);
	cbot.move(-space, Y_AXIS);
	cbot.move(space*ls, Z_AXIS);
	
	}
	
	crsidetop.move(1.0, X_AXIS);
  	crsidetop.move(1.0,Y_AXIS);
	crsidetop.move(ls, Z_AXIS);
	crsidetop.move(space, Y_AXIS);
	crsidetop.move(space, X_AXIS);
	crsidetop.move(space*ls, Z_AXIS);
	
	crsidemid.move(1.0, X_AXIS);
	crsidemid.move(ls, Z_AXIS);
	crsidemid.move(space, X_AXIS);
	crsidemid.move(space*ls, Z_AXIS);
	
	
	
	crsidebot.move(1.0, X_AXIS);
  	crsidebot.move(-1.0,Y_AXIS);
	crsidebot.move(ls, Z_AXIS);
	crsidebot.move(-space, Y_AXIS);
	crsidebot.move(space, X_AXIS);
	crsidebot.move(space*ls, Z_AXIS);
	
	
	//left
	
	clsidetop.move(-1.0, X_AXIS);
  	clsidetop.move(1.0,Y_AXIS);
	clsidetop.move(ls,Z_AXIS);
	clsidetop.move(space, Y_AXIS);
	clsidetop.move(-space, X_AXIS);
	clsidetop.move(space*ls, Z_AXIS);
	

	clsidemid.move(-1.0, X_AXIS);
	clsidemid.move(ls, Z_AXIS);
	clsidemid.move(-space, X_AXIS);
	clsidemid.move(space*ls, Z_AXIS);
	
	
	clsidebot.move(-1.0, X_AXIS);
  	clsidebot.move(-1.0,Y_AXIS);
	clsidebot.move(ls, Z_AXIS);
	clsidebot.move(-space, Y_AXIS);
	clsidebot.move(-space, X_AXIS);
	clsidebot.move(space*ls, Z_AXIS);
	
	drawable.push( clsidetop);  
	drawable.push( ctop);
	drawable.push( crsidetop );
	
	drawable.push( clsidemid);
	drawable.push( cmid  );
	drawable.push( crsidemid );
	
	drawable.push( clsidebot );
	drawable.push( cbot  );
	drawable.push( crsidebot);
	
	}
	drawables = drawable;
}

