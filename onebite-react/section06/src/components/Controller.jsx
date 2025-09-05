const Controller = ({ onClickButton }) => {
  return (
    <div className="bg-gray-100 border rounded-md border-none p-[20px]">
      <button onClick={() => onClickButton(-1)} className="btn">
        -1
      </button>
      <button onClick={() => onClickButton(-10)} className="btn">
        -10
      </button>
      <button onClick={() => onClickButton(-100)} className="btn">
        -100
      </button>
      <button onClick={() => onClickButton(100)} className="btn">
        +100
      </button>
      <button onClick={() => onClickButton(10)} className="btn">
        +10
      </button>
      <button onClick={() => onClickButton(1)} className="btn">
        +1
      </button>
    </div>
  );
};

export default Controller;
