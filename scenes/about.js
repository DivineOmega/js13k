
function AboutScene()
{
    this.convergame = null;
    this.updateFunction = function(time)
    {
        
    };
    
    this.renderFunction = function()
    {
        var width = 1920,
            height = 1080,
            textFont = "sans-serif",
            colWhite = "#ecf0f1";
        this.convergame.blankCanvas('#e74c3c');
        this.convergame.drawText(960, 75, colWhite, 64, textFont, "center", "About Drawbacks", true, 0, 2, "#c0392b");
        this.convergame.drawText(100, 150, colWhite, 32, textFont, "left", "Drawbacks is a fast paced mini-game challenge, where all instructions are reversed. Sound confusing? That's the point.§", true, 0, 2, "#c0392b");
        this.convergame.drawText(100, 200, colWhite, 32, textFont, "left", " Don't do what the game tells you. It's quite deceiving... ", true, 0, 2, "#c0392b");
        
        this.convergame.drawText(100, 300, colWhite, 32, textFont, "left", "The game requires some quick thinking, a non-conforming attitude and a desire to not do what you're told.", true, 0, 2, "#c0392b");
        this.convergame.drawText(100, 350, colWhite, 32, textFont, "left", "If you feel that matches your style, you can play the jsk13games version of Drawback right here.", true, 0, 2, "#c0392b");
        
        
        this.convergame.drawText(width / 2, height / 2, colWhite, 64, textFont, "center", "Credits", true, 0, 2, "#c0392b");
        this.convergame.drawText(width / 4, (height / 2) + 96, colWhite, 48, textFont, "center", "Jordan Hall", true, 0, 2, "#c0392b");
        this.convergame.drawText((width / 2) + (width / 4), (height / 2) + 96, colWhite, 48, textFont, "center", "Ollie Reardon", true, 0, 2, "#c0392b");

        this.convergame.drawText(width / 2, (height / 2) + (height / 4), colWhite, 48, textFont, "center", "Special Thanks", true, 0, 2, "#c0392b");
        this.convergame.drawText(width / 2, (height / 2) + (height / 4) + 64, colWhite, 32, textFont, "center", "Kerry (Animal Vectors, Design tweaks, more!)", true, 0, 2, "#c0392b");
        this.convergame.drawText(width / 2, (height / 2) + (height / 4) + 128, colWhite, 32, textFont, "center", "Everyone behind and who took part in js13kgames", true, 0, 2, "#c0392b");
   };
    
    this.init = function(convergame)
    {
        this.convergame = convergame;
    };
}