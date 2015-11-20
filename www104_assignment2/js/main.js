var canvas = window.document.getElementById("countries");

var stage = canvas.getContext("2d");

/* France */
/* (x, y, width, height) */

stage.strokeRect(100, 100, 500, 300);
        stage.fillStyle = "midnightblue";
    stage.fillRect (100, 100, 166, 300);

stage.fillStyle = "red";
stage.fillRect (433, 100, 166, 300);

/* Italy */

stage.strokeRect(700, 100, 500, 300);
        stage.fillStyle = "green";
    stage.fillRect (700, 100, 166, 300);

stage.fillStyle = "red";
stage.fillRect (1033, 100, 166, 300);

/* Germany */

stage.strokeRect(100, 500, 500, 300);
stage.fillStyle= "black";
stage.fillRect (100, 500, 500, 100);

stage.fillStyle = "red";
stage.fillRect (100, 600, 500, 100);

stage.fillStyle = "yellow";
stage.fillRect (100, 700, 500, 100);


/* Luxembourg */

stage.strokeRect(700, 500, 500, 300);
stage.fillStyle= "red";
stage.fillRect (700, 500, 500, 100);

stage.fillStyle = "#fff";
stage.fillRect (700, 600, 500, 100);

stage.fillStyle = "skyblue";
stage.fillRect (700, 700, 500, 100);