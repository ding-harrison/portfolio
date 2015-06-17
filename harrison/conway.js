var ARRAY_LENGTH =10;

(function() {
    var canvas = document.getElementById('myCanvas');
    var context = canvas.getContext('2d');

    window.addEventListener('resize', resizeCanvas, false);
    
    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        drawStuff();
    }
    resizeCanvas();

    function drawStuff() {

    }
})();
function Create2dArray() {
    var arr = new Array(ARRAY_LENGTH);
    for (var i = 0; i < arr.length; i++) {
        arr[i] = new Array(arr.length);
    }
    return arr;
}

function ResetArray(arr) {
    for (i = 0; i < arr.length; i++) {
        for(j = 0; j < arr[i].length; j++){
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
    for(var i = 0; i < ARRAY_LENGTH; i++) {
        console.log(arr[i]);
    }
}

var arr = Create2dArray();
ResetArray(arr);
FillArray(arr);
PrintArray(arr);

