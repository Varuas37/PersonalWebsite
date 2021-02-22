import {
  GET_REPOS,
  GET_REPOS_ERR,
  GET_CONTENT,
  GET_CONTENT_ERR,
  SET_CURR_REPO,
  SET_PATH,
  GO_BACK,
  GO_FORWARD,
  GITHUB_HOME,
} from "../action/types";

const initialState = {
  repos: [{}],
  currRepo: "Home",
  repo_loading: true,
  insideRepo: false,
  error: null,
  contents: null,
  content_loading: true,
  content_path: "",
  prev_content_path: "",
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_REPOS:
      return {
        ...state,
        repos: payload,
        repo_loading: false,
      };
    case GET_CONTENT:
      return {
        ...state,
        contents: payload,
        content_loading: false,
      };
    case GET_REPOS_ERR:
      return {
        ...state,
        repo_loading: true,
        error: payload,
      };
    case GET_CONTENT_ERR:
      return {
        ...state,
        content_loading: true,
        error: payload,
      };
    case SET_CURR_REPO:
      var newPath = "";
      var path = "";
      if (payload.name === "Home") {
        newPath = "Home";
      } else {
        newPath = payload.name;
        path = state.content_path;
      }
      return {
        ...state,
        content_path: path,
        insideRepo: payload.insideRepo,
        currRepo: newPath,
        // repos: payload,
      };
    case SET_PATH:
      console.log("I am inside SET_PATH reducer");

      if (!state.insideRepo) {
        newPath = state.currRepo + payload;
      } else {
        newPath = state.content_path + "/" + payload;
      }
      return {
        ...state,
        content_path: newPath,
      };

    case GO_BACK:
      const str = state.content_path.toString();
      const string = str.split("/").pop();
      const backPath = str.slice(0, -string.length, -1);

      return {
        ...state,
        content_path: backPath,
      };

    
    default:
      return state;
  }
}
