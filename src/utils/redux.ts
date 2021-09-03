export enum typeofActions {
  REQUEST = 'REQUEST',
  SUCCESS = 'SUCCESS',
  FAILURE = 'FAILURE'
}

export type ActionCreatorTypes<T extends string> = {
  SUCCESS: `${T}_${typeofActions.SUCCESS}`;
  REQUEST: `${T}_${typeofActions.REQUEST}`;
  FAILURE: `${T}_${typeofActions.FAILURE}`;
};

// export function createRequestTypes<T extends string>(base: T): ActionCreatorTypes<T>{
//   return {
//     REQUEST: `${base}_${typeofActions.REQUEST}`,
//   SUCCESS: `${base}_${typeofActions.SUCCESS}`,
//   FAILURE: `${base}_${typeofActions.FAILURE}`
//   }
// }
