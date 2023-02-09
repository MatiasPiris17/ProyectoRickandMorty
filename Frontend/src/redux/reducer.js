import { ADD_FAVORITE, DELETE_FAVORITE } from "./actions-types";

const initialState = {
  myFavorites: [],
  allCharacters:[]
};

const rootReducer = (state = initialState, action) => {
  //{type,playload}
  switch (action.type) {
    case ADD_FAVORITE:
      return {
        ...state,
        myFavorites: [...state.myFavorites, action.payload],
        allCharacters: [...state.myFavorites], 
      };
    case DELETE_FAVORITE:
      return {
        ...state,
        myFavorites: state.myFavorites.filter(
          (char) => char.id !== action.payload
        ),
      };

    default:
      return { ...state };
  }
};

export default rootReducer;
