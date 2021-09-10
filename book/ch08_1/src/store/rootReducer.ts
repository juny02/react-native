import {AppState} from './AppState';
import type {LoginActions} from './actions';
import {Action} from 'redux';

const initialState: AppState = {
  loggedIn: false,
  loggedUser: {email: '', name: '', password: ''},
};

export const rootReducer = (
  state: AppState = initialState,
  action: LoginActions,
) => {
  switch (action.type) {
    case 'login':
      return {...state, loggedUser: Action.loggedUser, loggedIn: true};
    case 'logout':
      return initialState;
  }
  return state;
};
