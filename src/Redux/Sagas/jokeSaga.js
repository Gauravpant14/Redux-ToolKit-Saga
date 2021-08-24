import { call, delay, put, takeEvery, takeLatest } from 'redux-saga/effects'


//step-3
const fetchJoke = async() => {
   const res = await fetch('http://api.icndb.com/jokes/random')
   const result = await res.json()
   return result.value.joke
}

// Step-2
function* getJoke(action) {
   try {
     const userName =  yield fetchJoke()
     yield put({type:"GET_JOKE_SUCCESS" , payload:userName})

   } catch (e) {
      console.log(e)
   }
}


// step-1
function* jokeSaga() {
  yield takeEvery("GET_JOKE", getJoke);
}

export default jokeSaga