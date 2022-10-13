import React from "react";
import RandomList from "./RandomList";
function Lotto() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div>
        <h1 className="text-[3rem]">Lotto 6/49</h1>
        <p>Generating lucky Numberss</p>
        <RandomList />
      </div>
    </div>
  );
}

export default Lotto;
