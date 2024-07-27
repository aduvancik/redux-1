const defaultState = {
    count: 0
}

const INCREMENT = "INDCREMENT";
export const ASYNK_INCREMENT = "ASYNK_INDCREMENT";
const DECREMENT = "DECREMENT";

export const cashReducer = (state = defaultState, action) => {
    switch (action.type) {
  
      case INCREMENT:
        return {...state, cash: state.cash + 1};
  
      case DECREMENT:
        return {...state, cash: state.cash - 1};
  
      default:
        return state;
    }
  }

  export const incrementCreator = () => ({type: INCREMENT})
  export const asynkIncrementCreator = () => ({type: ASYNK_INCREMENT})
  export const decrementCreator = () => ({type: DECREMENT})