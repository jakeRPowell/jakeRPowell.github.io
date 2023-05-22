import React from 'react';
export const getStaticProps = async () => {
  return {
    props: { pageNumber: 2 },
  };
};
function About() {
  return <div>About</div>;
}

export default About;
