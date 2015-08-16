var canvas = document.getElementById("game"), 
introScene = new IntroScene(), 
mainMenu = new MainMenu(),
convergame = new Convergame(canvas);
convergame.init();
convergame.changeScene(introScene);
convergame.startMainGameLoop();