import React from 'react';
export const getStaticProps = async () => {
  return {
    props: { pageNumber: 2 },
  };
};
function About() {
  return (
    <div>
      This page is waiting for some content, but for an overview this site is
      built in Next.js, using framer motion and three.js for the cool stuff
    </div>
  );
}

export default About;
