import React, { useState } from 'react'
import { CiPower } from 'react-icons/ci'
import { FaArrowRight } from 'react-icons/fa'
import { Link, useNavigate, Outlet } from 'react-router-dom'

const Layout = ({ children }) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [open, isOpen] = useState(true)
    const handleSearch = (data) => {
        if (!searchQuery) return data;
        return data.filter((item) =>
            Object.values(item).some((value) =>
                String(value).toLowerCase().includes(searchQuery.toLowerCase())
            )
        );
    };
    return (
        <div className="flex h-screen">
            <aside className={` hidden w-64 bg-sidebar_bg z-2 md:block min-h-screen  relative`}>
                <div class="py-5 text-2xl text-center tracking-widest bg-sidebar_bg border-b-2 border-s8 mb-8 leading-loose shadow-md">
                    <a href="/" class="text-black">neweb.ai</a>
                </div>
                <nav class="text-sm text-black">
                    <ul class="flex flex-col">
                        {/* <li class="px-4 py-2 text-s uppercase tracking-wider text-gray-500 font-bold">USER MANAGEMENT</li> */}
                        <li class="px-4 text-lg cursor-pointer hover:text-s6 hover:bg-white flex items-center">
                            <a class="py-3 flex items-center" href="/users">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 mr-3">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
                                </svg>
                                Users
                            </a>
                        </li>
                        {/* <li class="px-4 py-2 text-s uppercase tracking-wider text-gray-500 font-bold">ECOMMERCE</li> */}
                        <li class="px-4 text-lg hover:text-s6 hover:bg-white">
                            <a class="py-3 flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 mr-3">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z" />
                                </svg>
                                <Link to="/payments"> Payments </Link>

                            </a>
                        </li>
                        {/* <li class="px-4 py-2 text-s uppercase tracking-wider text-gray-500 font-bold">INFORMATION MANAGEMENT</li> */}
                        <li class="px-4 text-lg hover:text-s6 hover:bg-white">
                            <a href="#" class="py-3 flex items-center">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 mr-3">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6" />
                                </svg>
                                Reports
                            </a>
                        </li>
                    </ul>

                </nav>
                <div class="py-3 text-xl text-center tracking-widest bg-sidebar_bg border-b-2 hover:text-s6 hover:bg-white">
                    <a href="/" class="py-3  flex items-center text-black rounded-lg justify-center absolute bottom-4 left-16">
                        <CiPower className="w-5 h-5 mr-2" /> Logout
                    </a>
                </div>
            </aside>

            <div className="flex-1 overflow-y-auto ">
                {/* Header */}
                <header className="bg-gray-100 border-b p-4 fixed w-full ml-64">
                    <nav className="bg-white fixed w-full z-3 h-22 top-0 start-0 border-b border-gray-200 flex items-center shadow-md ">
                        <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4 w-full">
                            <button class="text-gray-500 focus:outline-none focus:text-gray-700">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                                    stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M4 6h16M4 12h16M4 18h16" />
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

                {/* Main Section */}
                <main className="mt-22 p-4 overflow-auto">
                    {children || (
                        <p>
                            Your main content goes here. Scroll down to see the layout in
                            action.
                        </p>
                    )}
                </main>
            </div>
        </div>
    )
}

export default Layout