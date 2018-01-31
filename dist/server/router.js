'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _controller = require('../controller');

var _controller2 = _interopRequireDefault(_controller);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = function router(app) {
    app.use(_bodyParser2.default.urlencoded({ extended: false }));
    app.use(_bodyParser2.default.json());
    app.get('/', function (req, res) {
        res.sendFile(_path2.default.join(__dirname + '/index.html'));
    });
    app.get('/users', function (req, res) {
        _controller2.default.readController.readData('userModel', {}, res);
    });
    app.post('/user', function (req, res) {
        _controller2.default.createController.insertData('userModel', req.body, res);
    });
};

exports.default = router;