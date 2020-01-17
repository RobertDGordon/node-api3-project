import React, {useState} from 'react';
import { Route } from "react-router-dom";
import {useFetchData} from './hooks/useFetchData'

import Home from './components/Home'

import Users from './components/Users'
import User from './components/User'

import styled from 'styled-components'
import './App.css';

const Main = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  margin: 0 auto;
`

function App() {

  const [users] = useFetchData([])

  console.log(users)

  return (
    <>
      <Route exact path="/" component={Home} />
      <Route path ='/users' render={props => {
        return <Users {...props} users={users} />}} />
      <Route path ='/user/:id' render={props => {
        return <User {...props} users={users} />}} />
    </>
  );
}

export default App;