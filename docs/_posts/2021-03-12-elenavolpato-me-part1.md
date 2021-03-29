---
title: elenavolpato.me part 1
date: 2021-03-12
tags: 
  - yarn
  - npm
  - vue 2
  - blog
  - vuepress
author: Elena Volpato
featuredimg: '/assets/img/elenavolpatomecode.png'
summary: first learnings on elenavolpato.me
---
I was studying how to put my own website (this one in which you are reading this). I had purchased this domain a few days ago, and I was looking forward to learning how to put it online. I did some research about hosting static pages and had heard that github and gitlab provide a hosting service.

After that, I started testing VuePress – I’ve been using Vue 2, so it seemed like a good way to go. I started using [this template](https://wowthemesnet.github.io/vuepress-theme-mediumish/). Well, let’s get down to my first bloopers moment.

Since I never really put anything online, I didn’t know how to write and test if it’s working. I had only used localhost and very simple projects, that contain only one .js, one .html and one .css file. But the real thing, like my own page, requires way more files and configurations and so on. Long story short, I felt lost. And when I started to understand git version control, I got reeeeeally lost.

I kept committing and pushing and building things to see if what I wrote was working, not testing it locally **duh.** And it was taking sooooo long. It turns out, that _yarn start_  (or _yarn serve_ or _yarn dev_ – depends on what you have installed) is used to test locally (localhost) without the need of building (posting it online) that takes some time to do.

```
yarn dev
yarn serve
yarn start 
```

The ideal way of working is:
1. do a task, simple ones like: fix a link that is broken or correct a text
2. test it locally with one of the options above. And when it is working as you planned
3. commit it to save the version locally (like when you have a document and you change v_something on the name of the file in to lose track of the changes)
4. and then you push is to gitlab (or github, the one you’ve been using) to save this version online
5. you build it _yarn run build_ to post it online.

That way, I can have a better control of my work and return to an earlier state in case something breaks – and it has already happened a lot... 🙃
Also, the steps 4 and 5 can be skipped if don't have a gitlab or github set up yet.

After this, I started researching about yarn, npm, package managers in general, and  git concepts. I’ll write about that soon.
