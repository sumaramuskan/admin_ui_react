import React, { useState } from "react";
import Chart from "react-apexcharts";
import { EyeIcon } from "@heroicons/react/24/solid";

// TODO:try to implement @mui/material
import { TextField } from "@mui/material";
import { InputAdornment } from "@mui/material";
import Typography from "@mui/material/Typography";
import CardDataStats from "./CardDataStats";
import SearchIcon from "@mui/icons-material/Search";
import StatCard from "./StatCard";

const Users = ({ userData = [] }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedColumn, setSelectedColumn] = useState("");
  const [selectedValue, setSelectedValue] = useState("");
  const columns = ["gender", "language", "country", "timezone", "premium"];
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
        String(item[selectedColumn]).toLowerCase() ===
        selectedValue.toLowerCase()
    );
  };
  const filteredData = handleSearch(handleFilter(userData));
  const chartData1 = summarizeColumn(donutChartColumn);
  const chartData2 = summarizeColumn(barChartColumn);

  const cardsData = [
    {
      title: "Total Invoices",
      number: "237",
      rate: "+10.2% from last month",
      background: "#E2E8F0", // Light grayish-blue
    },
    {
      title: "Paid Invoices",
      number: "142",
      rate: "+3.4% from last month",
      background: "#CBD5E0", // Slightly darker grayish-blue
    },
    {
      title: "Expired Invoices",
      number: "43",
      rate: "+2.1% from last month",
      background: "#A0AEC0", // Darker grayish-blue
    },
  ];

  const cardsData1 = [
    {
      title: "Revenue",
      data: [
        200, 300, 400, 200, 122, 543, 222, 1234, 554, 333, 222, 22, 700, 650,
        800,
      ], // Example data
      interval: "Monthly",
      trend: "up",
      value: "$12,000",
    },
    {
      title: "User Growth",
      data: [
        10, 12, 14, 200, 300, 400, 200, 122, 543, 222, 1234, 554, 333, 222, 22,
        700, 650, 800,
      ], // Example data
      interval: "Weekly",
      trend: "neutral",
      value: "15%",
    },
    {
      title: "Sales",
      data: [
        500, 600, 700, 200, 300, 400, 200, 122, 543, 222, 1234, 554, 333, 222,
        22, 700, 650, 800,
      ], // Example data
      interval: "Quarterly",
      trend: "down",
      value: "$8,000",
    },
  ];

  return (
    // TODO: Avoid creating excessive hierarchies of div and other tags, as it might cause issues with responsiveness.
    <div>
      <div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 mb-2">
          {cardsData1.map((card, index) => (
            <StatCard
              key={index}
              title={card.title}
              data={card.data}
              interval={card.interval}
              trend={card.trend}
              value={card.value}
            />
          ))}
        </div>
      </div>
      {/* <div className="grid grid-cols-1 gap-6 sm:"grid-cols-2 md:grid-cols-3 mb-2">
                {cardsData.map((card, index) => (
                    <CardDataStats
                        key={index}
                        title={card.title}
                        number={card.number}
                        rate={card.rate}
                        background={card.background}
                    />
                ))}
            </div> */}
      <div className="bg-white p-6 rounded-lg shadow-md overflow-x-auto ">
        <div className="mb-6 flex justify-between items-center">
          <h2 className="text-2xl font-bold text-s6">User Info</h2>
          <div className="flex items-center space-x-4">
            {/* Search Input */}
            <div className="w-full flex items-center border border-gray-300 rounded-lg focus-within:ring-2 focus-within:ring-blue-300">
              <span className="flex items-center justify-center p-2 text-gray-500">
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
              <input
                type="text"
                placeholder="Search..."
                className="flex-1 p-2 pl-2 focus:outline-none"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <select
              value={selectedColumn}
              onChange={(e) => setSelectedColumn(e.target.value)}
              className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Filter</option>
              {columns.map((col) => (
                <option key={col} value={col} className="text-s6">
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
        <div className="overflow-x-auto">
          <table className="table-auto w-full border-collapse">
            <thead>
              <tr className="bg-gray-100 text-gray-700">
                <th className="px-8 py-3 text-left font-medium text-sm uppercase tracking-wider">
                  Full Name
                </th>
                <th className="px-8 py-3 text-left font-medium text-sm uppercase tracking-wider">
                  Gender
                </th>
                <th className="px-8 py-3 text-left font-medium text-sm uppercase tracking-wider">
                  Language
                </th>
                <th className="px-8 py-3 text-left font-medium text-sm uppercase tracking-wider">
                  Country
                </th>
                <th className="px-8 py-3 text-left font-medium text-sm uppercase tracking-wider">
                  TimeZone
                </th>
                <th className="px-8 py-3 text-left font-medium text-sm uppercase tracking-wider">
                  Email
                </th>
                <th className="px-8 py-3 text-left font-medium text-sm uppercase tracking-wider">
                  Contact No.
                </th>
                <th className="px-8 py-3 text-left font-medium text-sm uppercase tracking-wider">
                  Premium
                </th>
                <th className="px-8 py-3 text-left font-medium text-sm uppercase tracking-wider">
                  Websites Created
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredData.length > 0 ? (
                filteredData.map((item, index) => (
                  <tr
                    key={index}
                    className={`hover:bg-gray-50 ${
                      index % 2 === 0 ? "bg-gray-50" : "bg-white"
                    }`}
                  >
                    <td className="px-9 py-4 text-gray-700">{item.fullname}</td>
                    <td className="px-9 py-4 text-gray-700">{item.gender}</td>
                    <td className="px-9 py-4 text-gray-700">{item.language}</td>
                    <td className="px-9 py-4 text-gray-700">{item.country}</td>
                    <td className="px-9 py-4 text-gray-700">{item.timezone}</td>
                    <td className="px-9 py-4 text-gray-700">{item.email}</td>
                    <td className="px-9 py-4 text-gray-700">
                      {item.contactNo}
                    </td>
                    <td className="px-9 py-4 text-gray-700">
                      <span
                        className={`inline-block py-1 px-3 rounded-lg items-center text-center w-16 text-sm font-semibold ${
                          item.premium === "Yes"
                            ? "bg-green-500 text-white"
                            : "bg-gray-300 text-gray-700"
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
                  <td
                    colSpan="9"
                    className="px-6 py-4 text-center text-gray-500"
                  >
                    No matching records found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 p-4 bg-gray-100 overflow-x-auto">
        {/* Donut Chart Section */}
        <div className="bg-white shadow-md rounded-xl p-4 transition-transform transform hover:scale-105 hover:shadow-lg flex flex-col items-center">
          <h3 className="text-md font-medium mb-2 text-gray-700 text-center">
            Donut Graph:{" "}
            {donutChartColumn.charAt(0).toUpperCase() +
              donutChartColumn.slice(1)}
          </h3>
          <select
            value={donutChartColumn}
            onChange={(e) => setDonutChartColumn(e.target.value)}
            className="mb-3 p-2 w-3/4 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 text-sm"
          >
            {columns.map((col) => (
              <option key={col} value={col}>
                {col.charAt(0).toUpperCase() + col.slice(1)}
              </option>
            ))}
          </select>
          <div className="w-64 h-64">
            <Chart
              options={{
                labels: chartData1.labels,
                legend: {
                  position: "bottom",
                },
                chart: {
                  background: "#f9fafb",
                  foreColor: "#333",
                },
              }}
              series={chartData1.data}
              type="donut"
              width="100%"
              height="100%"
            />
          </div>
        </div>

        {/* Bar Graph Section */}
        <div className="bg-white shadow-md rounded-xl p-4 transition-transform transform hover:scale-105 hover:shadow-lg flex flex-col items-center">
          <h3 className="text-md font-medium mb-2 text-gray-700 text-center">
            Bar Graph:{" "}
            {barChartColumn.charAt(0).toUpperCase() + barChartColumn.slice(1)}
          </h3>
          <select
            value={barChartColumn}
            onChange={(e) => setBarChartColumn(e.target.value)}
            className="mb-3 p-2 w-3/4 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500 text-sm"
          >
            {columns &&
              columns.map((col, index) => (
                <option key={col + index} value={col}>
                  {col.charAt(0).toUpperCase() + col.slice(1)}
                </option>
              ))}
          </select>
          <div className="w-64 h-64">
            <Chart
              options={{
                chart: {
                  type: "bar",
                  background: "#f9fafb",
                  foreColor: "#333",
                },
                xaxis: {
                  categories: chartData2.labels,
                },
                legend: {
                  position: "bottom",
                },
                plotOptions: {
                  bar: {
                    columnWidth: "50%",
                    borderRadius: 4,
                  },
                },
              }}
              series={[{ name: barChartColumn, data: chartData2.data }]}
              type="bar"
              width="100%"
              height="100%"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Users;
