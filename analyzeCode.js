var plato = require('plato');

var files = [
  './js/PhaserClient.js',
  './js/BoardGameAdapter.js',
  './js/Ludo.js',
  './js/Checkers.js',
];

var outputDir = './plato_out';
// null options for this example
var options = {
  title: 'Analizyng...'
};

var callback = function (report){
  console.log("Done!");
};

plato.inspect(files, outputDir, options, callback);
