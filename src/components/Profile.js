import React from 'react';
import { useSelector,useDispatch } from 'react-redux';
import {updateStatus, updateAge, fetchUserName} from '../reducers/userReducer';

export default function Profile() {
    const {name, age, status} = useSelector((state)=>state);
    const dispatch = useDispatch();
    const changeAge = (data) => {
        dispatch(updateAge(data))
    }
    const changeName = () => {
        dispatch(fetchUserName())
    }
    const changeStatus = (data) => {
        dispatch(updateStatus(data));
    }
    return (
        <div>
            <h1>I am  {name}</h1>
            <h1>My age is {age}</h1>
            <h1>My status is {status}</h1>
            <button onClick={()=>{changeAge(4)}}>Update Age</button>
            <button onClick={()=>{changeName('raj')}}>Update Name</button>
            <button onClick={()=>{changeStatus('Code anyTime')}}>Update Status</button>
        </div>
    )
}
