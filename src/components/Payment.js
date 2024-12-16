import React, { useState } from "react";
import { FaDownload } from "react-icons/fa";
import { EyeIcon } from "@heroicons/react/24/solid";

const Payment = ({ billingData = [] }) => {
  const [searchQuery, setSearchQuery] = useState("");

  // Filter data based on the search query
  const filteredData = billingData.filter((item) =>
    Object.values(item).some((value) =>
      String(value).toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  return (
    <div className="bg-white p-6 rounded-lg shadow-md overflow-x-auto">
      <div className="mb-4 flex justify-between items-center">
        <h2 className="text-2xl font-bold mb-6 text-s6">Payments</h2>
        <div className="relative w-full max-w-md">
          <input
            type="text"
            placeholder="Type your search"
            className="w-full p-2 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
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
      </div>
      <table className="table-auto w-full border-collapse">
        <thead>
          <tr className="bg-gray-100 text-gray-700">
            <th className="px-8 py-3 text-left font-medium text-sm uppercase tracking-wider">
              Txn ID
            </th>
            <th className="px-8 py-3 text-left font-medium text-sm uppercase tracking-wider">
              Price
            </th>
            <th className="px-8 py-3 text-left font-medium text-sm uppercase tracking-wider">
              Trial End Date
            </th>
            <th className="px-8 py-3 text-left font-medium text-sm uppercase tracking-wider">
              Start Date
            </th>
            <th className="px-8 py-3 text-left font-medium text-sm uppercase tracking-wider">
              End Date
            </th>
            <th className="px-8 py-3 text-center font-medium text-sm uppercase tracking-wider">
              Status
            </th>
            <th className="px-8 py-3 text-center font-medium text-sm uppercase tracking-wider">
              Invoice
            </th>
            <th className="px-8 py-3 text-center font-medium text-sm uppercase tracking-wider">
              View
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {filteredData.length > 0 ? (
            filteredData.map((item, index) => (
              <tr
                key={index}
                className={`hover:bg-gray-50 transition-transform transform ${
                  index % 2 === 0 ? "bg-gray-50" : "bg-white"
                }`}
              >
                <td className="px-9 py-4 text-gray-700">{item.id}</td>
                <td className="px-9 py-4 text-gray-700">{item.price}</td>
                <td className="px-9 py-4 text-gray-700">{item.trialEndDate}</td>
                <td className="px-9 py-4 text-gray-700">{item.startDate}</td>
                <td className="px-9 py-4 text-gray-700">{item.endDate}</td>
                <td className="px-9 py-4 text-center">
                  <span
                    className={`inline-block py-1 px-3 rounded-lg text-center w-24 text-sm font-semibold ${
                      item.status === "Expired"
                        ? "bg-red-500 text-white"
                        : "bg-green-500 text-white"
                    }`}
                  >
                    {item.status}
                  </span>
                </td>
                <td className="px-9 py-4 text-center">
                  <div className="flex items-center justify-center">
                    <FaDownload className="mr-2 text-blue-500" />
                    <button className="text-blue-500 font-medium hover:text-blue-700">
                      Download
                    </button>
                  </div>
                </td>
                <td className="px-9 py-4 text-center">
                  <div className="flex items-center justify-center">
                    <EyeIcon className="h-5 w-5 text-blue-500 mr-2" />
                    <button className="text-blue-500 font-medium hover:text-blue-700">
                      View
                    </button>
                  </div>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="8" className="px-6 py-4 text-center text-gray-500">
                No matching records found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};
export default Payment;
