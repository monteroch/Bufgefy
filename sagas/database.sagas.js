import { takeEvery, put, all, call } from 'redux-saga/effects';
import * as firebase from 'firebase';
import * as RootNavigation from '../routes/RootNavigation';
import { saveUserSuccess, saveUserFailure } from '../redux/actions/database.actions';

export function* saveUser(action){
    console.log("Inside save User")
    try{
        const ref = firebase.database().ref('users/' + action.payload.uid)
        const result = yield call(
            [ref, ref.set],
            {
                id: action.payload.uid,
                fullname: action.payload.fullname,
                email: action.payload.email
            }
        );
        yield console.log("Here in saveUser")
        yield console.log("************************************************************************************************");
        yield console.log("The result is: ", result);
        yield console.log("************************************************************************************************");
        yield put(saveUserSuccess(result));
    }catch(error){
        yield put(saveUserFailure(error.message));
    }
}

export function* onSaveUserRequest(){
    yield takeEvery("SAVE_USER_REQUEST", saveUser);
}

export function* databaseSagas(){
    yield all([
        call(onSaveUserRequest)
    ])
};