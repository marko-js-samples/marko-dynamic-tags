var template = require('./template.marko');

exports.renderer = function(input, out) {
    var name = input.name;

    template.render({
            name: name
        }, out);
};