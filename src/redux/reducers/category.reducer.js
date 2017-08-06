import { ACTION_TYPES } from '../../constants/ActionTypes';
import Immutable, {Map, List} from 'immutable';

//Old code
/*
const DEFAULT_STATE = {
  isFetching: false,
  didInvalidate: false,
  categories: [],
  searchKeyword: '',
  chosenCategory: null,
};
*/

const DEFAULT_STATE = Immutable.fromJS({
  isFetching: false,
  didInvalidate: false,
  categories: [],
  searchKeyword: '',
  chosenCategory: null,
});

//Another way to write this:
/*
const DEFAULT_STATE = Map({
  isFetching: false,
  didInvalidate: false,
  categories: List(),
  searchKeyword: '',
  chosenCategory: null,
});
*/

export const categoryReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case ACTION_TYPES.GET_CATEGORIES:
      return state.set('isFetching', true);
    case ACTION_TYPES.SET_CATEGORIES:
      return state.merge({
        isFetching: false,
        didInvalidate: false,
        categories: Immutable.fromJS(action.payload.categories),
        chosenCategory: Immutable.fromJS(action.payload.categories[0]),
      });
    case ACTION_TYPES.SET_SEARCH_KEYWORD:
      return state.set('searchKeyword', Immutable.fromJS(action.payload));
    default:
      return state;
    }
}

//Old code
/*
export const categoryReducer = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case ACTION_TYPES.GET_CATEGORIES:
      return {
        ...state,
        isFetching: true,
      };
    case ACTION_TYPES.SET_CATEGORIES:
      return {
        ...state,
        isFetching: false,
        didInvalidate: false,
        categories: action.payload.categories,
        chosenCategory: action.payload.categories[0],
      };
    case ACTION_TYPES.SET_SEARCH_KEYWORD:
      return {
        ...state,
        searchKeyword: action.payload,
      };
      default:
        return state;
    }
}
*/
