import React, { useState } from 'react';
import Header from '../components/Header';
import UsersList from '../components/UsersList';

const Users = (props) => {
    const [usersList, setUsersList] = useState([])
    
    return (
        <div>
             <Header/>
             <UsersList usersList={usersList}/>
        </div>
    );
};

export default Users;