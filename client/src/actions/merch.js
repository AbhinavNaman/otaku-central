import {FETCH_MERCH } from '../constants/actionTypes';
import * as api from '../api';


export const fetchMerch = () => async (dispatch) => {
    try {
      const { data } = await api.fetchMerch();
      dispatch({ type: FETCH_MERCH, payload: data });
    } catch (error) {
      console.log(error);
    }
  };


