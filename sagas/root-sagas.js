import { all, call } from 'redux-saga/effects';
import { authSagas } from './auth-sagas';
// import { dbSagas } from './db-sagas';

export default function* rootSaga(){
    yield all([
        call(authSagas)
    ])
};
