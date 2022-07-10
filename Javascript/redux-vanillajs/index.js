const redux = require('redux');
const reduxLogger = require('redux-logger');

const createStore = redux.createStore;
const combineReducers = redux.combineReducers;
const applyMiddleware = redux.applyMiddleware;
const logger = reduxLogger.createLogger();

const BUY_CAKE = 'BUY_CAKE';
const BUY_ICECREAME = 'BUY_ICECREAME';

// action creator
const buyCake = () => {
  // action
  return {
    type: BUY_CAKE,
  };
};

const buyIceCream = () => {
  return {
    type: BUY_ICECREAME,
  };
};

// initial state
// const initialState = {
//   numOfCakes: 10,
//   noOfIceCreams: 20,
// };

const initiatCakeState = {
  numOfCakes: 10,
};

const initialIceCreamState = {
  numOfIceCreams: 20,
};

// reducer
// const reducer = (state = initialState, action) => {
//   switch (action.type) {
//     case BUY_CAKE:
//       return {
//         ...state,
//         numOfCakes: state.numOfCakes - 1,
//       };
//     case BUY_ICECREAME:
//       return {
//         ...state,
//         noOfIceCreams: state.noOfIceCreams - 1,
//       };
//     default:
//       return state;
//   }
// };

const cakeReducer = (state = initiatCakeState, action) => {
  switch (action.type) {
    case BUY_CAKE: {
      return {
        ...state,
        numOfCakes: state.numOfCakes - 1,
      };
    }
    default:
      return state;
  }
};

const iceCreameReducer = (state = initialIceCreamState, action) => {
  switch (action.type) {
    case BUY_ICECREAME: {
      return {
        ...state,
        numOfIceCreams: state.numOfIceCreams - 1,
      };
    }
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  cake: cakeReducer,
  iceCreame: iceCreameReducer,
});

const store = createStore(rootReducer, applyMiddleware(logger));
console.log('Initial state: ', store.getState());

const unsubscribe = store.subscribe(() => {});

store.dispatch(buyCake());
store.dispatch(buyCake());
store.dispatch(buyCake());

store.dispatch(buyIceCream());
store.dispatch(buyIceCream());

unsubscribe();
