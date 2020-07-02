class Drawer{

  constructor(ctx2d) {
    this.ctx = ctx2d; 
  }

  clear(start_x, start_y) {
    this.ctx.clearRect(start_x, start_y, this.ctx.canvas.width, this.ctx.canvas.height); 
  } 

  fill_colour(colour) {
    if(this != undefined) {
      this.ctx.fillStyle = colour;
    }
    this.ctx.fill();
  }

  line_colour(colour) {
    if(this != undefined) {
      this.ctx.strokeStyle = colour;
    }
    this.ctx.stroke();
  }

  line(x1, y1, x2, y2, colour) {
    this.ctx.beginPath();
    this.ctx.moveTo(x1, y1);
    this.ctx.lineTo(x2, y2);
    this.line_colour(colour);
  }

  drawRect(x, y, w, h, m, c) {
    this.ctx.beginPath();
    this.ctx.rect(x,y,w,h);
    this[m](c);
  }

  drawShape(s, m, c) {
    switch (s.__proto__.constructor) {
        case Point:
            this.drawRect(s.x, s.y, 1, 1, m, c);
            break;
        case Circle:
            this.ctx.beginPath();
            this.ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
            this[m](c);
            break;
    }
  }

}
