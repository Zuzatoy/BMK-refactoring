import { all } from 'redux-saga/effects';
import userSaga from './users';
//here import ather states (posts....)

export default function*() {
  yield all([...userSaga]);
}
