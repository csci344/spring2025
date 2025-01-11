# build the site and copy the files to a temporary directory:
bundle exec jekyll build
TEMP_DIR=$(mktemp -d)
rsync -av --exclude='node_modules' --exclude='*.pyc' _site/ "$TEMP_DIR"

# checkout gh-pages and remove all files:
git checkout gh-pages
git rm -rf .
rm -r _site
rm -r .sass-cache
rm -r Gemfile.lock


# copy the new site files to the gh-pages branch:
cp -r "$TEMP_DIR/" .


# commit changes and send them to GitHub:
git add .
git commit -m 'Updated gh-pages with new site content'
git push -f origin gh-pages

# clean up:
git checkout main
rm -rf _site
rm -rf "$TEMP_DIR"
