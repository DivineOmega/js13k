var canvas = document.getElementById("game"), 
	mainMenu = new MainMenu(),
	aboutScene = new AboutScene(),
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
	minigameCol = new MinigameCol(),
	minigameAnimals = new MinigameAnimals(),
	minigameSpelling = new MinigameSpelling(),
	convergame = new Convergame(canvas);
	
convergame.init();
convergame.changeScene(mainMenu);
convergame.startMainGameLoop();