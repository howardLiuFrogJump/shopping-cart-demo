import { useReducer } from "react";
import Navbar from "./components/Navbar";
import Products from "./components/Products";
import Cart from "./components/Cart";

import { CartContext ,cartReducer , cartInit } from "./store";
function App() {
  
  const reReducer = useReducer( cartReducer, cartInit)

  return (
    <CartContext.Provider  value={reReducer}>

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
