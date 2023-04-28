import { getAllPosts } from '../lib/api';
import Post from '../interfaces/post';
import Link from 'next/link';

type Props = {
  allPosts: Post[];
};

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

export default function Index({ allPosts }: Props) {
  const heroPost = allPosts[0];
  const morePosts = allPosts.slice(1);

  return (
    <>
      <ul>
        {allPosts.map((post) => (
          <li key={post.slug}>
            <Link as={`/posts/${post.slug}`} href="/posts/[slug]">
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
