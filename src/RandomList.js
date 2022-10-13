import { useState } from "react";

function RandomList() {
  const [addNumber, setAddNumber] = useState([]);
  let numberarray = [];
  const generateRandomNum = () => {
    const random0 = Math.ceil(Math.random() * 50);
    const random1 = Math.ceil(Math.random() * 50);
    const random2 = Math.ceil(Math.random() * 50);
    const random3 = Math.ceil(Math.random() * 50);
    const random4 = Math.ceil(Math.random() * 50);
    const random5 = Math.ceil(Math.random() * 50);
    const random6 = Math.ceil(Math.random() * 10);

    // console.log(random);
    numberarray = [
      random0,
      random1,
      random2,
      random3,
      random4,
      random5,
      random6,
    ];
    // console.log(numberarray);

    setAddNumber(numberarray);
  };

  return (
    <>
      <div className="flex gap-5">
        {addNumber.map((item, idx) => (
          <div className="flex my-5 items-center g-transparent  text-blue-700 font-semibold p-3  border border-blue-500 rounded-full">
            <p className="w-[20px] h-[20px] text-center" key={idx}>
              {item}
            </p>
          </div>
        ))}
      </div>
      <div className="flex gap-[10px] my-5">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold p-3 rounded"
          onClick={generateRandomNum}
        >
          Show me lucky numbers
        </button>
        <button
          className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
          onClick={() => {
            setAddNumber([]);
          }}
        >
          Reset
        </button>
      </div>
    </>
  );
}

export default RandomList;
