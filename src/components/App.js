import React, { useState, useEffect } from 'react'
import '../styles/App.css';
const App = () => {
  let time = new Date();
  time = time.toLocaleString();
  // console.log(time);
  const [currenttime, setTime] = useState(time);

  useEffect(() => {
    let id = setInterval(() => {
      time = new Date();
      time = time.toLocaleString();
      setTime(time);

    })

    return () => {
      // console.log(time);
      clearInterval(id);
    }
  }, [currenttime])


  return (
    <div id="main">
      <div className="date-time">
        {currenttime}

      </div>
    </div>
  )
}


export default App;
