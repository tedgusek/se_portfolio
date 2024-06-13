import Image from 'next/image';
import NavBar from '@/components/NavBar';
export default function Home() {
  const navItems: string[] = ['home', 'projects', 'about'];
  return (
    <main className='flex min-h-screen flex-col justify-between p-4'>
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
        <NavBar navItems={navItems} />
      </div>
    </main>
  );
}
