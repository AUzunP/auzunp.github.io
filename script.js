function makeGrid(gridSize, gamePanel) {

    // gamePanel.style.backgroundColor = "red";

    for (j = 0; j < gridSize; j++) {
        //create new row
        var row = document.createElement("div");
    
        row.style.display = "flex";
        row.style.backgroundColor = colors[randomInt()];
        row.style.width = "900px";
        
        //append the row with all the cols added
        gamePanel.appendChild(addColToRows(row, gridSize));
    }

}

function addColToRows(rowToAddTo, gridSize) {

    for (i = 0; i < gridSize; i++) {
        //create col
        var col = document.createElement("div");
        // col.style.backgroundColor = colors[randomInt()];
        
        //this will be activated or not by a separate variable
        //if userselects whitebackground, if userselects rainbow, etc.
        col.style.backgroundColor = "white";
        col.onmouseover = function() {
            this.style.backgroundColor = selectedColor;
        }

        //make divs of even size given the grid total size
        //should probably change this magic number
        var width = (900 / gridSize);
        var colWidth = width.toString() + "px";

        col.style.width = colWidth;
        
        //append the column to the row
        rowToAddTo.appendChild(col);
    }

    //return the row with all the columns appended
    return rowToAddTo;
}

function randomInt() {
    return Math.floor(Math.random() * (((colors.length) - 0) + 0));
}

function clearCanvas() {

    for (row of gamePanel.children) {
        for (col of row.children) {
            col.style.backgroundColor = "white";
        }
    }

}

function blackColor() {
    for (row of gamePanel.children) {
        for (col of row.children) {
            col.onmouseover = function() {
                this.style.backgroundColor = "black";
            }
        }
    }
}

function randomColor() {
    // selectedColor = colors[randomInt()];
    for (row of gamePanel.children) {
        for (col of row.children) {
            col.onmouseover = function() {
                this.style.backgroundColor = colors[randomInt()];
            }
        }
    }
}

function changeGridSize(newGridSize) {
    clearCanvas();

    while(gamePanel.firstChild) {
        gamePanel.removeChild(gamePanel.firstChild);
    }

    makeGrid(newGridSize, gamePanel);
}

selectedColor = "black";

var colors = ['#FF6633', '#FFB399', '#FF33FF', '#FFFF99', '#00B3E6',
    '#E6B333', '#3366E6', '#999966', '#99FF99', '#B34D4D',
    '#80B300', '#809900', '#E6B3B3', '#6680B3', '#66991A',
    '#FF99E6', '#CCFF1A', '#FF1A66', '#E6331A', '#33FFCC',
    '#66994D', '#B366CC', '#4D8000', '#B33300', '#CC80CC',
    '#66664D', '#991AFF', '#E666FF', '#4DB3FF', '#1AB399',
    '#E666B3', '#33991A', '#CC9999', '#B3B31A', '#00E680',
    '#4D8066', '#809980', '#E6FF80', '#1AFF33', '#999933',
    '#FF3380', '#CCCC00', '#66E64D', '#4D80CC', '#9900B3',
    '#E64D66', '#4DB380', '#FF4D4D', '#99E6E6', '#6666FF'];

var gamePanel = document.getElementById("game-panel");
var gridSize = 100;

makeGrid(gridSize, gamePanel);