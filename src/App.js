function App() {
  return (
    <div className="App">
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand">甜點蛋糕店</a>
          <button className="btn btn-outline-dark position-relative" type="submit">購物車
          <span className="badge rounded-pill text-bg-danger
            position-absolute top-0 start-100 translate-middle">99</span>
          </button>
        </div>
      </nav>

      <div className="container mt-4">
        {/* 外層隔線 */}
        <div className="row">
          <div className="col-md-7">
            {/* 內層隔線 */}
            <div className="row row-cols-3 g-3">
              <div className="col">
              <div className="card" >
                <img src="https://images.unsplash.com/photo-1714524719483-324e468bce2d?q=80&w=1970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="card-img-top" alt="..."/>
                <div className="card-body">
                  <h5 className="card-title">鮮果優格餐
                    <span className="float-end">NT $ 220</span>
                  </h5>
                  <button type="button" class="btn btn-outline-primary w-100">加入購物車</button>
                </div>
              </div>
              </div>
              <div className="col">
              <div className="card" >
                <img src="https://images.unsplash.com/photo-1714524719483-324e468bce2d?q=80&w=1970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="card-img-top" alt="..."/>
                <div className="card-body">
                  <h5 className="card-title">鮮果優格餐
                    <span className="float-end">NT $ 220</span>
                  </h5>
                  <button type="button" class="btn btn-outline-primary w-100">加入購物車</button>
                </div>
              </div>
              </div>
              <div className="col">
              <div className="card" >
                <img src="https://images.unsplash.com/photo-1714524719483-324e468bce2d?q=80&w=1970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="card-img-top" alt="..."/>
                <div className="card-body">
                  <h5 className="card-title">鮮果優格餐
                    <span className="float-end">NT$220</span>
                  </h5>
                  <button type="button" class="btn btn-outline-primary w-100">加入購物車</button>
                </div>
              </div>
              </div>
              <div className="col">
              <div className="card" >
                <img src="https://images.unsplash.com/photo-1714524719483-324e468bce2d?q=80&w=1970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="card-img-top" alt="..."/>
                <div className="card-body">
                  <h5 className="card-title">鮮果優格餐
                    <span className="float-end">NT $ 220</span>
                  </h5>
                  <button type="button" class="btn btn-outline-primary w-100">加入購物車</button>
                </div>
              </div>
              </div>
            </div>
          </div>
          <div className="col-md-5">
            <div className="bg-light p-3">
              <table className="table align-middle">
                <tbody>
                  <tr>
                    <td>
                      <a href="#">X</a>
                    </td>
                    <td>
                      <img src="" alt="" />
                    </td>
                    <td>
                      鮮果優格餐
                      <br />
                      <small className="text-muted">NT$220</small>
                    </td>
                    <td>
                      <select name="" id="" className="form-select"></select>
                    </td>
                    <td className="text-end">
                      NT$ 440
                    </td>
                  </tr>
                </tbody>
                <tfoot>
                  <tr>
                    <td colSpan={5} className="text-end"> 總金額: NT$ 440</td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
