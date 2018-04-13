#!/usr/bin/env bash
nuxt generate

mv dist/* ../sseed.github.io

cd ../sseed.github.io

ga .

gc -m "Auto deploy"

gp

cd ../sseed
