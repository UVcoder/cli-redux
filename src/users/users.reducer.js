import { UsersType } from "./users.type";

const InitState = {
  // items: [],
  // itemsCount: 0
};

/**
 * @typedef {{
 * items:any[],
 * itemsCount:number
 * }} State
 */

/**
 * @typedef {{type:string,payload:any}} Action
 */

/**
 * @type {(state:State,action:Action)=>VoidFunction}
 */
const UsersReducer = (state = InitState, action) => {
  switch (action.type) {
    case UsersType.toggle:
      return {
        ...state
      };
    default:
      return state;
  }
};

export default UsersReducer;
