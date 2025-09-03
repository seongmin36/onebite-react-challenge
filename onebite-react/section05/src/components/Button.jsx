const Button = ({ children, text, color = 'black' }) => {
  // 이벤트 객체 e : cross browising issue에서 자유롭다
  const onClickButton = (e) => {
    console.log(e);
    console.log(text);
  };

  return (
    <button
      onClick={onClickButton}
      // onMouseEnter={onClickButton}
      style={{ color: color }}
    >
      {text}
      {children}
    </button>
  );
};

export default Button;
