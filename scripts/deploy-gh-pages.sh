#!/usr/bin/env bash

git config user.email "circleci-build-node@circleci.com"
git config user.name "CircleCI build node"

HASH_MESSAGE="$(git show --oneline | head -n1)"

git checkout --orphan gh-pages
git commit -am "$HASH_MESSAGE"
git push -f origin gh-pages