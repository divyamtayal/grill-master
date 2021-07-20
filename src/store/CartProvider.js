import CartContext from './cart-context';

const CartProvider = (props) => {
  const addItemToCardHandler = () => {};

  const removeItemToCardHandler = () => {};

  const cartContext = {
    items: [],
    totalAmount: 0,
    addItem: addItemToCardHandler,
    removeItem: removeItemToCardHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
