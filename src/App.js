import './App.css';
import Pricing from './pages/Pricing';
import NoInternetPage from './errors/NoInternetPage';
import React,{ useEffect, useState } from 'react';

function App() {
  const [noInternet, setNoInternet] = useState(false)

  window.addEventListener('offline', function(e) {
    setNoInternet(true) 
  });
    
  window.addEventListener('online', function(e) { 
    setNoInternet(false) 
  });
  
  useEffect(() => {
   
  },[noInternet])
  

  return (
    <>
      {
        noInternet ? <NoInternetPage /> : <Pricing />
      }
    </>
  );
}

export default App;
