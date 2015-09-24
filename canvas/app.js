/**
 * @description : This file is the main file for canvas
 * */

(function () {

    var canvas = document.getElementById("canvas"),
        context = canvas.getContext("2d"),
        image = new Image();

    var setupStage = function () {
        //background
        context.fillStyle = "#000";
        context.fillRect(0, 0, 500, 300);
    };

    var init = function () {
        setupStage();
        drawImage();
    };


    var drawImage = function () {
        image.onload = function () {
            context.drawImage(image, 160, 130);
        };
        image.src = "img/prod_img2.jpg";
    };

    init();

})();