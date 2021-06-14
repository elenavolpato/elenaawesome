---
title: The Kata Challenges discovery
date: '2021-06-14'
tags: 
  - WWCode
  - Berlin
  - kataChallenge
  - event
author: Elena Volpato
featuredimg: '/assets/tempelhof.jpg'
summary: I'm gonna try to do one kata per day
---
It's been a while since I posted anything here because now I'm Berlin for the Summer, and the traveling and getting settled was kinda chaotic - I had to leave my beloved dogs 🐕🐕 back in Brazil (and I miss them daily 😢), get a Covid test and everything else that traveling, specially in these times, requires.

Anyway, last week I participated on online event: the [Hack Evening](https://www.meetup.com/Women-Who-Code-Berlin-Germany/events/278535885/) from [Women Who Code Berlin](https://www.womenwhocode.com/berlin). It was really fun to meet other women who already are developers for sometime and some others that are also new to this like me. But the big thing I discovered there were the kata challenges. According to [Code Wars](https://www.codewars.com/), ["kata are code challenges focused on improving skill and technique."](https://docs.codewars.com/concepts/kata/). By the way, [Code Wars](https://www.codewars.com/) is another discovery from last week's event, and I'm using it as my source for new challenges.

After some a short presentation and a nice chat, I started working on the challenge itself.  

You were given a width and a length of a rectangle. The challenge was to build a code that would provide a list with the minimum amount of squares that are possible inside this rectangle. More information about the challenge [here](https://www.codewars.com/kata/55466989aeecab5aac00003e/).

<img width="80%" style="float: center; margin-left: 1rem" src="/assets/rectangle.png" alt="The example from the kata challenge"> 

And this was my code:
``` javascript 
function sqInRect(length, width) {
  var result = [];
  if (length == width) {
    return null
    }  
  while (length != width) {
    let smaller = Math.min(length, width);
    let bigger = Math.max(length, width);
    result.push(smaller);
    length = smaller;
    width = bigger - smaller;
  }
  result.push(length)
  return result;
}
```
**Starting today, June 14th, I'm gonna ~~try to~~ do one kata per day.** [This is the one I'm working today.](https://www.codewars.com/kata/551dc350bf4e526099000ae5/train/javascript) And hopefully, next week I'll have a new post with 7 kata challenges! 


_The post picture is the sunset in Tempelhofer Feld._