import React from 'react'
import { useDispatch, useSelector } from 'react-redux' 
const Profile = () => {
    const {name,age,joke} = useSelector(state => {
        return state.reducer
    });
    const dispatch = useDispatch()
    return (
        <div>
            <h2>Candidate Name: {name}</h2>
            <h2>Age: {age} </h2>
            <br />
            {joke}
            <br/>
            <br/>
            <button onClick={()=> dispatch({type:'UPDATE_NAME',payload: 55})}>Update Name</button>
            <button onClick={()=> dispatch({type:'UPDATE_AGE'})}>Update Age</button>
            <button onClick={() => dispatch({type:'GET_JOKE'})}>Get Random Joke</button>
            
        </div>
    )
}

export default Profile
