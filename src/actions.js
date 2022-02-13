import {createAction} from '@reduxjs/toolkit';

export const updateAge = createAction('UPDATE_AGE');
export const updateStatus = createAction('UPDATE_STATUS');

export const fetchName = () => {
    return async (dispatch)=>{
        const res = await fetch('https://jsonplaceholder.typicode.com/users');
        const result = await res.json()
        dispatch({type:'UPDATE_NAME',payload:result[0].name})
    }
};