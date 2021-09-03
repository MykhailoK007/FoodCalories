import { Action } from 'redux';

export interface PaginationResponse<T> {
  results: T[];
  total: number;
}

export interface IAction<Type, Payload> extends Action {
  type: Type;
  payload: Payload;
}
