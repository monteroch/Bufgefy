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
    console.log("-------------------------");
    console.log("Inside get User");
    try{
        const ref = firebase.database().ref('users/' + action.payload.uid)
        const result = yield call(
            [ref, ref.on],
            'value',
            (snapshot) => {
                console.log("snapshot", snapshot.val());
            }
        );
        yield console.log("Result: ");
        yield result();
        // yield put(saveUserSuccess(result));
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