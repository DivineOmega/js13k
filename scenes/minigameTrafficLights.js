function MinigameTrafficLights()
{
    this.convergame = null;
    this.controls = 'Press spacebar to go on the correct light';
    this.instruction = null;
    this.correctControl = "space";
    this.correctCol = null;
    this.col = null;
    this.timer = 0;
    this.gameTime = 3;
    this.lights = [];
    this.trafficLight = null;
    this.currentCol = null;
    this.updateFunction = function(time)
    {
        this.timer += time;
         
        if (this.timer>=this.gameTime)
        {
            this.convergame.changeScene(timeout);
        }

        if(this.timer >= 0 && this.timer <= this.gameTime*0.50) {
            this.lights[0].updateCol('#e74c3c');
            this.lights[1].updateCol('#2c3e50');
            this.lights[2].updateCol('#2c3e50');
            this.currentCol = 'red';

        } else if(this.timer >= this.gameTime*0.50 && this.timer <= this.gameTime*0.75) {
            this.lights[0].updateCol('#2c3e50');
            this.lights[1].updateCol('#f39c12');
            this.lights[2].updateCol('#2c3e50');
            this.currentCol = 'amber';

        } else if(this.timer >= this.gameTime*0.75) {
            this.lights[0].updateCol('#2c3e50');
            this.lights[1].updateCol('#2c3e50');
            this.lights[2].updateCol('#2ecc71');
            this.currentCol = 'green';
        }
        if(this.correctCol === this.currentCol && this.convergame.isControlPressed("space")) {
            minigameSwitcher.score++;
            this.lights = [];
            this.convergame.changeScene(success);
        } else if(this.correctCol != this.currentCol && this.convergame.isControlPressed("space")) {
            this.lights = [];
            this.convergame.changeScene(fail);
        }

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

        //Text
        this.convergame.drawText(this.width / 2, 150, this.colWhite, 32, this.textFont, "center", (this.gameTime-this.timer).toFixed(2), true, 0, 2, "#2c3e50");
        this.convergame.drawText(this.width / 2, 400, this.colWhite, 64, this.textFont, "center", this.instruction, true, 0, 2, "#2c3e50");
    };
    
    this.init = function(convergame)
    {
        this.convergame = convergame;
        this.timer = 0;
        this.gameTime = minigameSwitcher.getGameTime(3);
        
        this.width = 1920;
        this.height = 1080;
        this.textFont = "sans-serif";
        this.colWhite = "#ecf0f1";
        this.trafficLight = new TrafficLightBackground(this.width / 2 + this.width / 4, this.height / 4, this.width / 4 - 100, this.height / 2 + 100 , '#34495e');
        
        var colRand = this.convergame.random(1, 3);
        for(var l = 0; l < 3; l++) {
            light = new TrafficLight((this.trafficLight.x + this.trafficLight.width / 2), this.trafficLight.y + this.trafficLight.height / 4 + (l * 150), 64, '#2c3e50');
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
        this.instruction = 'Never go on a ' + this.correctCol + ' light';
    };
}