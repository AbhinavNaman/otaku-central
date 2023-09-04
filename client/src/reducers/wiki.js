import {FETCH_ALL_WIKI, FETCH_WIKI} from '../constants/actionTypes';

export default (state = {wikis: [], wiki:[]}, action) => {

  switch (action.type) {
      
    case FETCH_ALL_WIKI:
      return {...state, wikis: action.payload};

    case FETCH_WIKI:
      return {...state, wiki: action.payload};
      
    default:
      return state;
  }
};

