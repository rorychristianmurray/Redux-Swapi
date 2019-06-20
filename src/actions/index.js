// we'll need axios

// we'll need to create 3 different action types here.
// one for fetching, one for success and one for failure

// our action creator will be a function that returns a function
// the url to fetch characters from is `https://swapi.co/api/people/`
// remember that now we have controll over our thunk-based action creator

const FETCH_CHAR_START = "FETCH_CHAR_START";

const FETCH_CHAR_SUCCESS = "FETCH_CHAR_SUCCESS";

const FETCH_CHAR_ERROR = "FETCH_CHAR_ERROR";
