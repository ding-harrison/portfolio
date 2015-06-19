// Declaration of variables
var ARRAY_LENGTH_COL =10;
var ARRAY_LENGTH_ROW = 10;
var BOX_SIZE = 10;
var BOX_MULTIPLIER= .01;
var canvas;
var context;

// Allows resizing the entire canvas 
canvas = document.getElementById('myCanvas');
context = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
    
BOX_SIZE = canvas.width*BOX_MULTIPLIER;
ARRAY_LENGTH_COL = Math.floor(canvas.width/BOX_SIZE);
ARRAY_LENGTH_ROW = Math.floor(canvas.height/BOX_SIZE);


// Function creates a new 2d array
function Create2dArray() {
    var arr = new Array(ARRAY_LENGTH_ROW);
    for(var i = 0; i < arr.length; i++)
        arr[i] = new Array(ARRAY_LENGTH_COL);
    return arr;
}
// Resets the 2d array to all equal 0
function ResetArray(arr) {
    for (i = 0; i <arr.length ; i++) {
        for(j = 0; j < arr[i].length; j++){
            arr[i][j]= 0;
        }
    }
    return arr;
}

function FillArray(arr, cells) {
    for(var i = 0; i < cells.length;i++){
        arr[cells[i].row][cells[i].col] = 1
    }
    return arr;
}

//DRAWS THE GRID ONTO THE HTML CANVAS
function DrawGrid(arr) {
    for(i=0; i<=ARRAY_LENGTH_COL; i++){
        context.beginPath();
        context.moveTo(i*BOX_SIZE, 0);
        context.lineTo(i*BOX_SIZE, BOX_SIZE*(ARRAY_LENGTH_ROW));
        context.stroke();
    }
    for (j=0; j<=ARRAY_LENGTH_ROW;j++){
        context.beginPath();
        context.moveTo(0, j*BOX_SIZE);
        context.lineTo(BOX_SIZE*(ARRAY_LENGTH_COL), j*BOX_SIZE);
        context.stroke();
    }
}

// FILLS THE GRID WHERE THE VALUES ARE EQUIVALENT TO 1
function FillGrid(arr){ 
    for(i=0; i < arr.length;i++){
        for(j = 0; j < arr[i].length;j++) {
           if(grid[i][j] == 1) {
                context.fillRect(j*BOX_SIZE, i*BOX_SIZE, BOX_SIZE, BOX_SIZE);
           }
        }
    }
}

