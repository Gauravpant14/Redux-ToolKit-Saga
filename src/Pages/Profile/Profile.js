import React from 'react'
import { useDispatch, useSelector } from 'react-redux' 
const Profile = () => {
    const {name,age} = useSelector(state => {
        return state
    })
    return (
        <div>
            <h2>Candidate Name: {name}</h2>
            <h2>Age: {age} </h2>
        </div>
    )
}

export default Profile
