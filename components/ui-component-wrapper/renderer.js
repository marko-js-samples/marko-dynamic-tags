var template = require('./template.marko');

var dynamicTags = {
    one: require('../ui-component-one/renderer'),
    two: require('../ui-component-two').renderer
};

module.exports = function(input, out) {
    var variant = input.variant || 'one';
    var dynamicTag = dynamicTags[variant];
    var dynamicTagData = {
        name: 'Frank'
    };

    template.render({
        variant: variant,
        dynamicTag: dynamicTag,
        dynamicTagData: dynamicTagData
    }, out);
};