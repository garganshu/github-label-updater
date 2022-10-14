
<a href="https://www.buymeacoffee.com/garganshu" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/default-orange.png" alt="Buy Me A Coffee" height="41" width="174"></a>

![GitHub Actions](https://img.shields.io/badge/github%20actions-%232671E5.svg?style=for-the-badge&logo=githubactions&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)
![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white)
![Shell Script](https://img.shields.io/badge/shell_script-%23121011.svg?style=for-the-badge&logo=gnu-bash&logoColor=white)

<a href="https://github.com/garganshu/github-label-updater/releases">![](https://img.shields.io/github/v/release/garganshu/github-label-updater)</a>
[![](https://img.shields.io/badge/marketplace-github--label--updater-green?style=flat-square)](https://github.com/marketplace/actions/github-label-updater)


# Github Label Updater

Updating labels made easy in your workflow using Github Label Updater :white_check_mark:

<a href="https://imgur.com/g2Fn8eB"><img src="https://i.imgur.com/g2Fn8eB.png" title="source: imgur.com" /></a>

Why is this plugin in action? :gem:
----

* Improves the developer productivity to auto update labels :label:

* Configurable action and helps to automate the workflow :hammer:

* Effective CI/CD pipelines :white_check_mark:

How to use?
----

1. Add Label(s) to Filtered Issues

```
filter-labels: ready-for-review
remove-all-labels: false
remove-labels: ready-for-review
add-labels: fixed,enhancement
```
        
 Before |  After
-------- | ---
![Imgur1](https://i.imgur.com/aVIwGJh.png) | ![Imgur2](https://i.imgur.com/hhHuLWU.png)

2. Remove All Label(s) of Filtered Issues

```
filter-labels: ready-for-review
remove-all-labels: true
```
        
 Before |  After
-------- | ---
![Imgur3](https://i.imgur.com/Qp1BBLM.png) | ![Imgur4](https://i.imgur.com/OyG2jjf.png)


Inputs
------

### `owner`

**Required** <br />
Owner of Organization or Repository

### `repo`

**Required** <br />
Repository name

### `token`

**Required** <br />
Github access token

### `filter-labels`

Filter issues which contains all labels eg. label1,label2 <br />
Default - fetches all issues

### `remove-all-labels`

Remove all labels from the issues eg. true/false <br />
Default - false

### `remove-labels`

Remove labels from the issues eg. label1,label2

### `add-labels`

Add labels to the issues eg. label1,label2


## Sample usage

```
name: Update Issues Label

on: [push]

jobs:
  build:

    runs-on: ubuntu-latest

    steps:
    - name: update label
      id: updater
      uses: garganshu/github-label-updater@v1.0.0
      with:
        owner: ${{secrets.OWNER}}
        repo: ${{secrets.REPO}}
        token: ${{secrets.TOKEN}}
        filter-labels: wip,bug,invalid
        remove-all-labels: false
        remove-labels: wip,invalid
        add-labels: fixed,enhancement

```

Projects using Github Label Updater? 🚀
----

### `Frontier` - Your Front Seat to Crypto and DeFi (<a href="https://frontier.xyz/" target="_blank">frontier.xyz</a>)

