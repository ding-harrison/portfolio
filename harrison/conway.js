
// DECLARATION OF CLASS CELL
function Cell(x, y) {
    this.row = x;
    this.col = y;
}
function CheckNeighbors(grid, row, col){
    var neighbors = 0;
    if(row+1 < ARRAY_LENGTH_ROW && grid[row][col+1] == 1)
        neighbors++;
    if( row+1 < ARRAY_LENGTH_ROW  && col+1 < ARRAY_LENGTH_COL && grid[row+1][col+1]== 1)
        neighbors++;
    if(row+1 < ARRAY_LENGTH_ROW && grid[row+1][col] == 1)
        neighbors++;
    if(col-1 > 0 && row+1 < ARRAY_LENGTH_ROW && grid[row+1][col-1]==1 )
        neighbors++;
    if(col-1 > 0 && grid[row][col-1]==1)
        neighbors++;
    if(row-1 > 0 && col+1 < ARRAY_LENGTH_COL && grid[row-1][col+1] ==1)
        neighbors++;
    if(row-1 > 0 && grid[row-1][col]==1)
        neighbors++;
    if(row-1 > 0 && col-1 > 0 && grid[row-1][col-1]==1)
        neighbors++;
    return neighbors;
}
// TOOLS USED BY CELLS TO CHECK IF LIVE OR DIE
function SpawnCells(grid) {
    var newCells = [];
    for(var i=0;i < grid.length;i++) {
        for(var j=0;j<grid[i].length;j++){
            if(CheckNeighbors(grid, i, j) == 3 && grid[i][j] != 1) {
                newCells.push(new Cell(i, j));
            }
        }
    }
    return newCells;
}
function KillCells(grid, existingCells) {
    for(i=0; i < existingCells.length;i++) {
        neighbors = CheckNeighbors(grid, existingCells[i].row, existingCells[i].col);
        if(!(neighbors == 2|| neighbors ==3)){
            existingCells.splice(i, 1);
            i--;
        }
    }
    return existingCells;
}

function CreateCells(grid) {
    var createdCells = [];
    var currentRow = Math.floor(grid.length/2);
    console.log(grid[currentRow].length);
    for(var i = 0; i< grid[currentRow].length;i++){
        createdCells.push(new Cell(currentRow, i));
    }
    return createdCells;
}
