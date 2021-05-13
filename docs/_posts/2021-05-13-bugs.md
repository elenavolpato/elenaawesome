---
title: Bugs  🐞  a natural part of developing  
date: '2021-05-13'
tags: 
  - meditation
  - app
  - bugs
  - open source
author: Elena Volpato
featuredimg: '/assets/bug.jpeg'
summary: Bugs that became the priority in the meditation timer app
---
### Bugs are a natural part of the process in web development

In web development bugs will be a common part of the process. Your tester friends will find them and you will find issues yourself. 

After releasing the first usable version of the [meditation timer app](https://meditate.elenavolpato.me/) with its basic features, I had already established some other goals. But as I (and some friends) started using it new bugs appeared and made their way to the top of the priorities list. They are:
 
1. When using it in any smart phone, **the screen will eventually turn off and the bells won't play**. So I had to discover how to keep the screen on.

2. **Make it available off-line**. It is such a simple app that it makes no sense for it to require internet connection to be able to use it.

That being said, **I started working on the first one**. 

### 🐞 No. 1

I knew that in order to keep the screen on, one can keep an "invisible" video running. To test this I put a real video and tested on my phone. The video played but it did not stop the screen from dimming and shutting down. So, I started searching some other methods. I found this `Screen Wake Lock API` in the [w3c page](https://w3c.github.io/screen-wake-lock/), read the documentation and then, to actually understand how to use this I searched for an example on [this page](https://w3c-test.org/screen-wake-lock/):

<img href="https://w3c-test.org/screen-wake-lock/" width="100%" style="margin: 0.5rem;" src="/assets/screenshotw3c.png" alt="screen wake lock w3c page screenshot">

And I clicked in almost everything in this page and didn't found a demo as I expected, only code examples. One of the biggest struggles in learning code is the lack of good explanations - this is an example of this. The documentation is ok to understand, but this page got me lost. 

After that, I came upon [wakeLock documentation in mozilla](https://developer.mozilla.org/en-US/docs/Web/API/WakeLock) and found out it is still in a experimental phase, so some browsers don't support it yet. 

Then, I decided to look into my benchmark, the [meditation timer app](https://meditation-timer.netlify.app/) by [Ben Hall](https://github.com/benji6). And found out something wonderful! There is a library that already does all that for you and it has a straight to the point name: [NoSleep.js.](https://github.com/richtr/NoSleep.js/) by [Rich Tibbett](https://github.com/richtr). Open source is beautiful! 😁

### NoSleep.js, how does it work?

I was curious to understand what this library does. And I'm gonna try to explain bellow, but I'm removing the iOS rules just to make it simpler, but you can see its full code [here](https://github.com/richtr/NoSleep.js/blob/master/src/index.js). 

First it tries to detect a native **Wake Lock API support**. If it isn't supported, then it creates a video in two different formats, _.webm_ and _.mp4_ also to guarantee it will work in all platforms. Then, it plays this video in a loop. So, while using the library, all I had to do was add [`noSleep.enable()`](https://gitlab.com/elena_volpato/meditate/-/blob/master/src/views/Meditate.vue#L132) to the play button function and add [`noSleep.disable()`](https://gitlab.com/elena_volpato/meditate/-/blob/master/src/views/Meditate.vue#L186) to the function that ends the meditation. 

Now, I'm gonna work on making it available offline.


_The picture above is from [yokohamayomama flickr](https://www.flickr.com/photos/yokohamayomama/5790734866/)._
