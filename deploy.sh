# 抛出问题
set -e

# 打包生成静态文件
npm run build 

# 进入静态文件
cd docs/.vuepress/dist

git init 
git add -A
git commit -m 'deploy'

# 推到仓库中
git push -f git@github.com:tzwtmll/docs.git master:gh-pages

cd -
