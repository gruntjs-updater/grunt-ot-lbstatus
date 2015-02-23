var Client = require('ssh2').Client;

module.exports = function(grunt){

    var buildCmd = function(options){
      return 'echo ' + options.string + ' > ' + options.file;
    };

    var execute = function(cmd, options, done){
        var conn = new Client();
        grunt.verbose.writeln(cmd);
        conn.on('ready', function() {
          conn.exec(cmd, function(err, stream) {
            if (err){
              grunt.verbose.writeln(err);
              return done(options.ignoreErrors ? null : err);
            }
            stream.on('close', function(code, signal) {
              grunt.verbose.writeln('Stream :: close :: code: ' + code + ', signal: ' + signal);
              conn.end();
              done();
            }).on('data', function(data) {
              grunt.verbose.writeln('STDOUT: ' + data);
            }).stderr.on('data', function(data) {
              grunt.verbose.writeln('STDERR: ' + data);
              return done(options.ignoreErrors ? null: new Error(data));
            });
          });
        }).connect({
          host: options.server,
          port: options.port,
          username: options.user,
          password: options.password
        });
    };

    grunt.registerMultiTask('ot-lbstatus', function(){
        var done = this.async();
        var options = this.options({
            server: '127.0.0.1',
            port: 22,
            ignoreErrors: false
        });

        grunt.verbose.writeflags(options);

        execute(buildCmd(options), options, done);
    });
};
