import React from "react";

function Menu(props) {
  return (
    <div className="feature-items">
      <div className="feature-item-wrapper">
        <div className="text">
          <h2 className="food_name">Bread</h2>
          <p className="food_description">Bread</p>
        </div>
        <p className="img-wrapper">image</p>
        <p className="food_qr_code">qr</p>
      </div>
    </div>
  );
}

export default Menu;
