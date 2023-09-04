import {FETCH_MERCH} from '../constants/actionTypes';

export default (merch =[], action) => {

  switch (action.type) {
      
    case FETCH_MERCH:
      return  action.payload;
      
    default:
      return merch;
  }
};

