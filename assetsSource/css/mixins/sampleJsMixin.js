/* global exports */

exports.mixins = {
    sampleJsMixin: function(mixin, param) {
        'use strict';

        param = param || '30px';

        return {
            padding: param
        };
    }
};
