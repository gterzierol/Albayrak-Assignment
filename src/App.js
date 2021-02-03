import React from 'react'
import { Link } from 'react-router-dom';
import './App.css';

function App() {
  const [loaded, setLoaded] = React.useState("welcome")

  React.useEffect(() => {
    setLoaded("welcome loaded")
  })
  
  return (
    <div className="App">
      <div className='container'>
        <div className={loaded}>
            Welcome
        </div>
        <div className='buttons'>
          {new Array(3).fill(null).map((_,i)=> {
            return (
                <Link className='button' to={`task-${i+1}`}>Task {i+1}</Link>
            )})}

        </div>
      </div>

    </div>
  );
} 

export default App;
