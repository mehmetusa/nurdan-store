import {
    CUSTOMER_LIST_REQUEST,
    CUSTOMER_LIST_SUCCESS,
    CUSTOMER_LIST_FAIL } 
    from '../constants/customerConstants';
  

  
  function customerListReducer(state = { customers: [] }, action) {
    switch (action.type) {
      case CUSTOMER_LIST_REQUEST:
        return { loading: true };
      case CUSTOMER_LIST_SUCCESS:
        return { loading: false, customers: action.payload };
      case CUSTOMER_LIST_FAIL:
        return { loading: false, error: action.payload };
      default: return state;
    }
  }
  

  export {
    customerListReducer
  };
  