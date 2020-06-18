const AppReducer = (state, action) => {
  let index;
  switch (action.type) {
    case "ADD_CART":
      index = state.items.findIndex(item => item.id === action.payload.id);
      console.log(index);
      return {
        ...state,
        items: state.items.map(i =>
          i.id === index + 1 ? { ...i, cart: true } : i
        ),
        cartItems: [...state.cartItems, { ...state.items[index], qty: 1 }]
      };

    case "REMOVE_CART":
      index = state.items.findIndex(item => item.id === action.payload.id);
      console.log(index);
      return {
        ...state,
        items: state.items.map(i =>
          i.id === index + 1 ? { ...i, cart: false } : i
        ),
        cartItems: state.cartItems.filter(item => item.id !== action.payload.id)
      };
    case "INCREASE_QTY":
      index = state.cartItems.findIndex(item => item.id === action.payload.id);
      console.log("INCREASE", action.payload.id, index);
      return {
        ...state,
        cartItems: state.cartItems.map((item, i) =>
          i === index ? { ...item, qty: (item.qty += 1) } : item
        )
      };
    default:
      return state;
  }
};

export default AppReducer;
