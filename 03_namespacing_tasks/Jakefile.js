'use strict'

namespace('mytasks', function() {

  desc('simple task');
  task('simple', function (params) {
    console.log('my simple task');
  });

  desc('after simple task');
  task('after', ['simple'], function (params) {
    console.log('after simple task');
  });

});
