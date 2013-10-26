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

	var i;
	var numcubes =27;
function animatecubes(){
    for (i in drawables) {

    	//MAKE THIS INTO FUNCTION AND DO A TIMEOUT ON THAT FUNCTION.
		//if (turn == true&& angle !=90.0*numcubes  ) 
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
					//HEY add something for animate here.
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