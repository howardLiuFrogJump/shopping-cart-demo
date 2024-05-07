import { useReducer } from "react";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import Cart from "./components/Cart";

import { CartContext } from "./store";
function App() {
  
  const cartReducer = useReducer((state , action)=>{
    const cartList = [...state.cartList];
    const index = cartList.findIndex((item) => item.id === action.payload.id);
    console.log(index);
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
      
    }
  }, { 
    cartList: [],
  })

  return (
    <CartContext.Provider  value={cartReducer}>

      <Navbar/> 

      <div className="container mt-4">
        {/* 外層隔線 */}
        <div className="row">
          <div className="col-md-7">
            {/* 內層隔線 */}
            <Products></Products>
   
          </div>
          <div className="col-md-5">
            <div className="bg-light p-3">
              <Cart></Cart>

            </div>
          </div>
        </div>
        {/* 分隔線 */}
      </div>

    </CartContext.Provider>
  );
}

function calculateTotalPrice(cartList) {
  return cartList.map((item) => item.quantity * item.price
  ).reduce((a, b) => a + b, 0);
}



export default App;
