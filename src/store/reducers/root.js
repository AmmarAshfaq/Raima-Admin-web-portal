// import {
//     FETCH_WHISKIES,
//     FETCH_WHISKIES_FAILURE,
//     FETCH_WHISKIES_SUCCESS
// } from '../action';
// const initialState = {
//     whiskies: [], // for this example we'll make an app that fetches and lists whiskies
//     isLoading: false,
//     error: false
// };

// export default function rootReducer(state = initialState, action) {
//     switch (action.type) {

//         case FETCH_WHISKIES:
//         return{
//             ...state,
//             isLoading:true,
//             error:null
//         }
//         case FETCH_WHISKIES_SUCCESS:
//         return{
//             whiskies:[...action.payload],
//             isLoading:false,
//             error:null
//         }
//         case FETCH_WHISKIES_FAILURE:
//         return{
//             whiskies:[],
//             isLoading:false,
//             error:action.payload
//         }
//         default:
//             return state;
//     }
// }

////////////////////////////////////// redux observable ///////////////////////////////////////////////

//////////////////////////////////// redux thunk ///////////////////////////////////////
import ActionTypes from '../constant';

const initialState = {
    isProgress: false,
    isError: false,
    textError: '',
    userList: null

}

export default (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.CREATE_CUSTOMER_PROGRESS:
            return {
                ...state, isProgress: true
            }
        case ActionTypes.CREATE_CUSTOMER_SUCCESS:
            return {
                ...state,
            }
        case ActionTypes.GET_USER_PROGRESS:
            return {
                ...state, isProgress: true,
            }
        case ActionTypes.GET_USER_SUCCESS:
            return {
                ...state, isProgress: false,
                userList: action.payload
            }
        default:
            return state;
    }
}