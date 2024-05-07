export default function Cart(){
  return(
    <div className="bg-light p-3">
      <table className="table align-middle">
        <tbody>
          <tr>
            <td>
              <a href="#">X</a>
            </td>
            <td>
              <img src="https://images.unsplash.com/photo-1714524719483-324e468bce2d?q=80&w=1970&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="table-img"
              alt="" />
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
  )
}