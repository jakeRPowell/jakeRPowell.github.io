import Emoji from '@/components/emoji';
import classNames from 'classnames';
import React from 'react';
export const getStaticProps = async () => {
  return {
    props: { pageNumber: 3 },
  };
};
function contact() {
  return (
    <>
      This page is waiting for some content, in the meantime you can{' '}
      <a href="mailto:ja.cobr@outlook.com">email me at ja.cobr@outlook.com</a>
    </>
  );
}

export default contact;
