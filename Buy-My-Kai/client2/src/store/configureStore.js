import { createStore, applyMiddleware, compose } from 'redux';
import createHistory from 'history/createBrowserHistory';
import creatSagaMiddleware from 'redux-saga';
import { routerMiddleware } from 'react-router-redux';
import rootReducer from '../ducks';
import sagas from '../sagas';

const initialState = {
  users: {
    loading: false,
    user: {},
    error: '',
  },
  // posts: {
  //     loading: false,
  //     data: [],
  //     erorr: '',
  // }
};

const history = createHistory();
const sagaMiddleware = creatSagaMiddleware();

const middleware = applyMiddleware(routerMiddleware(history), sagaMiddleware);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  initialState,
  composeEnhancers(middleware),
);

sagaMiddleware.run(sagas);

export { store, history };
