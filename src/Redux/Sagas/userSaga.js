import { call, delay, put, takeEvery, takeLatest } from 'redux-saga/effects'

const getUserName = async(data) => {
    console.log(data,"we can also pass parameters inside call method ")
   const res = await fetch('https://jsonplaceholder.typicode.com/users')
   const result = await res.json()
   return result[Math.floor(Math.random() * 11)].name 
}

//for dispatching actions inside saga's , we use put method, and use yield before put

// Step: 2

function* fetchUser(action) {
   try {
     const userName =  yield call(getUserName,action.payload)
     yield put({type:"UPDATE_NAME_SUCCESS" , payload:userName})

   } catch (e) {
      console.log(e)
   }
}

function* updateAge(){
    yield delay(1000);
    yield put({type:"UPDATE_AGE_SUCCESS", payload: 5})
}

// This is our watcher
// redux saga resumes and pauses the functions excutions 
// using generator functions

// here whenever we dispatch UPDATE_NAME Function then 
// It'll call fetchuser function and it'll pause the function untill the line of code is completed.

//we can consider yield like await

// STEP: 1

function* userSaga() {
  yield takeEvery("UPDATE_NAME", fetchUser);
  yield takeLatest("UPDATE_AGE",updateAge);

  //here we can use takeLatest instead of takeEvery if we dont want to access network request unnecessary...
}

export default userSaga