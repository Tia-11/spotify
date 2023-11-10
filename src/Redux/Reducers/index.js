import { combineReducers } from "redux";

const initialState = {
  clickedSong: [],
};

const yourReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_CLICKED_SONG":
      return { ...state, clickedSong: action.payload };
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  yourReducer,
});

export default rootReducer;
