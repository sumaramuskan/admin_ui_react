import React, { useState } from 'react';
import Chart from 'react-apexcharts';
import { EyeIcon } from '@heroicons/react/24/solid';

const Users = ({ userData = [] }) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedColumn, setSelectedColumn] = useState('');
    const [selectedValue, setSelectedValue] = useState('');
    const columns = [
        'gender', 'language', 'country', 'timezone', 'premium'
    ];
    const [donutChartColumn, setDonutChartColumn] = useState(columns[0]);
    const [barChartColumn, setBarChartColumn] = useState(columns[0]);
    const getColumnValues = (column) => {
        const values = userData.map((item) => item[column]);
        return [...new Set(values)];
    };
    const summarizeColumn = (column) => {
        const summary = userData.reduce((acc, item) => {
            const key = item[column];
            acc[key] = (acc[key] || 0) + 1;
            return acc;
        }, {});
        return {
            labels: Object.keys(summary),
            data: Object.values(summary),
        };
    };
    const handleSearch = (data) => {
        if (!searchQuery) return data;
        return data.filter((item) =>
            Object.values(item).some((value) =>
                String(value).toLowerCase().includes(searchQuery.toLowerCase())
            )
        );
    };
    const handleFilter = (data) => {
        if (!selectedColumn || !selectedValue) return data;
        return data.filter(
            (item) =>
                String(item[selectedColumn]).toLowerCase() === selectedValue.toLowerCase()
        );
    };
    const filteredData = handleSearch(handleFilter(userData));
    const chartData1 = summarizeColumn(donutChartColumn);
    const chartData2 = summarizeColumn(barChartColumn);
    return (
        <div className="bg-white p-6 rounded-lg shadow-md overflow-x-auto">
            {/* Header */}
            <div className="mb-6 flex justify-between items-center">
                <h2 className="text-2xl font-bold text-s6">User Info</h2>
                <div className="flex items-center space-x-4">
                    {/* Search Input */}
                    <div className="relative overflow-x-auto">
                        <div className="relative w-64">
                            <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth="1.5"
                                    stroke="currentColor"
                                    className="w-5 h-5 z-0"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M21 21l-4.35-4.35m1.45-4.65a7.5 7.5 0 1 1-15 0 7.5 7.5 0 0 1 15 0z"
                                    />
                                </svg>
                            </span>
                            <input
                                type="text"
                                placeholder="Search..."
                                className="w-full p-2 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                        </div>
                    </div>

                    <select
                        value={selectedColumn}
                        onChange={(e) => setSelectedColumn(e.target.value)}
                        className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        <option value="" >Filter</option>
                        {columns.map((col) => (
                            <option key={col} value={col} className='text-s6'>
                                {col.charAt(0).toUpperCase() + col.slice(1)}
                            </option>
                        ))}
                    </select>
                    {selectedColumn && (
                        <select
                            value={selectedValue}
                            onChange={(e) => setSelectedValue(e.target.value)}
                            className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            <option value="">Select Value</option>
                            {getColumnValues(selectedColumn).map((value, index) => (
                                <option key={index} value={value}>
                                    {value}
                                </option>
                            ))}
                        </select>
                    )}
                </div>
            </div>
            {/* charts */}
            {/* <div className="grid grid-cols-2 gap-10 p-10 bg-gray-100"> */}
            {/* First Graph Section */}
            {/* <div className="bg-white shadow-lg rounded-lg p-6">
                    <h3 className="text-lg font-semibold mb-4 text-gray-700">Graph: {chartColumn.charAt(0).toUpperCase() + chartColumn.slice(1)}</h3>
                    <select
                        value={chartColumn}
                        onChange={(e) => setChartColumn(e.target.value)}
                        className="mb-6 p-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        {columns.map((col) => (
                            <option key={col} value={col}>
                                {col.charAt(0).toUpperCase() + col.slice(1)}
                            </option>
                        ))}
                    </select>
                    <Chart
                        options={{
                            labels: chartData.labels,
                            legend: {
                                position: 'bottom',
                            },
                        }}
                        series={chartData.data}
                        type="donut"
                        width="70%"
                    />
                </div> */}
            <div className="overflow-x-auto">
                <table className="table-auto w-full border-collapse">
                    <thead>
                        <tr className="bg-gray-100 text-gray-700">
                            <th className="px-8 py-3 text-left font-medium text-sm uppercase tracking-wider">Full Name</th>
                            <th className="px-8 py-3 text-left font-medium text-sm uppercase tracking-wider">Gender</th>
                            <th className="px-8 py-3 text-left font-medium text-sm uppercase tracking-wider">Language</th>
                            <th className="px-8 py-3 text-left font-medium text-sm uppercase tracking-wider">Country</th>
                            <th className="px-8 py-3 text-left font-medium text-sm uppercase tracking-wider">TimeZone</th>
                            <th className="px-8 py-3 text-left font-medium text-sm uppercase tracking-wider">Email</th>
                            <th className="px-8 py-3 text-left font-medium text-sm uppercase tracking-wider">Contact No.</th>
                            <th className="px-8 py-3 text-left font-medium text-sm uppercase tracking-wider">Premium</th>
                            <th className="px-8 py-3 text-left font-medium text-sm uppercase tracking-wider">Websites Created</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                        {filteredData.length > 0 ? (
                            filteredData.map((item, index) => (
                                <tr
                                    key={index}
                                    className={`hover:bg-gray-50 ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}
                                >
                                    <td className="px-9 py-4 text-gray-700">{item.fullname}</td>
                                    <td className="px-9 py-4 text-gray-700">{item.gender}</td>
                                    <td className="px-9 py-4 text-gray-700">{item.language}</td>
                                    <td className="px-9 py-4 text-gray-700">{item.country}</td>
                                    <td className="px-9 py-4 text-gray-700">{item.timezone}</td>
                                    <td className="px-9 py-4 text-gray-700">{item.email}</td>
                                    <td className="px-9 py-4 text-gray-700">{item.contactNo}</td>
                                    <td className="px-9 py-4 text-gray-700">
                                        <span
                                            className={`inline-block py-1 px-3 rounded-lg items-center text-center w-16 text-sm font-semibold ${item.premium === 'Yes'
                                                ? 'bg-green-500 text-white'
                                                : 'bg-gray-300 text-gray-700'
                                                }`}
                                        >
                                            {item.premium}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-center">
                                        <div className="flex items-center justify-center">
                                            <EyeIcon className="h-5 w-5 text-blue-500 mr-2" />
                                            <button className="text-blue-500 font-medium hover:text-blue-700">
                                                View {item.count}
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="9" className="px-6 py-4 text-center text-gray-500">
                                    No matching records found
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 p-6 bg-gray-100 overflow-x-auto border-collapse">
                {/* Donut Chart Section */}
                <div className="bg-white shadow-lg rounded-xl p-4 transition-transform transform hover:scale-105 hover:shadow-2xl">
                    <h3 className="text-lg font-medium mb-3 text-gray-700">
                        Donut Graph: {donutChartColumn.charAt(0).toUpperCase() + donutChartColumn.slice(1)}
                    </h3>
                    <select
                        value={donutChartColumn}
                        onChange={(e) => setDonutChartColumn(e.target.value)}
                        className="mb-4 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 text-sm"
                    >
                        {columns.map((col) => (
                            <option key={col} value={col}>
                                {col.charAt(0).toUpperCase() + col.slice(1)}
                            </option>
                        ))}
                    </select>
                    <Chart
                        options={{
                            labels: chartData1.labels,
                            legend: {
                                position: 'bottom',
                            },
                            chart: {
                                background: '#f9fafb',
                                foreColor: '#333',
                            },
                        }}
                        series={chartData1.data}
                        type="donut"
                        width="100%"
                    />
                </div>

                {/* Bar Graph Section */}
                <div className="bg-white shadow-lg rounded-xl p-4 transition-transform transform hover:scale-105 hover:shadow-2xl">
                    <h3 className="text-lg font-medium mb-3 text-gray-700">
                        Bar Graph: {barChartColumn.charAt(0).toUpperCase() + barChartColumn.slice(1)}
                    </h3>
                    <select
                        value={barChartColumn}
                        onChange={(e) => setBarChartColumn(e.target.value)}
                        className="mb-4 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 text-sm"
                    >
                        {columns && columns.map((col, index) => (
                            <option key={col + index} value={col}>
                                {col.charAt(0).toUpperCase() + col.slice(1)}
                            </option>
                        ))}
                    </select>
                    <Chart
                        options={{
                            chart: {
                                type: 'bar',
                                background: '#f9fafb',
                                foreColor: '#333',
                            },
                            xaxis: {
                                categories: chartData2.labels,
                            },
                            legend: {
                                position: 'bottom',
                            },
                            plotOptions: {
                                bar: {
                                    columnWidth: '50%',
                                    borderRadius: 4,
                                },
                            },
                        }}
                        series={[{ name: barChartColumn, data: chartData2.data }]}
                        type="bar"
                        width="100%"
                    />
                </div>
            </div>

        </div>


    );
};
export default Users;