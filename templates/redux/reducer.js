import { ___typeCamel } from "./___TypeName.type";

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
const ___ReducerName = (state = InitState, action) => {
  switch (action.type) {
    case ___typeCamel.toggle:
      return {
        ...state
      };
    default:
      return state;
  }
};

export default ___ReducerName;
