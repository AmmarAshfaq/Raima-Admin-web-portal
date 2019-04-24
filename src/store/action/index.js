// export const FETCH_WHISKIES = 'FETCH_WHISKYS';
// export const FETCH_WHISKIES_SUCCESS = 'FETCH_WHISKYS_SUCCESS';
// export const FETCH_WHISKIES_FAILURE = 'FETCH_WHISKYS_FAILURE';

// export const fetchWhiskies = () => ({
//     type: FETCH_WHISKIES,
// });

// export const fetchWhiskiesSuccess = (whiskies) => ({
//     type: FETCH_WHISKIES_SUCCESS,
//     payload: whiskies
// });

// export const fetchWhiskiesFailure = (message) => ({
//     type: FETCH_WHISKIES_FAILURE,
//     payload: message
// });


//////////////////////////////////////////// redux observable ////////////////////////////////////////////////


/////////////////////////////////////////// redux thunk ///////////////////////////////////////////////////////

///////////////////////////////////////// Start ///////////////////////////////////////////////////

import ActionTypes from '../constant';
import dbConfig from '../../config';
///////////////////////////////////// Create Customer ////////////////////////////////////////////

export function createCustomerAction(obj) {
    return dispatch => {
        dispatch(createCustomerProgress())
        dbConfig.database().ref(`realState/${obj.uid}/userDetail`).set(obj);

    }
}


function createCustomerProgress() {
    return {
        type: ActionTypes.CREATE_CUSTOMER_PROGRESS
    }
}
function createCustomerSuccess(data) {
    return {
        type: ActionTypes.CREATE_CUSTOMER_SUCCESS,
        payload: data
    }
}
function createCustomerError(error) {
    return {
        type: ActionTypes.CREATE_CUSTOMER_FAILED,
        payload: error
    }
}