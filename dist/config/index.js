'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var configFilePath = process.env.NODE_ENV ? './config.' + process.env.NODE_ENV + '.js' : './config.development.js';
var config = require(configFilePath);

exports.default = config;