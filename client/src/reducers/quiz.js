import {FETCH_QUIZ, ADD_QUIZ} from '../constants/actionTypes';

export default (quiz= [], action) => {

  switch (action.type) {
      
    case FETCH_QUIZ:
      return action.payload;

    case ADD_QUIZ:
      return [...quiz, action.payload];
      
    default:
      return quiz;
  }
};

