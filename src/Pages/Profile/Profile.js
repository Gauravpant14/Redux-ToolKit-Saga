import React from 'react'
import { useDispatch, useSelector } from 'react-redux' 
const Profile = () => {
    const {name,age} = useSelector(state => {
        return state
    });
    const dispatch = useDispatch()
    return (
        <div>
            <h2>Candidate Name: {name}</h2>
            <h2>Age: {age} </h2>
            <button onClick={()=> dispatch({type:'UPDATE_NAME'})}>Update Name</button>
        </div>
    )
}

export default Profile
