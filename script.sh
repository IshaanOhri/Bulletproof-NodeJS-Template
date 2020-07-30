#!/bin/bash

clear
echo "Pushing to GitHub"
git add .
echo "Enter commit message"
read commit
git commit -m "$commit"
git checkout ishaan
git push origin ishaan
