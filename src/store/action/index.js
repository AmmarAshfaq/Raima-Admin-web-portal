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





/////////////////////////////////////////////// Get All User ///////////////////////////////////////////
export function getUserList() {
    return dispatch => {
        console.log('get')
        dispatch(getUserProgress())
        dbConfig.database().ref('realState').on('value', snapshot => {
            // console.log(snapshot.val())
            let userList = snapshot.val(),
                userListKeys = Object.keys(userList);

            let arrList = [];
            userListKeys.map(i => {
                if (userList[i].userServices) {
                    let obj = {
                        uid: userList[i].uid,
                        email: userList[i].email,
                        userServices: Object.values(userList[i].userServices)
                    }
                    arrList.push(obj)
                }

            })

            console.log(arrList, 'userList')
            dispatch(getUserSuccess(arrList))
        })
    }

}



function getUserProgress() {
    return {
        type: ActionTypes.GET_USER_PROGRESS
    }
}
function getUserSuccess(data) {
    return {
        type: ActionTypes.GET_USER_SUCCESS,
        payload: data
    }
}
function getUserError(error) {
    return {
        type: ActionTypes.GET_USER_FAILED,
        payload: error
    }
}



/////////////////////////////////////////////// Get All User ///////////////////////////////////////////
