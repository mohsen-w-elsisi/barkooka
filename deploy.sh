#!/bin/bash

rm -rf dist
mkdir dist

for file in $(ls src); do
    cp src/$file dist
done

cp -r docs dist
mv dist/docs dist/week

firebase deploy