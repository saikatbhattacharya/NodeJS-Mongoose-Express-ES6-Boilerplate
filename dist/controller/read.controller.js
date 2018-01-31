'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _DB = require('../DB');

var _DB2 = _interopRequireDefault(_DB);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var readData = function readData(modelName, query, res) {
    _DB2.default.model[modelName].find(query, function (err, data) {
        if (err) {
            res.send(err);
        } else {
            res.send(data);
        }
    });
};

var aggregateData = function aggregateData(modelName, query, res) {
    model[modelName].aggregate(query, function (err, data) {
        if (err) {
            res.send(err);
        } else {
            res.send(data);
        }
    });
};

exports.default = {
    readData: readData,
    aggregateData: aggregateData
};