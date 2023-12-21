const initialState = {
    isLoggedIn: false,
    userDetails: null,
  }
  
  function loginReducer(state = initialState, action) {
  
    switch (action.type) {
  
      case 'user_login':
        return {
          ...state,
          isLoggedIn: true,
          userDetails: action.data
        }
      case 'user_logut':
        return {
          ...state,
          isLoggedIn: false,
          userDetails: null
        }
      default:
        return state;
    }
  
  }
  
  export default loginReducer;