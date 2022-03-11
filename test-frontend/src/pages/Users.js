import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import UsersList from '../components/UsersList';
import axios from 'axios';


const Users = () => {
    const [usersList, setUsersList] = useState([])

    useEffect(() => {
        axios.get(`http://localhost:3001/api/auth/users`, {
          headers : {
            'Authorization' : " Bearer " + localStorage.getItem('token')
          }
        })
        .then(res => {
          setUsersList(res.data.users)
        })
      }, [])
    
    return (
        <div>
             <Header/>
             <UsersList usersList={usersList}/>
        </div>
    );
};

export default Users;