import React,{useState} from 'react'
import { FaArrowRight } from 'react-icons/fa'

const Navbar = () => {

    const [searchQuery, setSearchQuery] = useState(''); 

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
            <nav className="bg-white fixed w-full h-20 z-20 top-0 start-0 border-b border-gray-200 flex items-center ">
                <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4 w-full">

                    {/* Company Logo/Name */}
                    {/* <a className="text-4xl font-semibold text-gray-500">neweb.ai</a> */}

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

                    {/* Button Container */}
                    <div className="flex space-x-4 items-center">
                        {/* Log In Button */}
                        <button
                            type="button"
                            className="text-black bg-white border border-black-100 hover:bg-gray-500 hover:text-white font-medium rounded-2xl text-base px-6 py-3"
                        >
                            Log In
                        </button>

                        {/* Get Started Button */}
                        <button
                            type="button"
                            className="text-white bg-gray-700 focus:outline-none font-medium rounded-2xl text-base px-6 py-3 flex items-center"
                        >
                            Get Started
                            <span className="ml-2">
                                <FaArrowRight className="w-5 h-5" />
                            </span>
                        </button>
                    </div>
                </div>
            </nav>

        </>
    )
}
export default Navbar