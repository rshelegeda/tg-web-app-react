import { useEffect } from 'react';
import './App.css';
import { useTelegram } from './hooks/useTelegram';

function App() {

  const { onToggleButton, tg } = useTelegram();


  useEffect(() => {
    console.log('UseEffect');
    tg.ready();
    
  }, []);



  return (
    <div className="App">
      <p>Hello</p>
      <button onClick={onToggleButton}>Toggle</button>
    </div>
  );
}

export default App;
