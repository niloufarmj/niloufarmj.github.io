import React, { useState, useEffect } from 'react';
import './App.css';
import LoadingPage from './Pages/LoadingPage';
import MainContainer from './Pages/MainContainer';

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, []);

  return (
    <>
    {loading && <LoadingPage />}
    {!loading && 
    <>
      <MainContainer />
    </>}
    </>
  );
}

export default App;
