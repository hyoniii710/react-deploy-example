import React, { useState } from "react";

const ButtonApp: React.FC = () => {
  const [clicked, setClicked] = useState<boolean>(false);

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h2>버튼 테스트 앱</h2>
      <button data-testid="click-button" onClick={() => setClicked(true)}>
        Click me
      </button>
      {clicked && (
        <p
          data-testid="success-message"
          style={{
            color: "green",
            fontSize: "18px",
            fontWeight: "bold",
          }}
        >
          버튼 클릭됨!
        </p>
      )}
    </div>
  );
};

export default ButtonApp;
