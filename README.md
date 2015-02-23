# grunt-ot-lbstatus
[![Build Status](https://travis-ci.org/opentable/grunt-ot-lbstatus.png?branch=master)](https://travis-ci.org/opentable/grunt-ot-lbstatus) [![NPM version](https://badge.fury.io/js/grunt-ot-lbstatus.png)](http://badge.fury.io/js/grunt-ot-lbstatus) ![Dependencies](https://david-dm.org/opentable/grunt-ot-lbstatus.png)

Grunt helper for ot-flavoured lbstatus.

Connects to the given box by SSH and dumps the given string into the given file.

You can figure out the rest.

installation:

```npm install --save grunt-ot-lbstatus```

usage:

```
grunt.initConfig({
  'ot-lbstatus':{
    options: {
      server: '127.0.0.1',
      port: 22,
      user: 'myuser',
      password: 'mypass'
    },
    'on': {
      options: {
        string: 'ON'
      }
    },
    'off': {
      options: {
        string: 'OFF'
        ignoreErrors: true
      }
    }
  }
});

```

```
grunt ot-lbstatus:on
grunt ot-lbstatus:off
```

Future plans:
 - support key authentication
