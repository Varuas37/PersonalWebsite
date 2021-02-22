import axios from "axios";
import { githubToken } from "../../config.js";
import {
  GET_REPOS,
  GET_CONTENT,
  GET_REPOS_ERR,
  GET_CONTENT_ERR,
  SET_CURR_REPO,
  SET_PATH,
  GO_BACK,
  GO_FORWARD,
  GITHUB_HOME,
  GET_CODE,
} from "./types";

var common_axios = axios.create({
  baseURL: "https://api.github.com",
});
common_axios.defaults.headers.common["Authorization"] = `Token ${githubToken}`;

// Get posts by group id
export const getRepos = () => async (dispatch) => {
  try {
    const res = await common_axios.get(
      `https://api.github.com/users/varuas37/repos`
    );
    dispatch({
      type: GET_REPOS,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: GET_REPOS_ERR,
      payload: err.response,
    });
  }
};

export const setCurrRepo = (name, insideRepo) => async (dispatch) => {
  dispatch({
    type: SET_CURR_REPO,
    payload: { name: name, insideRepo: insideRepo },
  });
};

export const getCode = (url) => async (dispatch) => {
  dispatch({
    type: GET_CODE,
  });
  return axios.get(url);
};

export const setPath = (path) => async (dispatch) => {
  dispatch({
    type: SET_PATH,
    payload: path,
  });
};
export const goBack = () => async (dispatch) => {
  dispatch({
    type: GO_BACK,
  });
};
export const goForward = (path) => async (dispatch) => {
  dispatch({
    type: GO_FORWARD,
    payload: path,
  });
};
export const getContents = (name, path) => async (dispatch) => {
  try {
    const res = await common_axios.get(
      `/repos/varuas37/${name}/contents/${path}`
    );
    dispatch({
      type: GET_CONTENT,
      payload: res.data,
    });
  } catch (err) {
    dispatch({
      type: GET_CONTENT_ERR,
      payload: err.response,
    });
  }
};
