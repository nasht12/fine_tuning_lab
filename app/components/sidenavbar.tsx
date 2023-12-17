"use client";
import React, { useState } from 'react';
import Link from 'next/link';

const SideNavBar: React.FC = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(true);

  const toggleNav = () => {
    setIsNavExpanded(!isNavExpanded);
  };

  return (
    <div>
      <div className={`fixed left-0 top-0 h-full ${isNavExpanded ? 'w-64' : 'w-0'} overflow-hidden transition-width duration-300 ease-in-out bg-black text-white`}>
        {/* Navigation content */}
        {isNavExpanded && (
          <nav className="p-4">
            <ul className="space-y-2">
            <li className="hover:bg-gray-600 rounded">
                <Link href="/create" className="block p-2 hover:rounded text-xs" style={{ width: '200px' }}>
                  Create JSONL
                </Link>
              </li>
              <li className="hover:bg-gray-600 rounded">
                <Link href="/preparation" className="block p-2 hover:rounded text-xs" style={{ width: '200px' }}>
                  Data Preparation
                </Link>
              </li>
              <li className="hover:bg-gray-600 rounded">
                <Link href="/best_practices" className="block p-2 hover:rounded text-xs" style={{ width: '200px' }}>
                  Best Practices
                </Link>
              </li>
              <li className="hover:bg-gray-600 rounded">
                <Link href="/create" className="block p-2 hover:rounded text-xs" style={{ width: '200px' }}>
                  Fine-Tune with OpenAI GPT Models
                </Link>
              </li>
              <li className="hover:bg-gray-600 rounded">
                <Link href="/create" className="block p-2 hover:rounded text-xs" style={{ width: '200px' }}>
                  Fine-Tune with Google Gemini
                </Link>
              </li>
              <li className="hover:bg-gray-600 rounded">
                <Link href="/create" className="block p-2 hover:rounded text-xs" style={{ width: '200px' }}>
                  Fine-Tune with BERT
                </Link>
              </li>
              {/* Add more navigation items as needed */}
            </ul>
          </nav>
        )}
      </div>
      <button
        onClick={toggleNav}
        className="p-2 text-xl fixed top-0 left-0 ml-64 bg-black hover:bg-gray-600 transition-all duration-300 ease-in-out"
        style={{ marginLeft: isNavExpanded ? '16rem' : '0rem' }} // Adjust button position based on navbar state
      >
        {isNavExpanded ? '🠔' : '🠖'}
      </button>
    </div>
  );
};

export default SideNavBar;
