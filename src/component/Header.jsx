"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Header = () => {
  const pathName = usePathname();

  if(pathName.startsWith("/dashboard")) {
    return <></> ; 
  } else {
    
  }

  return (
    <header className="px-8 py-4 border-b-2 flex items-center justify-between">
      <h2 className="text-lg font-semibold ">💻 Dev-Story</h2>

      {/* Navigation */}
      <nav>
        <ul className="flex space-x-4">
          <li>
            <a href="/" className="hover:underline">
              Home
            </a>
          </li>
          <li>
            <a href="/about" className="hover:underline">
              About
            </a>
          </li>
          <li>
            <a href="/tutorials" className="hover:underline">
              Tutorials
            </a>
          </li>
          <li>
            <a href="/stories" className="hover:underline">
              Stories
            </a>
          </li>
        
        </ul>
      </nav>

      <div className="flex space-x-4">
        <Link href="/login">
          <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
            Login
          </button>
        </Link>
        <Link href="/register">
          <button className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600">
            Register
          </button>
        </Link>
      </div>
    </header>
  );
};

export default Header;
