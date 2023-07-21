import React from 'react';
import { useEffect } from 'react';
import './App.css';
import { useTelegram } from './hooks/useTelegram';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Header from './components/Header/Header';

import { Route, Routes } from 'react-router-dom';
import ProductList from './components/ProductList/ProductList';
import Form from './components/Form/Form';

function App() {

  const { onToggleButton, onClose, tg } = useTelegram();


  useEffect(() => {
    console.log('UseEffect');
    tg.ready();
    
  }, []);

// The new comments

  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route index element={<ProductList />}></Route>        
        <Route path={'form'} element={<Form />}></Route>
      </Routes>
      {/* <p>New with Toggle</p>
      <Button onClick={onToggleButton} size="lg" className='m-2'>Toggle</Button>
      <Button onClick={onClose} size="lg" className='m-2'>Close</Button> */}
    </div>
  );
}

export default App;
