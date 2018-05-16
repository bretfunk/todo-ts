import { ADD_ITEM, DELETE_ITEM } from "./../constants/action-types";

type AddItem = (item: any) => any;

type DeleteItem = (item: any) => any;

const addItem: AddItem = item => ({
  type: ADD_ITEM,
  item
});

const deleteItem: DeleteItem = item => ({
  type: DELETE_ITEM,
  item
});

export { addItem, deleteItem };
