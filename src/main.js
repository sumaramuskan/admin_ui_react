import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import * as Components from './components'

const Main = () => {
  return (
    <div>
        <Router>
            <Routes>
            <Route path="/login" element={<Components.Login />} />
            <Route path="/payments" element={<Components.Payment />} />
            <Route path="/users" element={<Components.Users />} />
            <Route path="*" element={<Components.Payment />} />

            </Routes>
        </Router>
    </div>
  )
}

export default Main