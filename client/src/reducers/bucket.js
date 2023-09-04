import {FETCH_BUCKET, UPDATE_BUCKET} from '../constants/actionTypes';

export default (bucket =[], action) => {

  switch (action.type) {
      
    case FETCH_BUCKET:
      return  action.payload;

    case UPDATE_BUCKET:
      return  action.payload;
      
    default:
      return bucket;
  }
};

