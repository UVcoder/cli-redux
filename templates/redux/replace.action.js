import { CartTypes } from "./cart-type";

/**
 * @type {(initState:boolean)=>{type:string,payload:any}}
 */
export const cartActionToggle = item => {
  return {
    type: CartTypes.toggle,
    payload: item
  };
};
