import Navbar from "./components/Navbar";
import Products from "./components/Products";
import Cart from "./components/Cart";
function App() {
  return (
    <div className="App">
      <Navbar/> 
      {/* <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand">甜點蛋糕店</a>
          <button className="btn btn-outline-dark position-relative" type="submit">購物車
          <span className="badge rounded-pill text-bg-danger
            position-absolute top-0 start-100 translate-middle">99</span>
          </button>
        </div>
      </nav> */}

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

    </div>
  );
}

export default App;
