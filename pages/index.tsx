import Link from 'next/link';

export const getStaticProps = async () => {
  return {
    props: { pageNumber: 0 },
  };
};

function HomePage() {
  return (
    <>
      <h1 className="mb-4 text-4xl font-bold">
        Welcome to My Website - Currently under construction
      </h1>
      <p>
        This is my personal website, the plan is to put projects and other cool
        stuff on here. Currently building this out in Next.js, with a bit of
        FramerMotion and three.js on the side
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
