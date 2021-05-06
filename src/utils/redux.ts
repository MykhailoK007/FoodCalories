import { IRequestType, RequestTypeKeys } from '../state/types/auth';

const REQUEST: string = 'REQUEST';
const SUCCESS: string = 'SUCCESS';
const FAILURE: string = 'FAILURE';

const initialStateCreateRequestTypes: IRequestType = {
  REQUEST: '',
  SUCCESS: '',
  FAILURE: ''
};

export const createRequestTypes = (base: string): IRequestType =>
  [REQUEST, SUCCESS, FAILURE].reduce((acc: IRequestType, type: string) => {
    acc[type as RequestTypeKeys] = `${base}_${type}`;
    return acc;
  }, initialStateCreateRequestTypes);
