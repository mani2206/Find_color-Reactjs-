import React from "react";

export default function Square({ isDark, hexValue, color }) {
  return (
    <>
      <div className="" style={{display:"flex",justifyContent:"center"}}>
        <section
          className="Square"
          style={{ background: color, color: isDark ? "#000" : "#FFF" }}
        >
          <p>{color ? color : "Empty value"}</p>
          <p>{hexValue ? hexValue : null}</p>
        </section>
      </div>
    </>
  );
}
