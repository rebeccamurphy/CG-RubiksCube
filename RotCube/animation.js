function animation(turncolor, i)
{
//switch(solution[step].charAt(0))
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