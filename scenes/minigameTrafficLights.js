function MinigameTrafficLights()
{
    this.convergame = null;
    this.controls = null;
    this.instruction = null;
    this.correctControl = "space";
    this.correctCol = null;
    this.col = null;
    this.colShadow = null;
    this.timer = 0;
    this.gameTime = 3;
    this.canPress = false;
    this.canPressTimer = null;
    this.lights = [];
    this.trafficLight = null;
    
    this.updateFunction = function(time)
    {
        this.timer += time;
        if(this.timer > this.canPressTimer) {
            this.canPress = true;
            this.instruction = "Don't Press!";
        }
         
        if (this.timer>=3)
        {
            this.convergame.changeScene(timeout);
        }

        if ( this.canPress === true && this.convergame.isControlPressed(this.correctControl))
        {
            minigameSwitcher.score++;
            this.convergame.changeScene(success);
        } 
        else if (this.canPress === false && this.convergame.isControlPressed(this.correctControl))
        {
            this.convergame.changeScene(fail);
        }
        //Colour test, please ignore
        /*var lightRand = this.convergame.random(0, this.lights.length - 1);
        if(this.timer >= 0.5) {
            this.lights[lightRand].updateCol(this.col);
        }*/

    };
    
    this.renderFunction = function()
    {
        
        this.convergame.blankCanvas('#669999');
        
        //Traffic Light Rectangle Forground
        this.trafficLight.draw();

        //Traffic Light Circle Black
        for(l = 0; l < this.lights.length; l++) {
            this.lights[l].draw();
        }
    };
    
    this.init = function(convergame)
    {
        this.convergame = convergame;
        this.timer = 0;
        this.width = this.convergame.getCanvasWidth();
        this.height = this.convergame.getCanvasHeight();
        this.textFont = "sans-serif";
        this.colWhite = "#ecf0f1";
        this.canPressTimer = this.convergame.random(1.75,1.9);
        this.trafficLight = new TrafficLightBackground(this.width / 2 + this.width / 4, this.height / 3, this.width / 4, this.height / 2 + this.height / 4, '#34495e');
        console.log(this.trafficLight);
        var colRand = this.convergame.random(1, 3);
        for(var l = 0; l < 3; l++) {
            light = new TrafficLight((this.trafficLight.x + this.trafficLight.width / 3), this.trafficLight.y + this.trafficLight.height / 4 + (l * 150), 64, '#2c3e50');
            this.lights.push(light);
        }
        
        switch (colRand)
        {
            case 1:
                this.col = "#2ecc71"; // Green
                this.correctCol = "green";
                break;
            case 2:
                this.col = "#f39c12"; // Amber
                this.correctCol = "amber";
                break;
            case 3:
                this.col = "#e74c3c"; // Red
                this.correctCol = "red";
        }
        this.controls = 'Never go on a ' + this.correctCol + ' light';
    };
}