import { call, put, takeLatest } from "redux-saga/effects";
import { fetchCities, fetchCityBySlug } from "../api";

function* fetchCitiesSagas() {
  try {
    const request = yield call(fetchCities);
    yield put({
      type: "GET_CITIES_SUCCESS",
      payload: request.data.cities,
    });
  } catch (e) {
    yield put({ type: "GET_CITIES_FAILURE", payload: e.message });
  }
}

function* fetchCitiesBySlugSagas(action) {
  try {
    const request = yield call(fetchCityBySlug, action.payload);
    yield put({
      type: "GET_CITY_SLUG_SUCCESS",
      payload: request.data.city[0],
    });
  } catch (e) {
    yield put({ type: "GET_CITY_SLUG_FAILURE", payload: e.message });
  }
}

function* citiesSaga() {
  yield takeLatest("GET_CITIES_REQUEST", fetchCitiesSagas);
  yield takeLatest("GET_CITY_SLUG_REQUEST", fetchCitiesBySlugSagas);
}
export default citiesSaga;
