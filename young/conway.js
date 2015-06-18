var c;
var ctx;

(function() {
	c = document.getElementById("canvas");
	ctx = c.getContext("2d");
	c.width = window.innerWidth;
	c.height = window.innerHeight;

})();
function Create2DArray(rows, columns){
	var arr = [];

	for(var i = 0; i < rows; i++){
		arr[i] = new Array(columns);	
	}
	return arr;
}

//Set values to empty
function createCells(){
	for(var i = 0; i < grid.length; i++){
		for(var j = 0; j < grid[i].length; j++){
			grid[i][j] = new Cell(grid,i,j,0);	
		}
	}
	grid[3][1].setState(1);
	grid[3][2].setState(1);
	grid[3][3].setState(1);
}

//print the grid
function printCells(){
	for(var i = 0; i < grid.length; i++){
		console.log(grid[i]);
	}
}

//draw the grid
function drawGrid(){
	ctx.fillStyle="#000000";
	for(var i = 0; i < grid.length; i++){
		ctx.beginPath();
		ctx.moveTo(0, boxSize*i);
		ctx.lineTo(grid[i].length*boxSize, boxSize*i);
		ctx.fill();
		ctx.stroke();
		for(var j = 0; j < grid[0].length; j++){
			ctx.beginPath();
			ctx.moveTo(boxSize*j, 0);
			ctx.lineTo(boxSize*j, grid.length*boxSize);
			ctx.fill();
			ctx.stroke();
		}
	}
}
//draw the boxes
function drawCells(){
	for(var i = 0; i < grid.length; i++){
		for(var j = 0; j < grid[i].length; j++){
			if(grid[i][j].getState() == 1){
				ctx.fillStyle="#000000";
			}else if(grid[i][j].getState() == 0){
				ctx.fillStyle="#FFFFFF";
			}
			ctx.fillRect(boxSize*j,boxSize*i,boxSize,boxSize);
		}
	}
}
function Cell(grid, row, column, state){
	this.grid = grid;
	this.row = row;
	this.column = column;
	this.state = state;

	this.getRow = function(){
		return this.row;
	}
	this.getColumn = function(){
		return this.column;
	}
	this.setState = function(state){
		this.state = state;
	}
	this.getState = function(){
		return this.state;
	}
	this.getNeighbors = function(){
		var Neighbors = [];	

		//NORTH
		if(this.row-1>=0 && grid[this.row-1][this.column].getState()==1)
			Neighbors.push(grid[this.row-1][this.column]);
		//SOUTH
		if(this.row+1<=grid.length-1 && grid[this.row+1][this.column].getState()==1)
			Neighbors.push(grid[this.row+1][this.column]);
		//WEST
		if(this.column-1>=0 && grid[this.row][this.column-1].getState()==1)
			Neighbors.push(grid[this.row][this.column-1]);
		//EAST
		if(this.column+1<=grid[this.row].length-1 && grid[this.row][this.column+1].getState()==1)
			Neighbors.push(grid[this.row][this.column+1]);
		//NORTH-WEST
		if(this.row-1>=0 && this.column-1>=0 && grid[this.row-1][this.column-1].getState()==1)
			Neighbors.push(grid[this.row-1][this.column-1]);
		//NORTH-EAST
		if(this.row-1>=0 && this.column+1<=grid[this.row].length-1 && grid[this.row-1][this.column+1].getState()==1)
			Neighbors.push(grid[this.row-1][this.column+1]);
		//SOUTH-WEST
		if(this.row+1<=grid.length-1 && this.column-1>=0 && grid[this.row+1][this.column-1].getState()==1)
			Neighbors.push(grid[this.row+1][this.column-1]);
		//SOUTH-EAST
		if(this.row+1<=grid.length-1 && this.column+1<=grid[this.row].length-1 && grid[this.row+1][this.column+1].getState()==1)
			Neighbors.push(grid[this.row+1][this.column+1]);
			
		return Neighbors;
	}
}

function updateCells(){
	/*
	* 1. Any live cell with fewer than two live neighbors dies, as if caused by under-population.
	* 2. Any live cell with two or three live neighbors lives on to the next generation.
	* 3. Any live cell with more than three live neighbors dies, as if by overcrowding.
	* 4. Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.
	*/
	
	var tempGrid = Create2DArray(5,10);
	
	for(var k=0; k < grid.length;k++){
		for(var l=0; l < grid[k].length;l++){
			tempGrid[k][l] = grid[k][l];
		}
	}
	for(var i=0; i < grid.length;i++){
		for(var j=0; j < grid[i].length;j++){
			testCell = grid[i][j];
			tempTestCell = tempGrid[i][j];	

			//1. Any live cell with fewer than two live neighbors dies, as if caused by under-population.
			if(testCell.getState()==1 && testCell.getNeighbors().length<2)
				tempTestCell.setState(0);
			//2. Any live cell with two or three live neighbors lives on to the next generation.
			else if(testCell.getState()==1 && (testCell.getNeighbors().length==2 || testCell.getNeighbors().length==3))
				tempTestCell.setState(1);
			//3. Any live cell with more than three live neighbors dies, as if by overcrowding.
			else if(testCell.getState()==1 && testCell.getNeighbors().length>3)
				tempTestCell.setState(0);
			//4. Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.
			else if(testCell.getState()==0 && testCell.getNeighbors().length==3)
				tempTestCell.setState(1);
		}
	}
	grid = tempGrid;
}

var grid = Create2DArray(5, 10);
var boxSize = 25;

createCells();
printCells();
drawGrid();
drawCells();
function run(){
	printCells();
	drawGrid();
	updateCells();
	drawCells();
}
run();
window.setInterval('run()',1000);
