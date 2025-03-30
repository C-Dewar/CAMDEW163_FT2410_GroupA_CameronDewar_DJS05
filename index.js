import createStore from './store.js';
import reducer from './reducer.js';
import * as actions from './actions.js';
import logger from './logger.js';

function initiliseApp() {
  const store = createStore(reducer);

  store.subscribe(() => logger(store.getState));

  console.log('Initial state:', store.getState());

  store.dispatch(actions.add());
  store.dispatch(actions.add());
  store.dispatch(actions.subtract());
  store.dispatch(actions.reset());
}

initiliseApp();
