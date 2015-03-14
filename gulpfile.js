/* jshint node: true */

'use strict';

var _           = require('lodash');
var gulp        = require('gulp');
var $           = require('gulp-load-plugins');
var runSequence = require('run-sequence');

var config      = {
  dev: {
    host: '127.0.0.1',
    port: 8889,
    user: 'root',
    password: 'root'
  },
  staging: {
    host: '127.0.0.1',
    port: 3306,
    user: 'root',
    password: 's3cur3'
  }
};
