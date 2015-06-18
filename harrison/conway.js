// DECLARATION OF CLASS CELL
function Cell(x, y) {
    this.x = x;
    this.y = y;
}
// TOOLS USED BY CELLS TO CHECK IF LIVE OR DIE

// WILL BE RUN AT A SET INTERVAL, LIKE THE USE OF TICKS
function run() {
    console.log("Running");
}


window.setInterval("run()", 1000);
