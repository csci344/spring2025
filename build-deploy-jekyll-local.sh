#! /bin/bash

# CAVEAT: Before running this script, make sure that everything is checked in 
#         (stuff will get overwritten otherwise).

# ABOUT THIS SCRIPT:
# This script builds a Jekyll site locally and publishes it to the `gh-pages` branch,
# excluding unnecessary files like `node_modules` or `*.pyc`. 

# -- Build with no baseurl
bundle exec jekyll build 

# -- Define a temporary directory for filtered site files
TEMP_DIR=$(mktemp -d)

# -- Use rsync to copy files from _site to TEMP_DIR, excluding unwanted files
rsync -av --exclude='node_modules' --exclude='*.pyc' _site/ "$TEMP_DIR"

# -- Get rid of any existing local gh-pages
git branch -D gh-pages

# -- Create a new gh-pages branch not based on any existing branch
git checkout --orphan gh-pages 

# -- Delete the junk that git puts into this new branch 
git rm -rf .

# -- Add, commit, and push contents from TEMP_DIR to gh-pages branch
git --work-tree="$TEMP_DIR" add .
git --work-tree="$TEMP_DIR" commit -m 'gh-pages commit'
git --work-tree="$TEMP_DIR" push -f origin gh-pages

# -- Go back to working on the main branch and clean up
git checkout -f main
git branch -D gh-pages
rm -rf _site
rm -rf "$TEMP_DIR"
