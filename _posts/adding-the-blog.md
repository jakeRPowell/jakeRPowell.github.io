---
title: 'Adding the blog'
excerpt: 'How to add a simple blog to your next.js app'
coverImage: ''
date: '2023-05-01T15:50:07.322Z'
author:
  name: Jake Powell
  picture: ''
ogImage:
  url: ''
---

# Adding the blog

This post will cover how I added the blog to the site, why I chose to do it this way, the pros and cons of this approach, and how you can do it too.

## Why?

I wanted to create my personal site using Github pages as it's free and I thought it would be nice to have my repos and site in the same space. I couldn't find much information about setting up a free CMS for this scenario, but there are plenty of Next.js blog resources, and anyway, I thought that building a blog would be a good way to learn more about Next.js.

Turns out it's a great way to learn about Next.js!

## How?

This project is based heavily on [Vercel's Next.js blog starter repo](https://github.com/vercel/next.js/tree/canary/examples/blog-starter). Mine is a pared down version, I wanted to get the functionality in place, then build it up in my own way, but learning from this repo is a great way to get started.  
I started by creating a new directory in the root of my project to store all my blog posts, called `_posts`. These will be written in markdown, so files will look like this `hello-world.md`.

These posts will use a library called "gray-matter" to read metadata about the post, such as the title, author, date, etc. This is a block of YAML at the top of the file that looks like this:

```yaml
---
title: 'Adding the blog'
excerpt: 'How to add a simple blog to your next.js app'
coverImage: ''
date: '2023-05-01T15:50:07.322Z'
author:
  name: Jake Powell
  picture: ''
ogImage:
  url: ''
---
```

Gray-matter will read this and return an object with the metadata and the content of the post. This is then passed to the `remark` library, which converts the markdown to HTML. This HTML is then passed to the `react-markdown` library, which renders it as React components.

## the posts page

I created a page called `posts.tsx` to be the homepage for the blog, this uses next's `getStaticProps` function ([https://nextjs.org/docs/basic-features/data-fetching/get-static-props](Docs here)) to fetch the posts at build time (as we're storing them as files in our repo).

```tsx
export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
  ]);

  return {
    props: { allPosts },
  };
};
```

This means that the posts are available as props to the page, and can be passed to the render function in this page, which renders a list of posts.

```tsx
<ul>
  {allPosts.map((post) => (
    <li key={post.slug}>
      <Link as={`/posts/${post.slug}`} href="/posts/[slug]">
        {post.title}
      </Link>
    </li>
  ))}
</ul>
```

You'll notice there's a `getAllPosts` function in the above snippet, in case you're new to digging through other people work to find these helpful functions, navigate to the top of the file and (in React at least) you'll find an import statement, in the Vercel repo it looks like this: `import { getAllPosts } from '../lib/api'`

If we go to `/lib/api.ts` we'll see...

```ts
export function getAllPosts(fields: string[] = []) {
  const slugs = getPostSlugs();
  const posts = slugs
    .map((slug) => getPostBySlug(slug, fields))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  return posts;
}
```

So let's create our own `lib/api.ts` file and copy this function in. At this point if we navigate to localhost:3000/posts we should see a list of our posts!

## The post page

Next of course we want to be able to see the content, so for this we use Next's dynamic routing feature by creating a new file called `[slug].tsx` in the `pages/posts` directory. This will be the template for all our posts, and will be used to render each post.

The main section of this page will be the post content, for now I'm just passing the body content straight into a div, I find it's handy to make these things work first, then tidy them up later.

```tsx
export default function Post({ post, morePosts, preview }: Props) {
  const router = useRouter();
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }
  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
    </>
  );
}
```

Remember to use `dangerouslySetInnerHTML` with caution, as it can be a security risk if you're not careful. [But what does that mean?](https://react.dev/reference/react-dom/components/common#dangerously-setting-the-inner-html) As we know where our HTML is coming from, we can be sure that it's safe to use. In our case we need to make sure no one else can edit our markdown files.

But before this component will work, we need to get the content, which we can do with `getStaticProps` again.

```tsx
export async function getStaticProps({ params }: Params) {
  const post = getPostBySlug(params.slug, [
    'title',
    'date',
    'slug',
    'author',
    'content',
    'ogImage',
    'coverImage',
  ]);
  const content = await markdownToHtml(post.content || '');

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  };
}
```

This is very similar to the `getStaticProps` function in the `posts.tsx` file, but this time we're passing the slug as a parameter, and we're also returning the content by passing it to the post object.

markdownToHtml is another function we need to go and find from the source code. At the top of the file I can see `import markdownToHtml from '../../lib/markdownToHtml'` so let's copy that into our own `lib/markdownToHtml.ts` file.

```ts
import { remark } from 'remark';
import html from 'remark-html';

export default async function markdownToHtml(markdown: string) {
  const result = await remark().use(html).process(markdown);
  return result.toString();
}
```

This uses the `remark` library to convert the markdown to HTML, and then returns it as a string.

And with that we're done! We can now see our blog posts at `/posts` and `/posts/[slug]`!
