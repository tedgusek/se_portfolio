'use client';

import React from 'react';

interface NavBarProps {
  navItems: string[];
  assignContent: (name: string) => void;
  //   scrollToTop: () => void;
}

const NavBar: React.FC<NavBarProps> = ({
  navItems,
  assignContent,
  //   scrollToTop,
}) => {
  return (
    <div className=' flex w-screen top-5 justify-end mx-4'>
      {navItems.map((ele, index) => (
        <ul
          key={index}
          className='w-24 bg-slate-500 rounded-xl px-4 py-1 my-2 text-center inline-block mx-4 hover:bg-teal-500 hover:text-black'
          onClick={() => {
            assignContent(ele);
            // scrollToTop();
          }} // Have this render new component in viewport
        >
          {ele}
        </ul>
      ))}
    </div>
  );
};

export default NavBar;
