#!/usr/bin/env sh

# 當發生錯誤時中止腳本
set -e

# 構建
npm run build

# cd 到構建輸出的目錄下
cd dist

# 部署到自訂網域名稱
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m 'deploy'

# 部署到 https://<USERNAME>.github.io
# git push -f https://github.com/CharlieWuuu/VueDeploy.github.io.git master

# 部署到 https://<USERNAME>.github.io/<REPO>
git push -f https://github.com/CharlieWuuu/VueDeploy.git master:gh-pages

cd -
