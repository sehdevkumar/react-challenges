/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from 'react';
import './App.css'

function App() {
  
  const [dirty,setDirty] = useState<number>(0);


  
  
  useEffect(()=> {
    const ref = setInterval(()=> {
       setDirty(Math.random());  
    },500)
    
    return ()=> {
        clearInterval(ref);
    }
  },[dirty])


  const getRandomX = ()=> {
    return Math.random()*100+ '%'
  }

  return (

    <div className="relative">
      <img
        className="drop-animation-class"
        src="/src/assets/drop_white.png"
        style={{ width: 30, left: `${getRandomX()}` }}
        alt="Drop"
      />
      <img
        className="drop-animation-class"
        src="/src/assets/drop_white.png"
        style={{ width: 30, left: `${getRandomX()}` }}
        alt={`Drop`}
      />
      <img
        className="drop-animation-class"
        src="/src/assets/drop_white.png"
        style={{ width: 30, left: `${getRandomX()}` }}
        alt="Drop"
      />
      <img
        className="drop-animation-class"
        src="/src/assets/drop_white.png"
        style={{ width: 30 , left: `${getRandomX()}`}}
        alt={`Drop`}
      />
      <img
        className="drop-animation-class"
        src="/src/assets/drop_white.png"
        style={{ width: 30, left: `${getRandomX()}` }}
        alt="Drop"
      />
      <img
        className="drop-animation-class"
        src="/src/assets/drop_white.png"
        style={{ width: 30 , left: `${getRandomX()}` }}
        alt={`Drop`}
      />
      <img
        className="drop-animation-class"
        src="/src/assets/drop_white.png"
        style={{ width: 30, left: `${getRandomX()}` }}
        alt="Drop"
      />
      <img
        className="drop-animation-class"
        src="/src/assets/drop_white.png"
        style={{ width: 30 , left: `${getRandomX()}` }}
        alt={`Drop`}
      />
      <img
        className="drop-animation-class"
        src="/src/assets/drop_white.png"
        style={{ width: 30, left: `${getRandomX()}` }}
        alt="Drop"
      />
      <img
        className="drop-animation-class"
        src="/src/assets/drop_white.png"
        style={{ width: 30 , left: `${getRandomX()}`}}
        alt={`Drop`}
      />
    </div>
  )
}

export default App
