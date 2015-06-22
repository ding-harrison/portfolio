function PrintArray(arr) {
    for(var i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}

function PrintNeighbors(arr){
    context.fillStyle="#FF0000";
    for(var i = 0; i < arr.length; i++) {
        for(var j = 0; j<arr[i].length; j++) {
            context.fillText("Neighbors : " + CheckNeighbors(grid, i, j), j*BOX_SIZE+10, i*BOX_SIZE+ 10);
        }
    }
    context.fillStyle="#000000";
}
var grid = Create2dArray(); 
ResetArray(grid);
var existingCells = CreateCells(grid);//[new Cell(1, 2), new Cell (2,2), new Cell(2,3)]; //
FillArray(grid, existingCells);
//DrawGrid(grid);
FillGrid(grid);
function run() {
    //CLEARS THE CANVAS
    context.clearRect(0, 0, canvas.width, canvas.height);
    
    // SPAWNS NEW CELLS AND KILLING OLD ONES
    var newCells = SpawnCells(grid);
    existingCells = KillCells(grid, existingCells);
    existingCells = existingCells.concat(newCells);

    //RESETS AND REFILLS ARRAY BASED ON EXISTING CELLS
    ResetArray(grid);
    grid = FillArray(grid, existingCells);

    //REDRAWS AND REFILLS THE GRID
//    DrawGrid(grid);
    FillGrid(grid);

    PrintArray(grid);
//    PrintNeighbors(grid);
}

window.setInterval("run()", 450);
