# #! /bin/bash

# # CAVEAT: Before running this script, make sure that everything is checked in 
# #         (stuff will get overwritten otherwise).

# # ABOUT THIS SCRIPT:
# # This script builds a Jekyll site locally and publishes it to the `gh-pages` branch,
# # excluding unnecessary files like `node_modules` or `*.pyc`. 

# # -- Build with no baseurl
# bundle exec jekyll build 

# # -- Define a temporary directory for filtered site files
# TEMP_DIR=$(mktemp -d)

# # -- Use rsync to copy files from _site to TEMP_DIR, excluding unwanted files
# rsync -av --exclude='node_modules' --exclude='*.pyc' _site/ "$TEMP_DIR"

# # -- Get rid of any existing local gh-pages
# git branch -D gh-pages

# # -- Create a new gh-pages branch not based on any existing branch
# git checkout --orphan gh-pages 

# # -- Delete the junk that git puts into this new branch 
# git rm -rf .

# # -- Add, commit, and push contents from TEMP_DIR to gh-pages branch
# git --work-tree="$TEMP_DIR" add .
# git --work-tree="$TEMP_DIR" commit -m 'gh-pages commit'
# git --work-tree="$TEMP_DIR" push -f origin gh-pages

# # -- Go back to working on the main branch and clean up
# git checkout -f main
# git branch -D gh-pages
# rm -rf _site
# rm -rf "$TEMP_DIR"


#! /bin/bash

# CAVEAT: Before running this script, make sure that everything is checked in 
#         (stuff will get overwritten otherwise).

# ABOUT THIS SCRIPT:
# This script builds a Jekyll site locally and publishes only the updated/added/deleted files 
# to the `gh-pages` branch, excluding unnecessary files like `node_modules` or `*.pyc`. 

# -- Build with no baseurl
bundle exec jekyll build 

# -- Define a temporary directory for filtered site files
TEMP_DIR=$(mktemp -d)

# -- Use rsync to copy files from _site to TEMP_DIR, excluding unwanted files
rsync -av --exclude='node_modules' --exclude='*.pyc' _site/ "$TEMP_DIR"

# -- Checkout gh-pages and pull latest changes (in case anything is already there)
git fetch origin
git checkout gh-pages
git pull origin gh-pages

# -- Check for changes in the _site folder by comparing with the existing gh-pages branch
git rm -rf . # Remove any existing files in gh-pages branch

# Copy the contents from the TEMP_DIR to the working directory
cp -r "$TEMP_DIR/" .

# Check for changes by running `git status`
git status --porcelain | grep -q '^ M'  # Checks if there are modified files

if [ $? -eq 0 ]; then
  # If there are modified files, commit and push the changes
  git add .
  git commit -m 'Updated gh-pages with new site content'
  git push -f origin gh-pages
else
  echo "No changes to push."
fi

# -- Go back to the main branch and clean up
git checkout main
rm -rf _site
rm -rf "$TEMP_DIR"
