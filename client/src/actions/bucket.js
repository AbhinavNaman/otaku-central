//actions > posts.js
import { FETCH_BUCKET , UPDATE_BUCKET} from '../constants/actionTypes';
import * as api from '../api';


export const fetchBuckets = () => async (dispatch) => {
    try {
      const { data } = await api.fetchBuckets();
      dispatch({ type: FETCH_BUCKET, payload: data });
    } catch (error) {
      console.log(error);
    }
  };
export const updateBuckets = (wikiId, updatedTag) => async (dispatch) => {
    try {
      const { data } = await api.updateBuckets(wikiId,updatedTag);
      dispatch({ type: UPDATE_BUCKET, payload: data });
    } catch (error) {
      console.log(error);
    }
  };


