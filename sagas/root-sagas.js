import { all, call } from 'redux-saga/effects';
import { authSagas } from './auth-sagas';
import { databaseSagas } from './database.sagas';

export default function* rootSaga(){
    yield all([
        call(authSagas),
        call(databaseSagas)
    ])
};
