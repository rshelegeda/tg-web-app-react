import { useEffect } from 'react';
import './App.css';

const tg = window.Telegram.WebApp

function App() {


  useEffect(() => {
    console.log('UseEffect');
    tg.ready();
    
  }, []);


  const onClose =()=>{
    console.log('Close');
    
  };



  return (
    <div className="App">
      <p>Hello</p>
      <button onClick={onClose}>Закрыть</button>
    </div>
  );
}

export default App;
