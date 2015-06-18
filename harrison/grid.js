// Declaration of variables
var ARRAY_LENGTH_X =10;
var ARRAY_LENGTH_Y = 10;
var BOX_SIZE = 10;
var BOX_MULTIPLIER= .01;
var canvas;
var context;

// Allows resizing the entire canvas 
(function() {
    canvas = document.getElementById('myCanvas');
    context = canvas.getContext('2d');

    window.addEventListener('resize', resizeCanvas, false);
    
    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        
        BOX_SIZE = canvas.width*BOX_MULTIPLIER;
        ARRAY_LENGTH_X = Math.floor(canvas.width/BOX_SIZE);
        ARRAY_LENGTH_Y = Math.floor(canvas.height/BOX_SIZE);

        drawStuff();
    }
    resizeCanvas();

    function drawStuff() {
        DrawGrid(arr);
        
    }
})();

var arr = Create2dArray();

// Function creates a new 2d array
function Create2dArray() {
    var arr = new Array(ARRAY_LENGTH_Y);
    for (var i = 0; i <ARRAY_LENGTH_Y; i++) {
        arr[i] = new Array(ARRAY_LENGTH_X);
    }
    return arr;
}
// Resets the 2d array to all equal 0
function ResetArray(arr) {
    for (i = 0; i < ARRAY_LENGTH_Y; i++) {
        for(j = 0; j < ARRAY_LENGTH_X; j++){
            arr[i][j]= 0;
        }
    }
}

function FillArray(arr) {
   for (j = 0; j < arr[0].length; j++){
        arr[0][j] = 1;
   }
}

function PrintArray(arr) {
    for(var i = 0; i < ARRAY_LENGTH_Y; i++) {
        console.log(arr[i]);
    }
}

//DRAWS THE GRID ONTO THE HTML CANVAS
function DrawGrid(arr) {
    for(i=0; i<ARRAY_LENGTH_X; i++){
        context.beginPath();
        context.moveTo(i*BOX_SIZE, 0);
        context.lineTo(i*BOX_SIZE, BOX_SIZE*(ARRAY_LENGTH_Y-1));
        context.stroke();
    }
    for (j=0; j<ARRAY_LENGTH_Y;j++){
        context.beginPath();
        context.moveTo(0, j*BOX_SIZE);
        context.lineTo(BOX_SIZE*(ARRAY_LENGTH_X-1), j*BOX_SIZE);
        context.stroke();
    }
}

// FILLS THE GRID WHERE THE VALUES ARE EQUIVALENT TO 1
function FillGrid(grid){ 
    for(i=0; i < ARRAY_LENGTH_Y;i++){
        for(j = 0; j < grid[i].length;j++) {
           if(grid[i][j] == 1) {
                context.fillRect(j*BOX_SIZE, i*BOX_SIZE, BOX_SIZE, BOX_SIZE);
           }
        }
    }
}
ResetArray(arr);
FillArray(arr);
PrintArray(arr);
DrawGrid(arr);
