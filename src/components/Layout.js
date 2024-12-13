import React, { useState } from 'react'
import { CiPower } from 'react-icons/ci'
import { FaArrowRight } from 'react-icons/fa'
import { Link, useNavigate, Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'
import  Navbar  from './Navbar'

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
            <Sidebar/>
            <div className="flex-1 overflow-y-auto ">
                {/* Header */}
                <Navbar/>
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