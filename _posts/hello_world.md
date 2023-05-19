---
title: 'Hello World'
excerpt: 'How to build a next.js blog on github pages'
coverImage: ''
date: '2023-04-28T15:50:07.322Z'
author:
  name: Jake Powell
  picture: ''
ogImage:
  url: ''
published: true
---

# It's alive!

The blog is up and running, so for the first post, I thought I'd give a quick overview of how I built it.

This is a Next.js app hosted on GitHub Pages, so the first thing I did was create a new repository and clone it to my local machine. Make sure to name the repo `_yourusername_.github.io`.

Next, I created a new Next.js app in the repository folder with the following command:

```bash
yarn create-next-app .
```

I also went with all the suggested settings, e.g., TypeScript (which you get used to), ESLint, etc., to make the development process easier, remember the mantra: slow is smooth, smooth is fast.

When I installed my Next.js app, it created a new directory, so I manually moved all the files from the new directory into the root of my repo. Basically, you want to end up with the following structure:

```bash
_yourusername_.github.io
  - everything else
```

Once that's pushed to your remote repository, click on "Actions" and choose "New action," then select Next.js from the list. After one more push to trigger the build process, your site should be up and running at _yourusername_.github.io! (It may take a few minutes to build)

The next phase will be to style it out a little more, and write some more posts.
