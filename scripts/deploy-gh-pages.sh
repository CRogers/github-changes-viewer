#!/usr/bin/env bash

set -eu

git config user.email "circleci-build-node@circleci.com"
git config user.name "CircleCI build node"

HASH_MESSAGE="$(git show --oneline | head -n1)"

git checkout --orphan gh-pages

echo * | tr -s " " "\n" | grep -v build | xargs rm -rf
cp build/* .
rm -rf build/

echo Remaining files:
ls
echo

git commit -am "$HASH_MESSAGE"

git push -f origin gh-pages