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
      <h2>Choose a method to get in touch</h2>
      <Emoji className={classNames('text-7xl')} symbol="📧" />
    </>
  );
}

export default contact;
