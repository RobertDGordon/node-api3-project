import { useState, useEffect } from 'react';

export const useFetchData = () =>{
    const [users, setUsers] = useState([]);

    useEffect(() =>{
        fetch('http://localhost:4000/api/users')
        .then (res => res.json())
        .then (res => setUsers(res))
        .catch (err => {console.log(err)})
      },[])
  
      return [users];
}