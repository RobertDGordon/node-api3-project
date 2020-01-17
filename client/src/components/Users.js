import React, { useEffect, useState } from "react";

import Card from './Card';

import '../App.css';

import styled from 'styled-components'

const Main = styled.div`
  display: flex;
  flex-direction: column;
  /* flex-wrap: wrap; */
  justify-content: center;
  /* align-items: center; */
  width: 100%;
  height: 100vh;
  background-color: #282c34;
  margin: 0 auto;
`

const SearchBar = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 10px auto;
    width: 620px;
    height: 50px;
    padding: 10px;
    background-color: white;
    border: 1px solid black;
    border-radius: 10px;
    box-shadow: 2px 2px darkgray;
    form {
      display: flex;
      width: 100%;
      justify-content: space-evenly;
      /* border: 1px solid red; */
    }    
    input{
      margin: 0 5px;
      border-left: 1px solid black;
    }
    label{
      margin: 0 10px;
    }
    button{
      color: white;
      border: 1px solid black;
      border-radius: 5px;
      background-color: darkgrey;
    }
`

const UserCards = styled.section`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  max-height: 650px;
  overflow: auto;
`

function Users(props) {

  const [users, setusers] = useState([]);

  const [srch, setSrch] = useState({name:" ", status:" "});

  const [searchNow, setSearchNow] = useState ({});

  let [page, setPage] = useState (0);

  const [pages, setPages] = useState(0)

  const handleChange = event => {
    setSrch({ ...srch, [event.target.name]: event.target.value });
  };


    const handleSubmit = event => {
        event.preventDefault();
        setSearchNow(srch)
        console.log (srch.name, srch.status);
      }

  return (
    <Main>
      <SearchBar>
        <form onSubmit={event => handleSubmit(event)}>
          <label>
            Name:
            <input type="text" name="name" onChange={event => handleChange(event)} />
          </label>
          <label>
            Status:
            {/* <input type="text" name="status" onChange={event => handleChange(event)} /> */}
            <select name="status" onChange={event => handleChange(event)}>
              <option value=''>All</option>
              <option value='Alive'>Alive</option>
              <option value='Dead'>Dead</option>
              <option value='Unknown'>Unknown</option>
            </select>
          </label>
          <button>Show Me What You Got!</button>
        </form>
      </SearchBar>
      <UserCards>
      {props.users.map (user => (
        <Card key={user.id} name={user.name} id={user.id} {...user}/>
      ))}
    </UserCards>
    </Main>
  );
}

export default Users;