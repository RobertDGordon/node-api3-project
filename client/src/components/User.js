import React from 'react';
import '../App.css';

function User(props) {

//   console.log('user:',props.users[1].nam)
  const id = (props.match.params.id-1)
  console.log('id:', id)
  return (
    <div className="App">
      <header>
        <h1>{props.users[id].name}</h1>
      </header>
    </div>
  );
}

export default User;