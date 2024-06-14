import React from 'react';
import Home from '@/app/content/Home';
import Projects from '@/app/content/Projects';
import About from '@/app/content/About';

type ViewPortProps = {
  contentName: string;
  //   contentRef: RefObject<HTMLDivElement>;
};

const ViewPort: React.FC<ViewPortProps> = ({ contentName }) => {
  return (
    <div
      className='fixed bottom-4 max-h-3/4  top-80 md:top-40 md:bottom-4 right-4 bg-gray-200 bg-opacity-75 p-4 w-3/4 rounded-md overflow-auto z-30'
      //   ref={contentRef}
    >
      {contentName === 'Home' && <Home contentName={contentName} />}
      {contentName === 'Projects' && <Projects contentName={contentName} />}
      {contentName === 'About' && <About contentName={contentName} />}
      {/* <h1>I clicked on {contentName}</h1> */}
    </div>
  );
};

export default ViewPort;
