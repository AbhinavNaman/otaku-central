import { FETCH_ALL_ARTICLE, FETCH_ARTICLE, ADD_ARTICLE } from '../constants/actionTypes';

export default (state = {articles: [], article:[]}, action) => {

  switch (action.type) {
      
    case FETCH_ALL_ARTICLE:
      return {...state, articles: action.payload};

    case FETCH_ARTICLE:
      return {...state, article: action.payload};

      case ADD_ARTICLE:
        return {...state, articles: [...state.articles, action.payload]};
      
    default:
      return state;
  }
};

