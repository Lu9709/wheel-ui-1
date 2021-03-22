rm -rf dist &&
yarn build &&
cd dist &&
git init &&
git add . &&
git commit -m 'update' &&
git branch -M master &&
git remote add origin git@github.com:Lu9709/vite-wheel-ui-1.git &&
git push -f -u origin master &&
cd -
echo https://lu9709.github.io/vite-wheel-ui-1/