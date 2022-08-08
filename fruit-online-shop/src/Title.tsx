import React from "react";

function Title({ mainTitle }: any) {
  return (
    <div>
      <h1 style={{ borderBottom: "5px solid red", textAlign: "center" }}>
        {mainTitle}
      </h1>
    </div>
  );
}

export default Title;
