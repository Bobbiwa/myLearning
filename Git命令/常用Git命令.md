## 常用的Linux命令

平时一定要多使用这些基础的命令！

1）、cd : 改变目录。

2）、cd . . 回退到上一个目录，直接cd进入默认目录

3）、pwd : 显示当前所在的目录路径。

4）、ls(ll):  都是列出当前目录中的所有文件，只不过ll(两个ll)列出的内容更为详细。

5）、touch : 新建一个文件 如 touch index.js 就会在当前目录下新建一个index.js文件。

6）、rm:  删除一个文件, rm index.js 就会把index.js文件删除。

7）、mkdir:  新建一个目录,就是新建一个文件夹。

8）、rm -r :  删除一个文件夹, rm -r src 删除src目录

9）、mv 移动文件, mv index.html src index.html 是我们要移动的文件, src 是目标文件夹,当然, 这样写,必须保证文件和目标文件夹在同一目录下。

10）、reset 重新初始化终端/清屏。

11）、clear 清屏。

12）、history 查看命令历史。

13）、help 帮助。

14）、exit 退出。

15）、#表示注释



# 常用Git命令

```
# 列出所有本地分支git branch
# 列出所有远程分支git branch -r
# git checkout 切换
# 新建一个分支，但依然停留在当前分支git branch [branch-name]
# 新建一个分支，并切换到该分支git checkout -b [branch]
# 合并指定分支到当前分支$ git merge [branch]
# 删除分支$ git branch -d [branch-name]
# 删除远程分支$ git push origin --delete [branch-name]$ git branch -dr [remote/branch]
```

![image-20220330222038798](C:\Users\DB\AppData\Roaming\Typora\typora-user-images\image-20220330222038798.png)

### git强制提交本地分支覆盖远程分支

git push origin 分支名 --force



### 新建远程仓库别名（每次push远程要写一长串url很麻烦）

> git remote add origin [url]

`origin`是你对你自己远程仓库起的别名



### 克隆单个分支

git clone -b 【branch_name】 --single-branch 【url】



# 案例操作

1. git init 初始化仓库
2. git remote add origin [url] 创建仓库的别名
3. git pull orgin master 拉取仓库master分支

<hr>

修改完代码后：

1. git add . 添加代码到缓存区
2. git commit -m [message] 提交代码到本地仓库
3. git push origin master 推送代码到origin仓库的master分支里



我的github(token)：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





### Matt tell me：

初始的脚手架你就直接提交，后面的任务你切分支，然后在github上提交pull request，这样我可以review一下你的代码，一般项目也都有这种流程。

具体步骤

1. 看一下你做的任务的单号，比如REAC-9 Create layout
2.  git checkout -b feature/REAC-9 切出新分支使用feature/前缀标明是新增功能，后面是单号
3. 改动代码然后提交，commit message使用 'REAC-9 Create layout'
4. 把本地分支推到远端，用github提交一个pull request把feature/REAC-9合并到main分支5. 把pull request的链接贴到JIRA任务的comments里



修改后：

git add .

git commit --amend --no-edit 



> gitignore.注意：
>
> 不要误解了.gitignore的用途，该文件只能作用于未被跟踪的文件，也就是那些从来没有被git记录过的文件（自添加以后，从未add及commit过的文件）。如果文件曾经被git记录过，那么.gitignore就对他们完全无效。









