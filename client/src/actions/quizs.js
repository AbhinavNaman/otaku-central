import {FETCH_QUIZ, ADD_QUIZ } from '../constants/actionTypes';
import * as api from '../api';


export const fetchQuizs = () => async (dispatch) => {
    try {
      const { data } = await api.fetchQuizs();
      dispatch({ type: FETCH_QUIZ, payload: data });
    } catch (error) {
      console.log(error);
    }
  };

export const addQuiz = (quizData) => async(dispatch) => {
    try {
        const {data} = await api.addQuiz(quizData);
        dispatch({ type : ADD_QUIZ, payload: data});
    } catch (error) {
        console.log(error);
    }
};

