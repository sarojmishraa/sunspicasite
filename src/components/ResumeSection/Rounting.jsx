import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ResumeSection from './ResumeSection'

const Rounting = () => {
  return (
    <>
      <Router>
      <Routes>
        <Route path="/" element={<ResumeSection />} />
      </Routes>
    </Router>
    </>
  )
}

export default Rounting
