import { Dispatch } from "react";
import type { MenuItem } from "../interfaces";
import { formatCurrency } from "../utils/formatters";
import { OrderActions } from "../reducers/order-reducer";

interface MenuItemProps {
  item: MenuItem;
  dispatch: Dispatch<OrderActions>;
}

const MenuItem = ({ item, dispatch }: MenuItemProps) => {
  const addItem = (item: MenuItem) => {
    dispatch({ type: "add-item", payload: { item } });
  };

  return (
    <button
      className="border-2 border-teal-400 hover:bg-teal-200 w-full p-3 text-lg rounded-lg flex justify-between"
      onClick={() => addItem(item)}
    >
      <p>{item.name}</p>
      <p className="font-black">{formatCurrency(item.price)}</p>
    </button>
  );
};

export default MenuItem;
