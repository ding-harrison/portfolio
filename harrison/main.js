function PrintArray(arr) {
    for(var i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}

var grid = Create2dArray(); 
ResetArray(grid);
var existingCells = CreateCells(grid);
FillArray(grid, existingCells);
DrawGrid(grid);
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
    DrawGrid(grid);
    FillGrid(grid);

    PrintArray(grid);
}

//window.setInterval("run()", 1000);
var runButton = document.createElement("BUTTON");
runButton.onClick = run();
var t = document.createTextNode("Step");
runButton.appendChild(t);
document.body.appendChild(runButton);
