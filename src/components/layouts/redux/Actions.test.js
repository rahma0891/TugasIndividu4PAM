import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import {
  fetchIPRequest,
  fetchIPSuccess,
  fetchIPFailure,
  fetchIP,
} from "./Actions";

const mockStore = configureMockStore([thunk]);

describe("Actions", () => {
  let mockAxios;
  beforeEach(() => {
    mockAxios = new MockAdapter(axios);
  });

  afterEach(() => {
    mockAxios.restore();
  });

  it("Fetch IP when Succsess", () => {
    const data = { ip: "127.0.0.1" };
    const expectedAction = {
      type: "FETCH_IP_SUCCESS",
      payload: data,
    };
    expect(fetchIPSuccess(data)).toEqual(expectedAction);
  });

  it("Fetch IP when Failure", () => {
    const error = "Error fetching IP";
    const expectedAction = {
      type: "FETCH_IP_FAILURE",
      payload: error,
    };
    expect(fetchIPFailure(error)).toEqual(expectedAction);
  });
});
