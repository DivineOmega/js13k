var canvas = document.getElementById("game"), 
introScene = new IntroScene(), 
testScene = new TestScene(),
artStyleTest = new ArtStyleTest(),
controlsTest = new ControlsTest(),
mainMenu = new MainMenu(),
convergame = new Convergame(canvas);
convergame.init();
convergame.changeScene(mainMenu);
convergame.startMainGameLoop();