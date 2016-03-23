var scssToJson = require('scss-to-json');
var path = require('path');

var filePath = path.resolve(__dirname, 'color-mapping.scss');
var dependencyPath = path.resolve(__dirname, 'colors.scss');
var colors = scssToJson(filePath, {
  dependencies: [{path: dependencyPath}]
});
