import { takeLatest, put, call } from 'redux-saga/effects';

import * as User_types from './user.types';
import axios from '../../utils/axios1';

import {
    fetchUserSuccess,
    fetchUserFailure,
} from './user.actions';

//Fetch User Saga
export function* fetchUser(action) {
    console.log('running User Fetch Start saga');
    let email = action.payload.email;
    let password = action.payload.password;
    try {
        const loginInfo = yield axios.post(
            `/token/`, { email: email, password: password }
        );
        console.log(loginInfo);
        const currentUser = yield axios.post(
            `/user/api-token-auth/`, { email: email, password: password }
        );
        console.log(currentUser);
        localStorage.setItem('access_token', loginInfo.data.access);
		localStorage.setItem('refresh_token', loginInfo.data.refresh);
		axios.defaults.headers['Authorization'] =
					'JWT ' + localStorage.getItem('access_token');

        yield put(fetchUserSuccess({loginInfo:loginInfo.data,  currentUser: currentUser.data}));
    } catch (error) {
        yield put(fetchUserFailure(error.message));
    }
}

export function* onFetchUserStart() {
    yield takeLatest(User_types.FETCH_USER_START, fetchUser);
}