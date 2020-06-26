@echo off

echo building...
call build.bat
echo building-complete.

cd docs/.vuepress/dist
git init
git add -A
git commit -m 'auto-deploy'
git remote add origin https://github.com/hanjunqiang/study.git
git pull
git push -f git@github.com:hanjunqiang/hanjunqiang.github.io.git master
