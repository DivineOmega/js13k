
function AboutScene()
{
    this.convergame = null;
    this.updateFunction = function(time)
    {
        if (this.convergame.isControlPressed("up") || this.convergame.isControlPressed("down") || 
            this.convergame.isControlPressed("left") || this.convergame.isControlPressed("right") ||
            this.convergame.isControlPressed("enter") || this.convergame.isControlPressed(null))
        {
            this.convergame.changeScene(mainMenu);
        }
    };
    
    this.renderFunction = function()
    {
        var width = 1920,
            height = 1080,
            font = "sans-serif",
            white = "#ecf0f1";
        this.convergame.blankCanvas('#e74c3c');
        this.convergame.drawText(960, 75, white, 64, font, "center", "About Drawbacks", false, 0, 2, "#c0392b");
        this.convergame.drawText(100, 150, white, 32, font, "left", "Drawbacks is a mini-game challenge, where all instructions are reversed. Sound confusing? That's the point.", false, 0, 2, "#c0392b");
        this.convergame.drawText(100, 200, white, 32, font, "left", "It's quite deceiving... ", false, 0, 2, "#c0392b");
        
        this.convergame.drawText(100, 300, white, 32, font, "left", "The game requires some quick thinking, a non-conforming attitude and a desire to not do what you're told.", false, 0, 2, "#c0392b");
        
        this.convergame.drawText(width / 2, height / 2, white, 64, font, "center", "Developers", true, 0, 2, "#c0392b");
        this.convergame.drawText(width / 2, (height / 2) + 64, white, 32, font, "center", "Jordan Hall (@DivineOmega)", true, 0, 2, "#c0392b");
        this.convergame.drawText(width / 2, (height / 2) + 128, white, 32, font, "center", "Ollie Reardon (@ojdon)", true, 0, 2, "#c0392b");

        this.convergame.drawText(width / 2, (height / 2) + (height / 4), white, 48, font, "center", "Special Thanks", false, 0, 2, "#c0392b");
        this.convergame.drawText(width / 2, (height / 2) + (height / 4) + 64, white, 32, font, "center", "Kerry (Animal Vectors, design tweaks, more!)", false, 0, 2, "#c0392b");
        this.convergame.drawText(width / 2, (height / 2) + (height / 4) + 128, white, 32, font, "center", "Everyone behind and who took part in js13kgames", false, 0, 2, "#c0392b");
   };
    
    this.init = function(convergame)
    {
        this.convergame = convergame;
    };
}