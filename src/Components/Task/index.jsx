import "./styles.css"

const Task = (props) => {
    return (
      <div
        className="taskContainer"
        key={props.id}
        style={{ backgroundColor: props.complete ? "#d4f6d9" : "" }}
      >
        <li
          style={{
            /* backgroundColor: props.complete ? "green" : "red", */
            textDecoration: props.complete ? "line-through" : "",
          }}
        >
          {props.name}
        </li>
        <div>
          <button
            style={{ backgroundColor: "#2cbe7a" }}
            onClick={() => props.completeTask(props.task)}
          >
            Finalizada
          </button>
          <button
            style={{ backgroundColor: "tomato" }}
            onClick={() => props.deleteTask(props.task)}
          >
            X
          </button>
        </div>
      </div>
    );
};

export default Task;