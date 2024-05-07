import { createContext } from "react";

export const cartReducer = (state , action)=>{
  const cartList = [...state.cartList];
  const index = cartList.findIndex((item) => item.id === action.payload.id);
  // console.log(index);
  switch(action.type){
    case "ADD_TO_CART":
      if(index === -1) {
        cartList.push(action.payload);
      }else{

        cartList[index].quantity += action.payload.quantity
      }
      return {
        ...state,
        cartList,
        total: calculateTotalPrice(cartList)
      }
    case "CHANGE_CART_QUANTITY":
      cartList[index].quantity = action.payload.quantity

      return{
        ...state,
        cartList,
        total: calculateTotalPrice(cartList)

      }
    case "REMOVE_CART_ITEM":
      cartList.splice(index , 1);
      return{
        ...state,
        cartList,
        total: calculateTotalPrice(cartList)

      }
    default:
      return false
    
  }}

  function calculateTotalPrice(cartList) {
    return cartList.map((item) => item.quantity * item.price
    ).reduce((a, b) => a + b, 0);
  }
  

export const CartContext = createContext();

export const cartInit = {
  cartList: [],
}