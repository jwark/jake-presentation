
var HelloWorldTasks = function (helloName, preTasks) {
  this.helloName = helloName;
  this.preTasks = preTasks;

  var self = this;
  namespace('hello', function () {

    desc('hello world task');
    task('world', self.preTasks || [], function () {
      console.log(self.helloName, 'says Hello World!!');
    });

    desc('hello melbJS task');
    task('melbjs', self.preTasks || [], function () {
      console.log(self.helloName, 'says Hello MelbJS!!');
    });

  });
};

exports.helloWorldTasks = HelloWorldTasks;

