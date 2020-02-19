import { UsersType } from "./users.type";

/**
 * @type {(initState:boolean)=>{type:string,payload:any}}
 */
export const UsersToggle = item => {
  return {
    type: UsersType.toggle,
    payload: item
  };
};
