import type {Action} from 'redux';
import {User} from './AppState';

type LogoutAction = Action<'logout'>; // <string> 할수도 있지만, 이렇게 하면 저문자열만 가능하도록 타입의 범위를 대폭 좁히는 것
type LoginAction = Action<'login'> & {loggedUser: User}; //교집합(둘다) 타입 구문 사용. 정보를 리듀서로 넘기는 것도 함 !
export type LoginActions = LogoutAction | LoginAction; //합집합 ! (또는)

//액션 생성기
export const loginAction = (loggedUser: User): LoginAction => ({
  type: 'login',
  loggedUser, //타입은 로그인이고 로그드유저정보를 고대로 넣는다
});
export const logoutAction = (): LogoutAction => ({
  type: 'logout',
});
