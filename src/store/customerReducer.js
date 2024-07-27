const defaultState = {
    customers: []
  };

  const ADD_CUSTOMER = "ADD_CUSTOMER";
  const REMOVE_CUSTOMER = "REMOVE_CUSTOMER";
  const DELETE_CUSTOMER = "DELETE_CUSTOMER";
  const ADD_MANY_CUSTOMER = "ADD_MANY_CUSTOMER";

export const customerReducer = (state = defaultState, action) => {
    switch (action.type) {
  
      case ADD_CUSTOMER:
        return {...state, customers: [...state.customers, action.payload]};
  
      case ADD_MANY_CUSTOMER:
        return {...state, customers: [...state.customers, ...action.payload]};
  

      case REMOVE_CUSTOMER:
        return {...state, customers: state.customers.filter(customer => customer.id !== action.payload)};
  
      case DELETE_CUSTOMER:
        return {...state, customers: []};
  
      default:
        return state;
    }
  }

export const addCustomerAction = (payload) => ({type: ADD_CUSTOMER, payload});
export const addManyCustomerAction = (payload) => ({type: ADD_MANY_CUSTOMER, payload});
export const removeCustomerAction = (payload) => ({type: REMOVE_CUSTOMER, payload});
export const deleteCustomerAction = () => ({type: DELETE_CUSTOMER});