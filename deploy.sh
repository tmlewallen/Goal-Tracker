#!/bin/bash

cp app/secrets.js app/secrets-prod.js
git add app/secrets-prod.js
git commit -m "BUILD AUTO-COMMIT"
heroku config:set ENV:PROD
git push heroku master
git reset --hard HEAD^
rm app/secrets-prod.js