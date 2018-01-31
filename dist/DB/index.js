'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _model = require('./model');

var _model2 = _interopRequireDefault(_model);

var _schema = require('./schema.json');

var _schema2 = _interopRequireDefault(_schema);

var _dbConnection = require('./dbConnection');

var _dbConnection2 = _interopRequireDefault(_dbConnection);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_dbConnection2.default;

exports.default = {
    model: _model2.default,
    schema: _schema2.default
};