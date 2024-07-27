const defaultState = {
    category: "усе"
}

const CATEGORY = "CATEGORY";

export const categoryReducer = (state = defaultState, action) => {
    switch (action.type) {
  
      case CATEGORY:
        return {...state, category: action.payload};
  
      default:
        return state;
    }
  }

  export const changeCategory = (category) => ({type: CATEGORY, payload: category})