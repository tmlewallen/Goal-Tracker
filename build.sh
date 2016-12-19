#!/bin/bash
echo Building...
gulp
ng build
node app/index.js
