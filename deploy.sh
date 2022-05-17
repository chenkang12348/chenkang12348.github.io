#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e
# 提交代码
git add .
git commit -m 'add'

# 更新本地文件
git pull origin master
git push origin master
# 打包
npm run build

# 更新本地
git add .
git commit -m 'deploy'

# 提交代码
git pull origin master
git push origin master
# 如果发布到 https://<USERNAME>.github.io
# git push -f git@github.com:<USERNAME>/<USERNAME>.github.io.git master

# 如果发布到 https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages

# cd -