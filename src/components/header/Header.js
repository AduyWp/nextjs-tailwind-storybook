import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

const Header = () => {
  const router = useRouter();

  return (
    <header className="bg-white-500 py-4 mb-5">
      <div className="container mx-auto">
        <nav className="flex items-center justify-between">
          <div className="flex items-center">
            {/* Add your logo or title here */}
            <span className="text-black font-bold text-xl">My Website</span>
          </div>
          <div className="flex items-center">
            {/* Add your navigation links here */}
            <Link href="/" className={router.pathname === '/' ? 'active mx-4' : 'text-black mx-4'}>
              Home
            </Link>
            <Link href="/login" className={router.pathname === '/login' ? 'active mx-4' : 'text-black mx-4'}>
              Login
            </Link>
            <Link href="/storybook" className={router.pathname === '/storybook' ? 'active mx-4' : 'text-black mx-4'}>
              Storybook
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
