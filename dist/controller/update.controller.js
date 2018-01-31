'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _DB = require('../DB');

var _DB2 = _interopRequireDefault(_DB);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var updateData = function updateData(modelName, query, update, options, res) {
    _DB2.default.model[modelName].update(query, update, options, function (err, data) {
        if (err) {
            res.send(err);
        } else {
            res.send(data);
        }
    });
};

exports.default = {
    updateData: updateData
};