#! /bin/bash

# 1. Build the Jekyll site and copy the contents to a temporary directory:
bundle exec jekyll build 
TEMP_DIR=$(mktemp -d)
rsync -av --exclude='node_modules' --exclude='*.pyc' _site/ "$TEMP_DIR"

# 2. Checkout gh-pages
git checkout gh-pages

# 3. Copy the contents from the TEMP_DIR to the working directory
cp -r "$TEMP_DIR/" .

# 4. Commit the changes and push to the gh-pages branch
git add .
git commit -m 'Updated gh-pages with new site content'
git push -f origin gh-pages

# 5. Restore main branch and clean up:
git checkout main
rm -rf _site
rm -rf "$TEMP_DIR"