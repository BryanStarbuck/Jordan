function Movable(id, x, y) {
  this.currentX = x;
  this.currentY = y;
  this.id = id;

  this.htmlObj = document.getElementById(id);
  this.htmlObj.style.left = (this.currentX + "px");
  this.htmlObj.style.top = (this.currentY + "px");

}


Movable.prototype.move = function(x, y)
{
  destX = destX + x;
  destY = destY + y;
};

Movable.prototype.MoveUp = function(x, y)
{
  move.move(this.destX, this.destY - 10);
};

Movable.prototype.MoveDown = function(x, y)
{
  move.move(this.destX, this.destY + 10);
};

Movable.prototype.MoveLeft = function(x, y)
{
  move.move(this.destX - 10, this.destY);
};

Movable.prototype.MoveRight = function(x, y)
{
  move.move(this.destX + 10, this.destY);
};



function GameInitilize()
{
};



