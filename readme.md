# redux-cli

it takes hundred of files talking to each others,
so that your application can be aware of a user click on a red button.
<br>redux cli will help u create boilerplate files.

the thing is these files are generated base on my own need.
any suggestion visit:

https://github.com/UVcoder/redux-cli

## install

> `npm i -g vredux-cli`

## Command

Run

> `vredux all <path>`

<br>
Example

> `vredux all redux/users`

this will create the following files,

```
project
└─ node_modules
└─ public
└─ src
│   └─ redux
│   │   └─ users
│   │   │   │ users.action.js
│   │   │   │ users.reducer.js
│   │   │   │ users.selector.js
│   │   │   │ users.type.js
│   │   │   │ users.util.js

```

<br>

## action.js

```javascript
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
```

## reducer.js

```javascript
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
```

## selector.js

```javascript
import { createSelector } from "reselect";

const baseState = state => state.users;

export const UsersGetState = createSelector([baseState], state => {
  return state;
});
```

## type.js

```javascript
export const UsersType = {
  toggle: "toggle"
};
```

## util.js

```javascript
// export const addItem = (existingItems, itemToBeAdded) => {
//   return [...existingItems, itemToBeAdded];
// };
```
