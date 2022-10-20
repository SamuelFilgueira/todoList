import "./styles.css";

const Button = (props) => {
  const { value, addTask } = props;

  return (
    <div>
      <button onClick={() => addTask() } >{value}</button>
    </div>
  );
};

export default Button;
