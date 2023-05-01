import Link from 'next/link';

function HomePage() {
  return (
    <>
      <h1 className="mb-4 text-4xl font-bold">
        Welcome to My Website - Currently under construction
      </h1>
      <p>
        I was recently made redundant, so for the first time in about 4 years
        I&#39;ve got no work lined up. Seems like a good time to finally build
        my website! (This site is built with Next.js and Tailwind CSS, hosted on
        github pages)
      </p>
      <p>
        <Link href="/posts">the blog is now live!</Link> so I suppose I&#39;m
        now also learning how to write blog posts
      </p>
      <p>
        <a href="https://github.com/jakeRPowell">
          For now, check out my github
        </a>
        &nbsp;or play with the theme toggle button in the meantime
      </p>
    </>
  );
}

export default HomePage;
