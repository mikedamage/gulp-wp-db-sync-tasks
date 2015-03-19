/* jshint node: true */

'use strict';

var _           = require('lodash');
var path        = require('path');
var gulp        = require('gulp');
var $           = require('gulp-load-plugins');
var runSequence = require('run-sequence');
var config      = {
  dev: {
    mysql: {
      host: '127.0.0.1',
      port: 8889,
      user: 'root',
      password: 'root'
    },
    ssh: {
      host: '127.0.0.1',
      user: 'vagrant',
      port: 2222,
      privateKey: path.join(__dirname, '.vagrant', 'machines', 'default', 'virtualbox', 'private_key')
    }
  },
  staging: {
    mysql: {
      host: '127.0.0.1',
      port: 3306,
      user: 'root',
      password: 'secure123'
    },
    ssh: {
      host: 'myserver.com',
      port: 22,
      user: 'sshuser',
      privateKey: path.join(process.env.HOME, '.ssh', 'id_rsa'),
      wpCLI: '/home/sshuser/bin/wp'
    }
  }
};

gulp.task('db:up', function(callback) {
  runSequence(
    'db:up:dump',
    'db:up:copy',
    'db:up:load',
    'db:up:cleanup',
    callback
  );
});

gulp.task('db:down', function(callback) {
  runSequence(
    'db:down:dump',
    'db:down:copy',
    'db:down:load',
    'db:down:cleanup',
    callback
  );
});
