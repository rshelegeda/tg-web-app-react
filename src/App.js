import { useEffect } from 'react';
import './App.css';
import { useTelegram } from './hooks/useTelegram';

function App() {

  const { onToggleButton, tg } = useTelegram();


  useEffect(() => {
    console.log('UseEffect');
    tg.ready();
    
  }, []);

// The new comments

  return (
    <div className="App">
      <p>New with Toggle</p>
      <button onClick={onToggleButton}>Toggle</button>
    </div>
  );
}

export default App;
