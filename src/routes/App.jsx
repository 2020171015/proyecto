import React from 'react';
import '@styles/global.css';
import Layout from '@containers/Layout';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '@pages/Home';

const App = () => {
  return (
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path='/' element={<Home />} />
          </Routes>
        </Layout>
      </BrowserRouter>
  );
};

export default App;