import React from 'react';

interface PropTypes {
  symbol: string;
  label?: string;
  className?: string;
}

const Emoji = ({ symbol, label, className }: PropTypes) => (
  <span
    className={className}
    role="img"
    aria-label={label ? label : ''}
    aria-hidden={label ? 'false' : 'true'}
  >
    {symbol}
  </span>
);
export default Emoji;
