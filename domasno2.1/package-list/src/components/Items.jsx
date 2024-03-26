import React from "react";

const Item = ({ name, isPacked, img }) => {
  return (
    <div className="item">
      <img src={img} />
      <p>
        {name}
        <span> {isPacked ? "✅" : "❌"}</span>
      </p>
    </div>
  );
};

export default Item;
