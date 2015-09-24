/**
 * Created by rahul.meghlan on 9/9/2015.
 */
(function () {
    var stage;

    function init() {
        createStage();
        createShape();
        stage.update();
    }

    function createStage() {
        stage = new createjs.Stage("demoCanvas");
    }

    function createShape() {
        var circle = new createjs.Shape();
        circle.graphics.beginFill("DeepSkyBlue").drawCircle(0, 0, 50);
        circle.x = 100;
        circle.y = 100;
        stage.addChild(circle);
    }

    myApp.init = init;

})(myApp = {});
