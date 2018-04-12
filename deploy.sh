#!/usr/bin/env bash
nuxt generate

git checkout master

git pull origin master --rebase

cp -R dist/* .

git clean -fx .

git add .

git commit -a -m "Auto Deploy"

git push origin master

git checkout develop