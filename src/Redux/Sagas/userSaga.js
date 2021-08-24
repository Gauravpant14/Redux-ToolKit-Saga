import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'

const getUserName = async() => {
   const res = await fetch('https://jsonplaceholder.typicode.com/users')
   const result = await res.json()
   return result[Math.floor(Math.random() * 11)].name 
}

//for dispatching actions inside saga's , we use put method, and use yield before put


function* fetchUser() {
   try {
     const userName =  yield getUserName()
     yield put({type:"UPDATE_NAME_SUCCESS" , payload:userName})

   } catch (e) {
      console.log(e)
   }
}

// This is our watcher
// redux saga resumes and pauses the functions excutions 
// using generator functions

// here whenever we dispatch UPDATE_NAME Function then 
// It'll call fetchuser function and it'll pause the function untill the line of code is completed.

//we can consider yield like await

function* userSaga() {
  yield takeEvery("UPDATE_NAME", fetchUser);

  //here we can use takeLatest instead of takeEvery if we dont want to access network request unnecessary...
}

export default userSaga