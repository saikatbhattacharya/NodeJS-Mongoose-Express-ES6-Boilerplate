'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _config = require('../config');

var _config2 = _interopRequireDefault(_config);

var _logger = require('../logger');

var _logger2 = _interopRequireDefault(_logger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_mongoose2.default.connect(_config2.default.mongodb);

var dbCon = _mongoose2.default.connection;

dbCon.on('error', console.error.bind(console, 'connection error:'));
dbCon.once('open', function () {
    _logger2.default.info("Database Connected");
});

exports.default = dbCon;