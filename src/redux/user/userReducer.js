import { fetchUsersSuccess } from "./userActions";
import { FETCH_USERS_FAILURE, FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS } from "./userTypes";

const initialState = {
  laoding: false,
  users: [],
  error: "",
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS_REQUEST:
      return {
        ...state,
        laoding: true,
      };

    case FETCH_USERS_SUCCESS:
      return {
        laoding: false,
        users: action.payload,
        error: "",
      };

      case FETCH_USERS_FAILURE: 
      return {

        laoding: false,
        users: [],
        error:action.payload
      }
  }
};


export default userReducer;