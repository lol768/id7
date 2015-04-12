#!/bin/bash

SCRIPTDIR=`dirname $0`
cd $SCRIPTDIR/..
jvm/node-nashorn jvm/build-gulp.js
