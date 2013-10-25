

function position(position, turns)
{
	this.position = position;
	this.turns = turns;
}
function getposition(pos, posindex)
{
	for (var i =0; i< posindex.length(); i++)
	{
		if (posindex[i].pos == pos )
			return posindex[i]
	}

}
function makesolved(drawables, shaders)
{
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
	var pos =0;
	for (var ls =-1; ls <2; ls++)
	{
	pos =0;
	{
	switch(ls)
	{
	case -1:
	
	var clsidetop = new Cube(shaders, [black, black, black, yellow, red,green] , new position( [ls, pos],['Y', 'G','R'] ));
	var ctop = new Cube(shaders, [black, black, black, yellow, red,black] , new position([ls,pos+1],[ 'Y', 'R']) );
	var crsidetop = new Cube(shaders, [black, blue, black, yellow, red,black] , new position([ls,pos+2],['Y', 'R','B' ] ));
	
	
	var clsidemid = new Cube(shaders, [black, black, black, black, red,green] ,new position ([ls, pos+3],['G', 'R']) );
	var cmid = new Cube(shaders, [black, black, , black, red, black]  , new position ([ls, pos+4],['R']));
	var crsidemid = new Cube(shaders, [black, blue, black, black, red,black], new position([ls,pos+5],['R', 'B'])  );
	
	
	var clsidebot = new Cube(shaders,  [black, black, white, black, red,green], new position( [ls, pos+6],['W', 'G', 'R']));
	var cbot = new Cube(shaders, [black, black, white, black, red,black] , new position ([ls, pos+7],['W', 'R'] ));
	var crsidebot = new Cube(shaders, [black, blue, white, black, red,black] , new position( [ls,pos+8],['W', 'R', 'B']));
	
	break;
	
	case 0:
	
	var clsidetop = new Cube(shaders, [black, black, black, yellow, black,green], new position([ls, pos],['Y', 'G'] ) );
	var ctop = new Cube(shaders, [black, black, black, yellow, black,black], new position( [ls, pos+1],['Y']) );
	var crsidetop = new Cube(shaders, [black, blue, black, yellow, black,black], new position([ls, pos+2], ['Y','B'] ));
	
	var clsidemid = new Cube(shaders, [black, black, black, black, black,green], new position([ls, pos+3],['G']) );
	var cmid = new Cube(shaders, [black, black, , black, black, black],new position ([ls, pos+4], [])  );	
	var crsidemid = new Cube(shaders, [black, blue, black, black, black,black], new position([ls, pos+5], ['B']) );
	
	var clsidebot = new Cube(shaders,  [black, black, white, black, black,green], new position([ls, pos+6],['W', 'G'] ));
	var cbot = new Cube(shaders, [black, black, white, black, black,black], new position([ls, pos+7] ,['W']) );
	var crsidebot = new Cube(shaders, [black, blue, white, black, black,black], new position( [ls, pos+8],['W', 'B']) );
	
	break;
	
	case 1:
	var clsidetop = new Cube(shaders, [orange, black, black, yellow, black,green] , new position([ls, pos], ['O','Y', 'G']));
	var ctop = new Cube(shaders, [orange, black, black, yellow, black,black], new position([ls, pos+1],[ 'O','Y']) );
	var crsidetop = new Cube(shaders, [orange, blue, black, yellow, black,black],new position([ls, pos+2],['O','Y', 'B']) );
	
	var clsidemid = new Cube(shaders, [orange, black, black, black, black,green] ,new position([ls, pos+3], ['O', 'G']));
	var cmid = new Cube(shaders, [orange, black, black, black, black, black] , new position([ls, pos+4],[]) );
	var crsidemid = new Cube(shaders, [orange, blue, black, black, black,black] ,new position([ls, pos+5], ['O', 'B']));
	
	var clsidebot = new Cube(shaders,  [orange, black, white, black, black,green], new position([ls, pos+6],['O','W', 'G']) );
	var cbot = new Cube(shaders, [orange, black, white, black, black,black] ,new position([ls, pos+7],['0','W', 'G']) );
	var crsidebot = new Cube(shaders, [orange, blue, white, black, black,black] ,new position([ls, pos+8],['O','W', 'B']));
	
	break;
	}
	
    ctop.move(1.0, Y_AXIS);
	ctop.move(ls, Z_AXIS);
	ctop.move(space, Y_AXIS);
	ctop.move(space*ls, Z_AXIS);
	drawables.push(ctop);
    toprow.push(ctop);
	
	cmid.move(ls, Z_AXIS);
	cmid.move(space*ls, Z_AXIS);
	drawables.push(cmid);
	
	//center bottom
	cbot.move(-1.0,Y_AXIS);
	cbot.move(ls, Z_AXIS);
	cbot.move(-space, Y_AXIS);
	cbot.move(space*ls, Z_AXIS);
	drawables.push(cbot)
	}
	
	crsidetop.move(1.0, X_AXIS);
  	crsidetop.move(1.0,Y_AXIS);
	crsidetop.move(ls, Z_AXIS);
	crsidetop.move(space, Y_AXIS);
	crsidetop.move(space, X_AXIS);
	crsidetop.move(space*ls, Z_AXIS);
	drawables.push(crsidetop);
	toprow.push(crsidetop);
	
	
	crsidemid.move(1.0, X_AXIS);
	crsidemid.move(ls, Z_AXIS);
	crsidemid.move(space, X_AXIS);
	crsidemid.move(space*ls, Z_AXIS);
	drawables.push(crsidemid);
	
	
	crsidebot.move(1.0, X_AXIS);
  	crsidebot.move(-1.0,Y_AXIS);
	crsidebot.move(ls, Z_AXIS);
	crsidebot.move(-space, Y_AXIS);
	crsidebot.move(space, X_AXIS);
	crsidebot.move(space*ls, Z_AXIS);
	
	drawables.push(crsidebot);
	
	//left
	
	clsidetop.move(-1.0, X_AXIS);
  	clsidetop.move(1.0,Y_AXIS);
	clsidetop.move(ls,Z_AXIS);
	clsidetop.move(space, Y_AXIS);
	clsidetop.move(-space, X_AXIS);
	clsidetop.move(space*ls, Z_AXIS);
	drawables.push(clsidetop);
	toprow.push(clsidetop);
	

	clsidemid.move(-1.0, X_AXIS);
	clsidemid.move(ls, Z_AXIS);
	clsidemid.move(-space, X_AXIS);
	clsidemid.move(space*ls, Z_AXIS);
	drawables.push(clsidemid);
	
	
	clsidebot.move(-1.0, X_AXIS);
  	clsidebot.move(-1.0,Y_AXIS);
	clsidebot.move(ls, Z_AXIS);
	clsidebot.move(-space, Y_AXIS);
	clsidebot.move(-space, X_AXIS);
	clsidebot.move(space*ls, Z_AXIS);
	
	drawables.push(clsidebot);
	
	}
	return drawables;
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
	posindex.push(new position([ls, pos+4],[] ));
	posindex.push(new position([ls, pos+5],['O', 'B']));
	
	posindex.push(new position([ls, pos+6],['O','W', 'G'] ));
	posindex.push(new position([ls, pos+7],['O','W', 'G']));
	posindex.push(new position([ls, pos+8],['O','W', 'B']) );
	
	break;
	}
	}
}

var posindex = makeposindex();
function changepos(cube, turn) 
{
switch(turn)
{ 
case 'Y':
	switch(cube.pos.position[0])
	{
		case -1:
			switch(cube.pos.position[1])
			{
			case 0:
			break;

			case 1:
			break;

			case 2:
			break;

			case 3:
			break;

			case 4:
			break;

			case 5:
			break;

			case 6:
			break;

			case 8:
			break;
			}
		break;
		

		case 0:
		break;
		

		case 1:
		break;
	}	

break;

case 'W':

break;

case 'B':

break;

case 'G':

break;

case 'R':

break;

case 'O':

break;
}
}