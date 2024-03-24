import React from "react";

const Item = ({ name, isPacked, itemImg }) => {
  return (
    <div className="item">
      <img src={itemImg} />
      <p>
        {name}
        <span> {isPacked ? "✅" : "❌"}</span>
      </p>
    </div>
  );
};

export default Item;
