import {
    GET_ALERT
  } from '../actions/types';
  

  const initialState = {
    alert: [],
    
  };


  export default function(state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
      //   case PROFILE_LOADING:
      //     return {
      //       ...state,
      //       loading: true
      //     };
      case GET_ALERT:
        return {
          ...state,    
          alert: payload
        };
      
      default:
        return state;
    }
  }