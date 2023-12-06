---
title: "Implementing a Typewriter component in React"
imageName: "posts/react-typewriter/thumbnail.jpg"
link: "/blog/react-typewriter"
date: "2023-12-05"
description: "Many modern websites include text that types itself out in front of you, and there's no secret as to why - it's an easy way to add style and visual flair to any page. But how would you implement this yourself? Join me in the first part of my Portfolio Website series, where I detail how I developed the various parts of my portfolio website."
---

# Implementing a Typewriter component in React

_By Jagger Abney - 12/04/23_

From the moment I started designing my portfolio website, I wanted to include some sort of automatic typing effect. I got the inspiration from German-based copywriter [Charlie Pite's website](https://charliepite.com/), whose landing page is as bold and eye-catching as it is simple. While I could've very easily installed a package to do this, I felt it more appropriate to write the component myself - this _is_ my portfolio website, after all! So, in the first of many installments in what I'm calling the Portfolio Website series, we're going to explore how to implement a component in React that we can use to achieve this typewriting effect.

### Overview

I developed the Typewriter component on this website in three steps:

1. Adding the typing effect
2. Adding the pipe (and getting it to flash)
3. Getting the animation to play correctly

Thus, this blog post will follow these steps as well.

### Step 1: Adding the typing effect

To start, you're going to want to create a component named Typewriter, and add to it some JSX code:

```jsx
export default function Typewriter({ text }) {
  return (
    <h1>
      <span>{text}</span>
      <span>|</span>
    </h1>
  );
}
```

The text and pipe are kept in different _spans_ because they'll have different CSS classes later. Now, we'll need two pieces of state to facilitate the typing animation:

1. _currentText_, which will store the text as it's being displayed
2. _currentIndex_, which keeps track of the character position as the animation plays

Additionally, we'll also need to know the _delay_, or how long the animation should wait between adding letters, in milliseconds. For my Typewriter component, I used 33ms, but this is entirely customizeable: to make the animation faster, decrease it, and vice-versa.

After adding these, your component will look something like this:

```jsx
import { useState } from "react";

export default function Typewriter({ text }) {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <h1>
      <span>{currentText}</span>
      <span>|</span>
    </h1>
  );
}
```

Note that the first _span_ now has _currentText_ in it! Make sure to change that, or else the component will not work correctly.

The last thing we need to do to make the typing animation work is to add the actual logic to it. To start, we need to trigger the animation somehow: for now, we can start it when the component first mounts by using the _useEffect_ hook. We also need some way to add each letter one at a time, with a delay in between. For that, we can utilize the global _setTimeout_ function, which executes code after a given amount of time. In order for all letters to be added, however, we must add _currentIndex_ to the _useEffect_ function's dependency array; otherwise, only the first letter will show up.

```jsx
import { useEffect, useState } from "react";

const delay = 33; // in ms

export default function Typewriter({ text }) {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCurrentText(currentText + text[currentIndex]);
      setIndex(currentIndex + 1);
    }, delay);
  }, [currentIndex]);

  return (
    <h1>
      <span>{currentText}</span>
      <span>|</span>
    </h1>
  );
}
```

With these additions, your Typewriter will sort of work, but you may notice an issue:

![undefinedundefinedundefined](undefined.png)

Don't worry, though; it's an easy fix. All we have to do is add an if condition to our _setTimeout_ function that checks if _currentIndex_ is less than the length of _text_:

```jsx
import { useEffect, useState } from "react";

const delay = 33; // in ms

export default function Typewriter({ text }) {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      setTimeout(() => {
        setCurrentText(currentText + text[currentIndex]);
        setIndex(currentIndex + 1);
      }, delay);
    }
  }, [currentIndex]);

  return (
    <h1>
      <span>{currentText}</span>
      <span>|</span>
    </h1>
  );
}
```

And with that, step one is done! Your Typewriter component will now type itself out in front of you like _magic_.

### Step 2: Adding the pipe (and getting it to flash)

A little effect I wanted to add to my Typewriter was the flashing pipe character that you see as you type. After some Googling, I found out that this is technically called a [text cursor](https://pauljonesblog.com/what-is-the-name-of-the-vertical-line-symbol-that-represents-typing), but I've always known it as the "pipe", so that's what I'll be calling it in this post. For those who don't know, this pipe remains solid when you type, but blinks when you stop. Thankfully, making a React component "blink" in and out is simple. By using CSS animations, we can make a class that plays a blinking animation infinitely, and add this class to the pipe character after the typing animation completes.

```css
.pipe-idle {
  animation: 1s blink step-end infinite;
}

@keyframes blink {
  from,
  to {
    opacity: 1;
  }

  50% {
    opacity: 0;
  }
}
```

In order to add this class to the pipe, however, we'll need an extra piece of state - _isDoneTyping_ - and we'll need to modify our _useEffect_ function a little:

```jsx
import { useEffect, useState } from "react";

const delay = 33; // in ms

export default function Typewriter({ text }) {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDoneTyping, setIsDoneTyping] = useState(false);

  useEffect(() => {
    if (currentIndex < text.length) {
      setTimeout(() => {
        setCurrentText(currentText + text[currentIndex]);
        setIndex(currentIndex + 1);
      }, delay);
    } else {
      setIsDoneTyping(true);
    }
  }, [currentIndex]);

  return (
    <h1>
      <span>{currentText}</span>
      <span className={isDoneTyping ? "pipe-idle" : ""}>|</span>
    </h1>
  );
}
```

And that's all for this step, really. In my opinion, the hard stuff was in step 1.

### Step 3: Getting the animation to play correctly

You may notice, as I did when making this component, that our current implementation leads to all Typewriters playing at once, regardless of if they're visible or not. When I designed this website, I wanted them to only play when you first scrolled to its corresponding section, so let's do just that.

To start, let's think about what we'll need to program this. My approach requires two things:

1. Some way of determining if the Typewriter is visible
2. A piece of state for storing that information

For number one, we can use the [IntersectionObserver API](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API), a built-in JavaScript API that allows you to determine if elements on the page intersect with the document's viewport. I decided to add this into a separate _useEffect_ function to better delineate the purpose of the two calls. To make this API work with our React component, however, we'll need a _ref_ to its _h1_ component. Finally, we'll need to update our first _useEffect_ function so that it only types when the Typewriter is visible.

```jsx
import { useEffect, useState, useRef } from "react";

const delay = 33; // in ms

export default function Typewriter({ text }) {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDoneTyping, setIsDoneTyping] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const h1ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const [entry] = entries;

      setIsVisible(entry.isIntersecting);
    });

    observer.observe(h1ref.current);
  }, []);

  useEffect(() => {
    if (isVisible && currentIndex < text.length) {
      setTimeout(() => {
        setCurrentText(currentText + text[currentIndex]);
        setIndex(currentIndex + 1);
      }, delay);
    } else {
      setIsDoneTyping(true);
    }
  }, [currentIndex]);

  return (
    <h1 ref={h1ref}>
      <span>{currentText}</span>
      <span className={isDoneTyping ? "pipe-idle" : ""}>|</span>
    </h1>
  );
}
```

(A quick note on setting _isVisible_ to _entry.isIntersecting_: if you do this, you'll notice that the typing animation will stop if you scroll away, and continue playing when you return. If you don't want this to happen, simply set _isVisible_ to _true_ instead.)

And with that, you're done! This block of code is almost exactly how I implemented my Typewriter component, discounting some CSS classes and such. If your brain is still hungry for coding knowledge, here's a challenge: take this component and make it capable of typing over and over, like on [this website](https://designfly.io/).
