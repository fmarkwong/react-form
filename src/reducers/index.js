import { PENDING_FETCH, PENDING_SEARCH, PENDING_POST, SUCCESS, ERROR, UPDATE_FILTER_PARAM, UPDATE_SEARCH_PARAM, FETCH_SELECT_COLORS } from '../actions';

const intialState = {
  messages: [],
  parameters: { _sort: 'id', _order: 'desc' },
  pendingFetch: false,
  pendingSearch: false,
  pendingPost: false,
  success: false,
  selectColors: [],
  error: null
}

export default (state = intialState, action) => {
  switch(action.type) {
    case PENDING_FETCH:
      return { ...state, pendingFetch: true, success: false };
    case PENDING_POST:
      return { ...state, pendingPost: true, success: false };
    case PENDING_SEARCH:
      return { ...state, pendingSearch: true, pendingFetch: true, success: false };
    case SUCCESS:
      return { ...state, messages: action.payload, pendingFetch: false, pendingSearch: false, pendingPost: false, success: true };
    case ERROR:
      return { ...state, pending: false, success: false, error: true };
    case UPDATE_FILTER_PARAM:
      let params = { ...state.parameters, color: action.payload || null };
      return { ...state, parameters: params };
    case UPDATE_SEARCH_PARAM:
      params = { ...state.parameters, q: action.payload };
      return { ...state, parameters: params };
    case FETCH_SELECT_COLORS:
      return { ...state, selectColors: action.payload };

    default:
      return state;
  }
};
