import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import Navbar from '../../components/navbar'
import UserList from '../../components/userList'


const List = () => {


    return (
        <div id="page-list">
            <Navbar />
            <div className="row">
                <h5>List names</h5>
                <UserList />
            </div>
            <Link to="/">home</Link>
        </div>
    )
}

export default List;