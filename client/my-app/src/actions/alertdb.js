import axios from 'axios';

import {
    GET_ALERT
  } from './types';
  

  // Get Alert db values
export const getAlertOnTime = () => dispatch => {
    // dispatch(setProfileLoading());
   
    console.log('alert CTION')
    axios
      .get('http://localhost:4000/api/alertdb/time')
      .then(res =>
        dispatch({
          type: GET_ALERT,
          payload: res.data
        })
         
        
      )
      .catch(err => {
        console.log('eerrrr');
        dispatch({
          type: GET_ALERT,
          payload: {}
        });
      });
  };