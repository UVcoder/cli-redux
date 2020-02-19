import { createSelector } from "reselect";

const baseState = state => state.users;

export const UsersGetState = createSelector([baseState], state => {
  return state;
});
