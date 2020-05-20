import { takeEvery, put, all, call } from 'redux-saga/effects';
import * as firebase from 'firebase';
import * as RootNavigation from '../routes/RootNavigation';
import { saveUserSuccess, saveUserFailure, getUserSuccess, getUserFailure } from '../redux/actions/database.actions';

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
        yield put(saveUserSuccess(result));
    }catch(error){
        yield put(saveUserFailure(error.message));
    }
}

export function* onSaveUserRequest(){
    yield takeEvery("SAVE_USER_REQUEST", saveUser);
}

export function* getUser(action){
    let user = {};
    try{
        console.log("Action: ", action);
        const ref = yield firebase.database().ref('users/' + action.payload).on('value', (snapshot) => {
            user = {...snapshot.val()};
        });
        yield put(getUserSuccess(user))
    }catch(error){
        yield put(getUserFailure(error.message));
    }
}

export function* onGetUserRequest(){
    yield takeEvery("GET_USER_REQUEST", getUser);
}

export function* databaseSagas(){
    yield all([
        call(onSaveUserRequest),
        call(onGetUserRequest)
    ])
};