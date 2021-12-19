
import './App.css';
import {Router,Route,Link} from 'react-router-dom';
import {Layout,Typography,Space} from 'antd';

import {Navbar, Home, News, Exchanges, Cryptocurrencies, CryptoDetails} from './components';
function App() {
  return (
    <div className="App">
      <div className='navbar'>
        <Navbar/>
      </div>
      <div className="main">
        <Layout>
           <div className="routes">
             <Router>
               <Route exact path="/" component={Home}/>
               <Route exact path="/cryptocurrencies" component={Cryptocurrencies}/>
               <Route exact path="/crypto/:coinId" component={CryptoDetails}/>
               <Route exact path="/exchanges" component={Exchanges}/>
               <Route exact path="/news" component={News}/>
            </Router>
           </div>
        </Layout>
      </div>
      <div className="footer">

        
      </div>
    </div>
  );
}

export default App;
