'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _read = require('./read.controller');

var _read2 = _interopRequireDefault(_read);

var _create = require('./create.controller');

var _create2 = _interopRequireDefault(_create);

var _update = require('./update.controller');

var _update2 = _interopRequireDefault(_update);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    readController: _read2.default,
    createController: _create2.default,
    updateController: _update2.default
};