import React from 'react';
import '../App.css';

function Home(props) {

  return (
    <div className="App">
      <header>
        <h1>Today's Project</h1>
        <button onClick={()=> props.history.push('/users')}>Show me the data!</button>
      </header>
    </div>
  );
}

export default Home;