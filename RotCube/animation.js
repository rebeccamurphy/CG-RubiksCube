function animation(turncolor, i)
{
// checks if the cube is turnable for the color, and orbits the cube accordingly. 
switch (turncolor)			{
				case 'Y':
					if (drawables[i].pos.turns.indexOf(turncolor) !=-1)
					{	//console.log(drawables[i].pos.coord);
						drawables[i].orbit(-2.0, Y_AXIS);
					}	
				break;
				case 'W':
					if (drawables[i].pos.turns.indexOf(turncolor) !=-1)
						drawables[i].orbit(2.0, Y_AXIS);

				break;
				case 'R':
					if (drawables[i].pos.turns.indexOf(turncolor) !=-1)
						drawables[i].orbit(2.0, Z_AXIS);
				break;
				case 'O':
					if (drawables[i].pos.turns.indexOf(turncolor) !=-1)
						drawables[i].orbit(-2.0, Z_AXIS);
				break;
				case 'B':
					if (drawables[i].pos.turns.indexOf(turncolor) !=-1)
					{	drawables[i].orbit(-2.0, X_AXIS);
						//console.log(drawables[i].pos.coord);
					}
				break;
				case 'G':
					if (drawables[i].pos.turns.indexOf(turncolor) !=-1)
						drawables[i].orbit(2.0, X_AXIS);
				break;
			}

}

var i;
var numcubes =27; // the total angle needs to be 90 * the number of cubes in drawables. 

function animatecubes(){
	//animates the cubes , checking if enough turns have excuted of the color, if so, moves onto the next color turn. 
    for (i in drawables) {
    
		if (animate == true&& angle !=90.0*numcubes  ) 
		{	
			animation(solution[step].charAt(0), i);

			drawables[i].draw();
			angle+=2.0;
			if (angle>=90 * numcubes)
					
					{
					for (i in drawables)
					 {
					 	changepos(drawables[i], solution[step].charAt(0));
					}
					angle =0;
					turn = false;
					turncolor ='';
					turncount+=1;
					if (turncount == parseInt(solution[step].charAt(1)))
					{	
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
}