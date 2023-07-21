import React from 'react';
import { useEffect } from 'react';
import './App.css';
import { useTelegram } from './hooks/useTelegram';
import Button from 'react-bootstrap/Button';


function App() {

  const { onToggleButton, onClose, tg } = useTelegram();


  useEffect(() => {
    console.log('UseEffect');
    tg.ready();
    
  }, []);

// The new comments

  return (
    <div className="App">
      <p>New with Toggle</p>
      <Button onClick={onToggleButton}>Toggle</Button>
      <Button onClick={onClose}>Close</Button>
      
    </div>
  );
}

export default App;
