const Controller = ({ onClickButton }) => {
  const buttonNums = [-1, -10, -100, 100, 10, 1];

  return (
    <div className="bg-gray-100 border rounded-md border-none p-[20px]">
      {buttonNums.map((n) => {
        return (
          <button key={n} onClick={() => onClickButton(n)} className="btn">
            {n > 0 ? `+${n}` : n}
          </button>
        );
      })}
    </div>
  );
};

export default Controller;
