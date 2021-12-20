import React from 'react';
import './App.css';
import {Routes,Route,Link} from 'react-router-dom';
import {Layout,Typography,Space} from 'antd';

import {Navbar,HomePage,News,Exchanges,Cryptocurrencies,CryptoDetails} from './components';

function App() {
  return (
    <div className="App">
      <div className='navbar'>
        <Navbar/>
      </div>
      <div className="main">
        <Layout>
           <div className="routes">
             <Routes>
               <Route exact path="/" element={<HomePage/>}/>
               <Route exact path="/cryptocurrencies" element={<Cryptocurrencies/>}/>
               <Route exact path="/crypto/:coinId" element={<CryptoDetails/>}/>
               <Route exact path="/exchanges" element={<Exchanges/>}/>
               <Route exact path="/news" element={<News/>}/>
            </Routes>
           </div>
           
        </Layout>
      <div className="footer">
            <Typography.Title level={5} style={{color: "white", textAlign: 'center'}}>
              Cryptoverse <br /> 
              All rights are reserved.
            </Typography.Title>
            <Space>
              <Link to="/">Home</Link>
              <Link to="/exchanges">Exchanges</Link>
              <Link to="/news">News</Link>
            </Space>
      </div>
      </div>
    </div>
  );
}

export default App;
