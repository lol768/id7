
var autoprefixer = require('autoprefixer-core');
var less = require('less');
var fs = require('fs');

//source = "../less/bootstrap/bootstrap.less";
//sourcepaths = ['../less/bootstrap'];
//dest   = "bootstrap.css";

source = "less/id7.less";
sourcepath = 'less';
dest = "dist/id7.less";

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
  paths: [sourcepath],
  sourceMap: {
  }
}, function(err, output) {
  if (err) {
    console.log("Error:", err);
  } else {
    if (!err) {
      console.log("Compiled! CSS file size:", output.css.length);
      fs.writeFileSync(dest, output.css);
      if (output.map) {
        console.log("Source map file size (before autoprefixer):", output.map.length);
        fs.writeFileSync(dest+".map", output.map);
      }
    }
  }
});

