---
title: elenavolpato.me part 2 - portfolio
date: 2021-3-26
tags: 
- git
- gitlab
- Vue 2
- public
- dist

author: Elena Volpato
featuredimg: '/assets/img/quiz.png'
summary: creating my portfolio - the quiz challenge
---
While building this website, one of the ideas was to put the projects I'm working on, or finished ones, in the portfolio. Most of my projects so far are from [scrimba's weekly web dev challenge](https://scrimba.com/learn/weeklychallenge). I have done some easier ones like the emoji rating and a validation form (which I will post here soon). But I decided to finish the most complex one I had made and post it first: [the quiz.](https://quiz.elenavolpato.me/#/)

But first, I had to finish it - some features where still not working - and then put it online. I made this project from scratch, and it was the first one I used [Vue Router](https://router.vuejs.org) to create a static page. That means, everything you see is only one page (a static page), but it looks like many different pages, doesn't it? But how does it work exactly? 

Well, [vue](https://vuejs.org) allows you to create multiple components to create pages. What Vue Router does is: link a browser's URL address to a single component allowing you to see a page. In my quiz, each page has one component. For instance, when you select the theme "dogs", and then click on the **Go to Quiz!** button, the URL changes to:

**https://quiz.elenavolpato.me/#/quiz/1**

This happens because there is a path linked to the component that creates this page.

``` javascript
const routes = [
   {
    path: '/quiz/:themeId',
    name: 'questions',
    component: questions,
    props: true
  },
]
```
So, when you click on the button **Go to quiz!**, the path changes to "/quiz/number" and it "calls" the component **questions**. The number is only to define the questions shown according to the chosen theme.

It's like everything is there, but your can only see it when you request it. 🤓

The other challenge was to put it online: just like _elenavolpato.me_ I hosted it in [gitlab pages](https://docs.gitlab.com/ee/user/project/pages/) and used my domain in [gandi.net.](https://www.gandi.net/en-US). Until now I had only worked on projects locally, and putting it online meant understanding configs from gitlab and git concepts itself(more on that later). 

To post something online first you have "build" it. It means the code you wrote is compiled into only one file and saved in a folder(or directory). The thing is, my vue configurations where saving it in a dist/ folder. And gitlab only creates your page when your compiled file is saved in a folder named **public/.** So, Edgar (the boyfriend and experienced developer 💜) helped me figure this out and we added this in the script in **.gitlab-ci.yml** file:

```yaml
script:
- cp -r docs/.vuepress/dist/* public/
```

What it does is to copy(cp) the files compiled from the wrong place(docs/.vuepress/dist/*) to the right one (public/). With that, voilá! It is online now!

I'm planning to make this a quiz maker with no code knowledge required,. But for now, if you wish to create your quiz you gotta know some code and have a gitlab page, [clone the repository](https://gitlab.com/elena_volpato/quiz) and edit the json file(**"questions.js"**).










