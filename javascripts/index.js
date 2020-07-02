const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
const drawer = new Drawer(ctx);
canvas.width = window.innerWidth * 0.8;
canvas.height = window.innerHeight * 0.8; 
const radius = (canvas.width / 2) - 350; 
ctx.translate(canvas.width / 2, canvas.height / 2);
ctx.rotate(Math.PI / 2 * -1);
var input_dots = document.getElementById("dots");
var input_multiplier = document.getElementById("multiplier");

var draw_dots_lines = () => {
  drawer.clear( -radius, -radius );
  drawer.drawShape(new Circle(0, 0, radius), "line_colour", "black");
  var multiplier = parseInt(document.querySelector("#multiplier").value);
  var dots = parseInt(document.querySelector("#dots").value);
  var dots_index = new Array(dots).fill(0).map((v,i) => { return i; })
    .map((v) => { return v / dots; })
    .map((v) => { return Math.PI * 2 * v; })
    .map((v) => { return [Math.cos(v) * radius, Math.sin(v) * radius];});
  dots_index.forEach((v) => { drawer.drawShape(new Circle(v[0], v[1], 3), "fill_colour", "red"); });
  for (var i = 0; i < dots_index.length; i += 1 ) {
    let n = i * multiplier % dots;
    drawer.line(dots_index[i][0], dots_index[i][1], dots_index[n][0], dots_index[n][1], "#333");
  }
};

/* generate dots */
draw_dots_lines();

input_dots.addEventListener("change", draw_dots_lines);
input_multiplier.addEventListener("change", draw_dots_lines);
