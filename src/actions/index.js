import axios from 'axios';
import { memoize } from 'redux-memoize';

export const PENDING_FETCH = 'PENDING_FETCH';
export const PENDING_SEARCH = 'PENDING_SEARCH';
export const PENDING_POST = 'PENDING_POST';
export const SUCCESS = 'SUCCESS';
export const ERROR   = 'ERROR';
export const UPDATE_FILTER_PARAM  = 'UPDATE_FILTER_PARAM';
export const UPDATE_SEARCH_PARAM  = 'UPDATE_SEARCH_PARAM';
export const FETCH_SELECT_COLORS  = 'FETCH_SELECT_COLORS';

export const fetchMessages = (actionType=PENDING_FETCH) => {
  return (dispatch, getState) => {
    const promise = axios.get('http://localhost:8080/api/messages', { params: getState().parameters })

    dispatch({type: actionType});
    promise
      .then(response => {
        dispatch({type: SUCCESS, payload: response.data})
      })
      .catch(err => console.log(err));
  }
};

export const saveMessage = message => {
  return dispatch => {
    const promise = axios.post('http://localhost:8080/api/messages', message)

    dispatch({type: PENDING_POST});
    promise
      .then(responseMessage => {
        dispatch(fetchMessages());
      })
      .catch(err => console.log(err));
  }
};

export const updateSearchParameter = searchString => {
  return dispatch => {
    dispatch({
      type: UPDATE_SEARCH_PARAM,
      payload: searchString 
    })
    dispatch(fetchMessages(PENDING_SEARCH));
  }
};

export const updateFilterParameter = color => {
  return dispatch => {
    dispatch({
      type: UPDATE_FILTER_PARAM,
      payload: color 
    })
    dispatch(fetchMessages());
  }
};

export const getSelectColors = memoize({ ttl: 1000 }, () => {
  return (dispatch, getState) => {
    const promise = axios.get('http://localhost:8080/api/colors');

    dispatch({type: 'PENDING_FETCH'});
    promise
      .then(response => {
        dispatch({type: FETCH_SELECT_COLORS, payload: response.data})
      })
      .catch(err => console.log(err));
  }
});
