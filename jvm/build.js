
//var autoprefixer = require('autoprefixer-core');
var less = require('less');
var fs = require('fs');

//source = "../less/bootstrap/bootstrap.less";
//sourcepaths = ['../less/bootstrap'];
//dest   = "bootstrap.css";

source = "less/id7.less";
sourcepaths = ['less'];
dest   = "dist/id7.css";

console.log('Loading ',source,'...');
mainLess = fs.readFileSync(source);
console.log('Loaded source. Length:', mainLess.length);

function writeFile(filename, text) {
  fs.writeFile(filename, text, function(err) {
    if (err) console.log(err);
    else console.log("Wrote", filename);
  })
}

less.render(mainLess.toString(), {
  paths: sourcepaths,
  sourceMap: {
  }
}, function(err, output) {
  if (err) {
    console.log("Error:", err);
  } else {
    console.log("Compiled! CSS file size:", output.css.length);
    if (!err) {
      writeFile(dest, output.css);
      writeFile(dest+".map", output.map);
    }
    console.log("TODO: post process with autoprefixer-core (including sourcemaps)");
  }
});

