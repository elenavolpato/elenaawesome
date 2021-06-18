---
title: The Katas - week 1, the vaccination
date: '2021-06-18'
tags: 
  - kataChallenge
  - vaccine
  - codeWars
  - javascript
 
author: Elena Volpato
featuredimg: '/assets/Baba.jpg'
summary: How did the first week - part 1
---

The first week started with a heat wave here in Berlin, which made it hard to stay at home and get some work done. So I only started the Tuesday's kata at late night, it was this kata [here](https://www.codewars.com/kata/5266876b8f4bf2da9b000362/train/javascript) about number of likes and templates. I started building my code with some `switch` but that didn't work properly. So I started doing some research on methods to do it in smarter way. And found [this](https://medium.com/devsoonote/codewars-01-who-likes-it-8be9c5362d57) very hard to understand solution with `templates` and `Math.min`. But that seemed a bit far from my own skills.

<img width="30%" style="float: right; margin: 0.5rem;" src="https://media.giphy.com/media/lRtpp6ErXenCGBC2gb/giphy.gif" alt="One shot closer gif">

But then, on Wednesday I had quite a long day and I didn't finish the Tuesday kata and didn't do Wednesday's kata either. That happened because, in the morning I went to an appointment to get vaccinated  **YEY!!!** Although it was a very beautiful bike ride, ir was alsovery long tiring. So I got home after 4PM completely exhausted. 

That being said, I only finished the Tuesday's kata on Thursday. I went back to `if else` conditionals that seemed to work for this case. And here is my first solution to the [Who likes this?](https://www.codewars.com/kata/5266876b8f4bf2da9b000362/train/javascript) kata from [Codewars](https://www.codewars.com/kata/5266876b8f4bf2da9b000362/train/javascript):

``` javascript

function likes(names) {
  if (names.length == 0) {
  	return 'no one likes this'
  }
  else if (names.length == 1) {
  	return `${names[0]} likes this`
  } 
  else if (names.length == 2) {
  	return `${names[0]} and ${names[1]} like this`
  }
  else if (names.length == 3) {
  	return `${names[0]}, ${names[1]} and ${names[2]} like this`
  }
  else if (names.length >= 4) {
  	return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`
   }  
}

```
Then I decided to take it up a notch and make it even cleaner and easier to read code, and went back to `switch`:

``` javascript
function likes(names) {
	switch (names.length){
  	case 0: 
    	return 'no one likes this';
    
    case 1: 
    	return `${names[0]} likes this`;
    
    case 2: 
    	return `${names[0]} and ${names[1]} like this`;
    
    case 3: 
    	return `${names[0]}, ${names[1]} and ${names[2]} like this`;
    
    default: 
    	return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`; 
  }
}
```
Hopefully, on the next days I'll be able to do all the katas.

_Just a random picture of my dog, Baunilha(Vanilla, in English) that I miss so much_