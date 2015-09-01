var canvas = document.getElementById("game"), 
	introScene = new IntroScene(), 
	mainMenu = new MainMenu(),
	optionsScene = new OptionsScene(),
	minigameSwitcher = new MinigameSwitcher(),
	success = new Success(),
	fail = new Fail(),
	timeout = new Timeout(),
	minigameUpOrDown = new MinigameUpOrDown(),
	minigameLeftOrRight = new MinigameLeftOrRight(),
	minigameButton = new MinigameButton(),
	minigameTrafficLights = new MinigameTrafficLights(),
	minigameDoNothing = new MinigameDoNothing(),
	minigameMorality = new MinigameMorality(),
	convergame = new Convergame(canvas);
	
convergame.init();
convergame.changeScene(introScene);
convergame.startMainGameLoop();