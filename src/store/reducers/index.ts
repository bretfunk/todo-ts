import { ADD_ITEM, DELETE_ITEM } from "../constants/action-types";

const initialState = {
  item: "",
  items: ["item in redux"]
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return {
        ...state,
        items: [...state.items, state.item],
        item: ""
      };
    case DELETE_ITEM:
      return state;
    default:
      return state;
  }
};

export default rootReducer;
