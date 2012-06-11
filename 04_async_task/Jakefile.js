'use strict'

desc('simple async task');
task('async', function (params) {
  console.log('async task starts');

  setTimeout(function() {
    console.log('async task complete');
    complete();
  }, 3000);
  console.log('async task continues to work');
}, {async: true});

desc('simple task');
task('simple', ['async'], function (params) {
  console.log('simple task starts');
});
