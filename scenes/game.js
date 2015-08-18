var canvas = document.getElementById("game"), 
	introScene = new IntroScene(), 
	mainMenu = new MainMenu(),
	optionsScene = new OptionsScene(),
	minigameSwitcher = new MinigameSwitcher(),
	convergame = new Convergame(canvas);

convergame.init();
convergame.changeScene(introScene);
convergame.startMainGameLoop();