import { ___typeCamel } from "./___typeName.type";

/**
 * @type {(initState:boolean)=>{type:string,payload:any}}
 */
export const ___actionName = item => {
  return {
    type: ___typeCamel.toggle,
    payload: item
  };
};
