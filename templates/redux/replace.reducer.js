import { CartTypes } from "./cart-type";

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
const cartReducer = (state = InitState, action) => {
  switch (action.type) {
    case CartTypes.toggle:
      return {
        ...state
      };
    default:
      return state;
  }
};

export default cartReducer;
