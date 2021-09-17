import { takeLatest } from "redux-saga/effects";

import { getUser } from "../ducks/userSlice";
import { handleGetUser } from "./handlers/user";

export function* watcherSaga() {
    yield takeLatest(getUser.type, handleGetUser);
}
