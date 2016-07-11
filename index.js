'use strict';

var Stream = require('stream');
var Path = require('path');
var exec = require('child_process').exec;

function codesign(cert) {

  var stream = new Stream.Transform({objectMode: true});

  var signApp = function (filePath, cb) {

    exec('codesign --deep --force --verify --sign "' + cert + '" "' + filePath + '"', function (error, stdout, stderr) {
      if(error != null) return cb(error);
      if(stderr !== '') return cb(stderr);

      exec('spctl --assess "' + filePath + '"', function (error, stdout, stderr) {
        if(error != null) return cb(error);
        if(stderr !== '') return cb(stderr);

        if( stdout.indexOf('accepted') != -1) {
          cb();
        }
        else {
          cb(stdout);
        }
      });
    });
  }



  stream._transform = function(file, unused, callback) {
    signApp(file.path, function (error) {
      callback(error, file);
    });
  };

  return stream;
}

module.exports = codesign;
