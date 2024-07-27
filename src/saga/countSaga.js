import {put, takeEvery} from "redux-saga/effects";
import { ASYNK_INCREMENT, asynkIncrementCreator, decrementCreator, incrementCreator } from "../store/countReducer";

const delay = (ms) => new Promise( res => setTimeout(res, ms))

function* incrementWorker() {
    yield delay(1000);
    yield put(incrementCreator)
}
function* decrementWorker() {
    
    yield put(decrementCreator)

}

function* countWatcher() {
    yield takeEvery(ASYNK_INCREMENT, incrementWorker)
}