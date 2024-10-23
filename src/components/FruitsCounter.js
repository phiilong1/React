import React from "react";

function FruitsCounter({ fruits }) {
  return (
    <div>
      {/* Sử dụng length của mảng fruits để hiển thị số lượng trái cây */}
      <p>Total fruits: {fruits.length}</p>
      <p>Guess the number between 1 and 3</p>
    </div>
  );
}

export default FruitsCounter;
