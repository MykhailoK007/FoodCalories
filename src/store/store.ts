import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleWare from 'redux-saga';
import reducers from './reducers/index';
import rootSaga from './saga/index';

const sagaMiddleWare = createSagaMiddleWare();

const store = createStore(reducers, composeWithDevTools(applyMiddleware(sagaMiddleWare)));
export type AppState = ReturnType<typeof store.getState>;
sagaMiddleWare.run(rootSaga);
export default store;
