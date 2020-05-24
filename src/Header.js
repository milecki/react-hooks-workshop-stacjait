import React, { useState, useEffect } from 'react';

function Header() {
  const normalClass = 'headerNormal';
  const fixedClass = 'headerFixed';

  const [headerClass, setHeaderClass] = useState(normalClass);

  const handleScroll = () => {
    let y = window.scrollY;
    if (y > 1000) {
      setHeaderClass(fixedClass);
    } else {
      setHeaderClass(normalClass);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return <h1 class={headerClass}>Blog Michała - warsztat React Hooks</h1>;
}

export default Header;
