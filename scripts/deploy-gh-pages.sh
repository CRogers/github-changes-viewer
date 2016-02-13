#!/usr/bin/env bash

HASH_MESSAGE="$(git show --oneline | head -n1)"

git checkout --orphan gh-pages
git commit -am "$HASH_MESSAGE"
git push origin gh-pages