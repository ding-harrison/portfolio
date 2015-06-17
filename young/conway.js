function Create2DArray(rows, columns){
	var arr = [];

	for(var i = 0; i < rows; i++){
		arr[i] = new Array(columns);	
	}
	return arr;
}

var grid = Create2DArray(10, 5);

//Set values to empty
for(var i = 0; i < grid.length; i++){
	for(var j = 0; j < grid[i].length; j++){
		grid[i][j] = 0;	
	}
}

//for testing purposes
for(var i = 0; i < grid.length; i++){
	grid[0][i] = 1;
}

//print the grid
for(var i = 0; i < grid.length; i++){
	console.log(grid[i]);
}

//drawing the grid
var c = document.getElementById("canvas");
var ctx = c.getContext("2d");

var boxSize = 25;

console.log(grid.length + "," + grid[1].length);

//draw the grid
for(var i = 0; i < grid.length; i++){
	ctx.beginPath();
	ctx.moveTo(0, boxSize*i);
	ctx.lineTo(grid[i].length*boxSize, boxSize*i);
	ctx.fill();
	ctx.stroke();
	console.log(boxSize*i + " " +  grid[i].length*boxSize);
	for(var j = 0; j < grid[0].length; j++){
		ctx.beginPath();
		ctx.moveTo(boxSize*j, 0);
		ctx.lineTo(boxSize*j, grid.length*boxSize);
		ctx.fill();
		ctx.stroke();
	}
	ctx.stroke();
}

//draw the boxes
for(var i = 0; i < grid.length; i++){
	for(var j = 0; j < grid[i].length; j++){
		if(grid[i][j] == 1)
			ctx.fillRect(boxSize*j,boxSize*i,boxSize,boxSize);
	}
}

