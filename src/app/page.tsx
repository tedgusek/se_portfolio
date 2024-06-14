'use client';

import Image from 'next/image';
import NavBar from '@/components/NavBar';
import React, { useEffect, useState, useRef } from 'react';
import ViewPort from '@/components/ViewPort';

export default function Home() {
  const navItems: string[] = ['Home', 'Projects', 'About'];
  const [contentName, setContentName] = useState('Home');
  const contentRef = useRef<HTMLDivElement>(null);

  const assignContent = (name: string) => {
    setContentName(name);
  };

  // const scrollToTop = () => {
  //   if (contentRef.current) {
  //     contentRef.current.scrollTop = 0;
  //   }
  // };

  return (
    <main className='flex min-h-screen flex-col justify-between p-4'>
      <div>
        <div className='flex flex-row w-screen items-start'>
          <div className='mx-10 my-4 min-w-48'>
            <Image
              className='drop-shadow-[0_0_0.5rem_#ffffff70]'
              style={{ borderRadius: '100px', overflow: 'hidden' }}
              src='/ted_small_image.png'
              alt="Ted's Headshot"
              width={180}
              height={180}
              priority
            />
          </div>
          <NavBar
            navItems={navItems}
            assignContent={assignContent}
            // scrollToTop={scrollToTop}
          />
        </div>
        <div className='flex flex-col text-center w-4/5  mx-40 min-w-40'>
          <ViewPort contentName={contentName} />
        </div>
      </div>
    </main>
  );
}
