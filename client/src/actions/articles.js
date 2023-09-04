//actions > posts.js
import { FETCH_ALL_ARTICLE, FETCH_ARTICLE, ADD_ARTICLE } from '../constants/actionTypes';
import * as api from '../api';


export const fetchArticles = () => async (dispatch) => {
    try {
      const { data } = await api.fetchArticles();
      dispatch({ type: FETCH_ALL_ARTICLE, payload: data });
    } catch (error) {
      console.log(error);
    }
  };

export const fetchArticle = (id) => async(dispatch) => {
    try {
        const {data} = await api.fetchArticle(id);
        dispatch({ type : FETCH_ARTICLE,  payload: data});
    } catch (error) {
        console.log(error);
    }  
};

export const addArticle = (articleData) => async(dispatch) => {
    try {
        const {data} = await api.addArticle(articleData);
        dispatch({ type : ADD_ARTICLE, payload: data});
    } catch (error) {
        console.log(error);
    }
};

