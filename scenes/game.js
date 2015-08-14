var canvas = document.getElementById("game"), 
introScene = new IntroScene(), 
testScene = new TestScene(),
artStyleTest = new ArtStyleTest(),
controlsTest = new ControlsTest(),
convergame = new Convergame(canvas);
convergame.init();
convergame.changeScene(controlsTest);
convergame.startMainGameLoop();