import React from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <div className="bg-black text-white fixed p-10 w-full top-0 flex justify-center items-center">
      <Link href="/">
        <h1 className="text-5xl text-white font-mono font-bold tracking-wide mx-auto">
          Fine Tuning Lab
        </h1>
      </Link>
    </div>
  );
}

export default Header;