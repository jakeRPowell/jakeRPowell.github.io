import React, { useEffect, useState } from 'react';

function Footer() {
  const [year, setYear] = useState('');

  useEffect(() => {
    const currentYear = new Date().getFullYear();
    setYear(currentYear.toString());
  }, []);
  return (
    <footer className="container">
      <div className="">
        <p>&copy; {year} Jacob Powell</p>
      </div>
    </footer>
  );
}

export default Footer;
