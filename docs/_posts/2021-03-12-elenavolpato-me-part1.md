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


I was studying how to put my own website (this one in which you are reading this). I purchased this domain a few days ago, and was looking forward to learning how to put it online. 
I asked edgar for an explanation of how to put it on a server, and he had already told me that github and gitlab provide this a hosting service for static pages.

Therefore, I started testing it with VuePress – I’ve been experimenting with Vue 2, so it seemed like a good way to go. I started using [this template](https://wowthemesnet.github.io/vuepress-theme-mediumish/). Well, let’s get down to my first bloppers moment

Since I never really put anything online, I didn’t know how to write and test if it’s working. I only experimented with simple projects, that contain only one js, one html and one css file. But the real thing, like my onw page, requires way more files and configurations and so on. Long story short, I felt lost. And when I started to understand git version control, I got reeeeeally lost.

I kept committing and pushing things to see if what I wrote was working, not testing it locally – **duh.** And it was taking soooo long. It turns out, that _yarn start_ and then _yarn build_ is used to test locally and don’t commit everything to gitlab (the one I’m using) to test it. Only when it works, you can commit it. 

```
yarn build
yarn start 
```
After this, I started researching about yarn, npm and other package managers.
I’ll write about that soon.