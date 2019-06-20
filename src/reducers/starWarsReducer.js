import {
  FETCH_CHAR_START,
  FETCH_CHAR_SUCCESS,
  FETCH_CHAR_ERROR
} from "../actions";

// Array characters, Boolean fetching, null error.
const initialState = {
  characters: [],
  isFetching: false,
  error: null
};

// Fill me in with the important reducers
// action types should be FETCHING, SUCCESS and FAILURE
// your switch statement should handle all of these cases.

export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CHAR_START:
      return {
        ...state,
        isFetching: true
      };
    case FETCH_CHAR_SUCCESS:
      return {
        ...state,
        isFetching: false,
        characters: action.payload
      };
    case FETCH_CHAR_ERROR:
      return {
        ...state,
        isFetching: false,
        error:
          "You have been identified as an enemy space vehicle. Phasers charged and set to lock."
      };
    default:
      return state;
  }
};
