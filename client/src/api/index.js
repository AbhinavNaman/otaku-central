import axios from 'axios';

const API = axios.create({baseURL: 'http://localhost:3000'});

API.interceptors.request.use((req) => {
    if (localStorage.getItem('profile')) {
      req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
    }
    return req;
  });

export const fetchWikis = () => API.get('/wiki');
export const fetchWiki = (id) => API.get(`/wiki/${id}`);
export const addWiki = (addWikiData) => API.get('/wiki', addWikiData);
// export const addToBucket = (userId, WikiId) => API.post(`/posts/${userId}`, WikiId);

export const fetchQuizs = () => API.get('/quiz');
export const addQuiz = (quizData) => API.get('/quiz', quizData);

export const fetchMerch = () => API.get('/merch');
export const fetchOneMerch = (merchId) => API.get(`/merch/${merchId}`);
export const updateMerch = (merchId) => API.patch(`/merch/${merchId}`);
export const deleteMerch = (merchId) => API.patch(`/merch/${merchId}`);

export const fetchArticles = () => API.get('/chronicels');
export const fetchArticle = (id) => API.get(`/chronicles/${id}`);
export const addArticle = (articleData) => API.post('/chronicles', articleData);

export const fetchBuckets = (userId) => API.get(`/buckets/all/${userId}`);
export const fetchBucket = (bucketId) => API.get(`/buckets/${bucketId}`, updatedTag);
export const updateBuckets = (bucketId) => API.get(`/buckets/${bucketId}`);
//username:, array of objects containing name of anime and type(ongoing/dropped/finished)

export const postComment = (value, id) => API.post('/nexus');
export const getComment = (value, id) => API.get('/nexus/chronicle/${id}');

export const signIn = (formData) => API.post('/user/signin', formData);
export const signUp = (formData) => API.post('/user/signup', formData);