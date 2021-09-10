import {createStore} from 'redux';
import {rootReducer} from './rootReducer';

export const makeStore = () => {
  const store = createStore(rootReducer);
  return store; //store값 반환하는 함수!!
};
