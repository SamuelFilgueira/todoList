import "./styles.css"

const Input = (props) => {
    return (
      <input
        placeholder="Escreva aqui"
        onChange={(event) => props.onHandleChange(event)}
        value={props.inputValue}
      />
    );
};

export default Input;