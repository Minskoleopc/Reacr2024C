// // Actions 

// const FETCH_USERS_REQUEST = 'FETCHUSER_REQUEST'
// const FETCH_USERS_SUCCESS = 'FETCHUSER_SUCCESS'
// const FETCH_USERS_FAILURE = 'FETCHUSER_FAILURE'


// // intial state 

// const intialState = {
//     loading: false,
//     users: [],
//     error: ''
// }

// const userReducer = (state = intialState, action) => {
//     switch (action.type) {
//         case FETCH_USERS_REQUEST:
//             return {
//                 ...state,
//                 loading: true
//             }
//         case FETCH_USERS_SUCCESS:
//             return {
//                 ...state,
//                 loading: false,
//                 error: '',
//                 users: action.payload
//             }
//         case FETCH_USERS_FAILURE:
//             return {
//                 ...state,
//                 loading: false,
//                 error: action.payload,
//                 users: []
//             }
//     }
// }

// export const  fetchUserRequest = () =>({
//     type:FETCH_USERS_REQUEST
// });
// export const  fetchUserSuccess = () =>({
//     type:FETCH_USERS_SUCCESS
// });
// export const  fetchUserFailuer = () =>({
//     type:FETCH_USERS_FAILURE
// });

// export default userReducer





