var transform = require('json-schema-generator');


JsonToJsonSchema = function(){
  if(!this instanceof JsonToJsonSchema){
    return new JsonToJsonSchema();
  }
  var self = this;

  self.run = function(json) {
    return transform(json);
  };

  return self;
};

module.exports = JsonToJsonSchema;
