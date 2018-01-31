'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _cors = require('cors');

var _cors2 = _interopRequireDefault(_cors);

var _router = require('./router.js');

var _router2 = _interopRequireDefault(_router);

var _logger = require('../logger');

var _logger2 = _interopRequireDefault(_logger);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
var port = process.env.PORT || 4000;

app.use((0, _cors2.default)());

(0, _router2.default)(app);

app.listen(port, function () {
    _logger2.default.info('App started on ', port);
});