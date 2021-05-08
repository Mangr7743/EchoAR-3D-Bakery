import React from "react";

function Menu(props) {
  return (
    <div id="menu" className="feature-items">
      <div className="feature-item-wrapper">
        <div className="text">
          <h2
            className="food_name"
            style={{
              fontSize: "48px",
              textAlign: "center",
              fontFamily: "Great Vibes",
              fontWeight: "400",
              fontStyle: "normal"
            }}
          >
            {props.food_name}
          </h2>
          <p
            className="food_description"
            style={{ fontSize: "20px", color: "#3a3a3a", textAlign: "center" }}
          >
            {props.food_description}
          </p>
        </div>
        <div className="img-wrapper">
          <img
            className="image_comp"
            src={"./images/food/" + props.image}
            alt=""
          />
          <img className="qr" src={"./images/qr/" + props.qr_image} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Menu;
