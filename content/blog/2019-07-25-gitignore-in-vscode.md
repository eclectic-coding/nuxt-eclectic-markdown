---
title: Gitignore in VSCode
tags: VSCode, GIT
date: 2019-07-25
excerpt: This week I published an article about automating the creation of a LICENSE file for GIT in VSCODE. I wanted to consider the same methodology for the obligatory .gitignore file.
hero: stop.jpg
---
This week I published an article about automating the creation of a [LICENSE file for GIT](https://dev.to/eclecticcoding/license-file-for-git-3dp) in VSCODE. I wanted to consider the same methodology for the obligatory `.gitignore` file.

As you probably already know, the `gitignore` file is used in your local GIT repository to ignore files, like `node_modules` directory and `env` files which may contain API keys, to exclude them from your repository.

Just like with the LICENSE file example, you could easily copy a `gitignore` file from another repository and include it in your next *commit*, but there is an **EASIER** way?

![alt text](../../assets/images/blog/vscode-marketplace.png "VSCODE Extensions Marketplace.")

##VSCode Extensions
If you are using Vscode as your IDE, you already know there are a ton of extensions for almost everything you need. Today, I found this nifty extension, called [.gitignore Generator](https://marketplace.visualstudio.com/items?itemName=piotrpalarz.vscode-gitignore-generator) which installs a `.gitignore file`, specific for your type of project, to your root project directory.

So, to use, go to the Command Palette, and type `gitignore`, and select `Generate .gitignore File.` A selection box will pop-up (see below):

![Screenshot of selection menu.](../../assets/images/blog/vscode-screenshot1.png "Screenshot of selection menu.")

It will generate a `.gitignore` file based on the [gitignore](https://www.gitignore.io/) API.

Have a nice day.
