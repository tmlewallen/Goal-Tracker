#!/bin/bash

cp app/secrets.js app/secrets-prod.js
git add app/secrets-prod.js dist
git commit -m "BUILD AUTO-COMMIT"
heroku config:set ENV=PROD
git push -f heroku master
git reset HEAD^
rm app/secrets-prod.js
