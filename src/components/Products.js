import { useContext } from "react";
import productsData from "../assets/productsData";
import { CartContext } from "../store";

export default function Products(){
  const [state , dispatch] = useContext(CartContext);
  console.log(state);
  return(
    <div className="row row-cols-3 g-3">
      {productsData.map((product)=>{
        return(
          <div className="col" key={product.id}>
            <div className="card" >
              <img src={product.img} className="card-img-top" alt="..."/>
              <div className="card-body">
                <h6 className="card-title">{product.title}
                  <span className="float-end">NT $ {product.price}</span>
                </h6>
                <button type="button" className="btn btn-outline-primary w-100"
                onClick={()=>{
                  dispatch({
                    type: "ADD_TO_CART",
                    payload:{
                      ...product,
                      qty: 1
                    }
                  })
                }}>加入購物車</button>
              </div>
            </div>
          </div>
        )
      })}
      <div className="col">
        <div className="card" >
          <img src="https://images.unsplash.com/photo-1714524719483-324e468bce2d?q=80&w=1970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="card-img-top" alt="..."/>
          <div className="card-body">
            <h6 className="card-title">鮮果優格餐
              <span className="float-end">NT $ 220</span>
            </h6>
            <button type="button" className="btn btn-outline-primary w-100">加入購物車</button>
          </div>
        </div>
      </div>
    </div>
  )
}