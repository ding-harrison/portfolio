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
}

//print the grid
function printGrid(){
	for(var i = 0; i < grid.length; i++){
		console.log(grid[i]);
	}
}

//draw the grid
function drawGrid(){
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
			if(grid[i][j].getState() == 1)
				ctx.fillRect(boxSize*j,boxSize*i,boxSize,boxSize);
		}
	}
}
function Cell(grid, row, column, state){
	this.grid = grid;
	this.row = row;
	this.column = column;
	this.state = 0;

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
		if(this.row-1>=0)
			Neighbors.push(grid[this.row-1][column]);
	}
}
	

function updateCells(){
	var randRow  = Math.floor(Math.random()*grid.length);
	var randCol  = Math.floor(Math.random()*grid[0].length);
	grid[randRow][randCol].setState(1);

	/*
	* 1. Any live cell with fewer than two live neighbors dies, as if caused by under-population.
	* 2. Any live cell with two or three live neighbors lives on to the next generation.
	* 3. Any live cell with more than three live neighbors dies, as if by overcrowding.
	* 4. Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.
	*/
}


var grid = Create2DArray(20, 50);
var boxSize = 25;

createCells();
drawGrid();
printGrid();
function run(){
	updateCells();
	drawCells();
}
window.setInterval('run()',250);
