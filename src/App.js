import React from 'react'
import Page from './Page';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import End from './component/End/End';
import Start from './component/start/Start';
export const url = "https://quiz-app-pro.herokuapp.com/api/quiz";


export default function App() {
  return (
    <Router>
      <Routes>
        <Route path='*' element={<Start />} />
        <Route path='/Quiz' element={<Page />} />
        <Route path='/end' element={<End />} />
      </Routes>
    </Router>
  )
}
