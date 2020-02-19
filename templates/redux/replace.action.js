import { CartTypes } from "./cart-type";

/**
 * @type {(initState:boolean)=>{type:string}}
 */
export const cartActionToggle = item => {
  return {
    type: CartTypes.toggle,
    payload: item
  };
};
