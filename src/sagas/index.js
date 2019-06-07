// import saga
import { takeLatest, put, call } from "redux-saga/effects";
import axios from "axios";
import {
  API_CALL_REQUEST,
  API_CALL_SUCCESS,
  API_CALL_FAILURE
} from "../actions/actionTypes";

export function* watcherSaga() {
  yield takeLatest(API_CALL_REQUEST, workerSaga);
}

function* workerSaga(action) {
  try {
    const number = action.number;
    if (!/^[0-9]+$/.test(number)) {
      throw new Error("You have to provide a number!");
    }
    if (!Number.isInteger(Number(number))) {
      throw new Error("The number must be a whole number.");
    }
    if (Number(number) < 0) {
      throw new Error("The number must be positive.");
    }
    const response = yield call(() => fetchNumber(number));
    const message = response.data;
    yield put({ type: API_CALL_SUCCESS, message });
  } catch (error) {
    yield put({ type: API_CALL_FAILURE, error });
  }
}

const fetchNumber = number => {
  return axios.get(
    `https://numbers-api-proxy.dci-fbw121.now.sh/?number=${number}`
  );
};
