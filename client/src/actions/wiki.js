//actions > posts.js
import { FETCH_ALL_WIKI, FETCH_WIKI, ADD_TO_BUCKET, ADD_WIKI } from '../constants/actionTypes';
import * as api from '../api';


export const fetchWikis = () => async (dispatch) => {
    try {
      const { data } = await api.fetchWikis();
      dispatch({ type: FETCH_ALL_WIKI, payload: data });
    } catch (error) {
      console.log(error);
    }
  };

export const fetchWiki = (id) => async(dispatch) => {
    try {
        const {data} = await api.fetchWiki(id);
        dispatch({ type : FETCH_WIKI,  payload: data});
    } catch (error) {
        console.log(error);
    }  
};

export const addToBucket = (userId, WikiId) => async(dispatch) => {
    try {
        const {data} = await api.addToBucket(userId, WikiId);
        dispatch({ type : ADD_TO_BUCKET, payload: data});
    } catch (error) {
        console.log(error);
    }
};


export const addWiki = (addWikiData) => async(dispatch) => {
    try {
        const {data} = await api.addArticle(addWikiData);
        dispatch({ type : ADD_WIKI, payload: data});
    } catch (error) {
        console.log(error);
    }
};

