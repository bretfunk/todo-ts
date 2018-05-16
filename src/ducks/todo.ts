export enum TodoKeys {
  ADD_ITEM = "ADD_ITEM",
  DELETE_ITEM = "DELETE_ITEM"
}

export type AddItem = {
  type: TodoKeys.ADD_ITEM;
  item: string;
};

export type DeleteItem = {
  type: TodoKeys.DELETE_ITEM;
  item: string;
};

export type TodoAction = AddItem | DeleteItem;

// Action Creators
export const addItem = (item: string): AddItem => ({
  type: TodoKeys.ADD_ITEM,
  item
});

export const deleteItem = (item: string): DeleteItem => ({
  type: TodoKeys.DELETE_ITEM,
  item
});

const initialState = {
  item: "",
  items: ["item in redux"]
};

export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case TodoKeys.ADD_ITEM:
      return {
        ...state,
        items: [...state.items, state.item],
        item: ""
      };
    case TodoKeys.DELETE_ITEM:
      return state;
    default:
      return state;
  }
};
