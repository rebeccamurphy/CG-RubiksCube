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
	
	var clsidetop = new Cube(shaders, [black, black, black, yellow, red,green]  ,['Y', 'G','R'], [ls, pos]);
	var ctop = new Cube(shaders, [black, black, black, yellow, red,black] ,[ 'Y', 'R'], [ls,pos+1] );
	var crsidetop = new Cube(shaders, [black, blue, black, yellow, red,black] ,['Y', 'R','B' ], [ls,pos+2] );
	
	
	var clsidemid = new Cube(shaders, [black, black, black, black, red,green] ,['G', 'R'], [ls, pos+3] );
	var cmid = new Cube(shaders, [black, black, , black, red, black]  ,['R'], [ls, pos+4]);
	var crsidemid = new Cube(shaders, [black, blue, black, black, red,black],['R', 'B'], [ls,pos+5]  );
	
	
	var clsidebot = new Cube(shaders,  [black, black, white, black, red,green] ,['W', 'G', 'R'], [ls, pos+6]);
	var cbot = new Cube(shaders, [black, black, white, black, red,black] ,['W', 'R'], [ls, pos+7] );
	var crsidebot = new Cube(shaders, [black, blue, white, black, red,black] ,['W', 'R', 'B'], [ls,pos+8] );
	
	break;
	
	case 0:
	
	var clsidetop = new Cube(shaders, [black, black, black, yellow, black,green],['Y', 'G'],[ls, pos]  );
	var ctop = new Cube(shaders, [black, black, black, yellow, black,black], ['Y'] ,[ls, pos+1] );
	var crsidetop = new Cube(shaders, [black, blue, black, yellow, black,black],['Y','B'],[ls, pos+2]  );
	
	var clsidemid = new Cube(shaders, [black, black, black, black, black,green],['G'], [ls, pos+3]  );
	var cmid = new Cube(shaders, [black, black, , black, black, black],[], [ls, pos+4]  );	
	var crsidemid = new Cube(shaders, [black, blue, black, black, black,black],['B'],[ls, pos+5]  );
	
	var clsidebot = new Cube(shaders,  [black, black, white, black, black,green],['W', 'G'], [ls, pos+6] );
	var cbot = new Cube(shaders, [black, black, white, black, black,black],['W'],[ls, pos+7]  );
	var crsidebot = new Cube(shaders, [black, blue, white, black, black,black],['W', 'B'] ,[ls, pos+8] );
	
	break;
	
	case 1:
	var clsidetop = new Cube(shaders, [orange, black, black, yellow, black,green] ,['O','Y', 'G'],[ls, pos] );
	var ctop = new Cube(shaders, [orange, black, black, yellow, black,black],[ 'O','Y'] ,[ls, pos+1] );
	var crsidetop = new Cube(shaders, [orange, blue, black, yellow, black,black],['O','Y', 'B']  ,[ls, pos+2]);
	
	var clsidemid = new Cube(shaders, [orange, black, black, black, black,green] ,['O', 'G'] ,[ls, pos+3]);
	var cmid = new Cube(shaders, [orange, black, black, black, black, black] ,[] ,[ls, pos+4]);
	var crsidemid = new Cube(shaders, [orange, blue, black, black, black,black] ,['O', 'B'],[ls, pos+5] );
	
	var clsidebot = new Cube(shaders,  [orange, black, white, black, black,green],['O','W', 'G'] ,[ls, pos+6]);
	var cbot = new Cube(shaders, [orange, black, white, black, black,black] ,['0','W', 'G'],[ls, pos+7] );
	var crsidebot = new Cube(shaders, [orange, blue, white, black, black,black] ,['O','W', 'B'],[ls, pos+8] );
	
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

function changepos(cube, turn) 
{
switch(turn)
{ 
case 'Y':
	

break;

case 'W':

break;

case 'B'

break:

case 'G'

break;

case 'R'

break;

case 'O':

break;
}