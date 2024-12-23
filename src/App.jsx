import React, { useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import PageNotFound from './pages/PageNotFound'
import Layout from './components/Layout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <Layout>
            <Home />
          </Layout>
        } />
        <Route path="*" element={
          <Layout>
            <PageNotFound />
          </Layout>
        } />
      </Routes>
    </BrowserRouter>
  )
}

export default App