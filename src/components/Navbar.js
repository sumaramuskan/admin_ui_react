import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (data) => {
    if (!searchQuery) return data;
    return data.filter((item) =>
      Object.values(item).some((value) =>
        String(value).toLowerCase().includes(searchQuery.toLowerCase())
      )
    );
  };
  return (
    <>
      <header className="bg-gray-100 border-b p-4 fixed w-full ml-64">
        <nav className="bg-white fixed w-full z-3 h-22 top-0 start-0 border-b border-gray-200 flex items-center shadow-md ">
          <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4 w-full">
            <button class="text-gray-500 focus:outline-none focus:text-gray-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
            <div className="absolute right-64">
              <input
                type="text"
                placeholder="Search..."
                className="w-64 p-2 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <span className="absolute left-3 top-2.5 text-gray-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-4.35-4.35m1.45-4.65a7.5 7.5 0 1 1-15 0 7.5 7.5 0 0 1 15 0z"
                  />
                </svg>
              </span>
            </div>

            <div className="flex space-x-4 items-center">
              {/* Get Started Button */}
              <button
                type="button"
                className="text-white bg-gray-700 focus:outline-none font-medium rounded-2xl text-base px-6 py-3 flex items-center absolute right-12"
              >
                Get Started
                <span className="ml-2">
                  <FaArrowRight className="w-5 h-5" />
                </span>
              </button>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};
export default Navbar;
