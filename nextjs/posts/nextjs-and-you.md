---
title: "Next.js and You"
imageName: "blog/nextjs-and-you.jpg"
link: "/blog/nextjs-and-you"
date: "2023-09-02"
description: 'Next.js calls itself "the React framework for production", but is that true? In this post, I go over what Next.js is, why you should use it, and how to get started. Additionally, I list the three main advantages of using Next.js, which are: server-side page rendering, file-based routing, and full-stack capabilities.'
---

# Heading 1

## Heading 2

### Heading 3

**Bold text**

_Italicized text_

> Blockquote!
> Blockquote!
> Blockquote!

1. An
2. Ordered
3. List

- An
- Unordered
- List

---

[Link!](https://www.markdownguide.org/cheat-sheet/)

![Alt text!]("/images/blog/nextjs-and-you.jpg")

By Jagger Abney

```js
export function getPostData(slug) {
  const filePath = path.join(postsDirectory, `${slug}.md`);
  const fileData = fs.readFileSync(filePath, "utf-8");

  const { data, content } = matter(fileData);

  return { slug, ...data, content };
}
```
