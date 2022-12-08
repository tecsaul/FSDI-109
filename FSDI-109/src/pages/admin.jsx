import "./admin.css";
import React from "react";


const Admin = () => {
const onClick = () => {
      alert("Saved!");
    }
  return (
    <div className="admin">
      <h3>Store Administration</h3>

      <div className="content">
        <div className="product-form">
          <h5>Save Products</h5>

          <div className="my-controls">
            <label>Title</label>
            <input type="text" />
          </div>

          <div className="my-controls">
            <label>Image</label>
            <input type="text" />
          </div>

          <div className="my-controls">
            <label>Category</label>
            <input type="text" />
          </div>

          <div className="my-controls">
            <label>Price</label>
            <input type="number" />
          </div>

          <div className="my-controls center">
            <button onClick={onClick} className="btn btn-sm btn-dark">Save Product</button>
          </div>
        </div>

        <div className="coupons-form">
          <h5>Register Coupon</h5>

          <div className="my-controls">
            <label>Code</label>
            <input type="text" />
          </div>

          <div className="my-controls">
            <label>Discount</label>
            <input type="number" />
          </div>

          <div className="my-controls center">
            <button onClick={onClick} className="btn btn-sm btn-dark">Save Coupon</button>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
