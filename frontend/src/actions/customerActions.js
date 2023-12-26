import axios from 'axios';
import {
  CUSTOMER_LIST_REQUEST,
  CUSTOMER_LIST_SUCCESS,
  CUSTOMER_LIST_FAIL
  
} from '../constants/customerConstants';
import { getErrorMessage } from '../util';

const customerList = () => async (dispatch) => {
  dispatch({ type: CUSTOMER_LIST_REQUEST, loading: true });
  try {
    const result = await axios.get('/api/customers/customerList');
    dispatch({ type: CUSTOMER_LIST_SUCCESS, payload: result.data });
  } catch (error) {
    dispatch({ type: CUSTOMER_LIST_FAIL, payload: getErrorMessage(error) });
  }
};

export {customerList};
