// 

const {
    PRODUCT_LIST_REQUEST,
    PRODUCT_LIST_SUCCESS,
    PRODUCT_LIST_FAIL,
    PRODUCT_DETAILS_REQUEST,
    PRODUCT_DETAILS_SUCCESS,
    PRODUCT_DETAILS_FAIL,
  } = require('../constants/productConstants');
  
  export const productListReducer = (
    state = { Loading: true, products: [] },
    action
  ) => {
    switch (action.type) {
      case PRODUCT_LIST_REQUEST:
        return { Loading: true };
      case PRODUCT_LIST_SUCCESS:
        return { Loading: false, products: action.payLoad };
      case PRODUCT_LIST_FAIL:
        return { Loading: false, error: action.payLoad };
      default:
        return state;
    }
  };

  export const productDetailsReducer = (
    state = { product: {}, Loading: true },
    action
  ) => {
    switch (action.type) {
      case PRODUCT_DETAILS_REQUEST:
        return { Loading: true };
      case PRODUCT_DETAILS_SUCCESS:
        return { Loading: false, product: action.payLoad };
      case PRODUCT_DETAILS_FAIL:
        return { Loading: false, error: action.payLoad };
      default:
        return state;
    }
  };