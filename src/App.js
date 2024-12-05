import logo from './logo.svg';
import './App.css';
import Login from './components/Login'
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Payment from './components/Payment'
import Layout from './components/Layout';
import Users from './components/Users';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const userData = [
    {
      fullname: 'John Doe',
      gender: 'Male',
      language: 'English',
      country: 'USA',
      timezone: 'GMT-5',
      email: 'john.doe@example.com',
      contactNo: '+1 123 456 7890',
      premium: 'Yes',
      count: 1
    },
    {
      fullname: 'Jane Smith',
      gender: 'Female',
      language: 'Spanish',
      country: 'Mexico',
      timezone: 'GMT-6',
      email: 'jane.smith@example.com',
      contactNo: '+52 987 654 3210',
      premium: 'No',
      count: 2
    },
    {
      fullname: 'Sam Wilson',
      gender: 'Male',
      language: 'English',
      country: 'Canada',
      timezone: 'GMT-4',
      email: 'sam.wilson@example.com',
      contactNo: '+1 555 123 4567',
      premium: 'No',
      count: 1
    },
  ];


  const billingData = [
    { id: 5702491, price: "$130", trialEndDate: "January 19, 2022", startDate: "January 19, 2021", endDate: "March 19, 2021", status: "Expired" },
    { id: 5702492, price: "$65", trialEndDate: "February 19, 2022", startDate: "February 19, 2021", endDate: "April 19, 2021", status: "Paid" },
  ];
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/page" element={<Layout />}>
          </Route>
          <Route path="payments" element={<Layout children={<Payment billingData={billingData} />}/>} />
          <Route path="users" element={<Layout children={<Users userData={userData} />}/>} />
        </Routes>
      </Router>
    </div>
  );
}
export default App;
